import { useContext, useEffect } from "react";
import ToggleButton from "./introduction-comp/toggle-btn";
import { ThemeContext } from "../contexts/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../Store/actions";
import useAxios from "../hooks/useAxios";
import { initialData } from "../data/data";
import { useChangeLanguages } from "../hooks/useChangeLanguages";

export default function Header() {
  const { data, MakeRequest, METHODS } = useAxios({ initialData });
  const [datas] = useChangeLanguages();

  useEffect(() => {
    MakeRequest({
      method: METHODS.POST,
      data: datas,
    });

    console.log(data);
  }, [datas]);

  const introductionCompData = data[3];
  const current = useSelector((state) => state.currentLanguage);
  const { isDarkMode } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const onLanguageChangeHandler = () => {
    dispatch(setLanguage());
  };

  return (
    <>
      <header className="flex flex-col gap-[3.5rem] md:flex-col md:items-end md:gap-[2rem]">
        <div className="flex gap-[2rem] md:flex-row">
          <ToggleButton />
          <button className="md:block">
            {`${isDarkMode ? "Light Mode" : "Dark Mode"}`}
          </button>
          <p className="md:block">|</p>
          <button onClick={onLanguageChangeHandler}>
            {current === "tr" ? "İngilizceye geç" : "Switch to Turkish"}
          </button>
        </div>

        <div className="flex flex-col gap-[2rem] md:flex-row md:gap-[2rem]">
          <button className={`${isDarkMode ? "btnDark" : "btn"} md:text-lg`}>
            {introductionCompData.btn1}
          </button>
          <button className={`${isDarkMode ? "btnDark" : "btn"} md:text-lg`}>
            {introductionCompData.btn2}
          </button>
          <button className={`${isDarkMode ? "btnDark" : "btn"} md:text-lg`}>
            {introductionCompData.btn3}
          </button>
        </div>
      </header>
    </>
  );
}
