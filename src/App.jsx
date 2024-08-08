import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'


import Header from './components/header';
import ProfileSection from './components/profile';
import IntroductionComp from './components/introduction-comp/introduction-comp';
import Skills from './components/skills/Skills.comp';
import ProjectsSection from './components/Projects-Section/Projects';


function App() {
 

  return (
    <>
  
<Header/>
<IntroductionComp/>
<Skills/>
<ProfileSection/>

<ProjectsSection/>



    </>
  )
}

export default App
