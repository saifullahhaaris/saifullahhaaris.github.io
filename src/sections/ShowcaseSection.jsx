import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'; 
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    const project4Ref = useRef(null);
    const project5Ref = useRef(null);

    

    useGSAP(() => {

        const projects = [project1Ref.current, project2Ref.current, project3Ref.current, project4Ref.current, project5Ref.current];

        projects.forEach((card,index) =>{
            gsap.fromTo(
                card, 
                {y:50,opacity:0},
                {y:0,
                    opacity:1,
                    duration:1,
                    delay:0.3*(index+1),
                    scrollTrigger:{
                        trigger:card, 
                        start: 'top bottom-=100'
                    }
                }
            )
        })

        gsap.fromTo(
            sectionRef.current,
            {opacity:0},
            {opacity: 1, duration: 1.5}
        )
    }, [])
  return (
    <section id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full">
            <TitleHeader 
                    title="Personal Projects" 
                    sub="💻 Some Things I've Built" 
                    />
            <div className="showcaselayout mt-16">
                {/* {LEFT} */}
                <div className="first-project-wrapper" ref={project1Ref}>
                    <div className="image-wrapper">
                        <img src="/images/project1.png" alt="Ryde"/>
                    </div>
                    <div className="text-content">
                        <h2>
                            A full-stack web app to manage and track tickets
                        </h2>
                        <p className="text-white-50 md:text-xl mb-8">
                            Built with Java (CLI & Spring Boot), Angular, and MySQL. Includes RESTful APIs, JWT auth, role-based access, real-time updates, and a terminal-based version for offline ticket management.                        
                        </p>
                    </div>
                    <div className="image-wrapper">
                        <img src="/images/project1.png" alt="Ryde"/>
                    </div>
                    <div className="text-content">
                        <h2>
                            A full-stack web app to manage and track tickets
                        </h2>
                        <p className="text-white-50 md:text-xl">
                            An app built with React, Node.js, Express & MongoDB, featuring JWT auth, role-based access, and real-time updates via Socket.io.                        
                        </p>
                    </div>
                </div>

                {/* {RIGHT} */}
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={project2Ref}>
                        <div className="image-wrapper bg-[#ffefdb]">
                            <img src="/images/project2.png" alt="Library Management Platform"/>
                        </div>
                        <h2 className="mb-4">
                            An Android app for discovering and saving trending movies
                        </h2>
                        <p className="text-white-50 md:text-xl">
                            Built with Kotlin, Jetpack Compose & TMDB API. Features include dark/light themes and Offline caching via Room Database (SQLite) with clean UI.
                        </p>
                    </div>
                    <div className="project" ref={project3Ref}>
                        <div className="image-wrapper bg-[#ffe7eb]">
                            <img src="/images/project3.png" alt="YC Directory"/>
                        </div>
                        <h2 className="mb-4">
                           A classic Snake game built in Java
                        </h2>
                        <p className="text-white-50 md:text-xl">
                            Built using Java, swing and OOP principles. Features include keyboard controls, dynamic grid logic, score tracking, and customizable speed.                        
                        </p>
                    </div>
                    <div className="project" ref={project5Ref}>
                        <div className="image-wrapper bg-[#ffe7eb]">
                            <img src="/images/project3.png" alt="YC Directory"/>
                        </div>
                        <h2 className="mb-4">
                            An Android app for discovering and saving trending movies
                        </h2>
                        <p className="text-white-50 md:text-xl">
                            Built with Kotlin, Jetpack Compose & TMDB API. Features include dark/light themes, pagination, and offline caching using Room (backed by SQLite) with clean architecture.
                        </p>
                    </div>
                </div>
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={project4Ref}>
                        <div className="image-wrapper bg-[#ffe7eb]">
                            <img src="/images/project3.png" alt="YC Directory"/>
                        </div>
                        <h2 className="mb-4">
                           A real-time multiplayer dice battle game for Android
                        </h2>
                        <p className="text-white-50 md:text-xl">
                            Built with Kotlin, Android Studio & Firebase. Features animated dice rolls, real-time score sync, and simple matchmaking for PvP battles.                        
                        </p>
                    </div>
                    <div className="project" ref={project5Ref}>
                        <div className="image-wrapper bg-[#ffe7eb]">
                            <img src="/images/project3.png" alt="YC Directory"/>
                        </div>
                        <h2 className="mb-4">
                            An Android app for discovering and saving trending movies
                        </h2>
                        <p className="text-white-50 md:text-xl">
                            Built with Kotlin, Jetpack Compose & TMDB API. Features include dark/light themes, pagination, and offline caching using Room (backed by SQLite) with clean architecture.
                        </p>
                    </div>
                    <div className="project" ref={project5Ref}>
                        <div className="image-wrapper bg-[#ffe7eb]">
                            <img src="/images/project3.png" alt="YC Directory"/>
                        </div>
                        <h2 className="mb-4">
                            An Android app for discovering and saving trending movies
                        </h2>
                        <p className="text-white-50 md:text-xl">
                            Built with Kotlin, Jetpack Compose & TMDB API. Features include dark/light themes, pagination, and offline caching using Room (backed by SQLite) with clean architecture.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection