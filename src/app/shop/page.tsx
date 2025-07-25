"use client"

import { Label } from "@/components/ui/label"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import { Search, ShoppingBag, Heart, Filter, Grid3X3, List } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Signature Gold Chain",
    subtitle: "Handcrafted Excellence",
    price: 299,
    originalPrice: 399,
    image: "/placeholder.svg?height=600&width=500&text=Gold+Chain+Bracelet",
    category: "Masculine",
    badge: "Bestseller",
    inStock: true,
  },
  {
    id: 2,
    name: "Diamond Tennis",
    subtitle: "Timeless Elegance",
    price: 599,
    image: "/placeholder.svg?height=600&width=500&text=Diamond+Tennis+Bracelet",
    category: "Feminine",
    badge: "New",
    inStock: true,
  },
  {
    id: 3,
    name: "Minimalist Steel",
    subtitle: "Modern Sophistication",
    price: 149,
    image: "/placeholder.svg?height=600&width=500&text=Black+Steel+Band",
    category: "Artisan",
    badge: "Trending",
    inStock: true,
  },
  {
    id: 4,
    name: "Rose Gold Charm",
    subtitle: "Artisan Collection",
    price: 249,
    image: "/placeholder.svg?height=600&width=500&text=Rose+Gold+Charm",
    category: "Feminine",
    badge: "Limited",
    inStock: false,
  },
  {
    id: 5,
    name: "Platinum Link",
    subtitle: "Executive Series",
    price: 799,
    image: "/placeholder.svg?height=600&width=500&text=Platinum+Link",
    category: "Masculine",
    badge: "Premium",
    inStock: true,
  },
  {
    id: 6,
    name: "Vintage Leather",
    subtitle: "Heritage Collection",
    price: 189,
    image: "/placeholder.svg?height=600&width=500&text=Vintage+Leather",
    category: "Artisan",
    badge: "Classic",
    inStock: true,
  },
]

