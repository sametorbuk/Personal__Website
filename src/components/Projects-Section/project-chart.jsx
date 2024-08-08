import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"



export default function ProjectChart(){
 const {isDarkMode}=useContext(ThemeContext)


    return(<>
    
    
    <div className="flex flex-col">

            <img className="w-[17rem]" src="https://images.ctfassets.net/lzny33ho1g45/5VGvMMdX169JCk60IJCRDA/358a2d3f62c6028d978efc382cb83ad5/image10.png?w=1400" alt="" />



            <p className={`${isDarkMode ? "text-white" : ""}  text-2xl font-bold text-indigo-800 mt-[1.5rem]`}  >Profile</p>


           <p className="text-[gray]">A simple, customizable, minimal setup cookie plugin 
            that allows your users to select which cookies to accept or
             decline. This was created with vanilla JS, SCSS and Parcel 
             Bundler and is available as a NPM package and the git repository
              makes any type of customization to code and themes possible.</p>


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