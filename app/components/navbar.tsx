import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-8 py-4 backdrop-blur-md bg-white/5 mx-0">
        <div className="flex items-center">
          <Link href="/" className="text-lg font-bold">
            wavv
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-white hover:underline">
            Contact Us
          </Link>
          <Link
            href="/waitlist"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full hover:opacity-90"
          >
            Join Waitlist 🍾
          </Link>
        </div>
      </nav>
    </header>
  )
}

