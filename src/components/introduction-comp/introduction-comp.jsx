
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import useAxios from '../../hooks/useAxios';
import { initialData } from '../../data/data';

import { useChangeLanguages } from '../../hooks/useChangeLanguages';


export default function IntroductionComp(){
const {isDarkMode}=useContext(ThemeContext)

const {data , MakeRequest , METHODS }=useAxios({initialData});
const [datas]=useChangeLanguages();




useEffect(()=>{

MakeRequest({
    method:METHODS.POST,
    data: datas
})

console.log(data)

},[datas])


const introductionCompData = data[3]
console.log(introductionCompData)

const {username , title , explanation , img , pathToGithub , pathToLinkedin} = introductionCompData

    return(<>
    
    <section className="flex my-8 gap-[2rem] items-center ">


<div className="flex flex-col gap-[2rem] max-w-[35rem]">

<h2>{username}</h2>

<p className={`${isDarkMode ? "text-white" : ""} text-6xl font-bold`} >{title}</p>

<p className="text-[gray]" >{explanation}</p>

<div className="flex gap-[0.8rem]" >

<button className={` ${isDarkMode ? "btnDark" : " btn"}`}>    Hire me</button>
<a target="_blank" href={pathToGithub}>  <button className={` ${isDarkMode ? "btnDark" : " btn"}`}> <FontAwesomeIcon icon={faGithub}/>Github</button></a> 
<a target="_blank" href={pathToLinkedin}> <button className={` ${isDarkMode ? "btnDark" : " btn"}`} ><FontAwesomeIcon icon={faLinkedinIn} />Linkedin</button></a>

</div>

</div>
<img  className="w-[25rem] h-[17rem] rounded-md" src={img} alt="" />

    </section>
    
    
    
    
    
    
    
    </>)
}