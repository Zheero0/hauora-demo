"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
  Mail,
  MapPin,
  Crown,
} from "lucide-react"

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

const customers = [
  {
    id: 1,
    name: "Sophia Williams",
    email: "sophia@example.com",
    phone: "+44 20 1234 5678",
    avatar: "/placeholder.svg?height=40&width=40&text=SW",
    tier: "VIP",
    totalSpent: 2847,
    orders: 12,
    joinDate: "Mar 2023",
    lastOrder: "Jan 15, 2024",
    address: "123 Luxury Lane, Mayfair, London W1K 5AB",
    status: "Active",
  },
  {
    id: 2,
    name: "James Anderson",
    email: "james@example.com",
    phone: "+44 20 2345 6789",
    avatar: "/placeholder.svg?height=40&width=40&text=JA",
    tier: "Premium",
    totalSpent: 1456,
    orders: 8,
    joinDate: "Jun 2023",
    lastOrder: "Jan 14, 2024",
    address: "456 Executive Ave, Canary Wharf, London E14 5AB",
    status: "Active",
  },
  {
    id: 3,
    name: "Emma Thompson",
    email: "emma@example.com",
    phone: "+44 20 3456 7890",
    avatar: "/placeholder.svg?height=40&width=40&text=ET",
    tier: "Standard",
    totalSpent: 689,
    orders: 4,
    joinDate: "Sep 2023",
    lastOrder: "Jan 13, 2024",
    address: "789 Modern St, Shoreditch, London E1 6AN",
    status: "Active",
  },
  {
    id: 4,
    name: "Oliver Davis",
    email: "oliver@example.com",
    phone: "+44 20 4567 8901",
    avatar: "/placeholder.svg?height=40&width=40&text=OD",
    tier: "Standard",
    totalSpent: 249,
    orders: 1,
    joinDate: "Dec 2023",
    lastOrder: "Jan 12, 2024",
    address: "321 Artisan Row, Notting Hill, London W11 3HT",
    status: "Active",
  },
  {
    id: 5,
    name: "Isabella Martinez",
    email: "isabella@example.com",
    phone: "+44 20 5678 9012",
    avatar: "/placeholder.svg?height=40&width=40&text=IM",
    tier: "VIP",
    totalSpent: 3245,
    orders: 15,
    joinDate: "Jan 2023",
    lastOrder: "Dec 28, 2023",
    address: "654 Premium Plaza, Kensington, London SW7 2AZ",
    status: "Inactive",
  },
]

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [tierFilter, setTierFilter] = useState("all")
  const [selectedCustomer, setSelectedCustomer] = useState<(typeof customers)[0] | null>(null)

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTier = tierFilter === "all" || customer.tier.toLowerCase() === tierFilter
    return matchesSearch && matchesTier
  })

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "VIP":
        return "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black"
      case "Premium":
        return "bg-gradient-to-r from-purple-500 to-purple-600 text-white"
      default:
        return "bg-gray-100 text-gray-800"
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
                          item.title === "Customers" ? "bg-gray-50 text-black" : ""
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
                    <span className="text-sm font-light tracking-[0.3em] text-gray-600">CUSTOMERS</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-light text-black tracking-tight">
                    Customer
                    <br />
                    <span className="italic font-extralight">Management</span>
                  </h1>
                  <p className="text-gray-600 font-light text-lg">Manage your luxury jewelry customers</p>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" className="border-gray-300 bg-transparent font-light rounded-lg">
                    Export Customers
                  </Button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid gap-6 md:grid-cols-4">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-light text-gray-600">Total Customers</p>
                        <p className="text-2xl font-light text-black">2,847</p>
                      </div>
                      <Users className="h-8 w-8 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-light text-gray-600">VIP Members</p>
                        <p className="text-2xl font-light text-black">156</p>
                      </div>
                      <Crown className="h-8 w-8 text-yellow-500" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-light text-gray-600">New This Month</p>
                        <p className="text-2xl font-light text-black">89</p>
                      </div>
                      <User className="h-8 w-8 text-green-500" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-light text-gray-600">Avg. Order Value</p>
                        <p className="text-2xl font-light text-black">£487</p>
                      </div>
                      <ShoppingCart className="h-8 w-8 text-blue-500" />
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
                        placeholder="Search customers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-12 border-gray-200 focus:border-yellow-400 font-light"
                      />
                    </div>
                    <Select value={tierFilter} onValueChange={setTierFilter}>
                      <SelectTrigger className="w-48 border-gray-200 focus:border-yellow-400 font-light">
                        <SelectValue placeholder="All Tiers" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Tiers</SelectItem>
                        <SelectItem value="vip">VIP</SelectItem>
                        <SelectItem value="premium">Premium</SelectItem>
                        <SelectItem value="standard">Standard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Customers Table */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-light">Customers ({filteredCustomers.length})</CardTitle>
                  <CardDescription className="font-light">Manage your luxury jewelry customers</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-100">
                        <TableHead className="font-light text-gray-600">Customer</TableHead>
                        <TableHead className="font-light text-gray-600">Tier</TableHead>
                        <TableHead className="font-light text-gray-600">Total Spent</TableHead>
                        <TableHead className="font-light text-gray-600">Orders</TableHead>
                        <TableHead className="font-light text-gray-600">Last Order</TableHead>
                        <TableHead className="font-light text-gray-600">Status</TableHead>
                        <TableHead className="text-right font-light text-gray-600">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredCustomers.map((customer) => (
                        <TableRow key={customer.id} className="hover:bg-gray-50 border-gray-100">
                          <TableCell>
                            <div className="flex items-center space-x-4">
                              <Avatar className="h-10 w-10">
                                <AvatarImage src={customer.avatar || "/placeholder.svg"} />
                                <AvatarFallback className="bg-gray-100 text-gray-600 font-light">
                                  {customer.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{customer.name}</div>
                                <div className="text-sm text-gray-500 font-light">{customer.email}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={`font-light ${getTierColor(customer.tier)}`}>
                              {customer.tier === "VIP" && <Crown className="mr-1 h-3 w-3" />}
                              {customer.tier}
                            </Badge>
                          </TableCell>
                          <TableCell className="font-medium">£{customer.totalSpent.toLocaleString()}</TableCell>
                          <TableCell className="font-light">{customer.orders}</TableCell>
                          <TableCell className="font-light text-gray-600">{customer.lastOrder}</TableCell>
                          <TableCell>
                            <Badge
                              variant={customer.status === "Active" ? "default" : "secondary"}
                              className="font-light"
                            >
                              {customer.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setSelectedCustomer(customer)}>
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Mail className="mr-2 h-4 w-4" />
                                  Send Email
                                </DropdownMenuItem>
                                <DropdownMenuItem>View Orders</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Edit Customer</DropdownMenuItem>
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

      {/* Customer Details Dialog */}
      <Dialog open={!!selectedCustomer} onOpenChange={() => setSelectedCustomer(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-light">Customer Profile</DialogTitle>
            <DialogDescription className="font-light">
              {selectedCustomer && `${selectedCustomer.name} - Member since ${selectedCustomer.joinDate}`}
            </DialogDescription>
          </DialogHeader>
          {selectedCustomer && (
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={selectedCustomer.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="bg-gray-100 text-gray-600 font-light text-xl">
                    {selectedCustomer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">{selectedCustomer.name}</h3>
                  <Badge className={`font-light ${getTierColor(selectedCustomer.tier)}`}>
                    {selectedCustomer.tier === "VIP" && <Crown className="mr-1 h-3 w-3" />}
                    {selectedCustomer.tier} Member
                  </Badge>
                  <Badge
                    variant={selectedCustomer.status === "Active" ? "default" : "secondary"}
                    className="font-light ml-2"
                  >
                    {selectedCustomer.status}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Information
                    </h4>
                    <div className="space-y-1 text-sm font-light text-gray-600">
                      <p>{selectedCustomer.email}</p>
                      <p>{selectedCustomer.phone}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      Address
                    </h4>
                    <p className="text-sm font-light text-gray-600">{selectedCustomer.address}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Purchase History</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-light text-gray-600">Total Spent</span>
                        <span className="font-medium">£{selectedCustomer.totalSpent.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-light text-gray-600">Total Orders</span>
                        <span className="font-medium">{selectedCustomer.orders}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-light text-gray-600">Average Order</span>
                        <span className="font-medium">
                          £{Math.round(selectedCustomer.totalSpent / selectedCustomer.orders)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm font-light text-gray-600">Last Order</span>
                        <span className="font-medium">{selectedCustomer.lastOrder}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button className="bg-black text-white hover:bg-gray-800 font-light">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
                <Button variant="outline" className="font-light bg-transparent">
                  View Orders
                </Button>
                <Button variant="outline" className="font-light bg-transparent">
                  Edit Profile
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </SidebarProvider>
  )
}
