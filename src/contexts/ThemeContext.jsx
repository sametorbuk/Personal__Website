import { createContext,  useState } from 'react';


const ThemeContextProvider =({children})=>{

 const [isDarkMode , setIsDarkMode]=useState(false)

   
 const toggleTheme =()=>{
    setIsDarkMode(!isDarkMode)
 }


 return(
<ThemeContextProvider value={{isDarkMode , toggleTheme}}>

{children}

</ThemeContextProvider>
 )


}
export const ThemeContext = createContext()
export default ThemeContextProvider