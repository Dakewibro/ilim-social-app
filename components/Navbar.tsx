'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-softer'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-solarTerracotta to-pedreiraPink rounded-card flex items-center justify-center shadow-softer">
              <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-semibold text-cafeEscuro">Ilim</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-darkText/70 hover:text-primary-700 transition-colors text-body font-normal">
              Features
            </a>
            <a href="#circles" className="text-darkText/70 hover:text-primary-700 transition-colors text-body font-normal">
              Book Circles
            </a>
            <a href="#partnerships" className="text-darkText/70 hover:text-primary-700 transition-colors text-body font-normal">
              Partners
            </a>
            <button className="bg-solarTerracotta text-white px-6 py-3 rounded-button font-medium hover:shadow-soft gentle-button hover:bg-primary-600 shadow-softer">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-button hover:bg-azulejoTaupe/30 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-darkText"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 bg-white/90 backdrop-blur-md rounded-card shadow-soft mt-2 mb-4 animate-fade-in">
            <a
              href="#features"
              className="block px-6 py-3 text-darkText/70 hover:bg-calcarioCream/50 transition-colors rounded-input"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#circles"
              className="block px-6 py-3 text-darkText/70 hover:bg-calcarioCream/50 transition-colors rounded-input"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Circles
            </a>
            <a
              href="#partnerships"
              className="block px-6 py-3 text-darkText/70 hover:bg-calcarioCream/50 transition-colors rounded-input"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Partners
            </a>
            <div className="px-4 pt-2">
              <button className="w-full bg-solarTerracotta text-white px-6 py-3 rounded-button font-medium hover:shadow-soft gentle-button hover:bg-primary-600">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

