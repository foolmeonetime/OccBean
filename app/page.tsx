'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import CountdownTimer from '@/components/CountdownTimer'
import { Twitter, Send } from 'lucide-react'

export default function Home() {
  const [glitchActive, setGlitchActive] = useState(false)
  const [showSecret, setShowSecret] = useState(false)

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

      <CountdownTimer />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 text-white">
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${glitchActive ? 'animate-glitch-text' : ''}`}>
          Gahdammit Bobby!
        </h1>
        <p className="max-w-md text-xl text-center mb-8">
           Fill your bean bag
        </p>
        <Button 
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg
            transform hover:scale-105 transition-transform duration-200 mb-4"
          onClick={() => setGlitchActive(true)}
        >
          Enter
        </Button>
        <Button
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg
            transform hover:scale-105 transition-transform duration-200"
          onClick={() => setShowSecret(!showSecret)}
        >
          Secret Sauce
        </Button>
        {showSecret && (
          <p className="mt-4 text-xl font-bold animate-fade-in-down">
            6.) two
          </p>
        )}
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-20 p-4 bg-black/80 backdrop-blur">
        <div className="max-w-screen-xl mx-auto flex justify-center items-center gap-6">
          <a
            href="https://x.com/thebeantin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-colors duration-200"
            aria-label="Follow us on X (Twitter)"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="https://t.me/+kkDjztuYCeZiZjYx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-colors duration-200"
            aria-label="Join our Telegram group"
          >
            <Send className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </div>
  )
}

