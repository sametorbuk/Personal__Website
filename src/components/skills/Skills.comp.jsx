import { useContext, useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import { initialData } from "../../data/data";

import { useChangeLanguages } from "../../hooks/useChangeLanguages";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Skills() {
  const { data, MakeRequest, METHODS } = useAxios({ initialData });
  const [datas] = useChangeLanguages();
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    MakeRequest({
      method: METHODS.POST,
      data: datas,
    });

    console.log(data);
  }, [datas]);

  const skillData = data[0];
  console.log(skillData);

  return (
    <>
      <div className="flex flex-col  md:flex-col  gap-[2.5rem] pb-[1.6rem] pt-[1.6rem] border-b-2 border-gray-300">
        <h1 className="text-5xl font-bold">{skillData[0].title}</h1>

        <div className=" flex flex-col   md:flex md:flex-row justify-between ">
          {skillData.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="flex flex-col max-w-[17rem] gap-[1.5rem]"
                >
                  <p
                    className={`text-3xl font-bold ${
                      isDarkMode ? "text-white" : "text-indigo-800"
                    }`}
                  >
                    {item.skillName}
                  </p>
                  <p>{item.explanation}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
