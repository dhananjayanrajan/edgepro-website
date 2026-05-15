import Beams from '../components/Beams'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

export default function PublicLayout() {
  useEffect(() => {
    const lenis = new Lenis()

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#080808] relative">
      <div style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, opacity: 0.2, zIndex: 0, pointerEvents: 'none' }}>
        <Beams
          beamWidth={2}
          beamHeight={30}
          beamNumber={10}
          lightColor="#ffffff"
          speed={3}
          noiseIntensity={1.5}
          scale={0.1}
          rotation={0}
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}