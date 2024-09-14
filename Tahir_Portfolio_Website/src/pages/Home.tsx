import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaPinterestP, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import the icons
import { useNavigate } from 'react-router-dom';
import mypic from '../assets/mypic.png';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="character"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <>
      <div className="GreyContainer">
        <div className="picContainer">
          <img className="myPic" src={mypic} alt="My Profile" />
        </div>
        <div className="headerContainer">
          <div className="LeftContainer">
            <span className="intro">I'm</span>
            <div className="name">{splitText("Muhammad Tahir Sundhu")}</div>
            <span className="underline"></span>
            <span className="description">
              A passionate freelancer with over 2 years of experience in digital programming and design content. I craft top-notch solutions to elevate your business and enhance your digital presence. From innovative web development to striking designs and strategic digital solutions, I’ve got you covered. Explore my portfolio to see how I can help achieve your goals and bring your vision to life!
            </span>
          </div>
          <div className="RightContainer">
            <span className="servicesHeader">Services</span>
            <span className="servicesDescription">
              Let's build quality products in programming and design with my services.
            </span>
            <span onClick={() => handleNavigation("/testimonials")} className="showMore">
              {splitText("Show more")} <FaArrowRight className="arrowIcon" />
            </span>
            <div className="SocialIcons">
              <a href="https://www.pinterest.com/yourprofile" target="_blank" rel="noopener noreferrer" className='SocialIcon'>
                <FaPinterestP />
              </a>
              <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className='SocialIcon'>
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className='SocialIcon'>
                <FaInstagram />
              </a>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className='SocialIcon'>
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
