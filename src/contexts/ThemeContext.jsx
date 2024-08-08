import { createContext,  useState } from 'react';


const ThemeContextProvider =({children})=>{

 const [isDarkMode , setIsDarkMode]=useState(false)

   
 const toggleTheme =()=>{
    setIsDarkMode(!isDarkMode)
 }


 return(
<ThemeContext.Provider value={{isDarkMode , toggleTheme}}>

{children}

</ThemeContext.Provider>
 )


}
export const ThemeContext = createContext()
export default ThemeContextProvider