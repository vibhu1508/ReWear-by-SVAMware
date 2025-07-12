"use client"

export function LeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22.45C8.66 16.7 11.14 12.07 17 8Z" fill="currentColor" />
      <path
        d="M3.95 9.7C8.95 8.7 15.64 8.7 21.05 9.7C21.05 6.7 19.85 4.05 17.85 2.05C15.85 0.05 13.2 -1.15 10.2 -1.15C7.2 -1.15 4.55 0.05 2.55 2.05C0.55 4.05 -0.65 6.7 -0.65 9.7H3.95Z"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  )
}

export function TreeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L8 8H10V14H14V8H16L12 2Z" fill="currentColor" />
      <path d="M8 14L6 18H10V22H14V18H18L16 14H8Z" fill="currentColor" opacity="0.7" />
    </svg>
  )
}

export function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
