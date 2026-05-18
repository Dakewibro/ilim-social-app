'use client'

import { useState } from 'react'
import VantaBackground from './VantaBackground'

export default function Hero() {
  const [isListening, setIsListening] = useState(false)

  return (
    <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-4 overflow-hidden">
      {/* Vanta Birds Background - Visible & Interactive */}
      <VantaBackground />
      
      {/* Soft Mediterranean overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(135deg, #F5F1E8 0%, #E8A55C 25%, #D4A394 50%, #B09A88 75%, #F5F1E8 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease-in-out infinite',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      ></div>

      {/* Floating Shape Widgets - Soft Mediterranean tones */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-solarTerracotta/20 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow" style={{ zIndex: 2 }}></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-pedreiraPink/20 rounded-full mix-blend-multiply filter blur-3xl animate-float-slower" style={{ zIndex: 2 }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-azulejoTaupe/15 rounded-full mix-blend-multiply filter blur-3xl animate-drift" style={{ zIndex: 2 }}></div>
      
      <div className="max-w-6xl mx-auto relative" style={{ zIndex: 10 }}>
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          {/* Logo and Brand Title */}
          <div className="mb-8 animate-slide-up-bounce">
            {/* Book Icon - Warm Mediterranean Colors */}
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-solarTerracotta to-pedreiraPink rounded-card shadow-soft flex items-center justify-center">
              <svg className="w-14 h-14 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold text-cafeEscuro mb-2" style={{ letterSpacing: '0.02em' }}>
              Ilim
            </h1>
          </div>
          {/* Main Heading - Softer, More Emotional */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-darkText mb-6 leading-tight tracking-tight animate-slide-up">
            Books that resonate 
            <span className="block mt-2 gradient-text font-semibold">with you </span>
          </h2>

          {/* Subheading - Calming Tone */}
          <p className="text-subtitle md:text-xl text-darkText/70 mb-12 max-w-2xl mx-auto leading-relaxed font-normal animate-slide-up">
            Share your interests through voice or text. Discover books that you will love. 
            Connect with communities of readers like you.
          </p>

          {/* Voice Button - Enhanced with Breathing Animation & Waveforms */}
          <div className="mb-8 animate-slide-up">
            <div className="relative inline-block">
              {/* Waveform Rings - Only show when listening */}
              {isListening && (
                <>
                  <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-primary-300/40 rounded-full animate-waveform"></div>
                  <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-primary-300/30 rounded-full animate-waveform"></div>
                  <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-primary-300/20 rounded-full animate-waveform"></div>
                </>
              )}
              
              <button 
                className="group relative w-20 h-20 md:w-24 md:h-24 bg-solarTerracotta rounded-full shadow-soft hover:shadow-glow gentle-button mx-auto flex items-center justify-center animate-breathing-pulse"
                onClick={() => setIsListening(!isListening)}
              >
                <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="w-10 h-10 md:w-12 md:h-12 text-darkText relative z-10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                </svg>
              </button>
            </div>
            <p className="mt-4 text-body text-darkText/60 font-normal">
              {isListening ? 'Listening...' : 'Tell Ilim what you\'re interested in...'}
            </p>
          </div>

          {/* Secondary CTA - Mediterranean colors */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <button className="w-full sm:w-auto bg-pedreiraPink text-white px-8 py-4 rounded-button font-medium hover:shadow-soft gentle-button hover:bg-accent-700">
              Browse by speech
            </button>
            <button className="w-full sm:w-auto bg-white/90 backdrop-blur-md text-cafeEscuro px-8 py-4 rounded-button font-normal hover:shadow-soft gentle-button border-2 border-azulejoTaupe/30">
              See how it works
            </button>
          </div>

          {/* Soft Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-2xl mx-auto pt-8 animate-fade-in">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-medium text-primary-700 mb-1">Databases</div>
              <div className="text-caption text-darkText/60 font-normal">Of Curated Books</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-medium text-accent-700 mb-1">Safe</div>
              <div className="text-caption text-darkText/60 font-normal">Community</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-medium text-purple-700 mb-1">Private</div>
              <div className="text-caption text-darkText/60 font-normal">By Design</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
