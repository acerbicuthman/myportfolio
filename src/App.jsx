import Navbar from "./components/Navbar/Navbar"
import Intro from "./components/intro/Intro"
import Skills from "./components/skills/Skills"
import Works from "./components/Works/Works"
import Contacts from "./components/Contacts/Contacts"
import Footer from "./components/Footer/Footer"
import { useEffect, useRef, useState } from "react"
import  './App.css'


function App() {
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState("dark")
  
  useEffect(() => {
    document.body.className = theme;
   localStorage.setItem("theme", theme)
}, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
  }
  return (
    <>
    <button onClick={toggleTheme}
    style={{position: "fixed",
    bottom: "40px",
    right: "2px",
    padding: "10px 20px",
    background: theme === "light" ? "#333" : "#fff",
    color: theme === "light" ? "#fff" : "#333",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    zIndex: "1000",
    transition: "all 0.3s ease"}}>
      {theme === 'light' ? "Switch to Dark Mode" : "Switch to light Mode"}
      
      </button>
       <Navbar theme={theme} />
       <Intro/>  
       <Skills/>
       <Works/>
       <Contacts/>
      <Footer/>
      
      
    </>
  )
}

export default App
