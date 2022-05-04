import React from "react";
import "./Works.css";

import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';

import { motion } from "framer-motion";
import {themeContext} from '../../Context'
import { useContext } from 'react';

const Works = () => {
  const transition = {duration : 3.5, type: 'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works" id="Works">
      <div className="awesome">
        <span style={{color:darkMode? 'white': ''}}>Works for</span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Porro rerum
          qui minus <br /> blanditiis similique doloremque hic accusantium iure
          in nihil.
        </span>
          <button className="button s-button">More</button>
          <div className="blur s-blur1" style={{background:"var(--purple)"}}></div>
      </div>
      {/* Right Side */}
      <div className="w-right">
          <motion.div className="w-mainCircle"
              initial={{rotate:45}}
              whileInView={{rotate:0}}
              viewport={{margin:'-40px'}}
              transition={transition}
          >
              <div className="secCircle">
                  <img src={Upwork} alt="Upwork icon" />
              </div>
              <div className="secCircle">
                  <img src={Fiverr} alt="Fiverr icon" />
              </div>
              <div className="secCircle">
                  <img src={Amazon} alt="Amazon icon" />
              </div>
              <div className="secCircle">
                  <img src={Shopify} alt="Shopify icon" />
              </div>
              <div className="secCircle">
                  <img src={Facebook} alt="Facebook icon" />
              </div>
          </motion.div>
          {/* Background Circle */}
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
