export interface Tower {
  id: string
  name: string
  description: string
  totalFloors: number
  image: string
  location: string
}

export interface Floor {
  id: string
  towerId: string
  floorNumber: number
  name: string
  totalUnits: number
  availableUnits: number
}

export interface Apartment {
  id: string
  floorId: string
  unitNumber: string
  unitType: string
  area: number
  roomCount: number
  bathrooms: number
  price: number
  thumbnail: string
  isAvailable: boolean
}

export interface Layout {
  id: string
  apartmentId: string
  title: string
  description: string
  area: number
  unitType: string
  roomCount: number
  bathrooms: number
  price: number
  features: string[]
  images: string[]
  floorPlan: string
}

export type ViewType = "towers" | "floors" | "apartments" | "layout"

export interface NavigationState {
  view: ViewType
  selectedTower?: Tower
  selectedFloor?: Floor
  selectedApartment?: Apartment
}
