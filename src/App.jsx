import LogoSection from "./sections/LogoSection"
import NavBar from "./components/HeroModels/NavBar"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import ExperienceSection from "./sections/ExperienceSection"
import EducationSection from "./sections/EducationSection"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import ProtectedPortfolio from './components/ProtectedPortfolio';


const App = () => {

  return (
    <>
      <NavBar/>
      <Hero/>
      <TechStack/>
      <ShowcaseSection/>
      <FeatureCards/>
      <ExperienceSection/>
      <LogoSection/>
      <EducationSection/>
      {/* <Testimonials/> */}
      <Contact/>
      <Footer/>
    </>

// enabling below code will enable password protection
    // <ProtectedPortfolio>
    //   <NavBar/>
    //   <Hero/>
    //   <TechStack/>
    //   <ShowcaseSection/>
    //   <FeatureCards/>
    //   <ExperienceSection/>
    //   <LogoSection/>
    //   <EducationSection/>
    //   {/* <Testimonials/> */}
    //   <Contact/>
    //   <Footer/>
    // </ProtectedPortfolio>
  )
}

export default App
