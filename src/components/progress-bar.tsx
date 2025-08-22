'use client'

import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { useLoading } from '@/context/loading-context'

export default function ProgressBar() {
  const pathname = usePathname()
  const { loading } = useLoading()
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // animação fluida enquanto loading=true
  useEffect(() => {
    if (!loading) return

    setProgress(0)

    intervalRef.current = setInterval(() => {
      setProgress((p) => {
        // quanto mais próximo de 95%, menor o incremento
        const increment = (95 - p) / 20 + Math.random() * 2
        return p + increment
      })
    }, 100) // interval leve, 100ms

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [loading, pathname])

  // completa suavemente
  useEffect(() => {
    if (!loading && progress > 0) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      setProgress(100)
      const timeout = setTimeout(() => setProgress(0), 300)
      return () => clearTimeout(timeout)
    }
  }, [loading])

  if (progress === 0) return null

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-50">
      <div
        className="h-full bg-blue-500 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
