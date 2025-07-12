"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Header } from "./header"
import { Upload, X, Camera, Plus, ArrowLeft, Package, DollarSign, Info, ImageIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"

const ItemListingPage: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    condition: "",
    size: "",
    brand: "",
    points: "",
    swapPreferences: "",
  })

  const [mainImage, setMainImage] = useState<string | null>(null)
  const [additionalImages, setAdditionalImages] = useState<string[]>([])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, isMain = false) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        if (isMain) {
          setMainImage(result)
        } else {
          setAdditionalImages((prev) => [...prev, result])
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const removeAdditionalImage = (index: number) => {
    setAdditionalImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Listing submitted:", { ...formData, mainImage, additionalImages })
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="mr-4 hover:bg-green-50 hover:text-green-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <h1 className="text-3xl font-bold rewear-gradient-text">List Your Item</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Images */}
              <div className="space-y-6">
                {/* Main Product Image */}
                <Card className="rewear-card-gradient border-0 rewear-earth-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg rewear-text-forest">
                      <Camera className="w-5 h-5 mr-2" />
                      Product Image
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      {mainImage ? (
                        <div className="relative">
                          <img
                            src={mainImage || "/placeholder.svg"}
                            alt="Product"
                            className="w-full h-80 object-cover rounded-lg border-2 border-dashed border-green-300"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="absolute top-2 right-2"
                            onClick={() => setMainImage(null)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ) : (
                        <label className="flex flex-col items-center justify-center w-full h-80 border-2 border-dashed border-green-300 rounded-lg cursor-pointer hover:bg-green-50 transition-colors">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-12 h-12 mb-4 text-green-500" />
                            <p className="mb-2 text-sm text-gray-500">
                              <span className="font-semibold">Click to upload</span> main product image
                            </p>
                            <p className="text-xs text-gray-500">PNG, JPG or JPEG (MAX. 10MB)</p>
                          </div>
                          <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e, true)}
                          />
                        </label>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Product Images */}
                <Card className="bg-white border rewear-warm-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg rewear-text-rust">
                      <ImageIcon className="w-5 h-5 mr-2" />
                      Additional Images
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {additionalImages.map((image, index) => (
                        <div key={index} className="relative">
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Additional ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg border"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="absolute top-1 right-1 h-6 w-6"
                            onClick={() => removeAdditionalImage(index)}
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </div>
                      ))}
                      {additionalImages.length < 4 && (
                        <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                          <Plus className="w-8 h-8 text-gray-400 mb-2" />
                          <span className="text-xs text-gray-500">Add Image</span>
                          <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e, false)}
                          />
                        </label>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Product Details */}
              <div className="space-y-6">
                <Card className="bg-white border rewear-earth-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg rewear-text-brown">
                      <Info className="w-5 h-5 mr-2" />
                      Product Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Product Name */}
                    <div className="space-y-2">
                      <Label htmlFor="title">Product Name *</Label>
                      <Input
                        id="title"
                        placeholder="e.g., Vintage Denim Jacket"
                        value={formData.title}
                        onChange={(e) => handleInputChange("title", e.target.value)}
                        required
                      />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <Label htmlFor="description">Description *</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your item in detail..."
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        rows={4}
                        required
                      />
                    </div>

                    {/* Category and Condition */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Category *</Label>
                        <Select onValueChange={(value) => handleInputChange("category", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tops">Tops</SelectItem>
                            <SelectItem value="bottoms">Bottoms</SelectItem>
                            <SelectItem value="dresses">Dresses</SelectItem>
                            <SelectItem value="outerwear">Outerwear</SelectItem>
                            <SelectItem value="shoes">Shoes</SelectItem>
                            <SelectItem value="accessories">Accessories</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Condition *</Label>
                        <Select onValueChange={(value) => handleInputChange("condition", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select condition" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="like-new">Like New</SelectItem>
                            <SelectItem value="excellent">Excellent</SelectItem>
                            <SelectItem value="good">Good</SelectItem>
                            <SelectItem value="fair">Fair</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Size and Brand */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="size">Size</Label>
                        <Input
                          id="size"
                          placeholder="e.g., M, 32, 8"
                          value={formData.size}
                          onChange={(e) => handleInputChange("size", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="brand">Brand</Label>
                        <Input
                          id="brand"
                          placeholder="e.g., Nike, Zara"
                          value={formData.brand}
                          onChange={(e) => handleInputChange("brand", e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Points */}
                    <div className="space-y-2">
                      <Label htmlFor="points" className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        Points Value *
                      </Label>
                      <Input
                        id="points"
                        type="number"
                        placeholder="e.g., 150"
                        value={formData.points}
                        onChange={(e) => handleInputChange("points", e.target.value)}
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        Suggested range: 50-500 points based on item value
                      </p>
                    </div>

                    {/* Swap Preferences */}
                    <div className="space-y-2">
                      <Label htmlFor="swapPreferences">Swap Preferences (Optional)</Label>
                      <Textarea
                        id="swapPreferences"
                        placeholder="What would you like to swap for? e.g., Looking for winter coats, size M"
                        value={formData.swapPreferences}
                        onChange={(e) => handleInputChange("swapPreferences", e.target.value)}
                        rows={2}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 border-gray-300 bg-transparent"
                    onClick={() => navigate(-1)}
                  >
                    Save as Draft
                  </Button>
                  <Button type="submit" className="flex-1 rewear-gradient-primary text-white rewear-warm-shadow">
                    <Package className="w-4 h-4 mr-2" />
                    List Item
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ItemListingPage
