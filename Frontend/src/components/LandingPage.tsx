"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Input } from "./ui/input"
import { Header } from "./header"
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
  Recycle,
  Heart,
  Search,
  TrendingUp,
  Award,
  Leaf,
  TreePine,
  Sprout,
  Sun,
} from "lucide-react"

const featuredItems = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    image: "https://via.placeholder.com/300x300?text=Denim+Jacket",
    points: 150,
    category: "Jackets",
    condition: "Excellent",
    size: "M",
  },
  {
    id: 2,
    title: "Designer Summer Dress",
    image: "https://via.placeholder.com/300x300?text=Summer+Dress",
    points: 200,
    category: "Dresses",
    condition: "Like New",
    size: "S",
  },
  {
    id: 3,
    title: "Classic White Sneakers",
    image: "https://via.placeholder.com/300x300?text=White+Sneakers",
    points: 120,
    category: "Shoes",
    condition: "Good",
    size: "9",
  },
  {
    id: 4,
    title: "Wool Winter Coat",
    image: "https://via.placeholder.com/300x300?text=Winter+Coat",
    points: 300,
    category: "Coats",
    condition: "Excellent",
    size: "L",
  },
]

const categories = [
  { name: "Dresses", icon: "👗", count: 1250, color: "rewear-text-forest" },
  { name: "Tops", icon: "👕", count: 2100, color: "rewear-text-rust" },
  { name: "Bottoms", icon: "👖", count: 1800, color: "rewear-text-brown" },
  { name: "Shoes", icon: "👟", count: 950, color: "rewear-text-forest" },
  { name: "Accessories", icon: "👜", count: 750, color: "rewear-text-rust" },
  { name: "Outerwear", icon: "🧥", count: 600, color: "rewear-text-brown" },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "https://via.placeholder.com/50x50?text=SJ",
    rating: 5,
    text: "ReWear has completely changed how I think about fashion. I've swapped over 20 items and saved hundreds of dollars!",
  },
  {
    name: "Mike Chen",
    avatar: "https://via.placeholder.com/50x50?text=MC",
    rating: 5,
    text: "The point system is genius! I love how I can earn points by giving away clothes I don't wear anymore.",
  },
  {
    name: "Emma Davis",
    avatar: "https://via.placeholder.com/50x50?text=ED",
    rating: 5,
    text: "Sustainable fashion made easy. The quality of items I've received has been consistently amazing.",
  },
]

