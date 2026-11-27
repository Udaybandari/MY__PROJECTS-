import React, { useState } from 'react'
import UseEffect from './COMPONENTS/UseEffect'
import Timer from './COMPONENTS/Timer'
import WindowResize from './COMPONENTS/WindowResize'
import LocalStorage from './COMPONENTS/LocalStorage'
import FetchUsers from './COMPONENTS/FetchUsers'
import Navbar from './COMPONENTS/Contextcomponents/Navbar'
import Profile from './COMPONENTS/Contextcomponents/Profile'
import { ThemeContext } from './COMPONENTS/Context/ThemeContext'
import Counter from './COMPONENTS/Usereducer/Counter'
import Counter2 from './COMPONENTS/Counter'

const App = () => {
   const [theme, setTheme] = useState("light");
  return (
    <div>
        <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={{
        background: theme === "light" ? "white" : "#222",
        color: theme === "light" ? "black" : "white",
        minHeight: "100vh",
        padding: "30px"
      }}>
        <Navbar />
        <Profile />
         <UseEffect/>
       <Timer/>
       <WindowResize/>
       <LocalStorage/>
       <FetchUsers/>   
       <Counter/>
       <Counter2/>
      </div>
    </ThemeContext.Provider>                 
       
    </div>
  )
}

export default App