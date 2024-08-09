
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import useAxios from '../../hooks/useAxios';
import { initialData } from '../../data/data';
import { useChangeLanguages } from '../../hooks/useChangeLanguages';

export default function IntroductionComp() {
  const { isDarkMode } = useContext(ThemeContext);
  const { data, MakeRequest, METHODS } = useAxios({ initialData });
  const [datas] = useChangeLanguages();

  useEffect(() => {
    MakeRequest({
      method: METHODS.POST,
      data: datas
    });

    console.log(data);
  }, [datas]);

  const introductionCompData = data[3];
  console.log(introductionCompData);

  const { username, title, explanation, img, pathToGithub, pathToLinkedin } = introductionCompData;

  return (
    <>
      <section className="flex flex-col md:flex-row md:items-center md:gap-[2rem] my-8">
        <div className="flex flex-col gap-[2rem] max-w-[35rem]">
          <h2 className={`${isDarkMode ? "text-white" : "text-indigo-700"} text-center md:text-left`}>{username}</h2>
          <p className={`${isDarkMode ? "text-white" : ""} text-4xl md:text-6xl font-bold text-center md:text-left`}>
            {title}
          </p>
          <p className={`  ${isDarkMode ? "text-white" : "text-gray-600"}  text-center md:text-left`}>{explanation}</p>
          <div className="flex flex-col md:flex-row gap-[0.8rem] md:gap-[1rem] justify-center md:justify-start">
            <button className={`${isDarkMode ? "btnDark" : "btn"} md:text-lg`}>Hire me</button>
            <a target="_blank" rel="noopener noreferrer" href={pathToGithub}>
              <button className={`${isDarkMode ? "btnDark" : "btn"} md:text-lg`}>
                <FontAwesomeIcon icon={faGithub} /> Github
              </button>
            </a>
            <a target="_blank" rel="noopener noreferrer" href={pathToLinkedin}>
              <button className={`${isDarkMode ? "btnDark" : "btn"} md:text-lg`}>
                <FontAwesomeIcon icon={faLinkedinIn} /> Linkedin
              </button>
            </a>
          </div>
        </div>
        <img className="w-[25rem] h-[17rem] rounded-md mx-auto md:mx-0" src={img} alt="Profile" />
      </section>
    </>
  );
}
