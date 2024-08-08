import { useEffect } from "react";
import ProjectChart from "./project-chart";
import { initialData } from "../../data/data";
import useAxios from "../../hooks/useAxios";





export default function ProjectsSection (){

    const {data , MakeRequest , METHODS }=useAxios({initialData});

    useEffect(()=>{
    
    MakeRequest({
        method:METHODS.POST,
        data: initialData
    })
    
    console.log(data)
    
    },[])
    
    
    const projectsData = data[2]
    console.log(projectsData)








    return(<>
    
    
    <div className="flex flex-col gap-[2.5rem] pb-[1.6rem] pt-[1.6rem] border-b-2 border-gray-300">

    <h1 className="text-5xl font-bold">Projects</h1>

     
     <section className="flex justify-around gap-[1.7rem]">

      {projectsData.map((item , index)=> {
        return <ProjectChart key={index}  item={item}/>
      })}
      




     </section>




    </div>
    
    
    
    
    
    
    
    
    
    </>)
}