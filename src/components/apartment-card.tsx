import type { Apartment } from "@/types"
import { Home, Square, Bath, DollarSign } from "lucide-react"

interface ApartmentCardProps {
  apartment: Apartment
  onClick: (apartment: Apartment) => void
}

export default function ApartmentCard({ apartment, onClick }: ApartmentCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
      onClick={() => onClick(apartment)}
    >
      <div className="relative">
        <img
          src={apartment.thumbnail || "/placeholder.svg"}
          alt={`Unit ${apartment.unitNumber}`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md shadow-sm">
          <span className="text-sm font-medium text-gray-900">{apartment.unitType}</span>
        </div>
        {apartment.isAvailable && (
          <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-medium">
            Available
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900">Unit {apartment.unitNumber}</h3>
          <div className="flex items-center text-green-600">
            <DollarSign className="w-4 h-4" />
            <span className="font-bold">{formatPrice(apartment.price)}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span>{apartment.area} sq ft</span>
          </div>
          <div className="flex items-center">
            <Home className="w-4 h-4 mr-1" />
            <span>{apartment.roomCount} bed</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{apartment.bathrooms} bath</span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100">
          <button className="w-full text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors">
            View Floor Plan →
          </button>
        </div>
      </div>
    </div>
  )
}
