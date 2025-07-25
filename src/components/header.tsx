"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Search, ShoppingBag, Heart, Menu } from "lucide-react"
import Link from "next/link"
import { CartModal } from "@/components/cart-modal"

const navigationLinks = [
  { name: "Shop", href: "/shop" },
  { name: "Masculine", href: "/masculine" },
  { name: "Feminine", href: "/feminine" },
  { name: "Artisan", href: "/artisan" },
  { name: "New In", href: "/shop?filter=new" },
  { name: "Sale", href: "/shop?filter=sale" },
  { name: "Bestsellers", href: "/shop?filter=bestsellers" },
  { name: "Gift Cards", href: "/gift-cards" },
  { name: "Story", href: "/story" },
  { name: "About", href: "/about" },
]

export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [cartItems, setCartItems] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [showExtendedNav, setShowExtendedNav] = useState(false)
  const scrollNavRef = useRef<HTMLDivElement>(null)

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  // Handle scroll to show/hide extended navigation on mobile only
  useEffect(() => {
    const handleScroll = () => {
      // Only show extended nav on mobile/tablet (below lg breakpoint)
      if (window.innerWidth < 1024) {
        if (window.scrollY > 100) {
          setShowExtendedNav(true)
        } else {
          setShowExtendedNav(false)
        }
      } else {
        setShowExtendedNav(false)
      }
    }

    const handleResize = () => {
      // Hide extended nav on desktop
      if (window.innerWidth >= 1024) {
        setShowExtendedNav(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const updateCartQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id))
    } else {
      setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
    }
  }

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const addToCart = (product: any) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id)
      if (existingItem) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Header */}
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative">
                  <div className="h-3 w-3 bg-black rounded-full"></div>
                  <div className="absolute -top-1 -right-1 h-2 w-2 bg-yellow-400 rounded-full"></div>
                </div>
                <span className="font-light text-xl sm:text-2xl tracking-[0.2em] text-black">HAUORA</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigationLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-black hover:text-yellow-600 transition-colors font-light tracking-wide text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Desktop Search */}
              <div className="hidden md:flex items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48 lg:w-64 pl-10 pr-4 border-0 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-yellow-400 transition-all"
                  />
                </div>
              </div>

              {/* Mobile Search */}
              <Button variant="ghost" size="sm" className="md:hidden text-black hover:text-yellow-600 p-2">
                <Search className="h-5 w-5" />
              </Button>

              {/* Wishlist */}
              <Button variant="ghost" size="sm" className="text-black hover:text-yellow-600 p-2">
                <Heart className="h-5 w-5" />
              </Button>

              {/* Cart */}
              <Button
                variant="ghost"
                size="sm"
                className="text-black hover:text-yellow-600 p-2 relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="h-5 w-5" />
                {totalCartItems > 0 && (
                  <div className="absolute -top-1 -right-1 h-5 w-5 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-black">{totalCartItems}</span>
                  </div>
                )}
              </Button>

              {/* Account - Desktop */}
              <div className="hidden sm:flex items-center space-x-4 lg:space-x-6 text-sm font-light">
                <Link href="/login" className="text-black hover:text-yellow-600 transition-colors">
                  Account
                </Link>
                <div className="h-4 w-px bg-gray-300"></div>
                <span className="text-gray-600">£0.00</span>
              </div>

              {/* Mobile Menu Button */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="lg:hidden p-2">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-80 p-0">
                  <div className="flex flex-col h-full">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="h-3 w-3 bg-black rounded-full"></div>
                          <div className="absolute -top-1 -right-1 h-2 w-2 bg-yellow-400 rounded-full"></div>
                        </div>
                        <span className="font-light text-xl tracking-[0.2em] text-black">HAUORA</span>
                      </div>
                    </div>

                    {/* Mobile Search */}
                    <div className="p-4 border-b">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          placeholder="Search products..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-10 pr-4 border-gray-200 focus:border-yellow-400 transition-all"
                        />
                      </div>
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="flex-1 overflow-y-auto">
                      <div className="p-4 space-y-1">
                        {navigationLinks.slice(0, 4).map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className="block px-4 py-3 text-lg font-light text-black hover:bg-gray-50 hover:text-yellow-600 transition-colors rounded-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>

                      <div className="border-t mx-4"></div>

                      <div className="p-4 space-y-1">
                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Quick Links</h3>
                        {navigationLinks.slice(4).map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className="block px-4 py-2 text-base font-light text-gray-600 hover:bg-gray-50 hover:text-yellow-600 transition-colors rounded-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Mobile Footer */}
                    <div className="border-t p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <Link
                          href="/login"
                          className="text-black hover:text-yellow-600 transition-colors font-light"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Account
                        </Link>
                        <span className="text-gray-600 font-light">£0.00</span>
                      </div>

                      <div className="flex space-x-3">
                        <Button
                          variant="outline"
                          className="flex-1 bg-transparent border-black text-black hover:bg-black hover:text-white"
                          onClick={() => {
                            setIsMobileMenuOpen(false)
                            setIsCartOpen(true)
                          }}
                        >
                          <ShoppingBag className="mr-2 h-4 w-4" />
                          Cart ({totalCartItems})
                        </Button>
                        <Button variant="ghost" size="sm" className="text-black hover:text-yellow-600 p-3">
                          <Heart className="h-5 w-5" />
                        </Button>
                      </div>

                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                          <span>Free Shipping</span>
                          <span>•</span>
                          <span>30-Day Returns</span>
                          <span>•</span>
                          <span>Lifetime Warranty</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Extended Navigation Bar - Mobile/Tablet Only (appears on scroll) */}
        <div
          className={`lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
            showExtendedNav
              ? "opacity-100 translate-y-0 max-h-20"
              : "opacity-0 -translate-y-full max-h-0 overflow-hidden"
          }`}
        >
          <div className="px-4 py-3">
            <div
              ref={scrollNavRef}
              className="flex space-x-3 overflow-x-auto scrollbar-hide"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex-shrink-0 px-4 py-2 border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 text-gray-700 hover:text-black rounded-full text-sm font-light transition-all duration-200 whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Cart Modal */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
      />
    </>
  )
}
