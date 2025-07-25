"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Search, Filter, Grid3X3, List } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"

const artisanProducts = [
  {
    id: 1,
    name: "Hand-Forged Steel Cuff",
    subtitle: "Master Craftsman Series",
    price: 899,
    image: "/placeholder.svg?height=600&width=500&text=Hand+Forged+Cuff",
    badge: "Exclusive",
    inStock: true,
    description: "Individually hand-forged by master artisans using traditional techniques.",
    craftType: "hand-forged",
    priceRange: "500-1000",
    rating: 4.9,
    reviews: 45,
  },
  {
    id: 2,
    name: "Woven Silver Bracelet",
    subtitle: "Ancient Techniques",
    price: 649,
    originalPrice: 799,
    image: "/placeholder.svg?height=600&width=500&text=Woven+Silver",
    badge: "Limited Edition",
    inStock: true,
    description: "Traditional weaving techniques passed down through generations.",
    craftType: "woven",
    priceRange: "500-1000",
    rating: 4.8,
    reviews: 67,
  },
  {
    id: 3,
    name: "Carved Bone & Metal",
    subtitle: "Heritage Collection",
    price: 459,
    image: "/placeholder.svg?height=600&width=500&text=Carved+Bone",
    badge: "Artisan",
    inStock: true,
    description: "Ethically sourced bone with intricate metal inlays.",
    craftType: "carved",
    priceRange: "400-600",
    rating: 4.7,
    reviews: 89,
  },
  {
    id: 4,
    name: "Hammered Copper Band",
    subtitle: "Rustic Elegance",
    price: 329,
    image: "/placeholder.svg?height=600&width=500&text=Hammered+Copper",
    badge: "Handmade",
    inStock: true,
    description: "Each piece uniquely hammered for individual character.",
    craftType: "hammered",
    priceRange: "200-500",
    rating: 4.6,
    reviews: 123,
  },
  {
    id: 5,
    name: "Twisted Wire Sculpture",
    subtitle: "Modern Art",
    price: 549,
    image: "/placeholder.svg?height=600&width=500&text=Wire+Sculpture",
    badge: "One of a Kind",
    inStock: false,
    description: "Sculptural wire work that doubles as wearable art.",
    craftType: "sculptural",
    priceRange: "500-1000",
    rating: 4.9,
    reviews: 34,
  },
  {
    id: 6,
    name: "Engraved Stone Bracelet",
    subtitle: "Natural Elements",
    price: 389,
    image: "/placeholder.svg?height=600&width=500&text=Stone+Bracelet",
    badge: "Sustainable",
    inStock: true,
    description: "Natural stones with hand-engraved patterns.",
    craftType: "carved",
    priceRange: "200-500",
    rating: 4.8,
    reviews: 156,
  },
]

export default function ArtisanPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")
  const [selectedProduct, setSelectedProduct] = useState<(typeof artisanProducts)[0] | null>(null)
  const [cartItems, setCartItems] = useState<{ [key: number]: number }>({})
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  // Filter states
  const [selectedPriceRange, setSelectedPriceRange] = useState("all")
  const [selectedCraftTypes, setSelectedCraftTypes] = useState<string[]>([])
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
    const filtered = artisanProducts.filter((product) => {
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

      // Craft type filter
      if (selectedCraftTypes.length > 0 && !selectedCraftTypes.includes(product.craftType)) {
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
  }, [searchQuery, selectedPriceRange, selectedCraftTypes, inStockOnly, sortBy])

  const cartItemsArray = Object.entries(cartItems)
    .map(([id, quantity]) => {
      const product = artisanProducts.find((p) => p.id === Number.parseInt(id))
      return product ? { ...product, quantity } : null
    })
    .filter(Boolean) as any[]

  const totalCartItems = Object.values(cartItems).reduce((sum, count) => sum + count, 0)

  const toggleCraftType = (craftType: string) => {
    setSelectedCraftTypes((prev) =>
      prev.includes(craftType) ? prev.filter((c) => c !== craftType) : [...prev, craftType],
    )
  }

  const clearFilters = () => {
    setSelectedPriceRange("all")
    setSelectedCraftTypes([])
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
            <SelectItem value="under-400">Under £400</SelectItem>
            <SelectItem value="400-600">£400 - £600</SelectItem>
            <SelectItem value="600-1000">£600 - £1000</SelectItem>
            <SelectItem value="over-1000">Over £1000</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Craft Types */}
      <div className="space-y-3">
        <label className="text-sm font-light text-gray-700">Craft Type</label>
        <div className="space-y-2">
          {["hand-forged", "carved", "woven", "sculptural", "hammered"].map((craftType) => (
            <label key={craftType} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedCraftTypes.includes(craftType)}
                onChange={() => toggleCraftType(craftType)}
                className="rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
              />
              <span className="text-sm font-light capitalize">{craftType.replace("-", " ")}</span>
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
              placeholder="Search artisan collection..."
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
          <span className="text-black">Artisan</span>
        </div>

        {/* Page Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center space-x-3 mb-4 sm:mb-6">
            <div className="h-px w-12 sm:w-16 bg-yellow-400"></div>
            <span className="text-xs sm:text-sm font-light tracking-[0.3em] text-gray-600">ARTISAN</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-black mb-3 tracking-tight leading-tight">
            Art &<br />
            <span className="italic font-extralight">Craft</span>
          </h1>
          <p className="text-base sm:text-lg font-light text-gray-600 max-w-2xl">
            Handcrafted masterpieces by skilled artisans. Each piece tells a unique story of traditional craftsmanship.
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
                  {filteredAndSortedProducts.length} of {artisanProducts.length} products
                </div>

                {/* Mobile Filter Button */}
                <Sheet open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="lg:hidden bg-transparent">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                      {(selectedCraftTypes.length > 0 || selectedPriceRange !== "all" || inStockOnly) && (
                        <Badge className="ml-2 bg-yellow-400 text-black text-xs">
                          {selectedCraftTypes.length + (selectedPriceRange !== "all" ? 1 : 0) + (inStockOnly ? 1 : 0)}
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
            {(selectedCraftTypes.length > 0 || selectedPriceRange !== "all" || inStockOnly) && (
              <div className="flex flex-wrap gap-\
