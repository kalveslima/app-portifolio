'use client'

import { useState, useEffect } from 'react'

import About from '@/app/about'
import Experience from '@/app/experience'
import Skills from '@/components/skills'
import Contact from '@/components/contatc'
import Footer from '@/components/footer'
import Menu from '@/components/menu'

export default function Page() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen w-full bg-white space-y-28 bg-yellow-400">
      <div className="max-w-3xl mx-auto px-2 py-2">
        <Menu/>
        <About />
       
        {showContent && (
          <div className="space-y-28 animate-fade-in">
           
            <Experience />
            <Skills />
            <Contact />
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}

