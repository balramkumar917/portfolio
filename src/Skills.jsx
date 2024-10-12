import React from 'react'
import java from './assets/java.png';
import springboot from './assets/springboot.png';
import react from './assets/react.png';
import javascript from './assets/javascript.png';
import html from './assets/html.png';
import css from './assets/css.png';
import mongodb from './assets/mongodb.png';
import mysql from './assets/mysql.png'

export const Skills = () => {
  return (
    <section id='skills'>
      <h1 className='skill-heading'>SKILLS</h1>
      <div className='skillset'>

        <img src={java} alt="java" />
        <img src={springboot} alt="springboot" />
        <img src={react} alt="react" />
        <img src={javascript} alt="javascript" />
         <img src={html} alt="html" />
         <img src={css} alt="css" />
         <img src={mongodb} alt="mongodb" />
         <img src={mysql} alt="mysql" />
        
      

      </div>

    </section>
  )
}
