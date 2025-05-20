import React from 'react'
import { words } from '../constants/index.js'
import Button from '../components/Button.jsx'
import HeroExperience from '../components/HeroModels/HeroExperience.jsx'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import AnnimatedCounter from '../components/AnnimatedCounter.jsx'

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo('.hero-text h1',{y:50,opacity:0},{y:0,opacity:1,stagger:0.2,duration:1,ease:'power2.inOut'})
  })
    return (
        <section id="hero" className="relative overflow-hidden">
  {/* Background image */}
  <div className="absolute top-0 left-0 z-10">
    <img src="/images/bg.png" alt="background"/>
  </div>

  {/* Main content container */}
  <div className="flex flex-col lg:flex-row min-h-screen w-full">
    {/* Left: Text content - takes full width on mobile, half on desktop */}
    <header className="flex-1 flex flex-col justify-center p-5 md:p-20 lg:w-1/2">
      <div className="flex flex-col gap-7 max-w-3xl">
        {/* Your existing hero text content */}
        <div className="hero-text">
          <h1>
            Shaping 
            <span className="slide">
              <span className="wrapper">
                {words.map((word) =>(
                    <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                      <img 
                        src={word.imgPath}
                        alt={word.text}
                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />

                    <span>
                      {word.text}
                    </span>
                   </span>
                ))}
              </span>
            </span>
          </h1>
          <h1>into Real Projects</h1>
          <h1>that Deliver Results</h1>
        </div>

        {/* About text - remove all <br> tags */}
        <p className="text-4xl font-bold text-blue-400">
          Hi, I'm <span className="text-violet-500">Saifullah Haaris</span>
        </p>
        <p className="text-white-50 md:text-xl relative z-10">
          A passionate Software Engineering undergraduate at the University of Westminster (IIT Campus, Sri Lanka). I bring hands-on experience from internships in mobile app development, full-stack projects, and software integration, where I've built scalable, efficient, and user-focused solutions.
        </p>
        <p className="text-white-50 md:text-xl relative z-10">
          I enjoy working with technologies like Java, Flutter, and the MERN and MEAN stacks, gaining practical insights into both front-end and back-end systems.
        </p>
        <p className="text-white-50 md:text-xl relative z-10">
          I'm committed to writing clean, maintainable code and constantly expanding my skill set with new tools and frameworks.
        </p>
        <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text="See my Work"/>
      </div>
    </header>

    {/* Right: 3D Model - full width on mobile, half on desktop */}
    {/* <div className="w-full max-w-2xl aspect-square">
        <img src="/images/profile-photo.jpg" alt="background"/>
    </div> */}
    <figure className="flex-1 lg:w-1/2 flex items-center justify-center p-5 lg:p-10">
      <div className="w-full max-w-2xl aspect-square">
        <HeroExperience/>
      </div>
    </figure>
  </div>

  <AnnimatedCounter/>
</section>
//     <section id="hero" className="relative overflow-hidden">
//         <div className="absolute top-0 left-0 z-10">
//             <img src="/images/bg.png" alt="background"/>
//         </div>

//         <div className="hero-layout">
//             {/*LEFT: HERO CONTENT*/}
//             <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
//                 <div className="flex flex-col gap-7">
//                     <div className="hero-text">
//                         <h1>
//                             Shaping 
//                             <span className="slide">
//                                 <span className="wrapper">
//                                     {words.map((word) =>(
//                                         <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
//                                             <img 
//                                             src={word.imgPath}
//                                             alt={word.text}
//                                             className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
//                                             />

//                                             <span>
//                                                 {word.text}
//                                             </span>
//                                         </span>
//                                     ))}
//                                 </span>
//                             </span>
//                         </h1>
//                         <h1>into Real Projects</h1>
//                         <h1>that Deliver Results</h1>
//                     </div>
// <p className="text-xl font-bold text-blue-300">
//   Hi, I'm <span className="text-violet-500">Saifullah Haaris</span>
// </p>
//                     <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
//   A passionate Software Engineering undergraduate at the University  <br /> of Westminster (IIT Campus, Sri Lanka).
//   I bring hands-on experience  <br /> from internships in mobile app development, full-stack projects, and software <br /> integration, where I’ve built scalable, efficient, and user-focused solutions. <br /> <br />
//   I enjoy working with technologies like Java, Flutter, and the MERN and MEAN stacks, <br /> gaining practical insights into both front-end and back-end systems. <br /> <br />
//   I'm committed to writing clean, maintainable code and constantly expanding my skill set with new tools and frameworks. <br />
//   I thrive in collaborative environments, love solving real-world problems through code, and continuously look for opportunities <br /> to grow and keep up with modern development practices.
// </p>
//                     {/* <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
// Hi, I'm Saifullah Haaris — a passionate Software Engineering undergraduate at the University of Westminster (IIT Campus, Sri Lanka). I bring hands-on experience from internships in mobile app development, full-stack projects, and software integration, where I’ve built scalable, efficient, and user-focused solutions.
// I enjoy working with technologies like Java, Flutter, and the MERN and MEAN stacks, gaining practical insights into both front-end and back-end systems. I'm committed to writing clean, maintainable code and constantly expanding my skill set with new tools and frameworks.
// I thrive in collaborative environments, love solving real-world problems through code, and continuously look for opportunities to grow and keep up with modern development practices.
//                     </p> */}
//                     <Button className="md:w-80 md:h-16 w-60 h-12"
//                     id="button"
//                     text="See my Work"/>
//                 </div>
//             </header>
                
//             {/*RIGHT: 3D MODEL*/}
//             <figure>
//                 <div className="hero-3d-layout">
//                     <HeroExperience/>
//                 </div>
//             </figure>
//         </div>
//         <AnnimatedCounter/>
//     </section>
  )
}

export default Hero