import { createContext,  useState } from 'react';


const ThemeContextProvider =({children})=>{

 const [isDarkMode , setIsDarkMode]=useState(false)


 const saveTheme = isDarkMode ? "DARK" : "LIGHT"
localStorage.setItem("theme" , JSON.stringify(saveTheme))
   
 const toggleTheme =()=>{
    setIsDarkMode(!isDarkMode)
    localStorage.setItem("theme" , JSON.stringify(saveTheme))
 }


 return(
<ThemeContext.Provider value={{isDarkMode , toggleTheme}}>

{children}

</ThemeContext.Provider>
 )


}
export const ThemeContext = createContext()
export default ThemeContextProvider