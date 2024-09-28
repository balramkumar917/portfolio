import React from 'react'

export const Project = () => {
  return (
    <section id='projects'>
    <div>
        <h1 className='project-heading'>PROJECTS</h1>
    </div>
    <div className='project'>
        <h3>Portfolio</h3>
        <p>
          Languages Used : JavaScript, HTML, CSS<br/>
            Framework used : Vite + React<br />
            Code editor : VS Code 
        </p>
        <div className='project-link'>
          <a href="https://github.com/balramkumar917/portfolio">Github Link</a>
        </div>
    </div>
    <div className='project'>
        <h3>Online Attendance System</h3>
        <p>Languages : HTML, CSS, Javascript, PHP, Xampp, VS Code.<br/>
            Databases : MySQL<br/>
            Code editor : VS Code</p>
    </div>
    <div className='project'>
        <h3>Pocket Certificate Using Double Encryption</h3>
        <p>Languages Used : Python<br/>
            Framework used : Kivy Framework <br />
            Security : AES DES Encryption <br />
            Code editor : VS Code <br />
            Database : MySQL</p>
    </div>
    

    </section>
  )
}
