"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Minus, Plus, Trash2, ShoppingBag, CreditCard, Shield, Truck, CheckCircle } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { useAuth } from "@/contexts/auth-context"

export function CartModal() {
  const { items, updateQuantity, removeItem, clearCart, totalPrice, isOpen, setIsOpen } = useCart()
  const { user } = useAuth()
  const [promoCode, setPromoCode] = useState("")
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discount: number } | null>(null)
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)

  const shipping = totalPrice > 200 ? 0 : 15
  const tax = totalPrice * 0.08
  const promoDiscount = appliedPromo ? (totalPrice * appliedPromo.discount) / 100 : 0
  const finalTotal = totalPrice + shipping + tax - promoDiscount

  const applyPromoCode = () => {
    const validCodes = {
      HAUORA10: 10,
      WELCOME20: 20,
      SAVE15: 15,
    }

    if (validCodes[promoCode as keyof typeof validCodes]) {
      setAppliedPromo({
        code: promoCode,
        discount: validCodes[promoCode as keyof typeof validCodes],
      })
      setPromoCode("")
    }
  }

  const handleCheckout = async () => {
    setIsCheckingOut(true)

    // Simulate checkout process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsCheckingOut(false)
    setOrderComplete(true)

    // Clear cart after successful order
    setTimeout(() => {
      clearCart()
      setOrderComplete(false)
      setIsOpen(false)
      setAppliedPromo(null)
    }, 3000)
  }

  if (orderComplete) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-full sm:max-w-lg">
          <div className="flex h-full flex-col items-center justify-center text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Order Confirmed!</h2>
            <p className="text-gray-600 mb-4">
              Thank you for your purchase. You'll receive a confirmation email shortly.
            </p>
            <Badge variant="secondary" className="mb-4">
              Order #HU{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </Badge>
            <p className="text-sm text-gray-500">Redirecting to your account...</p>
          </div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Shopping Cart ({items.length})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
            <p className="text-gray-600 mb-6">Discover our beautiful collection of luxury jewelry</p>
            <Button onClick={() => setIsOpen(false)} className="w-full max-w-xs">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="flex h-full flex-col">
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 rounded-lg border p-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="h-16 w-16 rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-600">${item.price}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="ml-auto h-8 w-8 p-0 text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Promo Code */}
            <div className="border-t pt-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                  className="flex-1"
                />
                <Button variant="outline" onClick={applyPromoCode} disabled={!promoCode}>
                  Apply
                </Button>
              </div>
              {appliedPromo && (
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="text-green-600">
                    {appliedPromo.code} applied ({appliedPromo.discount}% off)
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setAppliedPromo(null)}
                    className="h-auto p-0 text-xs text-red-500"
                  >
                    Remove
                  </Button>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="border-t pt-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                {appliedPromo && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({appliedPromo.code})</span>
                    <span>-${promoDiscount.toFixed(2)}</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="border-t pt-4">
              <div className="grid grid-cols-3 gap-4 text-center text-xs text-gray-600">
                <div className="flex flex-col items-center gap-1">
                  <Shield className="h-4 w-4" />
                  <span>Secure</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Truck className="h-4 w-4" />
                  <span>Free Ship $200+</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <CreditCard className="h-4 w-4" />
                  <span>Easy Returns</span>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <div className="border-t pt-4">
              {user ? (
                <Button className="w-full" onClick={handleCheckout} disabled={isCheckingOut}>
                  {isCheckingOut ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="mr-2 h-4 w-4" />
                      Checkout ${finalTotal.toFixed(2)}
                    </>
                  )}
                </Button>
              ) : (
                <div className="space-y-2">
                  <p className="text-center text-sm text-gray-600">Sign in to complete your purchase</p>
                  <Button className="w-full" onClick={() => setIsOpen(false)}>
                    Sign In to Checkout
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
