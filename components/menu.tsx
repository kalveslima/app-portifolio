"use client"

import { useState, useEffect, useRef } from "react"
import {MenuItem}from "./menu-item"; 


const menuItems = [
  { label: "Home", href: "/" },
  {
    label: "Sobre Mim",
    href: "/about",
    submenu: [
      { label: "Sobre", href: "/about" },
      { label: "Experiência", href: "/experience" },
    ],
  },
  { label: "Contato", href: "/contact" },
]

export function Menu() {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenSubmenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label)
  }

  return (
    <nav className="bg-gray-900 text-white shadow-md" ref={menuRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">Kauan</div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <MenuItem
                key={item.label}
                item={item}
                isOpen={openSubmenu === item.label}
                toggleSubmenu={() => toggleSubmenu(item.label)}
              />
            ))}
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">☰</button>
          </div>
        </div>
      </div>
      
      {/* Submenu Mobile */}
      <div className="md:hidden">
        {menuItems.map((item) => (
          <MenuItem
            key={item.label}
            item={item}
            isOpen={openSubmenu === item.label}
            toggleSubmenu={() => toggleSubmenu(item.label)}
            isMobile
          />
        ))}
      </div>
    </nav>
  )
}
