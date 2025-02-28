

import { useState } from "react"
import About from "@/app/about"
import Experience from "@/app/experience"
import Contact from "@/components/contatc"
import Skills from "@/components/skills"

export default function Home() {
  const [activeComponent, setActiveComponent] = useState<"home" | "about" | "experience" | "contact"| "skills">("home")

  return (
    <div>
      <nav className="bg-gray-800 text-white">
        <ul className="flex space-x-5 p-5">
          <li onClick={() => setActiveComponent("home")}>Home</li>
          <li onClick={() => setActiveComponent("about")}>Sobre Mim</li>
          <li onClick={() => setActiveComponent("experience")}>Experiência</li>
          <li onClick={() => setActiveComponent("contact")}>Contato</li>
          <li onClick={() => setActiveComponent("skills")}>skills</li>
        </ul>
      </nav>
      
      <div className="p-5">
        {activeComponent === "home" && <h1></h1>}
        {activeComponent === "about" && <About />}
        {activeComponent === "experience" && <Experience />}
        {activeComponent === "contact" && <Contact />}
        {activeComponent === "skills" && <Skills />}

      </div>
    </div>
  )
}
