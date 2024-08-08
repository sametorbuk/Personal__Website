
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';






export default function IntroductionComp(){
    return(<>
    
    <section className="flex my-8 gap-[2rem] items-center ">


<div className="flex flex-col gap-[2rem] max-w-[35rem]">

<h2>SAMET ORBUK</h2>

<p className="text-6xl font-bold" >Creative Thinker Minimalizm Lover</p>

<p className="text-[gray]" >Hi, I’m Almila. I’m a full-stack developer.
     If you are looking for a Developer who to craft
      solid and scalable frontend products
     with great user experiences. Let’s shake hands with me.</p>

<div className="flex gap-[0.8rem]" >

<button className="flex items-center bg-indigo-900 text-white px-6 py-2.5 rounded-md">    Hire me</button>
<button className="button"    > <FontAwesomeIcon icon={faGithub}/>    Github</button>
<button className="flex gap-[0.3rem] items-center text-indigo-900 border border-solid
border-indigo-900  px-6 py-2.5 rounded-md" >  <FontAwesomeIcon icon={faLinkedinIn} />   Linkedin</button>

</div>

</div>
<img  className="w-[25rem] h-[17rem] rounded-md" src="https://pbs.twimg.com/profile_images/1819068549341523968/-2bnjkC-_400x400.jpg" alt="" />

    </section>
    
    
    
    
    
    
    
    </>)
}