export default function ShopPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category.toLowerCase() === selectedCategory
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    return matchesCategory && matchesPrice
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <div className="flex items-center space-x-8 lg:space-x-12">
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative">
                  <div className="h-3 w-3 bg-black rounded-full"></div>
                  <div className="absolute -top-1 -right-1 h-2 w-2 bg-yellow-400 rounded-full"></div>
                </div>
                <span className="font-light text-xl sm:text-2xl tracking-[0.2em] text-black">HAUORA</span>
              </Link>

              <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
                <Link
                  href="/shop"
                  className="text-yellow-600 hover:text-yellow-700 transition-colors font-light tracking-wide text-sm"
                >
                  Shop
                </Link>
                <Link
                  href="/masculine"
                  className="text-black hover:text-yellow-600 transition-colors font-light tracking-wide text-sm"
                >
                  Masculine
                </Link>
                <Link
                  href="/feminine"
                  className="text-black hover:text-yellow-600 transition-colors font-light tracking-wide text-sm"
                >
                  Feminine
                </Link>
                <Link
                  href="/artisan"
                  className="text-black hover:text-yellow-600 transition-colors font-light tracking-wide text-sm"
                >
                  Artisan
                </Link>
              </nav>
            </div>

            <div className="flex items-center space-x-4 sm:space-x-6">
              <div className="hidden md:flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search products..."
                    className="w-60 lg:w-80 pl-12 pr-4 border-0 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-yellow-400 transition-all"
                  />
                </div>
              </div>

              <Button variant="ghost" size="sm" className="text-black hover:text-yellow-600 p-2">
                <Heart className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="sm" className="text-black hover:text-yellow-600 p-2 relative">
                <ShoppingBag className="h-5 w-5" />
                <div className="absolute -top-1 -right-1 h-4 w-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-black">2</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm font-light text-gray-600 mb-8">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-black">Shop</span>
        </div>

        {/* Page Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center space-x-3 mb-6 sm:mb-8">
            <div className="h-px w-12 sm:w-16 bg-yellow-400"></div>
            <span className="text-xs sm:text-sm font-light tracking-[0.3em] text-gray-600">COLLECTION</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 tracking-tight leading-tight">
            Luxury
            <br />
            <span className="italic font-extralight">Jewelry</span>
          </h1>
          <p className="text-lg sm:text-xl font-light text-gray-600 max-w-2xl">
            Discover our complete collection of handcrafted luxury bracelets and accessories
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Filters Sidebar */}
          <div className="lg:w-80 space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Filter className="h-4 w-4" />
                  <h3 className="font-light text-lg">Filters</h3>
                </div>

                <div className="space-y-6">
                  {/* Category Filter */}
                  <div className="space-y-3">
                    <Label className="text-sm font-light text-gray-700">Category</Label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="border-gray-200 focus:border-yellow-400 font-light">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="masculine">Masculine</SelectItem>
                        <SelectItem value="feminine">Feminine</SelectItem>
                        <SelectItem value="artisan">Artisan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price Range */}
                  <div className="space-y-4">
                    <Label className="text-sm font-light text-gray-700">Price Range</Label>
                    <div className="px-2">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={1000}
                        min={0}
                        step={10}
                        className="w-full"
                      />
                    </div>
                    <div className="flex justify-between text-sm font-light text-gray-600">
                      <span>£{priceRange[0]}</span>
                      <span>£{priceRange[1]}</span>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="space-y-3">
                    <Label className="text-sm font-light text-gray-700">Availability</Label>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
                        />
                        <span className="text-sm font-light">In Stock</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
                        />
                        <span className="text-sm font-light">Pre-order</span>
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="text-sm font-light text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </div>

              <div className="flex items-center space-x-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48 border-gray-200 focus:border-yellow-400 font-light">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex items-center border border-gray-200 rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${viewMode === "grid" ? "bg-gray-100" : ""}`}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${viewMode === "list" ? "bg-gray-100" : ""}`}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={viewMode === "grid" ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" : "space-y-6"}>
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`group cursor-pointer ${
                    viewMode === "grid" && index % 2 === 1 ? "sm:mt-8 lg:mt-16" : ""
                  } ${viewMode === "list" ? "flex gap-6 p-6 border border-gray-100 rounded-lg hover:shadow-lg transition-shadow" : ""}`}
                >
                  <div
                    className={`relative overflow-hidden ${viewMode === "list" ? "w-48 h-48 flex-shrink-0" : "mb-6"}`}
                  >
                    <div className={`${viewMode === "grid" ? "aspect-[4/5]" : "w-full h-full"} relative`}>
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes={
                          viewMode === "grid" ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" : "192px"
                        }
                      />
                    </div>

                    <Badge
                      className={`absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/90 text-black border-0 backdrop-blur-sm font-light text-xs ${
                        !product.inStock ? "bg-red-100 text-red-800" : ""
                      }`}
                    >
                      {!product.inStock ? "Out of Stock" : product.badge}
                    </Badge>

                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white backdrop-blur-sm border-0 p-2"
                    >
                      <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>

                  <div className={`space-y-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                    <div>
                      <h3 className="text-lg sm:text-xl font-light text-black mb-1">{product.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-500 font-light">{product.subtitle}</p>
                    </div>

                    <Badge variant="outline" className="font-light text-xs">
                      {product.category}
                    </Badge>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <span className="text-xl sm:text-2xl font-light text-black">£{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-base sm:text-lg text-gray-400 line-through font-light">
                            £{product.originalPrice}
                          </span>
                        )}
                      </div>
                      <Button
                        size="sm"
                        className={`font-light rounded-none px-4 sm:px-6 text-xs sm:text-sm ${
                          product.inStock
                            ? "bg-black text-white hover:bg-gray-800"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                        disabled={!product.inStock}
                      >
                        {product.inStock ? "ADD" : "SOLD OUT"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white font-light bg-transparent rounded-none px-12 py-3"
              >
                LOAD MORE PRODUCTS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
