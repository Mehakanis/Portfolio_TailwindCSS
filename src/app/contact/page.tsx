
import Navbar from "../components/Navbar"
import EmailSection from "../components/EmailSection"
import Footer from "../components/Footer"

export default function Contact(){
    return(
      <main className="flex min-h-screen bg-[#121212]">
        <div className="container  mx-auto px-12 py-4">
        <Navbar />
        <EmailSection /> 
       <Footer />
      </div>
    </main>
  )
}  