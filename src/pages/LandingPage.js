import React, {useState} from 'react'
import NavBar from './../components/navbar/Navbar'
import SideBar from '../components/SideBar/sidebar'
import HeroSection from './../components/hero/hero'
import InfoSection from './../components/InfoSection/info'
import AboutUs from './../components/AboutUs/aboutus'
import {infoFour, infoOne, infoThree, infoTwo} from '../components/InfoSection/data'
import Footer from './../components/footer/footer'

const Landing = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
         <SideBar isOpen={isOpen} toggle={toggle}/>
         <NavBar toggle={toggle}/>   
         <HeroSection />
         <InfoSection {...infoOne}/>
         <InfoSection {...infoTwo} />
         <InfoSection {...infoThree} />
         <InfoSection {...infoFour} />
         <AboutUs />

         <Footer />
        </>
    )
}

export default Landing;
