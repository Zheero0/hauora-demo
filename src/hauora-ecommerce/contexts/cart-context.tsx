"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { doc, setDoc, getDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { useAuth } from "./auth-context"

interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  size?: string
  color?: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity">) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const CartContext = createContext<CartContextType>({} as CartContextType)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useAuth()

  // Load cart from localStorage or Firebase
  useEffect(() => {
    const loadCart = async () => {
      if (user) {
        // Load from Firebase for authenticated users
        try {
          const cartDoc = await getDoc(doc(db, "carts", user.uid))
          if (cartDoc.exists()) {
            setItems(cartDoc.data().items || [])
          }
        } catch (error) {
          console.error("Error loading cart from Firebase:", error)
        }
      } else {
        // Load from localStorage for guests
        const savedCart = localStorage.getItem("hauora-cart")
        if (savedCart) {
          try {
            setItems(JSON.parse(savedCart))
          } catch (error) {
            console.error("Error parsing cart from localStorage:", error)
          }
        }
      }
    }

    loadCart()
  }, [user])

  // Save cart to localStorage or Firebase
  useEffect(() => {
    const saveCart = async () => {
      if (user) {
        // Save to Firebase for authenticated users
        try {
          await setDoc(doc(db, "carts", user.uid), { items })
        } catch (error) {
          console.error("Error saving cart to Firebase:", error)
        }
      } else {
        // Save to localStorage for guests
        localStorage.setItem("hauora-cart", JSON.stringify(items))
      }
    }

    if (items.length > 0) {
      saveCart()
    }
  }, [items, user])

  const addItem = (newItem: Omit<CartItem, "quantity">) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id)
      if (existingItem) {
        return prevItems.map((item) => (item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prevItems, { ...newItem, quantity: 1 }]
    })
  }

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
    if (user) {
      setDoc(doc(db, "carts", user.uid), { items: [] })
    } else {
      localStorage.removeItem("hauora-cart")
    }
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    isOpen,
    setIsOpen,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
