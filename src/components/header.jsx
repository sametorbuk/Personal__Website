import { useContext } from "react";
import ToggleButton from "./introduction-comp/toggle-btn";
import { ThemeContext } from "../contexts/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../Store/actions";





export default function Header(){
  const current = useSelector((state)=> state.currentLanguage)
const {isDarkMode}=useContext(ThemeContext)
const dispatch = useDispatch();
 const  onLanguageChangeHandler = ()=>{
    dispatch(setLanguage())
  }

    return(<>
    
    <header className="flex items-end flex-col gap-[3.5rem]">
<div className='flex gap-[2rem]'>
  <ToggleButton/>
<button>{`${isDarkMode ? "Light Mode " :"Dark Mode" }`}</button>
<p>|</p>
<button onClick={onLanguageChangeHandler}>{current === "tr" ? "İngilizceye geç" : "Switch to Turkish"}</button>

</div>

<div className='flex gap-[2rem]'>
  <button  >Skill</button>
  <button  >Skill</button>
  <button  >Skill</button>

</div>



  </header> 
    </>)
}