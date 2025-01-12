'use client'

import { useState, useEffect } from 'react'
import Logo from '@/app/logo'
import Hero from '@/components/hero'
import About from '@/components/ui/about'
import Experience from '@/components/experience'
import Skills from '@/components/skills'
import Contact from '@/components/contatc'
import Footer from '@/components/footer'

export default function Page() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen w-full bg-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Hero />
        {showContent && (
          <div className="space-y-32 animate-fade-in">
            <About />
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

