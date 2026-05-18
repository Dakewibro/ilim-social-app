import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import MoodWheelSection from '@/components/MoodWheelSection'
import BookCircles from '@/components/BookCircles'
import Partnerships from '@/components/Partnerships'
import Safety from '@/components/Safety'
import CTA from '@/components/CTA'
import Awards from '@/components/Awards'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MoodWheelSection />
      <Features />
      <HowItWorks />
      <BookCircles />
      <Safety />
      <Partnerships />
      <CTA />
      <Awards />
      <Footer />
    </main>
  )
}

