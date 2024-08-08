import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import { initialData } from "../../data/data";



export default function Skills(){

    const {data , MakeRequest , METHODS }=useAxios({initialData});

    useEffect(()=>{
    
    MakeRequest({
        method:METHODS.POST,
        data: initialData
    })
    
    console.log(data)
    
    },[])
    
    
    const skillData = data[0]
    console.log(skillData)







    return(<>
       
    
    <div className="flex flex-col gap-[2.5rem] pb-[1.6rem] pt-[1.6rem] border-b-2 border-gray-300">
           
           <h1 className="text-5xl font-bold">Skills</h1>

          <div className="flex justify-between">







{skillData.map((item , index)=>{
    return <>
    <div key={index} className="flex flex-col max-w-[17rem] gap-[1.5rem]">

    <p className="text-3xl font-bold text-indigo-800">{item.skillName}</p>
     <p>{item.explanation}</p>


     </div>
     </>
    
})}
           
            
       
       
       
       
       
       
       
       
       
          </div>



    </div>
    
    
    
    
    
    
    
    
    
    </>)
} 