import React from 'react'
import img from "./assets/profile.png";


export const Homepage = () => {
  return (
    <section id='home'>
    <div className='homepage'>
        <h1>
          Balram  Kannaujiya
        <p> Highly-motivated employee with desire to take on new challenges.
          Strong work ethic, adaptability, and exceptional interpersonal skills.
          Adept at working effectively unsupervised and quickly mastering</p>
        </h1>
       
        <img className='profile' src={img} alt="image" />
        
    </div>
    <div className='heading'>
      <h1>FULL STACK </h1>
      <h1>&nbsp;DEVELOPER</h1>
    </div>

    </section>
  )
}
