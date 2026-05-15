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
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
