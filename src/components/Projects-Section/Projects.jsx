import ProjectChart from "./project-chart";





export default function ProjectsSection (){
    return(<>
    
    
    <div className="flex flex-col gap-[2.5rem] pb-[1.6rem] pt-[1.6rem] border-b-2 border-gray-300">

    <h1 className="text-5xl font-bold">Projects</h1>

     
     <section className="flex justify-around gap-[1.7rem]">

      <ProjectChart/>
      <ProjectChart/>
      <ProjectChart/>
      




     </section>




    </div>
    
    
    
    
    
    
    
    
    
    </>)
}