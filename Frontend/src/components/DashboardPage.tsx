"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Input } from "./ui/input"
import { Header } from "./header"
import {
  User,
  MapPin,
  Mail,
  Phone,
  Edit3,
  Heart,
  Package,
  TrendingUp,
  Star,
  Calendar,
  Eye,
  MessageCircle,
} from "lucide-react"

const userListings = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    image: "https://via.placeholder.com/200x200?text=Denim+Jacket",
    points: 150,
    category: "Jackets",
    condition: "Excellent",
    status: "Available",
    views: 24,
    likes: 8,
    messages: 3,
  },
  {
    id: 2,
    title: "Summer Floral Dress",
    image: "https://via.placeholder.com/200x200?text=Floral+Dress",
    points: 120,
    category: "Dresses",
    condition: "Good",
    status: "Swapped",
    views: 18,
    likes: 12,
    messages: 0,
  },
  {
    id: 3,
    title: "Leather Boots",
    image: "https://via.placeholder.com/200x200?text=Leather+Boots",
    points: 200,
    category: "Shoes",
    condition: "Like New",
    status: "Available",
    views: 31,
    likes: 15,
    messages: 7,
  },
  {
    id: 4,
    title: "Wool Sweater",
    image: "https://via.placeholder.com/200x200?text=Wool+Sweater",
    points: 100,
    category: "Tops",
    condition: "Good",
    status: "Pending",
    views: 12,
    likes: 5,
    messages: 2,
  },
]

const userPurchases = [
  {
    id: 1,
    title: "Designer Handbag",
    image: "https://via.placeholder.com/200x200?text=Designer+Bag",
    points: 300,
    category: "Accessories",
    condition: "Excellent",
    swappedDate: "2024-01-15",
    seller: "Sarah M.",
  },
  {
    id: 2,
    title: "Silk Scarf",
    image: "https://via.placeholder.com/200x200?text=Silk+Scarf",
    points: 80,
    category: "Accessories",
    condition: "Like New",
    swappedDate: "2024-01-10",
    seller: "Emma K.",
  },
  {
    id: 3,
    title: "Running Shoes",
    image: "https://via.placeholder.com/200x200?text=Running+Shoes",
    points: 150,
    category: "Shoes",
    condition: "Good",
    swappedDate: "2024-01-05",
    seller: "Mike R.",
  },
  {
    id: 4,
    title: "Winter Coat",
    image: "https://via.placeholder.com/200x200?text=Winter+Coat",
    points: 250,
    category: "Outerwear",
    condition: "Excellent",
    swappedDate: "2023-12-28",
    seller: "Lisa T.",
  },
]

const DashboardPage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [userInfo, setUserInfo] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    joinDate: "January 2023",
    totalSwaps: 12,
    pointsEarned: 1850,
    rating: 4.8,
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800 border-green-200"
      case "Swapped":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* User Profile Section */}
        <Card className="mb-8 rewear-card-gradient border-0 rewear-earth-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl rewear-gradient-text">User Dashboard</CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
                className="border-green-600 text-green-700 hover:bg-green-50"
              >
                <Edit3 className="w-4 h-4 mr-2" />
                {isEditing ? "Save" : "Edit Profile"}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Profile Picture and Basic Info */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-32 h-32 rewear-gradient-primary rounded-full flex items-center justify-center rewear-warm-shadow">
                  <User className="w-16 h-16 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold rewear-text-forest">{userInfo.name}</h3>
                  <p className="text-muted-foreground">Member since {userInfo.joinDate}</p>
                  <div className="flex items-center justify-center mt-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium">{userInfo.rating}</span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h4 className="font-semibold rewear-text-rust mb-4">Contact Information</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    {isEditing ? (
                      <Input
                        value={userInfo.email}
                        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                        className="flex-1"
                      />
                    ) : (
                      <span>{userInfo.email}</span>
                    )}
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    {isEditing ? (
                      <Input
                        value={userInfo.phone}
                        onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                        className="flex-1"
                      />
                    ) : (
                      <span>{userInfo.phone}</span>
                    )}
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    {isEditing ? (
                      <Input
                        value={userInfo.location}
                        onChange={(e) => setUserInfo({ ...userInfo, location: e.target.value })}
                        className="flex-1"
                      />
                    ) : (
                      <span>{userInfo.location}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-4">
                <h4 className="font-semibold rewear-text-brown mb-4">Your Stats</h4>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white/50 rounded-lg p-4 text-center rewear-warm-shadow">
                    <div className="flex items-center justify-center mb-2">
                      <Package className="w-5 h-5 rewear-text-forest mr-2" />
                      <span className="text-2xl font-bold rewear-text-forest">{userInfo.totalSwaps}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Total Swaps</p>
                  </div>
                  <div className="bg-white/50 rounded-lg p-4 text-center rewear-warm-shadow">
                    <div className="flex items-center justify-center mb-2">
                      <TrendingUp className="w-5 h-5 rewear-text-rust mr-2" />
                      <span className="text-2xl font-bold rewear-text-rust">{userInfo.pointsEarned}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Points Earned</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* My Listings Section */}
        <Card className="mb-8 bg-white border rewear-earth-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl rewear-gradient-text">My Listings</CardTitle>
              <Button className="rewear-gradient-primary text-white rewear-warm-shadow">Add New Item</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {userListings.map((item) => (
                <Card
                  key={item.id}
                  className="hover:shadow-lg transition-all duration-300 cursor-pointer group bg-white border"
                >
                  <CardContent className="p-4">
                    <div className="relative mb-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                      <Badge className={`absolute top-2 right-2 ${getStatusColor(item.status)}`}>{item.status}</Badge>
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:rewear-text-forest transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-bold rewear-gradient-text">{item.points} pts</span>
                      <Badge variant="outline" className="text-xs">
                        {item.condition}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {item.views}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-3 h-3 mr-1" />
                          {item.likes}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="w-3 h-3 mr-1" />
                          {item.messages}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* My Purchases Section */}
        <Card className="bg-white border rewear-earth-shadow">
          <CardHeader>
            <CardTitle className="text-xl rewear-gradient-text">My Purchases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {userPurchases.map((item) => (
                <Card
                  key={item.id}
                  className="hover:shadow-lg transition-all duration-300 cursor-pointer group bg-white border"
                >
                  <CardContent className="p-4">
                    <div className="relative mb-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:rewear-text-forest transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-bold rewear-gradient-text">{item.points} pts</span>
                      <Badge variant="outline" className="text-xs">
                        {item.condition}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-2" />
                        {new Date(item.swappedDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-2" />
                        From {item.seller}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DashboardPage