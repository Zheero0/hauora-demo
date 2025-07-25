"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar"
import {
  BarChart3,
  Package,
  ShoppingCart,
  Users,
  Search,
  Plus,
  Settings,
  Bell,
  User,
  LogOut,
  Home,
  FileText,
  Tag,
  MoreHorizontal,
  Upload,
  X,
  Edit,
  Trash2,
  Eye,
} from "lucide-react"
import Image from "next/image"

const sidebarItems = [
  { title: "Overview", icon: Home, url: "/admin" },
  { title: "Products", icon: Package, url: "/admin/products" },
  { title: "Orders", icon: ShoppingCart, url: "/admin/orders" },
  { title: "Customers", icon: Users, url: "/admin/customers" },
  { title: "Analytics", icon: BarChart3, url: "/admin/analytics" },
  { title: "Collections", icon: Tag, url: "/admin/collections" },
  { title: "Reports", icon: FileText, url: "/admin/reports" },
  { title: "Settings", icon: Settings, url: "/admin/settings" },
]

const products = [
  {
    id: 1,
    name: "Signature Gold Chain",
    subtitle: "Handcrafted Excellence",
    price: 299,
    originalPrice: 399,
    image: "/placeholder.svg?height=80&width=80&text=Gold+Chain",
    category: "Masculine",
    stock: 23,
    status: "Active",
    sales: 89,
  },
  {
    id: 2,
    name: "Diamond Tennis Bracelet",
    subtitle: "Timeless Elegance",
    price: 599,
    image: "/placeholder.svg?height=80&width=80&text=Diamond+Tennis",
    category: "Feminine",
    stock: 12,
    status: "Active",
    sales: 67,
  },
  {
    id: 3,
    name: "Minimalist Steel Band",
    subtitle: "Modern Sophistication",
    price: 149,
    image: "/placeholder.svg?height=80&width=80&text=Steel+Band",
    category: "Artisan",
    stock: 45,
    status: "Active",
    sales: 124,
  },
  {
    id: 4,
    name: "Rose Gold Charm",
    subtitle: "Artisan Collection",
    price: 249,
    image: "/placeholder.svg?height=80&width=80&text=Rose+Gold",
    category: "Feminine",
    stock: 0,
    status: "Out of Stock",
    sales: 156,
  },
  {
    id: 5,
    name: "Platinum Link Chain",
    subtitle: "Executive Series",
    price: 799,
    image: "/placeholder.svg?height=80&width=80&text=Platinum+Link",
    category: "Masculine",
    stock: 8,
    status: "Low Stock",
    sales: 34,
  },
]

