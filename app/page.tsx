'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/navbar'
import Footer from './components/footer'

export default function Home() {
  useEffect(() => {
    const words = ["Party", "DJ Night", "Event", "Saturday", "Friday Night"]
    const animatedText = document.getElementById("animated-text")
    let index = 0

    function displayNextWord() {
      if (animatedText) {
        animatedText.textContent = words[index]
        animatedText.classList.remove("fade-in")
        void animatedText.offsetWidth // Trigger reflow
        animatedText.classList.add("fade-in")
        index = (index + 1) % words.length
      }
    }

    const interval = setInterval(displayNextWord, 1500)
    displayNextWord()

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    })

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Navbar />
      
      <main className="container mt-40">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-start max-w-2xl">
            <h1 className="text-7xl font-extrabold mb-6 leading-tight">
              Never Miss<br />
              <span>Another</span><br />
              <span
                id="animated-text"
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500"
              ></span>
            </h1>
            <p className="text-gray-400 text-2xl mb-6">
              Explore the hottest events and clubs in your city and see the exciting plans your friends are buzzing about.
            </p>
            <a
              href="https://instagram.com/wavv.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-10 w-[250px] rounded-md hover:opacity-90 text-center"
            >
              Visit Our Instagram
            </a>
          </div>
          <div>
            <Image
              src="/bp.png"
              alt="Decorative Graphic"
              width={500}
              height={500}
              className="opacity-90"
            />
          </div>
        </div>
      </main>

      {/* About Us Section */}
      <section className="container py-40">
        <div className="flex flex-col md:flex-row items-start">
          <div className="flex-1">
            <h2 className="text-5xl font-extrabold mb-6 text-left">
              Who We Are
            </h2>
            <p className="text-xl text-gray-400 mb-6 leading-relaxed text-left">
              Wavv is India's first social networking platform designed exclusively for nightlife enthusiasts and clubs. 
              We connect Gen-Z and Millennials to curated clubbing experiences while empowering venues with real-time data and insights. 
              We're more than a ticketing platform—we're redefining how you experience nightlife.
            </p>
          </div>
          <div className="flex-1 flex justify-end">
            <Image
              src="/cherry-drink-rafiki.png"
              alt="About Us"
              width={400}
              height={400}
              className="rounded-lg shadow-lg opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 features-gradient">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-extrabold text-white">
            Powerful Features, Easy Events
          </h2>
        </div>
        <div className="space-y-20 max-w-full px-8">
          {/* Feature cards */}
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center justify-center fade-in md:space-x-10">
              <div className="flex-1 text-left max-w-md">
                <h3 className="text-4xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-white text-xl">{feature.description}</p>
              </div>
              <div className="flex-1 max-w-md">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg bg-[#0F0E17] p-4"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Launch Section */}
      <section className="container py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <Image
              src="/launch.jpeg"
              alt="Launching Soon"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="flex-1 text-left pl-10">
            <h2 className="text-6xl font-extrabold mb-6">Launching Soon</h2>
            <p className="text-xl text-gray-400 mb-6 leading-relaxed">
              It's not here yet, but we'll let you in on a secret. It's coming really, really soon. 
              So sit tight and check back on July 31. You just might see something that will blow your socks off!
            </p>
            <p className="text-gray-400 text-lg">
              Really excited to get in touch with us? Follow us at <strong>@wavv.app</strong> on Instagram for updates and news.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

const features = [
  {
    title: "Spark Your Social Presence",
    description: "Drive awareness for your events and offers on Instagram, turning casual scrollers into loyal fans.",
    image: "/Marketing-rafiki.png"
  },
  {
    title: "People First, Profits Follow",
    description: "With our feedback feature, you can review and empower staff, ensuring every visit becomes a memorable experience.",
    image: "/Social-media-pana.png"
  },
  {
    title: "Serve the Right Crowd, See Real Returns",
    description: "Don't waste energy on the wrong audience—focus on guests who truly value your offerings and boost your bottom line.",
    image: "/International-Beer-Day-bro.png"
  },
  {
    title: "Empower, Engage, Elevate",
    description: "We specialize in connecting you with clubs and young adults, ensuring your message resonates with the 18–25 demographic.",
    image: "/Bachelor-party-amico.png"
  }
]

