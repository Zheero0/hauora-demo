import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Heart, ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";

const featuredProducts = [
  {
    id: 1,
    name: "Signature Gold Chain",
    subtitle: "Handcrafted Excellence",
    price: 299,
    originalPrice: 399,
    image: "/placeholder.svg?height=600&width=500&text=Gold+Chain+Bracelet",
    rating: 4.9,
    reviews: 89,
    badge: "Bestseller",
    description: "Meticulously crafted from 18k gold",
  },
  {
    id: 2,
    name: "Diamond Tennis",
    subtitle: "Timeless Elegance",
    price: 599,
    image: "/placeholder.svg?height=600&width=500&text=Diamond+Tennis+Bracelet",
    rating: 5.0,
    reviews: 124,
    badge: "New",
    description: "Featuring ethically sourced diamonds",
  },
  {
    id: 3,
    name: "Minimalist Steel",
    subtitle: "Modern Sophistication",
    price: 149,
    image: "/placeholder.svg?height=600&width=500&text=Black+Steel+Band",
    rating: 4.8,
    reviews: 67,
    badge: "Trending",
    description: "Precision-engineered titanium steel",
  },
  {
    id: 4,
    name: "Rose Gold Charm",
    subtitle: "Artisan Collection",
    price: 249,
    image: "/placeholder.svg?height=600&width=500&text=Rose+Gold+Charm",
    rating: 4.7,
    reviews: 156,
    badge: "Limited",
    description: "Limited edition artisan piece",
  },
];

