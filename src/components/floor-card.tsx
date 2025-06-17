import type { Floor } from "@/types"
import { Users, CheckCircle } from "lucide-react"

interface FloorCardProps {
  floor: Floor
  onClick: (floor: Floor) => void
}

export default function FloorCard({ floor, onClick }: FloorCardProps) {
  const occupancyRate = ((floor.totalUnits - floor.availableUnits) / floor.totalUnits) * 100

  return (
    <div
      className="bg-white rounded-lg shadow-md border border-gray-200 p-6 cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-blue-300"
      onClick={() => onClick(floor)}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{floor.name}</h3>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-green-600 font-medium">{floor.availableUnits} Available</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            <span className="text-sm">Total Units: {floor.totalUnits}</span>
          </div>
          <div className="flex items-center text-blue-600">
            <CheckCircle className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">View Units</span>
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${occupancyRate}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500">{occupancyRate.toFixed(0)}% Occupied</p>
      </div>
    </div>
  )
}
