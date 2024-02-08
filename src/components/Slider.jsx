import { useState } from 'react'

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((currentIndex + 1) % slides.length)
  }

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)
  }
  return (
    <div className="relative w-screen h-screen">
      <img src={slides[currentIndex]?.src} alt="imagen" decoding="async" className="w-full h-full object-cover" />
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full p-1 border-0 ms-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-20 w-20 opacity-30"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full p-1 border-0 me-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-20 w-20 opacity-30"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default Slider