const collections = [
  {
    name: "Masculine",
    description: "Bold statements for the modern gentleman",
    image: "/placeholder.svg?height=700&width=600&text=Men's+Collection",
    count: "24 pieces",
    theme: "Power & Precision",
    href: "/masculine",
  },
  {
    name: "Feminine",
    description: "Elegant expressions of contemporary grace",
    image: "/placeholder.svg?height=700&width=600&text=Women's+Collection",
    count: "36 pieces",
    theme: "Grace & Beauty",
    href: "/feminine",
  },
  {
    name: "Artisan",
    description: "Exclusive handcrafted masterpieces",
    image: "/placeholder.svg?height=700&width=600&text=Luxury+Series",
    count: "12 pieces",
    theme: "Art & Craft",
    href: "/artisan",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="bg-red-500 text-white p-4">
        If this is red, Tailwind is working!
      </div>

      {/* Full-Width Video Hero Section - Fixed centering with more padding */}
      <section className="relative w-full h-screen overflow-hidden pt-[160px] sm:pt-[180px] lg:pt-[200px]">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/placeholder.svg?height=1080&width=1920&text=Luxury+Jewelry+Video+Poster"
          >
            <source src="/placeholder-video.mp4" type="video/mp4" />
            {/* Fallback image */}
            <Image
              src="/placeholder.svg?height=1080&width=1920&text=Luxury+Jewelry+Hero"
              alt="Luxury Jewelry Collection"
              fill
              className="object-cover"
              priority
            />
          </video>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content - Properly centered */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto -mt-20 sm:-mt-24 lg:-mt-28">
            <div className="space-y-6 sm:space-y-8">
              {/* Badge */}

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.9] tracking-tight">
                DON'T ONLY
                <br />
                <span className="font-extralight italic">LOOK</span>
                <br />
                YOUR BEST
              </h1>

              {/* Subheading */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white/90 leading-tight max-w-3xl mx-auto">
                YOU DESERVE TO
                <br />
                <span className="font-normal">FEEL YOUR BEST</span>
              </h2>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-4 sm:pt-8">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 font-light px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg tracking-wide rounded-none transition-all duration-300"
                  asChild
                >
                  <Link href="/shop">EXPLORE COLLECTION</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 pt-8 sm:pt-12 text-white/70 text-sm font-light">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Free Worldwide Shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Lifetime Warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>30-Day Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-8 bg-white/40"></div>
            <span className="text-xs font-light tracking-wide">SCROLL</span>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="flex items-center space-x-3 mb-6 sm:mb-8">
              <div className="h-px w-12 sm:w-16 bg-yellow-400"></div>
              <span className="text-xs sm:text-sm font-light tracking-[0.3em] text-gray-600">
                COLLECTIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black mb-6 sm:mb-8 tracking-tight leading-tight">
              Curated
              <br />
              <span className="italic font-extralight">Expressions</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {collections.map((collection, index) => (
              <Link
                key={collection.name}
                href={collection.href}
                className={`group cursor-pointer block ${
                  index === 1
                    ? "sm:mt-8 lg:mt-16"
                    : index === 2
                    ? "lg:mt-32"
                    : ""
                }`}
              >
                <div className="relative overflow-hidden mb-6 sm:mb-8">
                  <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] relative">
                    <Image
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Badge className="bg-white/20 text-white border-0 mb-3 backdrop-blur-sm text-xs">
                      {collection.count}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-light text-black tracking-wide">
                      {collection.name}
                    </h3>
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base">
                    {collection.description}
                  </p>
                  <div className="text-xs sm:text-sm font-light text-yellow-600 tracking-wide">
                    {collection.theme}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 sm:mb-16 lg:mb-20 gap-6">
            <div>
              <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                <div className="h-px w-12 sm:w-16 bg-yellow-400"></div>
                <span className="text-xs sm:text-sm font-light tracking-[0.3em] text-gray-600">
                  SIGNATURE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black tracking-tight leading-tight">
                Featured
                <br />
                <span className="italic font-extralight">Pieces</span>
              </h2>
            </div>
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white font-light bg-transparent rounded-none px-6 sm:px-8 py-2 sm:py-3 text-sm"
              asChild
            >
              <Link href="/shop">VIEW ALL</Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group cursor-pointer ${
                  index % 2 === 1 ? "sm:mt-8 md:mt-16" : ""
                }`}
              >
                <div className="relative overflow-hidden mb-4 sm:mb-6">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  <Badge className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/90 text-black border-0 backdrop-blur-sm font-light text-xs">
                    {product.badge}
                  </Badge>

                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white backdrop-blur-sm border-0 p-2"
                  >
                    <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-light text-black mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 font-light">
                      {product.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 font-light">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <span className="text-xl sm:text-2xl font-light text-black">
                        £{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-base sm:text-lg text-gray-400 line-through font-light">
                          £{product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button
                      size="sm"
                      className="bg-black text-white hover:bg-gray-800 font-light rounded-none px-4 sm:px-6 text-xs sm:text-sm"
                    >
                      ADD
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            <div className="space-y-8 sm:space-y-12">
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center space-x-3">
                  <div className="h-px w-12 sm:w-16 bg-yellow-400"></div>
                  <span className="text-xs sm:text-sm font-light tracking-[0.3em] text-gray-400">
                    EXPERIENCE
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight">
                  The Hauora
                  <br />
                  <span className="italic font-extralight text-yellow-400">
                    Promise
                  </span>
                </h2>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-light">
                    Complimentary Worldwide Delivery
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base">
                    Every piece arrives in our signature packaging with
                    complimentary worldwide shipping on orders over £200.
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-light">
                    Lifetime Craftsmanship Warranty
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base">
                    Our commitment to excellence extends beyond purchase with
                    comprehensive lifetime protection and care.
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-light">
                    Personal Styling Consultation
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base">
                    Connect with our styling experts for personalized
                    recommendations and exclusive member benefits.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-3xl absolute inset-0"></div>
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=600&width=600&text=Luxury+Experience"
                  alt="Luxury Experience"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-8 sm:space-y-12">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black leading-tight tracking-tight">
                Join Our
                <br />
                <span className="italic font-extralight">Community</span>
              </h2>
              <p className="text-lg sm:text-xl font-light text-black/80 leading-relaxed">
                Be the first to discover new collections and receive exclusive
                access to limited editions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Your email address"
                className="bg-white/90 text-black border-0 placeholder:text-gray-600 font-light py-4 sm:py-6 rounded-none backdrop-blur-sm text-sm sm:text-base"
              />
              <Button className="bg-black text-white hover:bg-gray-800 font-light px-6 sm:px-8 py-4 sm:py-6 rounded-none text-sm sm:text-base">
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="space-y-6 sm:space-y-8 sm:col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="h-3 w-3 bg-white rounded-full"></div>
                  <div className="absolute -top-1 -right-1 h-2 w-2 bg-yellow-400 rounded-full"></div>
                </div>
                <span className="font-light text-xl sm:text-2xl tracking-[0.2em]">
                  HAUORA
                </span>
              </div>
              <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base">
                Crafting luxury jewelry that defines elegance and sophistication
                for the modern individual.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h4 className="font-light text-base sm:text-lg tracking-wide">
                Collections
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-400 font-light text-sm sm:text-base">
                <li>
                  <Link
                    href="/masculine"
                    className="hover:text-white transition-colors"
                  >
                    Masculine
                  </Link>
                </li>
                <li>
                  <Link
                    href="/feminine"
                    className="hover:text-white transition-colors"
                  >
                    Feminine
                  </Link>
                </li>
                <li>
                  <Link
                    href="/artisan"
                    className="hover:text-white transition-colors"
                  >
                    Artisan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    className="hover:text-white transition-colors"
                  >
                    Limited Editions
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h4 className="font-light text-base sm:text-lg tracking-wide">
                Support
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-400 font-light text-sm sm:text-base">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Care Instructions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h4 className="font-light text-base sm:text-lg tracking-wide">
                Company
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-400 font-light text-sm sm:text-base">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Craftsmanship
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 font-light text-sm">
                © 2024 Hauora. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 sm:space-x-8 text-gray-400 font-light text-sm">
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms
                </Link>
                <span>Secure payments</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
