import React from 'react'
import { Education } from './Education'

export const Header = ( props) => {
  // const handleClickScroll = () => {
  //   const element = document.getElementById('education');
    
  //   if (element) {
  //     // 👇 Will scroll smoothly to the top of the next section
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
    
  // };
  const home=()=> {document.getElementById('home')
  .scrollIntoView({behavior: 'smooth'})};

  const skills=()=> {document.getElementById('skills')
    .scrollIntoView({behavior: 'smooth'})};

    const projects=()=> {document.getElementById('projects')
      .scrollIntoView({behavior: 'smooth'})};

      const education=()=> {document.getElementById('education')
        .scrollIntoView({behavior: 'smooth'})};

  
  


  return (
    <div className='header'>
        <button onClick={home}>HOME</button>
        <button onClick={skills}>SKILLS</button>
       <button onClick={projects}> PROJECTS</button>
        <button onClick={education}>EDUCATION</button>
        {/* <button onClick={clickMe}>EDUCATION</button> */}
    </div>
  )
}
