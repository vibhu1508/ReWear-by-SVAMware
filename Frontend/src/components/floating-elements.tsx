"use client"

import { useEffect, useState } from "react"

export function FloatingLeaves() {
  const [leaves, setLeaves] = useState<Array<{ id: number; x: number; y: number; rotation: number; delay: number }>>([])

  useEffect(() => {
    const newLeaves = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      delay: Math.random() * 5,
    }))
    setLeaves(newLeaves)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute w-4 h-4 text-green-400/20 animate-pulse"
          style={{
            left: `${leaf.x}%`,
            top: `${leaf.y}%`,
            transform: `rotate(${leaf.rotation}deg)`,
            animationDelay: `${leaf.delay}s`,
          }}
        >
          🍃
        </div>
      ))}
    </div>
  )
}
