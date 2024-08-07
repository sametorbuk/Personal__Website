
import './App.css'
import IntroductionComp from './components/introduction-comp/introduction-comp'


function App() {
 

  return (
    <>
  <header className="flex items-end flex-col gap-[3.5rem]">
<div className='flex gap-[2rem]'>
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




<IntroductionComp/>







    </>
  )
}

export default App
