import { useEffect } from "react";
import { initialData } from "../data/data";
import useAxios from "../hooks/useAxios";




export default function ProfileSection(){

   const {data , MakeRequest , METHODS }=useAxios({initialData});

   useEffect(()=>{
   
   MakeRequest({
       method:METHODS.POST,
       data: initialData
   })
   
   console.log(data)
   
   },[])
   
   
   const personalData = data[1]
   console.log(personalData)

  const { PreferRole , aboutUser,  birthDate, city,  education} = personalData
  




    return(<>
    
    <div className="flex flex-col gap-[2.5rem] pb-[1.6rem] pt-[1.6rem] border-b-2 border-gray-300">
   
    <h1 className="text-5xl font-bold">Profile</h1>
   
  
  
  <div className="flex">
  
   <div className="flex flex-col gap-[1.5rem]">

      <p className="text-2xl font-bold text-indigo-800"  >Profile</p>



      <div className="flex gap-[3rem]">
     <p className="font-bold">Doğum Tarihi</p>
     <p>{birthDate}</p>

      </div>
      <div className="flex gap-[3rem]">
           <p className="font-bold" >İkamet Şehri</p>
           <p>{city}</p>

      </div>
      <div className="flex gap-[3rem]">
        <p className="font-bold" >Eğitim Durumu</p>
        <p>{education}</p>

      </div>
      <div className="flex gap-[3rem]">
      <p className="font-bold" >Tercih ettiği rol</p>
      <p>{PreferRole}</p>

      </div>




   </div>
   

<div className="flex flex-col">


<p className="text-2xl font-bold text-indigo-800 "  >About me</p>

<p className="text-[gray]">{aboutUser}</p>




</div>




   </div>
   
   
    </div>
    
    
    
    
    
    </>)
}