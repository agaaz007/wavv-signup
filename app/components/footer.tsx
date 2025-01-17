export default function Footer() {
  return (
    <footer className="py-10 bg-[#0F0E17] text-gray-400">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h1 className="text-lg font-bold text-white">wavv</h1>
          <p className="mt-2">© 2025 Wavv. All rights reserved.</p>
        </div>
        <div className="text-center">
          <p>
            Phone:{' '}
            <a href="tel:+919752542742" className="text-white">
              +91 9752542742
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

