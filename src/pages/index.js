import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, } from '../components/InfoSection/data';
import Plans from '../components/Plans'
import Footer from '../components/Footer';


const Home = () => {
  const [isOpen, setIsOpen] = useState (false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
     <Sidebar isOpen={isOpen} toggle={toggle} />
     <Navbar toggle={toggle} /> 
     <HeroSection />
     <InfoSection {...homeObjOne} />
     <InfoSection {...homeObjTwo} />
     <Plans />
     <Footer />
    </>
  )
}

export default Home
