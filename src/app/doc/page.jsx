import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function page() {
  return (
    <>  
      <div class="container mx-auto   py-4  text-4xl text-center">
          {/* <p>Linkedin<LinkedInIcon/> </p> */}
          {/* <LinkedInIcon/> */}
          <a href="https://www.linkedin.com/in/masum-reza-148397199/">My Linkedin </a>
          {/* <LinkedInIcon/> */}
          <p className='py-28 font-bold'>I'm using this technology</p>
        <ul>
        <b >Ui create</b>
          <ol>Reactjs</ol>
          <li>Nextjs (faster then reactjs that why i m using nextjs)</li>
          <b>For Design</b>
          <li>tailwind css</li>
          <li>Custom css</li>
        </ul>
      </div>
    </>
  )
}
