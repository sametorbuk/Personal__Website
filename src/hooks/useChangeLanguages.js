import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { initialData } from "../data/data";
import { dataEng } from "../data/eng-data";

export const useChangeLanguages = () => {
  const [datas, setDatas] = useState(initialData);
  const currentState = useSelector((state) => state.currentLanguage);

  localStorage.setItem("Prefered Language", JSON.stringify(currentState));

  useEffect(() => {
    const currentData = currentState === "tr" ? initialData : dataEng;
    setDatas(currentData);
  }, [currentState]);

  return [datas];
};
