import ToggleButton from "./introduction-comp/toggle-btn";





export default function Header(){



    return(<>
    
    <header className="flex items-end flex-col gap-[3.5rem]">
<div className='flex gap-[2rem]'>
  <ToggleButton/>
<button>Dark Mode</button>
<p>|</p>
<button>Türkçeye geç</button>

</div>

<div className='flex gap-[2rem]'>
  <button>Skill</button>
  <button>Skill</button>
  <button>Skill</button>

</div>



  </header>

    
    
    
    
    
    
    </>)
}