import React from 'react';
import './Experience.css';

import {themeContext} from '../../Context'
import { useContext } from 'react';

const Experience = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
      <div className="experience" id='Experience'>
          <div className="achievement">
              <div className="circle" style={{color:darkMode? 'black': ''}}>6+</div>
              <span>Months</span>
              <span>Experiences</span>
          </div>
          <div className="achievement">
              <div className="circle"style={{color:darkMode? 'black': ''}}>10+</div>
              <span>Completed</span>
              <span>Projects</span>
          </div>
          <div className="achievement">
              <div className="circle"style={{color:darkMode? 'black': ''}}>1+</div>
              <span>Companies</span>
              <span>Works</span>
          </div>
      </div>
  )
}

export default Experience