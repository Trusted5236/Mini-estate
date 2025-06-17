import type { Tower, Floor, Apartment, Layout } from "@/types"

export const towers: Tower[] = [
  {
    id: "tower-a",
    name: "Tower A - Skyline Residences",
    description: "Premium luxury apartments with panoramic city views and world-class amenities.",
    totalFloors: 15,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
    location: "Downtown District",
  },
  {
    id: "tower-b",
    name: "Tower B - Garden Heights",
    description: "Modern living spaces surrounded by lush gardens and recreational facilities.",
    totalFloors: 12,
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop",
    location: "Garden District",
  },
  {
    id: "tower-c",
    name: "Tower C - Ocean View",
    description: "Exclusive waterfront residences with breathtaking ocean views and private beach access.",
    totalFloors: 18,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
    location: "Waterfront",
  },
]

export const generateFloors = (towerId: string, totalFloors: number): Floor[] => {
  return Array.from({ length: totalFloors }, (_, index) => ({
    id: `${towerId}-floor-${index + 1}`,
    towerId,
    floorNumber: index + 1,
    name: `Floor ${index + 1}`,
    totalUnits: Math.floor(Math.random() * 6) + 3, // 3-8 units per floor
    availableUnits: Math.floor(Math.random() * 4) + 1, // 1-4 available units
  }))
}

export const generateApartments = (floorId: string): Apartment[] => {
  const unitTypes = ["Studio", "1BR", "2BR", "3BR", "Penthouse"]
  const apartments: Apartment[] = []

  for (let i = 1; i <= 4; i++) {
    const unitType = unitTypes[Math.floor(Math.random() * unitTypes.length)]
    const roomCount =
      unitType === "Studio" ? 1 : unitType === "1BR" ? 1 : unitType === "2BR" ? 2 : unitType === "3BR" ? 3 : 4

    apartments.push({
      id: `${floorId}-unit-${i}`,
      floorId,
      unitNumber: `${floorId.split("-")[2]}0${i}`,
      unitType,
      area: Math.floor(Math.random() * 1000) + 500, // 500-1500 sq ft
      roomCount,
      bathrooms: Math.floor(roomCount / 2) + 1,
      price: Math.floor(Math.random() * 500000) + 300000, // $300k-$800k
      thumbnail: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop",
      isAvailable: Math.random() > 0.3, // 70% availability
    })
  }

  return apartments
}

export const generateLayout = (apartment: Apartment): Layout => {
  const features = [
    "Hardwood Flooring",
    "Granite Countertops",
    "Stainless Steel Appliances",
    "In-Unit Washer/Dryer",
    "Walk-in Closet",
    "Private Balcony",
    "Floor-to-Ceiling Windows",
    "Smart Home Technology",
    "Central Air Conditioning",
    "Parking Space Included",
  ]

  return {
    id: `layout-${apartment.id}`,
    apartmentId: apartment.id,
    title: `${apartment.unitType} - Unit ${apartment.unitNumber}`,
    description: `Spacious ${apartment.unitType.toLowerCase()} apartment with modern finishes and premium amenities.`,
    area: apartment.area,
    unitType: apartment.unitType,
    roomCount: apartment.roomCount,
    bathrooms: apartment.bathrooms,
    price: apartment.price,
    features: features.slice(0, Math.floor(Math.random() * 5) + 5), // 5-10 features
    images: [
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1651415223860-1a4bf68510c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhdGhyb29tc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1680382578857-c331ead9ed51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D",
    ],
    floorPlan: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
}