export default function ProductsPage() {
  const [isAddProductOpen, setIsAddProductOpen] = useState(false)
  const [productImages, setProductImages] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file))
      setProductImages([...productImages, ...newImages])
    }
  }

  const removeImage = (index: number) => {
    setProductImages(productImages.filter((_, i) => i !== index))
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || product.category.toLowerCase() === categoryFilter
    return matchesSearch && matchesCategory
  })

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-50">
        <Sidebar className="border-r-0 bg-white shadow-xl">
          <SidebarHeader className="border-b border-gray-100 p-8">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="h-3 w-3 bg-black rounded-full"></div>
                <div className="absolute -top-1 -right-1 h-2 w-2 bg-yellow-400 rounded-full"></div>
              </div>
              <div>
                <span className="font-light text-xl tracking-[0.2em] text-black">HAUORA</span>
                <p className="text-sm text-gray-500 font-light">Admin Dashboard</p>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent className="p-6">
            <SidebarGroup>
              <SidebarGroupLabel className="text-gray-400 font-light tracking-wide text-xs mb-4">
                NAVIGATION
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-2">
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        className={`hover:bg-gray-50 rounded-lg p-3 font-light text-gray-700 hover:text-black transition-all ${
                          item.title === "Products" ? "bg-gray-50 text-black" : ""
                        }`}
                      >
                        <a href={item.url} className="flex items-center space-x-3">
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-gray-100 p-6">
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton className="w-full hover:bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center space-x-3">
                        <div className="h-8 w-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-black" />
                        </div>
                        <div className="text-left">
                          <p className="font-light text-sm">Admin User</p>
                          <p className="text-xs text-gray-500">admin@hauora.uk</p>
                        </div>
                      </div>
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="top" className="w-56">
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="flex-1">
          {/* Header */}
          <header className="flex h-20 shrink-0 items-center gap-2 bg-white border-b border-gray-100 px-8">
            <SidebarTrigger className="-ml-1" />
            <div className="flex-1" />
            <div className="flex items-center gap-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search..."
                  className="pl-12 w-80 border-0 bg-gray-50 focus:bg-white focus:ring-1 focus:ring-yellow-400 transition-all"
                />
              </div>
              <Button variant="ghost" size="sm" className="relative p-2">
                <Bell className="h-5 w-5" />
                <div className="absolute -top-1 -right-1 h-4 w-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-black">3</span>
                </div>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2">
                    <div className="h-8 w-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-black" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-8">
            <div className="space-y-8">
              {/* Page Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-px w-12 bg-yellow-400"></div>
                    <span className="text-sm font-light tracking-[0.3em] text-gray-600">PRODUCTS</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-light text-black tracking-tight">
                    Product
                    <br />
                    <span className="italic font-extralight">Management</span>
                  </h1>
                  <p className="text-gray-600 font-light text-lg">Manage your luxury jewelry collection</p>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" className="border-gray-300 bg-transparent font-light rounded-lg">
                    Export Products
                  </Button>
                  <Dialog open={isAddProductOpen} onOpenChange={setIsAddProductOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-black text-white hover:bg-gray-800 font-light rounded-lg">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Product
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-light">Add New Product</DialogTitle>
                        <DialogDescription className="font-light">
                          Create a new luxury jewelry piece for your collection
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="productName" className="text-sm font-light">
                              Product Name
                            </Label>
                            <Input
                              id="productName"
                              placeholder="e.g. Diamond Tennis Bracelet"
                              className="border-gray-200 focus:border-yellow-400 font-light"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="productSubtitle" className="text-sm font-light">
                              Subtitle
                            </Label>
                            <Input
                              id="productSubtitle"
                              placeholder="e.g. Timeless Elegance"
                              className="border-gray-200 focus:border-yellow-400 font-light"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="productDescription" className="text-sm font-light">
                            Description
                          </Label>
                          <Textarea
                            id="productDescription"
                            placeholder="Describe the luxury and craftsmanship of this piece..."
                            className="border-gray-200 focus:border-yellow-400 font-light min-h-[100px]"
                          />
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="productPrice" className="text-sm font-light">
                              Price (£)
                            </Label>
                            <Input
                              id="productPrice"
                              type="number"
                              placeholder="299"
                              className="border-gray-200 focus:border-yellow-400 font-light"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="productStock" className="text-sm font-light">
                              Stock Quantity
                            </Label>
                            <Input
                              id="productStock"
                              type="number"
                              placeholder="50"
                              className="border-gray-200 focus:border-yellow-400 font-light"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="productCategory" className="text-sm font-light">
                              Category
                            </Label>
                            <Select>
                              <SelectTrigger className="border-gray-200 focus:border-yellow-400 font-light">
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="masculine">Masculine</SelectItem>
                                <SelectItem value="feminine">Feminine</SelectItem>
                                <SelectItem value="artisan">Artisan</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <Label className="text-sm font-light">Product Images</Label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-sm font-light text-gray-600 mb-4">
                              Drag and drop images here, or click to select files
                            </p>
                            <input
                              type="file"
                              multiple
                              accept="image/*"
                              onChange={handleImageUpload}
                              className="hidden"
                              id="imageUpload"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => document.getElementById("imageUpload")?.click()}
                              className="font-light"
                            >
                              Select Images
                            </Button>
                          </div>
                          {productImages.length > 0 && (
                            <div className="grid grid-cols-4 gap-4">
                              {productImages.map((image, index) => (
                                <div key={index} className="relative">
                                  <Image
                                    src={image || "/placeholder.svg"}
                                    alt={`Product ${index + 1}`}
                                    width={100}
                                    height={100}
                                    className="w-full h-24 object-cover rounded-lg"
                                  />
                                  <Button
                                    type="button"
                                    variant="destructive"
                                    size="sm"
                                    className="absolute -top-2 -right-2 h-6 w-6 p-0"
                                    onClick={() => removeImage(index)}
                                  >
                                    <X className="h-3 w-3" />
                                  </Button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <DialogFooter>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setIsAddProductOpen(false)}
                          className="font-light"
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          className="bg-black text-white hover:bg-gray-800 font-light"
                          onClick={() => setIsAddProductOpen(false)}
                        >
                          Create Product
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              {/* Filters */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-12 border-gray-200 focus:border-yellow-400 font-light"
                      />
                    </div>
                    <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                      <SelectTrigger className="w-48 border-gray-200 focus:border-yellow-400 font-light">
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="masculine">Masculine</SelectItem>
                        <SelectItem value="feminine">Feminine</SelectItem>
                        <SelectItem value="artisan">Artisan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Products Table */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-light">Products ({filteredProducts.length})</CardTitle>
                  <CardDescription className="font-light">Manage your luxury jewelry inventory</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-100">
                        <TableHead className="font-light text-gray-600">Product</TableHead>
                        <TableHead className="font-light text-gray-600">Category</TableHead>
                        <TableHead className="font-light text-gray-600">Price</TableHead>
                        <TableHead className="font-light text-gray-600">Stock</TableHead>
                        <TableHead className="font-light text-gray-600">Status</TableHead>
                        <TableHead className="font-light text-gray-600">Sales</TableHead>
                        <TableHead className="text-right font-light text-gray-600">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredProducts.map((product) => (
                        <TableRow key={product.id} className="hover:bg-gray-50 border-gray-100">
                          <TableCell>
                            <div className="flex items-center space-x-4">
                              <Image
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                width={60}
                                height={60}
                                className="rounded-lg"
                              />
                              <div>
                                <div className="font-medium">{product.name}</div>
                                <div className="text-sm text-gray-500 font-light">{product.subtitle}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="font-light">
                              {product.category}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">£{product.price}</div>
                            {product.originalPrice && (
                              <div className="text-sm text-gray-400 line-through font-light">
                                £{product.originalPrice}
                              </div>
                            )}
                          </TableCell>
                          <TableCell className="font-light">{product.stock}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                product.status === "Active"
                                  ? "default"
                                  : product.status === "Low Stock"
                                    ? "secondary"
                                    : "destructive"
                              }
                              className="font-light"
                            >
                              {product.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="font-light">{product.sales} sold</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit Product
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete Product
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
