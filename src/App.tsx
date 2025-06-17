"use client"

import { useState, useMemo } from "react"
import type { Tower, Floor, Apartment, NavigationState } from "@/types"
import { towers, generateFloors, generateApartments, generateLayout } from "@/data/dummy-data"
import TowerCard from "@/components/tower-card"
import FloorCard from "@/components/floor-card"
import ApartmentCard from "@/components/apartment-card"
import LayoutDetail from "@/components/layout-detail"
import Breadcrumb from "@/components/breadcrumb"
import { Building2 } from "lucide-react"

function App() {
  const [navigation, setNavigation] = useState<NavigationState>({
    view: "towers",
  })

  // Generate floors for selected tower
  const floors = useMemo(() => {
    if (!navigation.selectedTower) return []
    return generateFloors(navigation.selectedTower.id, navigation.selectedTower.totalFloors)
  }, [navigation.selectedTower])

  // Generate apartments for selected floor
  const apartments = useMemo(() => {
    if (!navigation.selectedFloor) return []
    return generateApartments(navigation.selectedFloor.id)
  }, [navigation.selectedFloor])

  // Generate layout for selected apartment
  const layout = useMemo(() => {
    if (!navigation.selectedApartment) return null
    return generateLayout(navigation.selectedApartment)
  }, [navigation.selectedApartment])

  const handleTowerSelect = (tower: Tower) => {
    setNavigation({
      view: "floors",
      selectedTower: tower,
    })
  }

  const handleFloorSelect = (floor: Floor) => {
    setNavigation({
      ...navigation,
      view: "apartments",
      selectedFloor: floor,
    })
  }

  const handleApartmentSelect = (apartment: Apartment) => {
    setNavigation({
      ...navigation,
      view: "layout",
      selectedApartment: apartment,
    })
  }

  const handleNavigate = (view: NavigationState["view"], data?: any) => {
    switch (view) {
      case "towers":
        setNavigation({ view: "towers" })
        break
      case "floors":
        setNavigation({ view: "floors", selectedTower: data })
        break
      case "apartments":
        setNavigation({
          view: "apartments",
          selectedTower: navigation.selectedTower,
          selectedFloor: data,
        })
        break
    }
  }

  const handleBackFromLayout = () => {
    setNavigation({
      view: "apartments",
      selectedTower: navigation.selectedTower,
      selectedFloor: navigation.selectedFloor,
    })
  }

  if (navigation.view === "layout" && layout) {
    return <LayoutDetail layout={layout} onBack={handleBackFromLayout} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center">
            <Building2 className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">Mini Real Estate Floor Selector</h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Breadcrumb navigation={navigation} onNavigate={handleNavigate} />

        {/* Tower Overview */}
        {navigation.view === "towers" && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Dream Estate</h2>
              <p className="text-gray-600 text-lg">
                Discover our premium residential estate, each offering unique amenities and stunning views.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {towers.map((tower) => (
                <TowerCard key={tower.id} tower={tower} onClick={handleTowerSelect} />
              ))}
            </div>
          </div>
        )}

        {/* Floor View */}
        {navigation.view === "floors" && navigation.selectedTower && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{navigation.selectedTower.name}</h2>
              <p className="text-gray-600 text-lg mb-4">{navigation.selectedTower.description}</p>
              <div className="text-sm text-gray-500">
                📍 {navigation.selectedTower.location} • {navigation.selectedTower.totalFloors} Floors
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {floors.map((floor) => (
                <FloorCard key={floor.id} floor={floor} onClick={handleFloorSelect} />
              ))}
            </div>
          </div>
        )}

        {/* Apartments View */}
        {navigation.view === "apartments" && navigation.selectedFloor && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Floor {navigation.selectedFloor.floorNumber} - Available Units
              </h2>
              <p className="text-gray-600 text-lg">
                {navigation.selectedFloor.availableUnits} of {navigation.selectedFloor.totalUnits} units available
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {apartments.map((apartment) => (
                <ApartmentCard key={apartment.id} apartment={apartment} onClick={handleApartmentSelect} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
