import { Metadata } from 'next'
import WaitlistForm from './waitlist-form'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Join the Waitlist - Wavv',
  description: 'Be the first to experience the future of nightlife',
}

export default function WaitlistPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative px-4">
      {/* Back button */}
      <Link
        href="/"
        className="absolute top-8 left-8 text-white/60 hover:text-white flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      {/* Star background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%)',
            backgroundSize: '4px 4px',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-md mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">wavv</h1>
        </div>

        {/* System name */}
        <div className="mb-6 text-sm tracking-wider text-zinc-500 uppercase">
          The Future of Nightlife
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-8">
          Join the{' '}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Waitlist
          </span>
        </h2>

        {/* Form */}
        <WaitlistForm />

        {/* Footer */}
        <div className="mt-16 text-sm text-zinc-500">
          <p>Wavv is launching July 31st.</p>
          <p className="mt-2">
            Follow us on{' '}
            <a
              href="https://instagram.com/wavv.app"
              className="text-zinc-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            {' '}for updates.
          </p>
        </div>
      </div>
    </main>
  )
}

