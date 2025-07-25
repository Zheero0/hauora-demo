"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
  Settings,
  Bell,
  User,
  LogOut,
  Home,
  FileText,
  Tag,
  Calendar,
  Download,
  ArrowUpRight,
  ArrowDownRight,
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

const topProducts = [
  { name: "Diamond Tennis Bracelet", sales: 156, revenue: 93600, growth: 24 },
  { name: "Signature Gold Chain", sales: 89, revenue: 26611, growth: 12 },
  { name: "Minimalist Steel Band", sales: 124, revenue: 18476, growth: 8 },
  { name: "Rose Gold Charm", sales: 67, revenue: 16683, growth: -5 },
  { name: "Platinum Link Chain", sales: 34, revenue: 27166, growth: 18 },
]

const salesData = [
  { month: "Jan", revenue: 45000, orders: 156, customers: 89 },
  { month: "Feb", revenue: 52000, orders: 178, customers: 102 },
  { month: "Mar", revenue: 48000, orders: 165, customers: 95 },
  { month: "Apr", revenue: 61000, orders: 203, customers: 118 },
  { month: "May", revenue: 55000, orders: 189, customers: 107 },
  { month: "Jun", revenue: 67000, orders: 234, customers: 134 },
]

export default function AnalyticsPage() {
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
                          item.title === "Analytics" ? "bg-gray-50 text-black" : ""
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
                    <span className="text-sm font-light tracking-[0.3em] text-gray-600">ANALYTICS</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-light text-black tracking-tight">
                    Business
                    <br />
                    <span className="italic font-extralight">Analytics</span>
                  </h1>
                  <p className="text-gray-600 font-light text-lg">Track your luxury jewelry business performance</p>
                </div>
                <div className="flex items-center gap-4">
                  <Select defaultValue="30days">
                    <SelectTrigger className="w-48 border-gray-200 focus:border-yellow-400 font-light">
                      <Calendar className="mr-2 h-4 w-4" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7days">Last 7 days</SelectItem>
                      <SelectItem value="30days">Last 30 days</SelectItem>
                      <SelectItem value="90days">Last 90 days</SelectItem>
                      <SelectItem value="1year">Last year</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" className="border-gray-300 bg-transparent font-light rounded-lg">
                    <Download className="mr-2 h-4 w-4" />
                    Export Report
                  </Button>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-500 text-black">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-light tracking-wide opacity-80">TOTAL REVENUE</span>
                        <DollarSign className="h-5 w-5 opacity-80" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-light">£348,000</div>
                        <div className="flex items-center space-x-1">
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="text-sm font-light opacity-80">+24.5% from last month</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-light tracking-wide text-gray-600">ORDERS</span>
                        <ShoppingCart className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-light text-black">1,325</div>
                        <div className="flex items-center space-x-1">
                          <ArrowUpRight className="h-4 w-4 text-green-500" />
                          <span className="text-sm font-light text-gray-600">+18.2% from last month</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-light tracking-wide text-gray-600">AVG ORDER VALUE</span>
                        <TrendingUp className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-light text-black">£263</div>
                        <div className="flex items-center space-x-1">
                          <ArrowUpRight className="h-4 w-4 text-green-500" />
                          <span className="text-sm font-light text-gray-600">+5.3% from last month</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-light tracking-wide text-gray-600">CONVERSION RATE</span>
                        <Users className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl font-light text-black">3.2%</div>
                        <div className="flex items-center space-x-1">
                          <ArrowDownRight className="h-4 w-4 text-red-500" />
                          <span className="text-sm font-light text-gray-600">-2.1% from last month</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Charts */}
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-light">Revenue Trend</CardTitle>
                    <CardDescription className="font-light">Monthly revenue performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <BarChart3 className="h-16 w-16 text-gray-300 mx-auto" />
                        <p className="text-gray-500 font-light">Revenue Analytics Chart</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-light">Customer Growth</CardTitle>
                    <CardDescription className="font-light">New customer acquisition</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <TrendingUp className="h-16 w-16 text-gray-300 mx-auto" />
                        <p className="text-gray-500 font-light">Customer Growth Chart</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Top Products */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-light">Top Performing Products</CardTitle>
                  <CardDescription className="font-light">Best-selling luxury pieces this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topProducts.map((product, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-gray-600">{index + 1}</span>
                          </div>
                          <div>
                            <h4 className="font-medium">{product.name}</h4>
                            <p className="text-sm font-light text-gray-600">{product.sales} sales</p>
                          </div>
                        </div>
                        <div className="text-right space-y-1">
                          <div className="font-medium">£{product.revenue.toLocaleString()}</div>
                          <div className="flex items-center space-x-1">
                            {product.growth > 0 ? (
                              <ArrowUpRight className="h-3 w-3 text-green-500" />
                            ) : (
                              <ArrowDownRight className="h-3 w-3 text-red-500" />
                            )}
                            <span
                              className={`text-sm font-light ${product.growth > 0 ? "text-green-600" : "text-red-600"}`}
                            >
                              {product.growth > 0 ? "+" : ""}
                              {product.growth}%
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sales by Category */}
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-light">Masculine Collection</CardTitle>
                    <CardDescription className="font-light">Bold statements for gentlemen</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-2xl font-light">£89,450</div>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div className="bg-black h-2 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                        <span className="text-sm font-light text-gray-600">65%</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ArrowUpRight className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-light text-green-600">+12% this month</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-light">Feminine Collection</CardTitle>
                    <CardDescription className="font-light">Elegant expressions of grace</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-2xl font-light">£156,780</div>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "78%" }}></div>
                        </div>
                        <span className="text-sm font-light text-gray-600">78%</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ArrowUpRight className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-light text-green-600">+24% this month</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-light">Artisan Collection</CardTitle>
                    <CardDescription className="font-light">Handcrafted masterpieces</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-2xl font-light">£101,770</div>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div className="bg-gray-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                        </div>
                        <span className="text-sm font-light text-gray-600">45%</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ArrowUpRight className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-light text-green-600">+8% this month</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
