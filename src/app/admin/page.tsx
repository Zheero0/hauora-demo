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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  DollarSign,
  TrendingUp,
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

const recentOrders = [
  {
    id: "HL3210",
    customer: "Sophia Williams",
    email: "sophia@example.com",
    status: "Shipped",
    total: 599.0,
    date: "Jan 15, 2024",
    product: "Diamond Tennis Bracelet",
  },
  {
    id: "HL3209",
    customer: "James Anderson",
    email: "james@example.com",
    status: "Processing",
    total: 299.0,
    date: "Jan 14, 2024",
    product: "Gold Chain Bracelet",
  },
  {
    id: "HL3208",
    customer: "Emma Thompson",
    email: "emma@example.com",
    status: "Delivered",
    total: 149.0,
    date: "Jan 13, 2024",
    product: "Minimalist Steel Band",
  },
  {
    id: "HL3207",
    customer: "Oliver Davis",
    email: "oliver@example.com",
    status: "Pending",
    total: 249.0,
    date: "Jan 12, 2024",
    product: "Rose Gold Charm",
  },
]

const topProducts = [
  {
    id: 1,
    name: "Signature Gold Chain",
    image: "/placeholder.svg?height=80&width=80&text=Gold+Chain",
    sales: 89,
    revenue: 26611,
    stock: 23,
    category: "Masculine",
    trend: "+12%",
  },
  {
    id: 2,
    name: "Diamond Tennis Bracelet",
    image: "/placeholder.svg?height=80&width=80&text=Diamond+Tennis",
    sales: 67,
    revenue: 40133,
    stock: 12,
    category: "Feminine",
    trend: "+24%",
  },
  {
    id: 3,
    name: "Minimalist Steel Band",
    image: "/placeholder.svg?height=80&width=80&text=Black+Steel",
    sales: 124,
    revenue: 18476,
    stock: 45,
    category: "Artisan",
    trend: "+8%",
  },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isAddProductOpen, setIsAddProductOpen] = useState(false)
  const [productImages, setProductImages] = useState<string[]>([])

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
                        className="hover:bg-gray-50 rounded-lg p-3 font-light text-gray-700 hover:text-black transition-all"
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
            <div className="space-y-12">
              {/* Page Header */}
              <div className="flex items-end justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-px w-12 bg-yellow-400"></div>
                    <span className="text-sm font-light tracking-[0.3em] text-gray-600">DASHBOARD</span>
                  </div>
                  <h1 className="text-5xl font-light text-black tracking-tight">Welcome back</h1>
                  <p className="text-gray-600 font-light text-lg">Here's your luxury jewelry store overview</p>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" className="border-gray-300 bg-transparent font-light rounded-lg">
                    Export Data
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

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="productMaterial" className="text-sm font-light">
                              Material
                            </Label>
                            <Input
                              id="productMaterial"
                              placeholder="e.g. 18k Gold, Sterling Silver"
                              className="border-gray-200 focus:border-yellow-400 font-light"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="productSize" className="text-sm font-light">
                              Size/Dimensions
                            </Label>
                            <Input
                              id="productSize"
                              placeholder="e.g. 7.5 inches, Adjustable"
                              className="border-gray-200 focus:border-yellow-400 font-light"
                            />
                          </div>
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

              {/* Stats Cards */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-500 text-black">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-light tracking-wide opacity-80">TOTAL REVENUE</span>
                        <DollarSign className="h-5 w-5 opacity-80" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-4xl font-light">£127,431</div>
                        <p className="text-sm font-light opacity-80">
                          <span className="font-medium">+24.5%</span> from last month
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-light tracking-wide text-gray-600">ORDERS</span>
                        <ShoppingCart className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-4xl font-light text-black">1,247</div>
                        <p className="text-sm font-light text-gray-600">
                          <span className="text-green-600 font-medium">+18.2%</span> from last month
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-light tracking-wide text-gray-600">PRODUCTS</span>
                        <Package className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-4xl font-light text-black">156</div>
                        <p className="text-sm font-light text-gray-600">
                          <span className="text-green-600 font-medium">+12</span> new this month
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-light tracking-wide text-gray-600">CUSTOMERS</span>
                        <Users className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-4xl font-light text-black">2,847</div>
                        <p className="text-sm font-light text-gray-600">
                          <span className="text-green-600 font-medium">+89</span> new customers
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
                <TabsList className="bg-white border border-gray-200 rounded-lg p-1">
                  <TabsTrigger
                    value="overview"
                    className="data-[state=active]:bg-black data-[state=active]:text-white font-light rounded-md"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="orders"
                    className="data-[state=active]:bg-black data-[state=active]:text-white font-light rounded-md"
                  >
                    Recent Orders
                  </TabsTrigger>
                  <TabsTrigger
                    value="products"
                    className="data-[state=active]:bg-black data-[state=active]:text-white font-light rounded-md"
                  >
                    Top Products
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <Card className="border-0 shadow-lg">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-2xl font-light">Sales Performance</CardTitle>
                        <CardDescription className="font-light">Monthly luxury jewelry sales trends</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center">
                          <div className="text-center space-y-4">
                            <BarChart3 className="h-16 w-16 text-gray-300 mx-auto" />
                            <p className="text-gray-500 font-light">Sales Analytics</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg">
                      <CardHeader className="pb-4">
                        <CardTitle className="text-2xl font-light">Customer Growth</CardTitle>
                        <CardDescription className="font-light">Customer acquisition and retention</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center">
                          <div className="text-center space-y-4">
                            <TrendingUp className="h-16 w-16 text-gray-300 mx-auto" />
                            <p className="text-gray-500 font-light">Growth Metrics</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="orders">
                  <Card className="border-0 shadow-lg">
                    <CardHeader className="pb-6">
                      <CardTitle className="text-2xl font-light">Recent Orders</CardTitle>
                      <CardDescription className="font-light">Latest luxury jewelry purchases</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow className="border-gray-100">
                            <TableHead className="font-light text-gray-600">Order</TableHead>
                            <TableHead className="font-light text-gray-600">Customer</TableHead>
                            <TableHead className="font-light text-gray-600">Product</TableHead>
                            <TableHead className="font-light text-gray-600">Status</TableHead>
                            <TableHead className="font-light text-gray-600">Total</TableHead>
                            <TableHead className="font-light text-gray-600">Date</TableHead>
                            <TableHead className="text-right font-light text-gray-600">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {recentOrders.map((order) => (
                            <TableRow key={order.id} className="hover:bg-gray-50 border-gray-100">
                              <TableCell className="font-medium">#{order.id}</TableCell>
                              <TableCell>
                                <div className="space-y-1">
                                  <div className="font-medium">{order.customer}</div>
                                  <div className="text-sm text-gray-500 font-light">{order.email}</div>
                                </div>
                              </TableCell>
                              <TableCell className="font-light">{order.product}</TableCell>
                              <TableCell>
                                <Badge
                                  variant={
                                    order.status === "Delivered"
                                      ? "default"
                                      : order.status === "Shipped"
                                        ? "secondary"
                                        : order.status === "Processing"
                                          ? "outline"
                                          : "destructive"
                                  }
                                  className="font-light"
                                >
                                  {order.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="font-medium">£{order.total.toFixed(2)}</TableCell>
                              <TableCell className="font-light text-gray-600">{order.date}</TableCell>
                              <TableCell className="text-right">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem>View Details</DropdownMenuItem>
                                    <DropdownMenuItem>Edit Order</DropdownMenuItem>
                                    <DropdownMenuItem className="text-red-600">Cancel Order</DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="products">
                  <Card className="border-0 shadow-lg">
                    <CardHeader className="pb-6">
                      <CardTitle className="text-2xl font-light">Top Performing Products</CardTitle>
                      <CardDescription className="font-light">Best-selling luxury pieces this month</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {topProducts.map((product) => (
                          <div
                            key={product.id}
                            className="flex items-center justify-between p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-center space-x-6">
                              <Image
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                width={80}
                                height={80}\
