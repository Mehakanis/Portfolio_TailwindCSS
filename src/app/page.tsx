import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
//import AboutSection from "./components/AboutSection"
//import ProjectsSection from "./components/ProjectSection"
//import EmailSection from "./components/EmailSection"
import Footer from "./components/Footer"
import AchievementsSection from "./components/AchievementSection"
export default function Home(){
  return(
    <main className="flex min-h-screen bg-[#121212]">
      <div className="container  mx-auto px-12 py-4">
      <Navbar />
      <HeroSection />
      <AchievementsSection />
      <br></br>
    
       {/* <AboutSection /> 
       </div>
       <ProjectsSection />
       <EmailSection /> */}
       <Footer />
      </div>
    </main>
  )
}