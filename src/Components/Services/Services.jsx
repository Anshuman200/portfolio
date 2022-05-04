import React from "react";
import "./Services.css";
import { motion } from "framer-motion";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from '../../Components/Services/Resume.pdf'

import {themeContext} from '../../Context'
import { useContext } from 'react';

const Services = () => {
  
  const transition = {duration : 1, type: 'spring'}  

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* Left Side */}
      <div className="awesome">
        <span style={{color:darkMode? 'white': ''}}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro rerum
          qui minus <br /> blanditiis similique doloremque hic accusantium iure in
          nihil.
        </span>
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
      </div>
      <div className="blur s-blur1" style={{background:"var(--purple)"}}></div>
      {/* Right Side */}
      {/* First Card */}
      <div className="cards">
          <motion.div
          initial={{left:'25rem'}}
          whileInView={{left:'14rem'}}
          transition={transition}
           style={{left:'14rem'}}>
              <Card
                emoji={HeartEmoji}
                heading={'Design'}
                detail={'Figma, Sketch, Photoshop'}
              />
          </motion.div>
          {/* Second Card */}
          <motion.div
          initial={{left:'25rem'}}
          whileInView={{left:'-4rem'}}
          transition={transition}
           style={{left:'-4rem', top:'12rem'}}>
              <Card
                emoji={Glasses}
                heading={'Developer'}
                detail={'MERN, HTML, CSS'}
              />
          </motion.div>
          {/* Third Card */}
          <motion.div
          initial={{left:'25rem'}}
          whileInView={{left:'12rem'}}
          transition={transition}
           style={{left:'12rem', top:'17rem'}}>
              <Card
                emoji={Humble}
                heading={'UI/UX'}
                detail={`Best In MERN & Next.js`}
              />
          </motion.div>
          <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
      </div>
    </div>
  );
};

export default Services;
