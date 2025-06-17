import type { NavigationState } from "@/types"
import { ChevronRight } from "lucide-react"

interface BreadcrumbProps {
  navigation: NavigationState
  onNavigate: (view: NavigationState["view"], data?: any) => void
}

export default function Breadcrumb({ navigation, onNavigate }: BreadcrumbProps) {
  const breadcrumbs = []

  breadcrumbs.push({
    label: "Towers",
    onClick: () => onNavigate("towers"),
    active: navigation.view === "towers",
  })

  if (navigation.selectedTower) {
    breadcrumbs.push({
      label: navigation.selectedTower.name,
      onClick: () => onNavigate("floors", navigation.selectedTower),
      active: navigation.view === "floors",
    })
  }

  if (navigation.selectedFloor) {
    breadcrumbs.push({
      label: `Floor ${navigation.selectedFloor.floorNumber}`,
      onClick: () => onNavigate("apartments", navigation.selectedFloor),
      active: navigation.view === "apartments",
    })
  }

  if (navigation.selectedApartment) {
    breadcrumbs.push({
      label: `Unit ${navigation.selectedApartment.unitNumber}`,
      onClick: () => {},
      active: navigation.view === "layout",
    })
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      {breadcrumbs.map((crumb, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
          <button
            onClick={crumb.onClick}
            className={`hover:text-blue-600 transition-colors ${crumb.active ? "text-blue-600 font-medium" : ""}`}
            disabled={crumb.active}
          >
            {crumb.label}
          </button>
        </div>
      ))}
    </nav>
  )
}
