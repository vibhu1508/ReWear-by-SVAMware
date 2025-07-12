"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"
import { Header } from "./header"
import {
  ArrowLeft,
  Heart,
  Share2,
  MessageCircle,
  Star,
  MapPin,
  Calendar,
  Package,
  Shield,
  Eye,
  Truck,
  RefreshCw,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const productImages = [
  "https://via.placeholder.com/400x400?text=Main+Image",
  "https://via.placeholder.com/400x400?text=Detail+1",
  "https://via.placeholder.com/400x400?text=Detail+2",
  "https://via.placeholder.com/400x400?text=Detail+3",
]

const previousListings = [
  {
    id: 1,
    title: "Summer Dress",
    image: "https://via.placeholder.com/200x200?text=Summer+Dress",
    points: 120,
    condition: "Excellent",
  },
  {
    id: 2,
    title: "Sneakers",
    image: "https://via.placeholder.com/200x200?text=Sneakers",
    points: 180,
    condition: "Good",
  },
  {
    id: 3,
    title: "Handbag",
    image: "https://via.placeholder.com/200x200?text=Handbag",
    points: 250,
    condition: "Like New",
  },
  {
    id: 4,
    title: "Scarf",
    image: "https://via.placeholder.com/200x200?text=Scarf",
    points: 80,
    condition: "Good",
  },
]

const ProductDetailPage: React.FC = () => {
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  const product = {
    title: "Vintage Denim Jacket",
    description:
      "Beautiful vintage denim jacket in excellent condition. This classic piece features authentic distressing and a perfect fit. Originally from a premium brand, this jacket has been well-maintained and is ready for its next adventure. Perfect for layering and adds a timeless touch to any outfit.",
    points: 150,
    category: "Jackets",
    condition: "Excellent",
    size: "M",
    brand: "Levi's",
    color: "Blue",
    material: "100% Cotton Denim",
    seller: {
      name: "Sarah Johnson",
      rating: 4.8,
      totalSwaps: 23,
      joinDate: "January 2023",
      location: "Brooklyn, NY",
      avatar: "https://via.placeholder.com/50x50?text=SJ",
    },
    stats: {
      views: 47,
      likes: 12,
      messages: 8,
    },
    postedDate: "2024-01-20",
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button variant="ghost" onClick={() => navigate(-1)} className="hover:bg-green-50 hover:text-green-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Browse
            </Button>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsLiked(!isLiked)}
                className={isLiked ? "text-red-500 hover:text-red-600" : "hover:text-red-500"}
              >
                <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-green-600">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Left Column - Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <Card className="rewear-card-gradient border-0 rewear-earth-shadow">
                <CardContent className="p-4">
                  <img
                    src={productImages[selectedImage] || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </CardContent>
              </Card>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? "border-green-500 ring-2 ring-green-200" : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`View ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div className="space-y-6">
              {/* Product Header */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="border-green-600 text-green-700">
                    {product.category}
                  </Badge>
                  <Badge className="bg-green-100 text-green-800">{product.condition}</Badge>
                </div>
                <h1 className="text-3xl font-bold mb-2 rewear-text-forest">{product.title}</h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {product.stats.views} views
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-1" />
                    {product.stats.likes} likes
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Posted {new Date(product.postedDate).toLocaleDateString()}
                  </div>
                </div>
              </div>

              {/* Points and Action */}
              <Card className="bg-white border rewear-warm-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-3xl font-bold rewear-gradient-text">{product.points}</span>
                      <span className="text-lg text-muted-foreground ml-2">points</span>
                    </div>
                    <Badge variant="outline" className="text-green-700 border-green-600">
                      Available for Swap
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Button className="rewear-gradient-primary text-white rewear-warm-shadow">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Swap Now
                    </Button>
                    <Button
                      variant="outline"
                      className="border-green-600 text-green-700 hover:bg-green-50 bg-transparent"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Message Seller
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Product Details */}
              <Card className="bg-white border rewear-warm-shadow">
                <CardHeader>
                  <CardTitle className="text-lg rewear-text-rust">Product Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-muted-foreground">Size:</span>
                      <span className="ml-2">{product.size}</span>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Brand:</span>
                      <span className="ml-2">{product.brand}</span>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Color:</span>
                      <span className="ml-2">{product.color}</span>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Material:</span>
                      <span className="ml-2">{product.material}</span>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium mb-2">Description</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Seller Info */}
              <Card className="bg-white border rewear-warm-shadow">
                <CardHeader>
                  <CardTitle className="text-lg rewear-text-brown">Seller Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.seller.avatar || "/placeholder.svg"}
                      alt={product.seller.name}
                      className="w-12 h-12 rounded-full border-2 border-green-200"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">{product.seller.name}</h4>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                          {product.seller.rating}
                        </div>
                        <div className="flex items-center">
                          <Package className="w-3 h-3 mr-1" />
                          {product.seller.totalSwaps} swaps
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {product.seller.location}
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="border-green-600 text-green-700 bg-transparent">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Safety & Shipping */}
              <Card className="bg-white border rewear-warm-shadow">
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-green-600" />
                      <span>Verified Seller</span>
                    </div>
                    <div className="flex items-center">
                      <Truck className="w-4 h-4 mr-2 text-green-600" />
                      <span>Safe Shipping</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Previous Listings */}
          <Card className="bg-white border rewear-earth-shadow">
            <CardHeader>
              <CardTitle className="text-xl rewear-gradient-text">More from {product.seller.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {previousListings.map((item) => (
                  <Card
                    key={item.id}
                    className="hover:shadow-lg transition-all duration-300 cursor-pointer group bg-white border"
                  >
                    <CardContent className="p-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-40 object-cover rounded-lg mb-4"
                      />
                      <h3 className="font-semibold mb-2 group-hover:rewear-text-forest transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold rewear-gradient-text">{item.points} pts</span>
                        <Badge variant="outline" className="text-xs">
                          {item.condition}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage