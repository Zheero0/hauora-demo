"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Search, Heart, Filter, Grid3X3, List, Plus, Minus, X, Star, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CartModal } from "@/components/cart-modal"
import { Header } from "@/components/header"

const feminineProducts = [
  {
    id: 1,
    name: "Diamond Tennis Bracelet",
    subtitle: "Timeless Elegance",
    price: 599,
    image: "/placeholder.svg?height=600&width=500&text=Diamond+Tennis",
    badge: "Bestseller",
    inStock: true,
    description: "Featuring ethically sourced diamonds in a classic tennis setting.",
    material: "diamond",
    priceRange: "500-1000",
    rating: 4.9,
    reviews: 187,
  },
  {
    id: 2,
    name: "Rose Gold Charm Bracelet",
    subtitle: "Romantic Grace",
    price: 349,
    originalPrice: 449,
    image: "/placeholder.svg?height=600&width=500&text=Rose+Gold+Charm",
    badge: "Sale",
    inStock: true,
    description: "Delicate rose gold with customizable charm options.",
    material: "gold",
    priceRange: "200-500",
    rating: 4.8,
    reviews: 143,
  },
  {
    id: 3,
    name: "Pearl & Gold Chain",
    subtitle: "Classic Beauty",
    price: 429,
    image: "/placeholder.svg?height=600&width=500&text=Pearl+Gold",
    badge: "New",
    inStock: true,
    description: "Freshwater pearls with 14k gold chain links.",
    material: "pearl",
    priceRange: "200-500",
    rating: 4.7,
    reviews: 92,
  },
  {
    id: 4,
    name: "Crystal Infinity Bracelet",
    subtitle: "Modern Romance",
    price: 199,
    image: "/placeholder.svg?height=600&width=500&text=Crystal+Infinity",
    badge: "Trending",
    inStock: true,
    description: "Sparkling crystals in an infinity design.",
    material: "crystal",
    priceRange: "under-200",
    rating: 4.6,
    reviews: 234,
  },
  {
    id: 5,
    name: "Vintage Lace Pattern",
    subtitle: "Heritage Collection",
    price: 289,
    image: "/placeholder.svg?height=600&width=500&text=Vintage+Lace",
    badge: "Limited",
    inStock: false,
    description: "Intricate lace-inspired metalwork in sterling silver.",
    material: "silver",
    priceRange: "200-500",
    rating: 4.8,
    reviews: 76,
  },
  {
    id: 6,
    name: "Sapphire Accent Band",
    subtitle: "Royal Elegance",
    price: 749,
    image: "/placeholder.svg?height=600&width=500&text=Sapphire+Band",
    badge: "Premium",
    inStock: true,
    description: "Blue sapphires set in white gold.",
    material: "sapphire",
    priceRange: "500-1000",
    rating: 4.9,
    reviews: 58,
  },
]

