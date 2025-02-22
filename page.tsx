"use client"

import { useState } from "react"
import { Pause, Play, Volume2 } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

export default function ComposerPortfolio() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(75)

  const tracks = [
    { title: "Symphony No. 1 in D Major", duration: "12:34" },
    { title: "Piano Concerto in B Minor", duration: "8:45" },
    { title: "String Quartet No. 3", duration: "15:20" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Composer at piano"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 text-center space-y-4 p-4">
          <h1 className="text-4xl md:text-6xl font-bold">John Composer</h1>
          <p className="text-xl md:text-2xl text-gray-300">Contemporary Classical Composer</p>
        </div>
      </section>

      {/* Music Player Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Works</h2>
        <div className="space-y-4">
          {tracks.map((track, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800">
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-white/10"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying && index === 0 ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                  </Button>
                  <div>
                    <h3 className="font-medium">{track.title}</h3>
                    <p className="text-sm text-gray-400">{track.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 w-48">
                  <Volume2 className="h-4 w-4 text-gray-400" />
                  <Slider
                    value={[volume]}
                    max={100}
                    step={1}
                    onValueChange={(value) => setVolume(value[0])}
                    className="w-32"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Biography Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Biography</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/placeholder.svg?height=400&width=400"
            width={400}
            height={400}
            alt="Composer portrait"
            className="rounded-lg"
          />
          <div className="space-y-4">
            <p className="text-gray-300">
              John Composer is an award-winning contemporary classical composer whose works have been performed by
              leading orchestras around the world. His compositions blend traditional classical forms with modern
              innovative techniques.
            </p>
            <p className="text-gray-300">
              With over 20 years of experience in composition, John has created numerous symphonies, concertos, and
              chamber works that have received critical acclaim. His unique style draws inspiration from both classical
              masters and contemporary influences.
            </p>
          </div>
        </div>
      </section>

      {/* Works Grid */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Selected Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-4">
                <Image
                  src={`/placeholder.svg?height=200&width=300`}
                  width={300}
                  height={200}
                  alt={`Composition ${item}`}
                  className="rounded-lg mb-4"
                />
                <h3 className="font-medium mb-2">Opus {item}</h3>
                <p className="text-sm text-gray-400">
                  {item % 2 === 0 ? "Orchestra" : "Chamber"} • {2020 + item}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6">
            <div className="space-y-4">
              <p className="text-gray-300">For commissions, performances, or general inquiries, please contact:</p>
              <p className="text-gray-300">
                Email: <span className="text-white">contact@johncomposer.com</span>
              </p>
              <p className="text-gray-300">
                Management: <span className="text-white">Classical Artists Management</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

