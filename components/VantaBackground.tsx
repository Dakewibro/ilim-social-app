'use client'

import { useEffect, useRef } from 'react'

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffect = useRef<any>(null)

  useEffect(() => {
    let cancelled = false
    let threeScript: HTMLScriptElement | null = null
    let vantaScript: HTMLScriptElement | null = null

    if (!vantaEffect.current && vantaRef.current) {
      const loadVanta = async () => {
        threeScript = document.createElement('script')
        threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'
        document.head.appendChild(threeScript)

        await new Promise((resolve) => {
          threeScript.onload = resolve
        })

        if (cancelled) return

        vantaScript = document.createElement('script')
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js'
        document.head.appendChild(vantaScript)

        await new Promise((resolve) => {
          vantaScript.onload = resolve
        })

        if (!cancelled && window.VANTA && vantaRef.current) {
          const isMobile = window.innerWidth < 768

          vantaEffect.current = window.VANTA.BIRDS({
            el: vantaRef.current,
            mouseControls: !isMobile,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 0.7,
            backgroundColor: 0xF8E5D3,
            color1: 0xFF4B00,
            color2: 0xC83D3D,
            colorMode: 'varianceGradient',
            backgroundAlpha: 1,
            birdSize: isMobile ? 0.4 : 0.6,
            quantity: isMobile ? 2.0 : 3.0,
            wingSpan: isMobile ? 14.00 : 18.00,
            speedLimit: isMobile ? 0.5 : 0.9,
            separation: 20.00,
            alignment: 4.00,
            cohesion: 51.00,
          })
        }
      }

      loadVanta()
    }

    return () => {
      cancelled = true

      if (vantaEffect.current) {
        vantaEffect.current.destroy()
      }

      if (vantaScript?.parentNode) {
        vantaScript.parentNode.removeChild(vantaScript)
      }

      if (threeScript?.parentNode) {
        threeScript.parentNode.removeChild(threeScript)
      }
    }
  }, [])

  return (
    <div 
      ref={vantaRef} 
      className="absolute inset-0 opacity-60"
      style={{ zIndex: 0 }}
    />
  )
}

// TypeScript declaration for window.VANTA
declare global {
  interface Window {
    VANTA: any
  }
}
