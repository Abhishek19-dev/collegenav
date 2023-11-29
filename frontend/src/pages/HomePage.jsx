 import React, { useEffect } from 'react'; 
import FirstSection from '../features/1stSection.jsx';
import AboutUsSection from '../features/AboutUsSection.jsx';
import Contact from '../features/ContactUs.jsx';
import Navbar from '../features/Nav.jsx';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
 
 const HomePage = () =>{
    const {loading , user:LoggedInUser , isLoggedIn} = useSelector((state)=> state.loginUser)
    const navigate = useNavigate()
    useEffect(()=>{
        if(!isLoggedIn)
        {
            navigate('\login')
        }
    })
return (

    <>
    <Navbar />
    <FirstSection />
    <AboutUsSection />
    <Contact />
    </>
)
};
 
export default HomePage