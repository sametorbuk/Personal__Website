import { useContext } from "react";
import ToggleButton from "./introduction-comp/toggle-btn";
import { ThemeContext } from "../contexts/ThemeContext";





export default function Header(){

  const {isDarkMode}=useContext(ThemeContext)


    return(<>
    
    <header className="flex items-end flex-col gap-[3.5rem]">
<div className='flex gap-[2rem]'>
  <ToggleButton/>
<button>{`${isDarkMode ? "Light Mode " :"Dark Mode" }`}</button>
<p>|</p>
<button >Türkçeye geç</button>

</div>

<div className='flex gap-[2rem]'>
  <button  >Skill</button>
  <button  >Skill</button>
  <button  >Skill</button>

</div>



  </header> 
    </>)
}