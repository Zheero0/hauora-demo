"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { X, Plus, Minus, Trash2, ShoppingBag, CreditCard, Lock, Truck, CheckCircle } from "lucide-react"
import Image from "next/image"

interface CartItem {
  id: number
  name: string
  subtitle?: string
  price: number
  image: string
  quantity: number
  badge?: string
}

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onUpdateQuantity: (id: number, quantity: number) => void
  onRemoveItem: (id: number) => void
}

export function CartModal({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartModalProps) {
  const [promoCode, setPromoCode] = useState("")
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 9.99
  const tax = subtotal * 0.2 // 20% VAT
  const total = subtotal + shipping + tax

  const handleCheckout = async () => {
    setIsCheckingOut(true)
    // Simulate checkout process
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsCheckingOut(false)
    setOrderComplete(true)

    // Reset after 3 seconds
    setTimeout(() => {
      setOrderComplete(false)
      onClose()
    }, 3000)
  }

  const applyPromoCode = () => {
    // Simulate promo code application
    console.log("Applying promo code:", promoCode)
  }

  if (orderComplete) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
          <div className="text-center py-8 space-y-4">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-light text-black mb-2">Order Confirmed!</h3>
              <p className="text-gray-600 font-light">
                Thank you for your purchase. You'll receive a confirmation email shortly.
              </p>
            </div>
            <div className="text-sm text-gray-500">
              Order #HU-{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-light">Shopping Cart</DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose} className="p-2">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DialogHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center py-12 space-y-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-8 h-8 text-gray-400" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-lg font-light text-gray-900">Your cart is empty</h3>
              <p className="text-gray-500 font-light">Add some beautiful pieces to get started</p>
            </div>
            <Button onClick={onClose} className="bg-black text-white hover:bg-gray-800 font-light px-8">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto space-y-4 py-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 border border-gray-100 rounded-lg">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg?height=80&width=80&text=Product"}
                      alt={item.name}
                      fill
                      className="object-cover rounded-md"
                    />
                    {item.badge && (
                      <Badge className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs">{item.badge}</Badge>
                    )}
                  </div>

                  <div className="flex-1 space-y-2">
                    <div>
                      <h4 className="font-light text-black">{item.name}</h4>
                      {item.subtitle && <p className="text-sm text-gray-500 font-light">{item.subtitle}</p>}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-8 p-0 bg-transparent"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-8 p-0 bg-transparent"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <div className="flex items-center space-x-3">
                        <span className="font-light text-black">£{(item.price * item.quantity).toFixed(2)}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-700 p-1"
                          onClick={() => onRemoveItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Separator />

            {/* Promo Code */}
            <div className="flex-shrink-0 space-y-3">
              <div className="flex gap-2">
                <Input
                  placeholder="Promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 border-gray-200 focus:border-yellow-400"
                />
                <Button
                  variant="outline"
                  onClick={applyPromoCode}
                  className="bg-transparent border-gray-200 hover:border-yellow-400"
                >
                  Apply
                </Button>
              </div>
            </div>

            <Separator />

            {/* Order Summary */}
            <div className="flex-shrink-0 space-y-3">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between font-light">
                  <span>Subtotal</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-light">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `£${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between font-light">
                  <span>Tax (VAT)</span>
                  <span>£{tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-light">
                  <span>Total</span>
                  <span>£{total.toFixed(2)}</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-6 text-xs text-gray-500 py-2">
                <div className="flex items-center space-x-1">
                  <Lock className="h-3 w-3" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Truck className="h-3 w-3" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CreditCard className="h-3 w-3" />
                  <span>Safe Payment</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-black text-white hover:bg-gray-800 font-light py-3"
              >
                {isCheckingOut ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  `Checkout - £${total.toFixed(2)}`
                )}
              </Button>

              {/* Additional Info */}
              <div className="text-center text-xs text-gray-500 space-y-1">
                <p>Free worldwide shipping on orders over £100</p>
                <p>30-day return policy • Lifetime warranty</p>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