export const LandingPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredItems.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredItems.length) % featuredItems.length)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="rewear-gradient-primary">
          <div className="container mx-auto px-4 py-20 text-center text-white relative">
            {/* Floating nature elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <TreePine className="absolute top-10 left-10 w-8 h-8 opacity-20 animate-pulse" />
              <Leaf className="absolute top-20 right-20 w-6 h-6 opacity-30 animate-bounce" />
              <Sprout className="absolute bottom-20 left-20 w-7 h-7 opacity-25 animate-pulse" />
              <Sun
                className="absolute top-16 right-1/3 w-10 h-10 opacity-20 animate-spin"
                style={{ animationDuration: "20s" }}
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 relative z-10">Swap. Share. Sustain.</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 relative z-10">
              Join the fashion revolution! Exchange your unused clothes through direct swaps or our innovative point
              system. Make fashion sustainable, one swap at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 relative z-10">
              <Button
                size="lg"
                className="bg-white text-green-800 hover:bg-cream-100 text-lg px-8 py-4 rewear-warm-shadow"
              >
                Start Swapping
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-800 text-lg px-8 py-4 bg-transparent"
              >
                Browse Items
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto relative z-10">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 rewear-warm-shadow">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-8 h-8 mr-2" />
                  <span className="text-3xl font-bold">50K+</span>
                </div>
                <p className="opacity-90">Active Swappers</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 rewear-warm-shadow">
                <div className="flex items-center justify-center mb-2">
                  <Recycle className="w-8 h-8 mr-2" />
                  <span className="text-3xl font-bold">200K+</span>
                </div>
                <p className="opacity-90">Items Swapped</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 rewear-warm-shadow">
                <div className="flex items-center justify-center mb-2">
                  <Leaf className="w-8 h-8 mr-2" />
                  <span className="text-3xl font-bold">1M+</span>
                </div>
                <p className="opacity-90">Pounds of Waste Saved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 rewear-clean-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search for clothes, brands, or categories..."
                className="pl-12 py-4 text-lg bg-white/80 backdrop-blur-sm"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rewear-gradient-primary text-white">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 rewear-gradient-text">Featured Items</h2>
            <p className="text-xl text-muted-foreground">Discover amazing pieces from our community</p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredItems.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <Card className="mx-4 rewear-card-gradient border-0 rewear-earth-shadow">
                      <CardContent className="p-6">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                          <div className="relative">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              className="w-full h-80 object-cover rounded-xl"
                            />
                            <Badge className="absolute top-4 left-4 rewear-gradient-primary text-white">
                              {item.condition}
                            </Badge>
                          </div>
                          <div className="space-y-4">
                            <Badge variant="outline" className="border-green-600 text-green-700">
                              {item.category}
                            </Badge>
                            <h3 className="text-3xl font-bold">{item.title}</h3>
                            <div className="flex items-center gap-4">
                              <span className="text-2xl font-bold rewear-gradient-text">{item.points} points</span>
                              <Badge variant="secondary" className="bg-rust-100 text-rust-800">
                                Size {item.size}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground">
                              High-quality {item.category.toLowerCase()} in {item.condition.toLowerCase()} condition.
                              Perfect for someone looking to refresh their wardrobe sustainably.
                            </p>
                            <div className="flex gap-3">
                              <Button className="rewear-gradient-primary text-white flex-1 rewear-warm-shadow">
                                Swap Now
                              </Button>
                              <Button
                                variant="outline"
                                size="icon"
                                className="border-green-600 text-green-700 hover:bg-green-50 bg-transparent"
                              >
                                <Heart className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rewear-warm-shadow"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rewear-warm-shadow"
              onClick={nextSlide}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 rewear-gradient-text">Shop by Category</h2>
            <p className="text-xl text-muted-foreground">Find exactly what you're looking for</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer group bg-white border rewear-warm-shadow hover:rewear-earth-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className={`font-semibold mb-2 ${category.color}`}>{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count.toLocaleString()} items</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 rewear-gradient-text">How ReWear Works</h2>
            <p className="text-xl text-muted-foreground">Simple, sustainable, and rewarding</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rewear-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 rewear-warm-shadow">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 rewear-text-forest">List Your Items</h3>
              <p className="text-muted-foreground">
                Upload photos of clothes you no longer wear. Set your swap preferences or point value.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rewear-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6 rewear-warm-shadow">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 rewear-text-rust">Find & Match</h3>
              <p className="text-muted-foreground">
                Browse items from other users. Use direct swaps or spend points to get what you love.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rewear-gradient-earth rounded-full flex items-center justify-center mx-auto mb-6 rewear-warm-shadow">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 rewear-text-brown">Swap & Enjoy</h3>
              <p className="text-muted-foreground">
                Complete the exchange safely through our platform. Enjoy your new-to-you fashion finds!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 rewear-gradient-text">What Our Community Says</h2>
            <p className="text-xl text-muted-foreground">Real stories from real swappers</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border rewear-earth-shadow">
              <CardContent className="p-8">
                <div className="text-center">
                  <img
                    src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-green-200"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-xl italic mb-4 rewear-text-forest">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  <cite className="font-semibold rewear-text-brown">{testimonials[currentTestimonial].name}</cite>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="rewear-gradient-earth py-30">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Wardrobe?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of fashion-forward individuals who are making sustainable choices every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/signup">
                <Button
                  size="lg"
                  className="bg-white text-green-800 hover:bg-cream-100 text-lg px-8 py-4 rewear-warm-shadow"
                >
                  Join ReWear Today
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-800 text-lg px-8 py-4 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-cream-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 rewear-gradient-text">ReWear</h3>
              <p className="text-gray-300 mb-4">Making fashion sustainable, one swap at a time.</p>
              <div className="flex gap-4 text-green-400">
                <TrendingUp className="w-5 h-5" />
                <Award className="w-5 h-5" />
                <Leaf className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-green-300">Platform</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    How it Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Browse Items
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Point System
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Safety
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-rust-300">Community</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Forum
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-brown-300">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ReWear. All rights reserved. Made with 🌱 for sustainable fashion.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
