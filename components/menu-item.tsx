import Link from "next/link"
import { ChevronDown } from "lucide-react"

interface MenuItemProps {
  item: {
    label: string
    href: string
    submenu?: { label: string; href: string }[]
  }
  isOpen: boolean
  toggleSubmenu: () => void
  isMobile?: boolean
}

export function MenuItem({ item, isOpen, toggleSubmenu, isMobile = false }: MenuItemProps) {
  if (item.submenu) {
    return (
      <div className={`relative ${isMobile ? "block" : "inline-block"}`}>
        <button
          onClick={toggleSubmenu}
          className={`${
            isMobile ? "w-full text-left" : ""
          } flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:text-white focus:bg-gray-700`}
        >
          {item.label}
          <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
        {isOpen && (
          <div
            className={`${
              isMobile ? "relative" : "absolute"
            } z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
          >
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {item.submenu.map((subItem) => (
                <Link
                  key={subItem.label}
                  href={subItem.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      href={item.href}
      className={`${
        isMobile ? "block" : "inline-block"
      } px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
    >
      {item.label}
    </Link>
  )
}

