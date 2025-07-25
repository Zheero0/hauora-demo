"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
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
  Settings,
  Bell,
  User,
  LogOut,
  Home,
  FileText,
  Tag,
  MoreHorizontal,
  Eye,
  Truck,
  CheckCircle,
  Clock,
  XCircle,
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

const orders = [
  {
    id: "HL3210",
    customer: "Sophia Williams",
    email: "sophia@example.com",
    status: "Shipped",
    total: 599.0,
    date: "Jan 15, 2024",
    items: [
      {
        name: "Diamond Tennis Bracelet",
        image: "/placeholder.svg?height=60&width=60&text=Diamond+Tennis",
        price: 599,
        quantity: 1,
      },
    ],
    shippingAddress: "123 Luxury Lane, Mayfair, London W1K 5AB",
    paymentMethod: "Visa ending in 4242",
  },
  {
    id: "HL3209",
    customer: "James Anderson",
    email: "james@example.com",
    status: "Processing",
    total: 299.0,
    date: "Jan 14, 2024",
    items: [
      {
        name: "Signature Gold Chain",
        image: "/placeholder.svg?height=60&width=60&text=Gold+Chain",
        price: 299,
        quantity: 1,
      },
    ],
    shippingAddress: "456 Executive Ave, Canary Wharf, London E14 5AB",
    paymentMethod: "Mastercard ending in 8888",
  },
  {
    id: "HL3208",
    customer: "Emma Thompson",
    email: "emma@example.com",
    status: "Delivered",
    total: 149.0,
    date: "Jan 13, 2024",
    items: [
      {
        name: "Minimalist Steel Band",
        image: "/placeholder.svg?height=60&width=60&text=Steel+Band",
        price: 149,
        quantity: 1,
      },
    ],
    shippingAddress: "789 Modern St, Shoreditch, London E1 6AN",
    paymentMethod: "Apple Pay",
  },
  {
    id: "HL3207",
    customer: "Oliver Davis",
    email: "oliver@example.com",
    status: "Pending",
    total: 249.0,
    date: "Jan 12, 2024",
    items: [
      {
        name: "Rose Gold Charm",
        image: "/placeholder.svg?height=60&width=60&text=Rose+Gold",
        price: 249,
        quantity: 1,
      },
    ],
    shippingAddress: "321 Artisan Row, Notting Hill, London W11 3HT",
    paymentMethod: "PayPal",
  },
  {
    id: "HL3206",
    customer: "Isabella Martinez",
    email: "isabella@example.com",
    status: "Cancelled",
    total: 799.0,
    date: "Jan 11, 2024",
    items: [
      {
        name: "Platinum Link Chain",
        image: "/placeholder.svg?height=60&width=60&text=Platinum+Link",
        price: 799,
        quantity: 1,
      },
    ],
    shippingAddress: "654 Premium Plaza, Kensington, London SW7 2AZ",
    paymentMethod: "Amex ending in 1234",
  },
]

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedOrder, setSelectedOrder] = useState<(typeof orders)[0] | null>(null)

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || order.status.toLowerCase() === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Delivered":
        return <CheckCircle className="h-3 w-3" />
      case "Shipped":
        return <Truck className="h-3 w-3" />
      case "Processing":
        return <Clock className="h-3 w-3" />
      case "Cancelled":
        return <XCircle className="h-3 w-3" />
      default:
        return <Clock className="h-3 w-3" />
    }
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
                        className={`hover:bg-gray-50 rounded-lg p-3 font-light text-gray-700 hover:text-black transition-all ${
                          item.title === "Orders" ? "bg-gray-50 text-black" : ""
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
                    <span className="text-sm font-light tracking-[0.3em] text-gray-600">ORDERS</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-light text-black tracking-tight">
                    Order
                    <br />
                    <span className="italic font-extralight">Management</span>
                  </h1>
                  <p className="text-gray-600 font-light text-lg">Track and manage customer orders</p>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" className="border-gray-300 bg-transparent font-light rounded-lg">
                    Export Orders
                  </Button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid gap-6 md:grid-cols-4">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-light text-gray-600">Total Orders</p>
                        <p className="text-2xl font-light text-black">1,247</p>
                      </div>
                      <ShoppingCart className="h-8 w-8 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-light text-gray-600">Pending</p>
                        <p className="text-2xl font-light text-black">23</p>
                      </div>
                      <Clock className="h-8 w-8 text-yellow-500" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-light text-gray-600">Shipped</p>
                        <p className="text-2xl font-light text-black">156</p>
                      </div>
                      <Truck className="h-8 w-8 text-blue-500" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-light text-gray-600">Delivered</p>
                        <p className="text-2xl font-light text-black">1,068</p>
                      </div>
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Filters */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search orders or customers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-12 border-gray-200 focus:border-yellow-400 font-light"
                      />
                    </div>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-48 border-gray-200 focus:border-yellow-400 font-light">
                        <SelectValue placeholder="All Statuses" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="processing">Processing</SelectItem>
                        <SelectItem value="shipped">Shipped</SelectItem>
                        <SelectItem value="delivered">Delivered</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Orders Table */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-light">Orders ({filteredOrders.length})</CardTitle>
                  <CardDescription className="font-light">Manage customer orders and fulfillment</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-100">
                        <TableHead className="font-light text-gray-600">Order</TableHead>
                        <TableHead className="font-light text-gray-600">Customer</TableHead>
                        <TableHead className="font-light text-gray-600">Status</TableHead>
                        <TableHead className="font-light text-gray-600">Total</TableHead>
                        <TableHead className="font-light text-gray-600">Date</TableHead>
                        <TableHead className="text-right font-light text-gray-600">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredOrders.map((order) => (
                        <TableRow key={order.id} className="hover:bg-gray-50 border-gray-100">
                          <TableCell className="font-medium">#{order.id}</TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="font-medium">{order.customer}</div>
                              <div className="text-sm text-gray-500 font-light">{order.email}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                order.status === "Delivered"
                                  ? "default"
                                  : order.status === "Shipped"
                                    ? "secondary"
                                    : order.status === "Processing"
                                      ? "outline"
                                      : order.status === "Cancelled"
                                        ? "destructive"
                                        : "outline"
                              }
                              className="font-light"
                            >
                              {getStatusIcon(order.status)}
                              <span className="ml-1">{order.status}</span>
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
                                <DropdownMenuItem onClick={() => setSelectedOrder(order)}>
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>Update Status</DropdownMenuItem>
                                <DropdownMenuItem>Print Invoice</DropdownMenuItem>
                                <DropdownMenuSeparator />
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
            </div>
          </main>
        </SidebarInset>
      </div>

      {/* Order Details Dialog */}
      <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-light">Order Details</DialogTitle>
            <DialogDescription className="font-light">
              {selectedOrder && `Order #${selectedOrder.id} - ${selectedOrder.date}`}
            </DialogDescription>
          </DialogHeader>
          {selectedOrder && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Customer Information</h4>
                    <div className="space-y-1 text-sm font-light text-gray-600">
                      <p>{selectedOrder.customer}</p>
                      <p>{selectedOrder.email}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Shipping Address</h4>
                    <p className="text-sm font-light text-gray-600">{selectedOrder.shippingAddress}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Order Status</h4>
                    <Badge
                      variant={
                        selectedOrder.status === "Delivered"
                          ? "default"
                          : selectedOrder.status === "Shipped"
                            ? "secondary"
                            : "outline"
                      }
                      className="font-light"
                    >
                      {getStatusIcon(selectedOrder.status)}
                      <span className="ml-1">{selectedOrder.status}</span>
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Payment Method</h4>
                    <p className="text-sm font-light text-gray-600">{selectedOrder.paymentMethod}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-4">Order Items</h4>
                <div className="space-y-4">
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="rounded-lg"
                      />
                      <div className="flex-1">
                        <h5 className="font-medium">{item.name}</h5>
                        <p className="text-sm font-light text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <div className="font-medium">£{item.price.toFixed(2)}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total</span>
                  <span className="font-medium text-lg">£{selectedOrder.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </SidebarProvider>
  )
}