export default function FemininePage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")
  const [selectedProduct, setSelectedProduct] = useState<(typeof feminineProducts)[0] | null>(null)
  const [cartItems, setCartItems] = useState<{ [key: number]: number }>({})
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // Filter states
  const [selectedPriceRange, setSelectedPriceRange] = useState("all")
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [inStockOnly, setInStockOnly] = useState(false)
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  // Quick add to cart with feedback
  const [quickAddFeedback, setQuickAddFeedback] = useState<{ [key: number]: boolean }>({})

  const addToCart = (productId: number, showFeedback = true) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }))

    if (showFeedback) {
      setQuickAddFeedback((prev) => ({ ...prev, [productId]: true }))
      setTimeout(() => {
        setQuickAddFeedback((prev) => ({ ...prev, [productId]: false }))
      }, 1500)
    }
  }

  const updateCartQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      const newItems = { ...cartItems }
      delete newItems[id]
      setCartItems(newItems)
    } else {
      setCartItems((prev) => ({ ...prev, [id]: quantity }))
    }
  }

  const removeFromCart = (id: number) => {
    const newItems = { ...cartItems }
    delete newItems[id]
    setCartItems(newItems)
  }

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    const filtered = feminineProducts.filter((product) => {
      // Search filter
      if (
        searchQuery &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false
      }

      // Price range filter
      if (selectedPriceRange !== "all" && product.priceRange !== selectedPriceRange) {
        return false
      }

      // Material filter
      if (selectedMaterials.length > 0 && !selectedMaterials.includes(product.material)) {
        return false
      }

      // Stock filter
      if (inStockOnly && !product.inStock) {
        return false
      }

      return true
    })

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        filtered.sort((a, b) => b.id - a.id)
        break
      default:
        // Keep original order for featured
        break
    }

    return filtered
  }, [searchQuery, selectedPriceRange, selectedMaterials, inStockOnly, sortBy])

  const cartItemsArray = Object.entries(cartItems)
    .map(([id, quantity]) => {
      const product = feminineProducts.find((p) => p.id === Number.parseInt(id))
      return product ? { ...product, quantity } : null
    })
    .filter(Boolean) as any[]

  const totalCartItems = Object.values(cartItems).reduce((sum, count) => sum + count, 0)

  const toggleMaterial = (material: string) => {
    setSelectedMaterials((prev) => (prev.includes(material) ? prev.filter((m) => m !== material) : [...prev, material]))
  }

  const clearFilters = () => {
    setSelectedPriceRange("all")
    setSelectedMaterials([])
    setInStockOnly(false)
    setSearchQuery("")
  }

  const FilterContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-light text-lg">Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs">
          Clear All
        </Button>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <label className="text-sm font-light text-gray-700">Price Range</label>
        <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
          <SelectTrigger className="border-gray-200 focus:border-yellow-400 font-light">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Prices</SelectItem>
            <SelectItem value="under-200">Under £200</SelectItem>
            <SelectItem value="200-500">£200 - £500</SelectItem>
            <SelectItem value="500-1000">£500 - £1000</SelectItem>
            <SelectItem value="over-1000">Over £1000</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Materials */}
      <div className="space-y-3">
        <label className="text-sm font-light text-gray-700">Stone Type</label>
        <div className="space-y-2">
          {["diamond", "pearl", "sapphire", "crystal", "gold", "silver"].map((material) => (
            <label key={material} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedMaterials.includes(material)}
                onChange={() => toggleMaterial(material)}
                className="rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
              />
              <span className="text-sm font-light capitalize">{material}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="space-y-3">
        <label className="text-sm font-light text-gray-700">Availability</label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
            className="rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
          />
          <span className="text-sm font-light">In Stock Only</span>
        </label>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pt-24">
        {/* Mobile Search Bar */}
        <div className="md:hidden mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search feminine collection..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 border-gray-200 focus:border-yellow-400 transition-all"
            />
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm font-light text-gray-600 mb-6">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-black">Feminine</span>
        </div>

        {/* Page Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center space-x-3 mb-4 sm:mb-6">
            <div className="h-px w-12 sm:w-16 bg-yellow-400"></div>
            <span className="text-xs sm:text-sm font-light tracking-[0.3em] text-gray-600">FEMININE</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-black mb-3 tracking-tight leading-tight">
            Grace &<br />
            <span className="italic font-extralight">Beauty</span>
          </h1>
          <p className="text-base sm:text-lg font-light text-gray-600 max-w-2xl">
            Elegant expressions of contemporary grace. Discover our collection of sophisticated jewelry.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block lg:w-72 space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <FilterContent />
              </CardContent>
            </Card>
          </div>

          {/* Products */}
          <div className="flex-1">
            {/* Mobile Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center justify-between w-full sm:w-auto">
                <div className="text-sm font-light text-gray-600">
                  {filteredAndSortedProducts.length} of {feminineProducts.length} products
                </div>

                {/* Mobile Filter Button */}
                <Sheet open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="lg:hidden bg-transparent">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                      {(selectedMaterials.length > 0 || selectedPriceRange !== "all" || inStockOnly) && (
                        <Badge className="ml-2 bg-yellow-400 text-black text-xs">
                          {selectedMaterials.length + (selectedPriceRange !== "all" ? 1 : 0) + (inStockOnly ? 1 : 0)}
                        </Badge>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                      <SheetDescription>Refine your search</SheetDescription>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterContent />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              <div className="flex items-center space-x-3 w-full sm:w-auto">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-48 border-gray-200 focus:border-yellow-400 font-light">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>

                <div className="hidden sm:flex items-center border border-gray-200 rounded-lg">
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

            {/* Active Filters */}
            {(selectedMaterials.length > 0 || selectedPriceRange !== "all" || inStockOnly) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedPriceRange !== "all" && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Price: {selectedPriceRange}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedPriceRange("all")} />
                  </Badge>
                )}
                {selectedMaterials.map((material) => (
                  <Badge key={material} variant="secondary" className="flex items-center gap-1">
                    {material}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => toggleMaterial(material)} />
                  </Badge>
                ))}
                {inStockOnly && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    In Stock Only
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setInStockOnly(false)} />
                  </Badge>
                )}
              </div>
            )}

            {/* Products Grid */}
            {filteredAndSortedProducts.length === 0 ? (
              <div className="text-center py-12 space-y-4">
                <div className="text-gray-400 text-6xl">🔍</div>
                <h3 className="text-xl font-light text-gray-600">No products found</h3>
                <p className="text-gray-500 font-light">Try adjusting your filters or search terms</p>
                <Button onClick={clearFilters} variant="outline" className="bg-transparent">
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div
                className={
                  viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" : "space-y-4"
                }
              >
                {filteredAndSortedProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className={`group cursor-pointer ${
                      viewMode === "grid" && index % 2 === 1 ? "sm:mt-6 lg:mt-8" : ""
                    } ${viewMode === "list" ? "flex gap-4 p-4 border border-gray-100 rounded-lg hover:shadow-lg transition-shadow" : ""}`}
                  >
                    <div
                      className={`relative overflow-hidden ${viewMode === "list" ? "w-32 h-32 flex-shrink-0" : "mb-4"}`}
                      onClick={() => setSelectedProduct(product)}
                    >
                      <div className={`${viewMode === "grid" ? "aspect-[4/5]" : "w-full h-full"} relative`}>
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes={
                            viewMode === "grid" ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" : "128px"
                          }
                        />
                      </div>

                      <Badge
                        className={`absolute top-2 sm:top-3 left-2 sm:left-3 bg-white/90 text-black border-0 backdrop-blur-sm font-light text-xs ${!product.inStock ? "bg-red-100 text-red-800" : ""}`}
                      >
                        {!product.inStock ? "Out of Stock" : product.badge}
                      </Badge>

                      <Button
                        size="sm"
                        variant="secondary"
                        className="absolute top-2 sm:top-3 right-2 sm:right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white backdrop-blur-sm border-0 p-2"
                      >
                        <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </div>

                    <div className={`space-y-3 ${viewMode === "list" ? "flex-1" : ""}`}>
                      <div onClick={() => setSelectedProduct(product)}>
                        <h3 className="text-base sm:text-lg font-light text-black mb-1">{product.name}</h3>
                        <p className="text-xs sm:text-sm text-gray-500 font-light">{product.subtitle}</p>

                        {/* Rating */}
                        <div className="flex items-center space-x-2 mt-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">({product.reviews})</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg sm:text-xl font-light text-black">£{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm sm:text-base text-gray-400 line-through font-light">
                              £{product.originalPrice}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center space-x-2">
                          {quickAddFeedback[product.id] && (
                            <div className="flex items-center text-green-600 text-xs font-medium">
                              <Zap className="h-3 w-3 mr-1" />
                              Added!
                            </div>
                          )}
                          <Button
                            size="sm"
                            className={`font-light rounded-none px-3 sm:px-4 text-xs sm:text-sm transition-all ${
                              product.inStock
                                ? quickAddFeedback[product.id]
                                  ? "bg-green-600 text-white"
                                  : "bg-black text-white hover:bg-gray-800"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                            disabled={!product.inStock}
                            onClick={(e) => {
                              e.stopPropagation()
                              if (product.inStock) addToCart(product.id)
                            }}
                          >
                            {!product.inStock ? "SOLD OUT" : quickAddFeedback[product.id] ? "ADDED" : "ADD"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Load More - only show if there are more products to load */}
            {filteredAndSortedProducts.length > 0 && filteredAndSortedProducts.length >= 6 && (
              <div className="text-center mt-8">
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white font-light bg-transparent rounded-none px-8 py-3"
                >
                  LOAD MORE PRODUCTS
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-light">{selectedProduct?.name}</DialogTitle>
            <DialogDescription className="font-light">{selectedProduct?.subtitle}</DialogDescription>
          </DialogHeader>
          {selectedProduct && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-3xl font-light text-black">£{selectedProduct.price}</span>
                    {selectedProduct.originalPrice && (
                      <span className="text-xl text-gray-400 line-through font-light">
                        £{selectedProduct.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Badge className="bg-yellow-400 text-black font-light">{selectedProduct.badge}</Badge>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(selectedProduct.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">({selectedProduct.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 font-light leading-relaxed">{selectedProduct.description}</p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="font-light text-gray-700">Quantity:</span>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent">
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">1</span>
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent">
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      className="flex-1 bg-black text-white hover:bg-gray-800 font-light"
                      disabled={!selectedProduct.inStock}
                      onClick={() => {
                        addToCart(selectedProduct.id, false)
                        setSelectedProduct(null)
                        setIsCartOpen(true)
                      }}
                    >
                      {selectedProduct.inStock ? "ADD TO CART" : "OUT OF STOCK"}
                    </Button>
                    <Button variant="outline" size="sm" className="p-3 bg-transparent">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-6 space-y-4">
                  <div className="text-sm font-light text-gray-600">
                    <p>• Ethically sourced materials</p>
                    <p>• Handcrafted with precision</p>
                    <p>• Lifetime warranty included</p>
                    <p>• Free worldwide shipping</p>
                    <p>• 30-day return policy</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Cart Modal */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItemsArray}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
      />
    </div>
  )
}
