import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

import Header from "./components/header";

import ProfileSection from "./components/profile";
import IntroductionComp from "./components/introduction-comp/introduction-comp";
import Skills from "./components/skills/Skills.comp";
import ProjectsSection from "./components/Projects-Section/Projects";
import Footer from "./components/footer";
import ThemeContextProvider, { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";

function App() {
  return (
    <ThemeContextProvider>
      <Content />
    </ThemeContextProvider>
  );
}

function Content() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col ${
        isDarkMode ? "bg-slate-700 text-white" : ""
      } px-[8rem] py-[3rem]`}
    >
      <Header />
      <IntroductionComp />
      <Skills />
      <ProfileSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
