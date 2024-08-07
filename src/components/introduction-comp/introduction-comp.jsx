
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';







export default function IntroductionComp(){
    return(<>
    
    <section className="flex my-8">


<div className="flex flex-col gap-[2rem]">

<h2>SAMET ORBUK</h2>

<p className="text-6xl font-bold" >Creative Thinker Minimalizm Lover</p>

<p className="text-[gray]" >Hi, I’m Almila. I’m a full-stack developer.
     If you are looking for a Developer who to craft
      solid and scalable frontend products
     with great user experiences. Let’s shake hands with me.</p>

<div className="flex" >

<button className="flex items-center"> <FontAwesomeIcon icon={faGithub}/>   Hire me</button>
<button>Github</button>
<button>Linkedin</button>

</div>



</div>


<img  className="w-[16rem]" src="https://pbs.twimg.com/profile_images/1819068549341523968/-2bnjkC-_400x400.jpg" alt="" />





    </section>
    
    
    
    
    
    
    
    </>)
}