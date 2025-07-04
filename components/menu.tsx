import { useState } from "react";
import About from "@/app/about";
import Experience from "@/app/experience";
import Contact from "@/components/contatc";
import Skills from "@/components/skills";
import Hero from "./hero";

// Definição do tipo para as chaves do menu
type ComponentKey = "home" | "about" | "experience" | "contact" | "skills";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState<ComponentKey>("home");

  // Definição do array com tipagem correta
  const menuItems: { name: string; key: ComponentKey }[] = [
    { name: "Home", key: "home" },
    { name: "Sobre Mim", key: "about" },
    { name: "Experiência", key: "experience" },
    { name: "Contato", key: "contact" },
    { name: "Skills", key: "skills" },
  ];

  return (
    <div className="min-h-screen bg-green-500 text-gray-600">
      <nav className="bg-gray- shadow-lg">
        <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 p-3 text-sm sm:text-lg max-w-full overflow-x-auto">
          {menuItems.map(({ name, key }) => (
            <li
              key={key}
              onClick={() => setActiveComponent(key)}
              className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-200 ${
                activeComponent === key ? "bg-green-700" : "hover:bg-green-400"
              }`}
            >
              {name}
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-10 text-center">
        {activeComponent === "home" && <Hero />}
        {activeComponent === "about" && <About />}
        {activeComponent === "experience" && <Experience />}
        {activeComponent === "contact" && <Contact />}
        {activeComponent === "skills" && <Skills />}
      </div>
    </div>
  );
}
