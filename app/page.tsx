import Hero from "@/components/Hero"
import Products from "@/components/Products"
import Gallery from "@/components/Gallery"
import Services from "@/components/Services"
import Impact from "@/components/Impact"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Products />
      <Gallery />
      <Services />
      <Impact />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
