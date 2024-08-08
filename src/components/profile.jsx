



export default function ProfileSection(){
    return(<>
    
    <div className="flex flex-col gap-[2.5rem] pb-[1.6rem] pt-[1.6rem] border-b-2 border-gray-300">
   
    <h1 className="text-5xl font-bold">Profile</h1>
   
  
  
  <div className="flex">
  
   <div className="flex flex-col gap-[1.5rem]">

      <p className="text-2xl font-bold text-indigo-800"  >Profile</p>



      <div className="flex gap-[3rem]">
     <p className="font-bold">Doğum Tarihi</p>
     <p>09.07.2000</p>

      </div>
      <div className="flex gap-[3rem]">
           <p className="font-bold" >İkamet Şehri</p>
           <p>Mersin</p>

      </div>
      <div className="flex gap-[3rem]">
        <p className="font-bold" >Eğitim Durumu</p>
        <p>Dokuz Eylül üni , Sınıf Öğretmenliği , Lisans</p>

      </div>
      <div className="flex gap-[3rem]">
      <p className="font-bold" >Tercih ettiği rol</p>
      <p>Full stack developer</p>

      </div>




   </div>
   

<div className="flex flex-col">


<p className="text-2xl font-bold text-indigo-800 "  >About me</p>

<p className="text-[gray]">A curious and hardworking software developer who wants to keep up with the ever-advancing technology</p>




</div>




   </div>
   
   
    </div>
    
    
    
    
    
    </>)
}