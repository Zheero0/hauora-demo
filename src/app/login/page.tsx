"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Eye, EyeOff, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
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

      <div className="flex min-h-[calc(100vh-5rem)]">
        {/* Left Side - Image */}
        <div className="hidden lg:flex lg:w-1/2 relative">
          <Image
            src="/placeholder.svg?height=800&width=600&text=Luxury+Jewelry+Login"
            alt="Luxury Jewelry"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
          <div className="absolute bottom-12 left-12 text-white space-y-4 max-w-md">
            <h2 className="text-4xl font-light leading-tight">
              Welcome to
              <br />
              <span className="italic font-extralight">Luxury</span>
            </h2>
            <p className="text-lg font-light text-white/80 leading-relaxed">
              Join our exclusive community and discover handcrafted jewelry that defines your unique style.
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center space-y-4">
              <div className="flex items-center space-x-3 mb-8">
                <div className="h-px w-16 bg-yellow-400 mx-auto"></div>
                <span className="text-sm font-light tracking-[0.3em] text-gray-600">ACCOUNT</span>
                <div className="h-px w-16 bg-yellow-400 mx-auto"></div>
              </div>
              <h1 className="text-3xl sm:text-4xl font-light text-black tracking-tight">
                Welcome
                <br />
                <span className="italic font-extralight">Back</span>
              </h1>
              <p className="text-gray-600 font-light">Access your luxury jewelry collection</p>
            </div>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-50 rounded-lg p-1">
                <TabsTrigger
                  value="login"
                  className="data-[state=active]:bg-white data-[state=active]:text-black font-light rounded-md"
                >
                  Sign In
                </TabsTrigger>
                <TabsTrigger
                  value="register"
                  className="data-[state=active]:bg-white data-[state=active]:text-black font-light rounded-md"
                >
                  Create Account
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-6 mt-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-light text-gray-700">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="border-gray-200 focus:border-yellow-400 focus:ring-yellow-400 font-light rounded-lg"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-sm font-light text-gray-700">
                        Password
                      </Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="border-gray-200 focus:border-yellow-400 focus:ring-yellow-400 font-light rounded-lg pr-10"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Eye className="h-4 w-4 text-gray-400" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
                      />
                      <span className="text-sm font-light text-gray-600">Remember me</span>
                    </label>
                    <Link href="/forgot-password" className="text-sm font-light text-yellow-600 hover:text-yellow-700">
                      Forgot password?
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-black text-white hover:bg-gray-800 font-light py-6 rounded-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing In..." : "Sign In"}
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500 font-light">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="font-light rounded-lg bg-transparent">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" className="font-light rounded-lg bg-transparent">
                    <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Facebook
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="register" className="space-y-6 mt-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-light text-gray-700">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="border-gray-200 focus:border-yellow-400 focus:ring-yellow-400 font-light rounded-lg"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-light text-gray-700">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="border-gray-200 focus:border-yellow-400 focus:ring-yellow-400 font-light rounded-lg"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="registerEmail" className="text-sm font-light text-gray-700">
                      Email Address
                    </Label>
                    <Input
                      id="registerEmail"
                      type="email"
                      placeholder="your@email.com"
                      className="border-gray-200 focus:border-yellow-400 focus:ring-yellow-400 font-light rounded-lg"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="registerPassword" className="text-sm font-light text-gray-700">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="registerPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="border-gray-200 focus:border-yellow-400 focus:ring-yellow-400 font-light rounded-lg pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-yellow-400 focus:ring-yellow-400 mt-1"
                        required
                      />
                      <span className="text-sm font-light text-gray-600 leading-relaxed">
                        I agree to the{" "}
                        <Link href="/terms" className="text-yellow-600 hover:text-yellow-700">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-yellow-600 hover:text-yellow-700">
                          Privacy Policy
                        </Link>
                      </span>
                    </label>

                    <label className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-yellow-400 focus:ring-yellow-400 mt-1"
                      />
                      <span className="text-sm font-light text-gray-600 leading-relaxed">
                        Subscribe to our newsletter for exclusive offers and new collection updates
                      </span>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-black text-white hover:bg-gray-800 font-light py-6 rounded-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
