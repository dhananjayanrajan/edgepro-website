import { useEffect, useRef, Suspense } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { Canvas, useFrame } from '@react-three/fiber'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { heroContent } from '@/data/hero'
import { ChevronDown } from 'lucide-react'
import type * as THREE from 'three'

function AbstractMesh() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * 0.025
    meshRef.current.rotation.y += delta * 0.04
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2.8, 1]} />
      <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.035} />
    </mesh>
  )
}

export default function Hero() {
  const lineRefs = useRef<(HTMLDivElement | null)[]>([])
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 })

    tl.from(badgeRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.6,
      ease: 'power3.out',
    })

    tl.from(
      lineRefs.current.filter(Boolean),
      { y: '115%', duration: 1.15, stagger: 0.1, ease: 'power4.out' },
      '-=0.2'
    )

    tl.from(
      subtitleRef.current,
      { opacity: 0, y: 22, duration: 0.85, ease: 'power3.out' },
      '-=0.7'
    )

    tl.from(
      ctaRef.current,
      { opacity: 0, y: 18, duration: 0.7, ease: 'power3.out' },
      '-=0.55'
    )

    tl.from(scrollRef.current, { opacity: 0, duration: 0.5 }, '-=0.2')
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute right-[-5vw] top-1/2 -translate-y-1/2 w-[55vw] h-[90vh] pointer-events-none">
        <Canvas gl={{ alpha: true, antialias: true }} camera={{ position: [0, 0, 5], fov: 50 }}>
          <Suspense fallback={null}>
            <AbstractMesh />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div ref={badgeRef} className="mb-10">
          <span className="inline-block text-[10px] tracking-[0.35em] uppercase text-white/30 border border-white/[0.08] px-5 py-2">
            {heroContent.badge}
          </span>
        </div>

        <div className="mb-10">
          {heroContent.headline.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <div ref={(el) => { lineRefs.current[i] = el }}>
                <h1 className="text-[clamp(52px,9.5vw,148px)] font-bold leading-[0.92] tracking-[-0.04em] text-white">
                  {line}
                </h1>
              </div>
            </div>
          ))}
        </div>

        <p ref={subtitleRef} className="text-white/40 text-lg max-w-md leading-relaxed mb-10">
          {heroContent.subheadline}
        </p>

        <div ref={ctaRef}>
          <Link to={heroContent.cta.href}>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 text-[11px] tracking-[0.22em] uppercase font-semibold px-10 h-12 rounded-none cursor-pointer"
            >
              {heroContent.cta.label}
            </Button>
          </Link>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase">{heroContent.scrollLabel}</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={12} />
        </motion.div>
      </div>
    </section>
  )
}
