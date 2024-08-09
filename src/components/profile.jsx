import { useContext, useEffect } from "react";
import { initialData } from "../data/data";
import useAxios from "../hooks/useAxios";

import { useChangeLanguages } from "../hooks/useChangeLanguages";
import { ThemeContext } from "../contexts/ThemeContext";




export default function ProfileSection(){

   const {data , MakeRequest , METHODS }=useAxios({initialData});
   const [datas]=useChangeLanguages();
   const {isDarkMode}=useContext(ThemeContext)

   useEffect(()=>{
   
   MakeRequest({
       method:METHODS.POST,
       data: datas
   })

   
   },[datas])
   
   
   const personalData = data[1]
   console.log(personalData)

  const { PreferRole , aboutUser, 
    birthDate, city,  education ,
     about , row1 , row2 , row3 , row4} = personalData
  




    return(<>
    
    <div className="flex flex-col gap-[2.5rem] pb-[1.6rem] pt-[1.6rem] border-b-2 border-gray-300">
   
    <h1 className={`text-5xl font-bold  ${isDarkMode ? "text-white" : "text-indigo-800"}`}>{personalData.title}</h1>
   
  
  
  <div className="flex">
  
   <div className="flex flex-col gap-[1.5rem]">

      <p className={`text-2xl font-bold  ${isDarkMode ? "text-white" : "text-indigo-800"} `} >{personalData.title}</p>



      <div className="flex gap-[3rem]">
     <p className="font-bold">{row1}</p>
     <p>{birthDate}</p>

      </div>
      <div className="flex gap-[3rem]">
           <p className="font-bold" >{row2}</p>
           <p>{city}</p>

      </div>
      <div className="flex gap-[3rem]">
        <p className="font-bold" >{row3}</p>
        <p>{education}</p>

      </div>
      <div className="flex gap-[3rem]">
      <p className="font-bold" >{row4}</p>
      <p>{PreferRole}</p>

      </div>




   </div>
   

<div className="flex flex-col">


<p className={`text-2xl font-bold   ${isDarkMode ? "text-white" : "text-indigo-800 "} `} >{about}</p>

<p className={`${isDarkMode ? "text-white" : "text-[gray]"} `}>{aboutUser}</p>




</div>




   </div>
   
   
    </div>
    
    
    
    
    
    </>)
}