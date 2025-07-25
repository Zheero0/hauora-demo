"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, Star, ShoppingCart, Heart, Eye, ArrowRight, Shield, Truck, RotateCcw } from "lucide-react"
import Header from "@/components/header"
import { CartModal } from "@/components/cart-modal"
import { useCart } from "@/contexts/cart-context"

const products = [
  {
    id: "1",
    name: "Obsidian Elite",
    price: 299,
    originalPrice: 399,
    image: "/placeholder.svg?height=400&width=400&text=Obsidian+Elite",
    rating: 4.9,
    reviews: 127,
    badge: "Bestseller",
    category: "masculine",
  },
  {
    id: "2",
    name: "Rose Gold Elegance",
    price: 249,
    originalPrice: 329,
    image: "/placeholder.svg?height=400&width=400&text=Rose+Gold+Elegance",
    rating: 4.8,
    reviews: 89,
    badge: "New",
    category: "feminine",
  },
  {
    id: "3",
    name: "Artisan Craft",
    price: 399,
    originalPrice: 499,
    image: "/placeholder.svg?height=400&width=400&text=Artisan+Craft",
    rating: 5.0,
    reviews: 45,
    badge: "Limited",
    category: "artisan",
  },
  {
    id: "4",
    name: "Titanium Force",
    price: 349,
    originalPrice: 449,
    image: "/placeholder.svg?height=400&width=400&text=Titanium+Force",
    rating: 4.7,
    reviews: 203,
    badge: "Sale",
    category: "masculine",
  },
]

export default function HomePage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { addItem } = useCart()

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CartModal />

      {/* Hero Section with Video */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          loop
          muted
          playsInline
          poster="/placeholder.svg?height=1080&width=1920&text=Luxury+Jewelry+Hero"
        >
          <source src="/placeholder.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">Luxury Redefined</h1>
            <p className="mb-8 text-xl md:text-2xl opacity-90">Handcrafted jewelry that tells your unique story</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={toggleVideo}
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                {isPlaying ? (
                  <>
                    <Pause className="mr-2 h-5 w-5" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-5 w-5" />
                    Play Video
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-b bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex items-center justify-center gap-3 text-center">
              <Truck className="h-8 w-8 text-gray-600" />
              <div>
                <h3 className="font-semibold">Free Shipping</h3>
                <p className="text-sm text-gray-600">On orders over $200</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-center">
              <Shield className="h-8 w-8 text-gray-600" />
              <div>
                <h3 className="font-semibold">Lifetime Warranty</h3>
                <p className="text-sm text-gray-600">Craftsmanship guarantee</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-center">
              <RotateCcw className="h-8 w-8 text-gray-600" />
              <div>
                <h3 className="font-semibold">30-Day Returns</h3>
                <p className="text-sm text-gray-600">No questions asked</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">Featured Collection</h2>
            <p className="text-xl text-gray-600">
              Discover our most coveted pieces, crafted for the discerning individual
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-0 shadow-lg transition-all hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-80 w-full object-cover transition-transform group-hover:scale-105"
                  />
                  {product.badge && (
                    <Badge className="absolute left-3 top-3 bg-black text-white">{product.badge}</Badge>
                  )}
                  <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-2 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{product.name}</h3>
                  <div className="mb-4 flex items-center gap-2">
                    <span className="text-xl font-bold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <Button className="w-full" onClick={() => handleAddToCart(product)}>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-black py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Stay in the Loop</h2>
          <p className="mb-8 text-gray-300">Be the first to know about new collections and exclusive offers</p>
          <div className="mx-auto flex max-w-md gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none"
            />
            <Button className="bg-white text-black hover:bg-gray-100">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xl font-bold">HAUORA</h3>
              <p className="text-gray-400">Crafting luxury jewelry that defines your unique style and story.</p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/masculine" className="hover:text-white">
                    Masculine
                  </a>
                </li>
                <li>
                  <a href="/feminine" className="hover:text-white">
                    Feminine
                  </a>
                </li>
                <li>
                  <a href="/artisan" className="hover:text-white">
                    Artisan
                  </a>
                </li>
                <li>
                  <a href="/shop" className="hover:text-white">
                    All Products
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Care Instructions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Press
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HAUORA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
