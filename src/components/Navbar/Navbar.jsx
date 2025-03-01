import React, {useState} from 'react'
import "./navbar.css"
import logo from '../../assets/robotblue.png'
import {Link} from 'react-scroll'
import comtactImage from '../../assets/contact.png'
import Menu from '../../assets/menu.png'

const Navbar = ({theme}) => {
    const [showMenu, setShowMenu] = useState(false)
    
  return (
   <nav  className={`navbar ${theme === "dark" ? "navbar-dark" : "navbar-light"}`}
   style={{
     backgroundColor: theme === "dark" ? "#333" : "#fff",
     color: theme === "dark" ? "#fff" : "#333",
   }}>

    <a href="/"><img src={logo} alt="" className='logo'/></a>
    
    <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Clients</Link>


    </div>
    <button className="desktopMenuBtn" onClick={() => {
        document.getElementById("contactPage").scrollIntoView({behavior: "smooth"})
        }}>
        <img src={comtactImage} alt="" className="desktopMenuImg" />Contact Me 
    </button>

    <img src={Menu} alt="menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
    <div className='navMenu' style={{display: showMenu? 'flex': 'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Clients</Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Contacts</Link>

    </div>
   </nav>
  )
}

export default Navbar
