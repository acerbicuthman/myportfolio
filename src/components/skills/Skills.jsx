import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
   <section  id='skills'>
    <span className='skillTitle'>
        What i do
    </span>
    <span className='skillDesc'> I am a skilled and passionate web designer with experience in creating visually appealing and user friendly websites. I have a strong understanding of design and a keen eye for details. I am proficient in HTML, CSS, and Javascript, as well as React and AOS
    . Here’s a snapshot of what I do:</span>
   <div className="skillBars">
        <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>UI/UX Design</h2>
               <p> I create interactive user interface elements such as navigation menus, buttons, forms, and sliders. My goal is to make every interaction accessible, easy to use, and aesthetically pleasing.
</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>WebDesign</h2>
                <p> I make sure my websites are completely responsive so that users can have a consistent and interesting experience on all platforms, including computers and smartphones. I make advantage of contemporary responsive design strategies like flexible grids and media queries.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Enhancing Cross-Browser Compatibility and Performance</h2>
                <p>
I make sure my websites work flawlessly on all of the main browsers (Chrome, Firefox, Safari, and Edge) and smartphones. I also guarantee quick load times and seamless operation on all devices and browsers by optimising performance using methods like image compression, minification, and lazy loading.</p>
            </div>
        </div>
   </div>
   </section>
  )
}

export default Skills
