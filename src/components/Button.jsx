import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {

 const [theme,setTheme] =  useContext(ThemeDataContext)
const ChangeTheme = () => {
  setTheme(theme === 'light' ? 'dark' : 'light')  
}
  return (
    <div>
     <button onClick={ChangeTheme}>Change Theme</button>
    </div>
  )
}

export default Button
