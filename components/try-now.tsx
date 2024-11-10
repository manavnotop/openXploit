'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function TryNowPage() {
  const [repoLink, setRepoLink] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle the submission here
    console.log('Submitted repo link:', repoLink)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full p-2 w-1/3 h-14 flex justify-between items-center z-10">
        <div className="text-xl font-extrabold px-3">openXploit</div>
        <div className="flex space-x-2">
          <Button variant="ghost" className="text-sm font-bold px-2 py-1 h-auto hover:bg-white/20">
            Sign Up
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-4">
        <h1 className="text-3xl font-bold mb-8">Try openXploit Now</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="repo-link" className="block mb-2">
              Enter your GitHub repository link:
            </label>
            <Input
              id="repo-link"
              type="url"
              placeholder="https://github.com/username/repository"
              value={repoLink}
              onChange={(e) => setRepoLink(e.target.value)}
              className="w-full bg-white/10 text-white border-white/20 focus:border-white"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200">
            Try Now
          </Button>
        </form>
      </main>
    </div>
  )
}