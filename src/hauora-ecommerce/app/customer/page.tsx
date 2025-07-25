"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  User,
  Package,
  Heart,
  CreditCard,
  MapPin,
  Bell,
  Settings,
  LogOut,
  Eye,
  Truck,
  CheckCircle,
  Clock,
  ArrowLeft,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const recentOrders = [
  {
    id: "HL3210",
    date: "Jan 15, 2024",
    status: "Delivered",
    total: 599.0,
    items: [
      {
        name: "Diamond Tennis Bracelet",
        image: "/placeholder.svg?height=80&width=80&text=Diamond+Tennis",
        price: 599,
        quantity: 1,
      },
    ],
  },
  {
    id: "HL3209",
    date: "Jan 10, 2024",
    status: "Shipped",
    total: 299.0,
    items: [
      {
        name: "Signature Gold Chain",
        image: "/placeholder.svg?height=80&width=80&text=Gold+Chain",
        price: 299,
        quantity: 1,
      },
    ],
  },
  {
    id: "HL3208",
    date: "Dec 28, 2023",
    status: "Processing",
    total: 149.0,
    items: [
      {
        name: "Minimalist Steel Band",
        image: "/placeholder.svg?height=80&width=80&text=Steel+Band",
        price: 149,
        quantity: 1,
      },
    ],
  },
]

const wishlistItems = [
  {
    id: 1,
    name: "Rose Gold Charm Bracelet",
    price: 249,
    image: "/placeholder.svg?height=200&width=200&text=Rose+Gold+Charm",
    inStock: true,
  },
  {
    id: 2,
    name: "Platinum Link Chain",
    price: 799,
    image: "/placeholder.svg?height=200&width=200&text=Platinum+Link",
    inStock: false,
  },
  {
    id: 3,
    name: "Vintage Leather Wrap",
    price: 189,
    image: "/placeholder.svg?height=200&width=200&text=Vintage+Leather",
    inStock: true,
  },
]

