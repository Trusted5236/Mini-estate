import type { Tower } from "@/types"
import { MapPin, Building } from "lucide-react"

interface TowerCardProps {
  tower: Tower
  onClick: (tower: Tower) => void
}

export default function TowerCard({ tower, onClick }: TowerCardProps) {
  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
      onClick={() => onClick(tower)}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={tower.image || "/placeholder.svg"}
          alt={tower.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          {tower.totalFloors} Floors
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{tower.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{tower.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{tower.location}</span>
          </div>
          <div className="flex items-center text-blue-600">
            <Building className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">View Floors</span>
          </div>
        </div>
      </div>
    </div>
  )
}
