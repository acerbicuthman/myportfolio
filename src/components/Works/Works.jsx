import React from 'react'
import './works.css'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'
import FusionFlix from '../../assets/fusionflix.png'
import TourSmart from '../../assets/travelsamrt.png'
import BoxFarm from '../../assets/box-farm-gree.png'
import Lmslogo from '../../assets/lmslogo.png'


const Works = () => {
  return (
    <section id='works'>
        <h2 className="WorksTitle">My Portfolio</h2>
        <span className='worksDesc'>i take pride in paying attention to the smallest details and making sure my work is pixel perfect, i am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.   </span>
        <div className="worksImgs">
          <a href="https://movieapp-brown.vercel.app" target="_blank" rel="noopener noreferrer">
          <img src={FusionFlix} alt="" className="worksImg" />
          </a>
            
            <a href="https://travelsmart-nu.vercel.app" target="_blank" rel="noopener noreferrer">

            <img src={TourSmart} alt="" className="worksImg" />
            </a>
            <a href="https://courseflix.vercel.app/" target="_blank" rel="noopener noreferrer">
           <img src={Lmslogo} alt="" className="worksImg" />
           </a>
           <a href="https://farmmart-current.vercel.app" target="_blank" rel="noopener noreferrer">
           <img src={BoxFarm} alt="" className="worksImg" />
           </a>
           
            {/* <img src={Portfolio4} alt="" className="worksImg" /> */}
            <img src={Portfolio5} alt="" className="worksImg" />
            <img src={Portfolio6} alt="" className="worksImg" />
        </div>
        <button className="works">See More</button>
    </section>
  )
}

export default Works
