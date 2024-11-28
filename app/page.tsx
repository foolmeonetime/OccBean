'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

export default function Home() {
  const [glitchActive, setGlitchActive] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 1200)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 bg-black overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 text-white">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${glitchActive ? 'animate-glitch-text' : ''}`}>
          Gahdammit Bobby!
        </h1>
        <p className="max-w-md text-xl text-center mb-8">
           Fill your bean bag
        </p>
        <Button 
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg
            transform hover:scale-105 transition-transform duration-200"
          onClick={() => setGlitchActive(true)}
        >
          Enter
        </Button>
      </main>

      <style jsx global>{`
        @keyframes glitch {
          0%, 100% {
            transform: translate(-50%, 0);
          }
          20% {
            transform: translate(calc(-50% - 2px), 2px);
          }
          40% {
            transform: translate(calc(-50% - 2px), -2px);
          }
          60% {
            transform: translate(calc(-50% + 2px), 2px);
          }
          80% {
            transform: translate(calc(-50% + 2px), -2px);
          }
        }

        @keyframes glitch-text {
          0% {
            text-shadow: none;
          }
          20% {
            text-shadow: 2px 2px #ff00ff, -2px -2px #00ffff;
          }
          40% {
            text-shadow: -2px 2px #ff00ff, 2px -2px #00ffff;
          }
          60% {
            text-shadow: 2px -2px #ff00ff, -2px 2px #00ffff;
          }
          80% {
            text-shadow: -2px -2px #ff00ff, 2px 2px #00ffff;
          }
          100% {
            text-shadow: none;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-glitch {
          animation: glitch 0.2s linear infinite;
        }

        .animate-glitch-text {
          animation: glitch-text 0.2s linear infinite;
        }

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background-color: white;
          border-radius: 50%;
          animation: twinkle 5s infinite;
        }
      `}</style>
    </div>
  )
}