export default function CustomerPortal() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="h-3 w-3 bg-black rounded-full"></div>
                <div className="absolute -top-1 -right-1 h-2 w-2 bg-yellow-400 rounded-full"></div>
              </div>
              <span className="font-light text-xl sm:text-2xl tracking-[0.2em] text-black">HAUORA</span>
            </Link>

            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors font-light"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Back to Store</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar */}
          <div className="lg:w-80">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                {/* Profile Section */}
                <div className="text-center mb-8">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src="/placeholder.svg?height=80&width=80&text=User" />
                    <AvatarFallback className="bg-yellow-400 text-black font-light text-xl">JD</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-light text-black mb-1">John Doe</h2>
                  <p className="text-sm font-light text-gray-600">VIP Member</p>
                  <Badge className="mt-2 bg-yellow-400 text-black hover:bg-yellow-400 font-light">Premium</Badge>
                </div>

                <Separator className="mb-6" />

                {/* Navigation */}
                <nav className="space-y-2">
                  <Button
                    variant={activeTab === "overview" ? "secondary" : "ghost"}
                    className="w-full justify-start font-light"
                    onClick={() => setActiveTab("overview")}
                  >
                    <User className="mr-3 h-4 w-4" />
                    Overview
                  </Button>
                  <Button
                    variant={activeTab === "orders" ? "secondary" : "ghost"}
                    className="w-full justify-start font-light"
                    onClick={() => setActiveTab("orders")}
                  >
                    <Package className="mr-3 h-4 w-4" />
                    Orders
                  </Button>
                  <Button
                    variant={activeTab === "wishlist" ? "secondary" : "ghost"}
                    className="w-full justify-start font-light"
                    onClick={() => setActiveTab("wishlist")}
                  >
                    <Heart className="mr-3 h-4 w-4" />
                    Wishlist
                  </Button>
                  <Button
                    variant={activeTab === "addresses" ? "secondary" : "ghost"}
                    className="w-full justify-start font-light"
                    onClick={() => setActiveTab("addresses")}
                  >
                    <MapPin className="mr-3 h-4 w-4" />
                    Addresses
                  </Button>
                  <Button
                    variant={activeTab === "payment" ? "secondary" : "ghost"}
                    className="w-full justify-start font-light"
                    onClick={() => setActiveTab("payment")}
                  >
                    <CreditCard className="mr-3 h-4 w-4" />
                    Payment Methods
                  </Button>
                  <Button
                    variant={activeTab === "settings" ? "secondary" : "ghost"}
                    className="w-full justify-start font-light"
                    onClick={() => setActiveTab("settings")}
                  >
                    <Settings className="mr-3 h-4 w-4" />
                    Settings
                  </Button>
                </nav>

                <Separator className="my-6" />

                <Button variant="ghost" className="w-full justify-start font-light text-red-600 hover:text-red-700">
                  <LogOut className="mr-3 h-4 w-4" />
                  Sign Out
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Welcome Section */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="h-px w-16 bg-yellow-400"></div>
                    <span className="text-sm font-light tracking-[0.3em] text-gray-600">DASHBOARD</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-light text-black mb-4 tracking-tight">
                    Welcome back,
                    <br />
                    <span className="italic font-extralight">John</span>
                  </h1>
                  <p className="text-lg font-light text-gray-600">Manage your luxury jewelry collection and orders</p>
                </div>

                {/* Stats Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Package className="h-8 w-8 text-gray-400" />
                        <Badge variant="outline" className="font-light">
                          Total
                        </Badge>
                      </div>
                      <div className="text-2xl font-light text-black mb-1">12</div>
                      <p className="text-sm font-light text-gray-600">Orders Placed</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Heart className="h-8 w-8 text-gray-400" />
                        <Badge variant="outline" className="font-light">
                          Saved
                        </Badge>
                      </div>
                      <div className="text-2xl font-light text-black mb-1">8</div>
                      <p className="text-sm font-light text-gray-600">Wishlist Items</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <CreditCard className="h-8 w-8 text-gray-400" />
                        <Badge variant="outline" className="font-light">
                          Spent
                        </Badge>
                      </div>
                      <div className="text-2xl font-light text-black mb-1">£2,847</div>
                      <p className="text-sm font-light text-gray-600">Total Spent</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-500 text-black">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Bell className="h-8 w-8" />
                        <Badge className="bg-black text-white hover:bg-black font-light">VIP</Badge>
                      </div>
                      <div className="text-2xl font-light mb-1">Premium</div>
                      <p className="text-sm font-light opacity-80">Member Status</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Orders */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-light">Recent Orders</CardTitle>
                    <CardDescription className="font-light">Your latest luxury jewelry purchases</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentOrders.slice(0, 3).map((order) => (
                        <div
                          key={order.id}
                          className="flex items-center justify-between p-4 border border-gray-100 rounded-lg"
                        >
                          <div className="flex items-center space-x-4">
                            <Image
                              src={order.items[0].image || "/placeholder.svg"}
                              alt={order.items[0].name}
                              width={60}
                              height={60}
                              className="rounded-lg"
                            />
                            <div>
                              <h4 className="font-medium text-black">{order.items[0].name}</h4>
                              <p className="text-sm font-light text-gray-600">Order #{order.id}</p>
                              <p className="text-sm font-light text-gray-600">{order.date}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge
                              variant={
                                order.status === "Delivered"
                                  ? "default"
                                  : order.status === "Shipped"
                                    ? "secondary"
                                    : "outline"
                              }
                              className="mb-2 font-light"
                            >
                              {order.status}
                            </Badge>
                            <div className="font-medium">£{order.total.toFixed(2)}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Button
                        variant="outline"
                        className="w-full border-black text-black hover:bg-black hover:text-white font-light bg-transparent"
                        onClick={() => setActiveTab("orders")}
                      >
                        View All Orders
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "orders" && (
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="h-px w-16 bg-yellow-400"></div>
                    <span className="text-sm font-light tracking-[0.3em] text-gray-600">ORDERS</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-light text-black mb-4 tracking-tight">
                    Order
                    <br />
                    <span className="italic font-extralight">History</span>
                  </h1>
                </div>

                <div className="space-y-6">
                  {recentOrders.map((order) => (
                    <Card key={order.id} className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                          <div>
                            <h3 className="font-medium text-lg mb-1">Order #{order.id}</h3>
                            <p className="text-sm font-light text-gray-600">{order.date}</p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <Badge
                              variant={
                                order.status === "Delivered"
                                  ? "default"
                                  : order.status === "Shipped"
                                    ? "secondary"
                                    : "outline"
                              }
                              className="font-light"
                            >
                              {order.status === "Delivered" && <CheckCircle className="mr-1 h-3 w-3" />}
                              {order.status === "Shipped" && <Truck className="mr-1 h-3 w-3" />}
                              {order.status === "Processing" && <Clock className="mr-1 h-3 w-3" />}
                              {order.status}
                            </Badge>
                            <Button variant="outline" size="sm" className="font-light bg-transparent">
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex items-center space-x-4">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                width={80}
                                height={80}
                                className="rounded-lg"
                              />
                              <div className="flex-1">
                                <h4 className="font-medium text-black">{item.name}</h4>
                                <p className="text-sm font-light text-gray-600">Quantity: {item.quantity}</p>
                              </div>
                              <div className="font-medium">£{item.price.toFixed(2)}</div>
                            </div>
                          ))}
                        </div>

                        <Separator className="my-4" />

                        <div className="flex justify-between items-center">
                          <span className="font-light text-gray-600">Total</span>
                          <span className="font-medium text-lg">£{order.total.toFixed(2)}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "wishlist" && (
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="h-px w-16 bg-yellow-400"></div>
                    <span className="text-sm font-light tracking-[0.3em] text-gray-600">WISHLIST</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-light text-black mb-4 tracking-tight">
                    Saved
                    <br />
                    <span className="italic font-extralight">Items</span>
                  </h1>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlistItems.map((item) => (
                    <Card key={item.id} className="border-0 shadow-lg group">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <div className="aspect-square relative">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                          <Button
                            size="sm"
                            variant="secondary"
                            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white backdrop-blur-sm border-0 p-2"
                          >
                            <Heart className="h-4 w-4 fill-current text-red-500" />
                          </Button>
                        </div>
                        <div className="p-6 space-y-4">
                          <div>
                            <h3 className="font-light text-lg text-black mb-1">{item.name}</h3>
                            <p className="text-xl font-light text-black">£{item.price}</p>
                          </div>
                          <Button
                            className={`w-full font-light rounded-none ${
                              item.inStock
                                ? "bg-black text-white hover:bg-gray-800"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                            disabled={!item.inStock}
                          >
                            {item.inStock ? "ADD TO BAG" : "OUT OF STOCK"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "addresses" && (
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="h-px w-16 bg-yellow-400"></div>
                    <span className="text-sm font-light tracking-[0.3em] text-gray-600">ADDRESSES</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-light text-black mb-4 tracking-tight">
                    Delivery
                    <br />
                    <span className="italic font-extralight">Addresses</span>
                  </h1>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg font-light">Home Address</CardTitle>
                          <Badge className="mt-2 bg-yellow-400 text-black hover:bg-yellow-400 font-light">
                            Default
                          </Badge>
                        </div>
                        <Button variant="ghost" size="sm" className="font-light">
                          Edit
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 font-light text-gray-600">
                        <p>John Doe</p>
                        <p>123 Luxury Lane</p>
                        <p>Mayfair, London</p>
                        <p>W1K 5AB, United Kingdom</p>
                        <p>+44 20 1234 5678</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg border-dashed border-gray-300">
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mb-4" />
                      <h3 className="font-light text-lg text-black mb-2">Add New Address</h3>
                      <p className="text-sm font-light text-gray-600 mb-4">
                        Add a new delivery address for your orders
                      </p>
                      <Button className="bg-black text-white hover:bg-gray-800 font-light">Add Address</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "payment" && (
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="h-px w-16 bg-yellow-400"></div>
                    <span className="text-sm font-light tracking-[0.3em] text-gray-600">PAYMENT</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-light text-black mb-4 tracking-tight">
                    Payment
                    <br />
                    <span className="italic font-extralight">Methods</span>
                  </h1>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg font-light">Visa ending in 4242</CardTitle>
                          <Badge className="mt-2 bg-yellow-400 text-black hover:bg-yellow-400 font-light">
                            Default
                          </Badge>
                        </div>
                        <Button variant="ghost" size="sm" className="font-light">
                          Edit
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 font-light text-gray-600">
                        <p>•••• •••• •••• 4242</p>
                        <p>Expires 12/26</p>
                        <p>John Doe</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg border-dashed border-gray-300">
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
                      <CreditCard className="h-12 w-12 text-gray-400 mb-4" />
                      <h3 className="font-light text-lg text-black mb-2">Add New Card</h3>
                      <p className="text-sm font-light text-gray-600 mb-4">Add a new payment method for your orders</p>
                      <Button className="bg-black text-white hover:bg-gray-800 font-light">Add Card</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="h-px w-16 bg-yellow-400"></div>
                    <span className="text-sm font-light tracking-[0.3em] text-gray-600">SETTINGS</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-light text-black mb-4 tracking-tight">
                    Account
                    <br />
                    <span className="italic font-extralight">Settings</span>
                  </h1>
                </div>

                <div className="space-y-6">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl font-light">Personal Information</CardTitle>
                      <CardDescription className="font-light">Update your account details</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-sm font-light text-gray-700">
                            First Name
                          </Label>
                          <Input
                            id="firstName"
                            defaultValue="John"
                            className="border-gray-200 focus:border-yellow-400 focus:ring-yellow-400 font-light"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-sm font-light text-gray-700">
                            Last Name
                          </Label>
                          <Input
                            id="lastName"
                            defaultValue="Doe"
                            className="border-gray-200 focus:border-yellow-400 focus:ring-yellow-400 font-light"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-light text-gray-700">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          defaultValue="john.doe@example.com"
                          className="border-gray-200 focus:border-yellow-400 focus:ring-yellow-400 font-light"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-light text-gray-700">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          defaultValue="+44 20 1234 5678"
                          className="border-gray-200 focus:border-yellow-400 focus:ring-yellow-400 font-light"
                        />
                      </div>
                      <Button className="bg-black text-white hover:bg-gray-800 font-light">Save Changes</Button>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl font-light">Notifications</CardTitle>
                      <CardDescription className="font-light">Manage your notification preferences</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Order Updates</h4>
                          <p className="text-sm font-light text-gray-600">Get notified about your order status</p>
                        </div>
                        <input
                          type="checkbox"
                          defaultChecked
                          className="rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">New Collections</h4>
                          <p className="text-sm font-light text-gray-600">Be the first to know about new arrivals</p>
                        </div>
                        <input
                          type="checkbox"
                          defaultChecked
                          className="rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Exclusive Offers</h4>
                          <p className="text-sm font-light text-gray-600">Receive special promotions and discounts</p>
                        </div>
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
