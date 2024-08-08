import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"



export default function ProjectChart(props){
    const {item}=props
 const {isDarkMode}=useContext(ThemeContext)


const {projectName , img , explanation}= item

    return(<>
    
    
    <div className="flex flex-col">

            <img className="w-[17rem]" src={img} alt="" />



            <p className={`${isDarkMode ? "text-white" : ""}  text-2xl font-bold text-indigo-800 mt-[1.5rem]`}  >{projectName}</p>


           <p className="text-[gray]">{explanation}</p>


<div className="flex gap-[0.6rem] mt-[1rem]">


<button className={` ${isDarkMode ? "btnDark" : " btn"}`}>react</button>
<button className={` ${isDarkMode ? "btnDark" : " btn"}`}>redux</button>
<button className={` ${isDarkMode ? "btnDark" : " btn"}`}>axios</button>
</div>

 
<div className="flex mt-[2rem]">
<a className="font-bold text-indigo-700" href="https://github.com/sametorbuk?tab=repositories" 
target="_blank" rel="noopener noreferrer">Github</a>
</div>



    </div>
    
    
    
    
    
    
    </>)
}