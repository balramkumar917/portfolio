import React from 'react'
import java from './assets/java.png';
import springboot from './assets/springboot.png';
import react from './assets/react.png';
import javascript from './assets/javascript.png';
import html from './assets/html.png';
import css from './assets/css.png';
import mongodb from './assets/mongodb.png';

export const Skills = () => {
  return (
    <div>
      <h1 className='skill-heading'>SKILLS</h1>
      <div className='skillset'>

        <img src={java} alt="java" />
        <img src={springboot} alt="springboot" />
        <img src={react} alt="react" />
        <img src={javascript} alt="javascript" />
        {/* <div className='skillset'> */}
          <img src={html} alt="html" />
          <img src={css} alt="css" />
          <img src={mongodb} alt="mongodb" />
        {/* </div> */}
      

      </div>

    </div>
  )
}
