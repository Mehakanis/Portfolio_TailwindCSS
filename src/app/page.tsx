import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import AboutSection from "./components/AboutSection"
export default function Home(){
  return(
    <main className="flex min-h-screen bg-[#121212]">
      <div className="container  mx-auto px-12 py-4">
      <Navbar />
      <HeroSection />
      <br></br>
      <AboutSection />
      </div>
    </main>
  )
}