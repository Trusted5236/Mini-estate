"use client"

import type { Layout } from "@/types"
import { ArrowLeft, Square, Home, Bath, MapPin, Star } from "lucide-react"
import { Button } from "./ui/button"

interface LayoutDetailProps {
  layout: Layout
  onBack: () => void
}

export default function LayoutDetail({ layout, onBack }: LayoutDetailProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 px-6 py-4 border-b">
        <button onClick={onBack} className="flex items-center text-blue-600 hover:text-blue-700 mb-4 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Apartments
        </button>

        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{layout.title}</h1>
            <p className="text-gray-600 max-w-2xl">{layout.description}</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-green-600 mb-1">{formatPrice(layout.price)}</div>
            <div className="flex items-center text-yellow-500">
              <Star className="w-4 h-4 fill-current mr-1" />
              <span className="text-sm text-gray-600">Premium Unit</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Floor Plan */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Floor Plan</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <img
                  src={layout.floorPlan || "/placeholder.svg"}
                  alt="Floor Plan"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>

            {/* Image Gallery */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {layout.images.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-sm">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Interior ${index + 1}`}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Features & Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {layout.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Unit Details</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Square className="w-5 h-5 mr-2" />
                    <span>Area</span>
                  </div>
                  <span className="font-medium">{layout.area} sq ft</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Home className="w-5 h-5 mr-2" />
                    <span>Bedrooms</span>
                  </div>
                  <span className="font-medium">{layout.roomCount}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Bath className="w-5 h-5 mr-2" />
                    <span>Bathrooms</span>
                  </div>
                  <span className="font-medium">{layout.bathrooms}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>Unit Type</span>
                  </div>
                  <span className="font-medium">{layout.unitType}</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Interested in this unit?</h3>
              <div className="space-y-4">
                <Button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Schedule a Tour
                </Button>
                <Button
                  variant="outline"
                  className="w-full border border-blue-600 text-blue-600 py-3 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  Request Information
                </Button>
                <div className="text-center text-sm text-gray-600">
                  <p>
                    Call us at <span className="font-medium">(111)222333444</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
