import { useEffect } from "react";
import { initialData } from "../data/data";
import useAxios from "../hooks/useAxios";
import { useChangeLanguages } from "../hooks/useChangeLanguages";

export default function Footer() {
  const { data, MakeRequest, METHODS } = useAxios({ initialData });
  const [datas] = useChangeLanguages();

  useEffect(() => {
    MakeRequest({
      method: METHODS.POST,
      data: datas,
    });
  }, [datas]);

  const personalData = data[1];
  console.log(personalData);

  return (
    <>
      <div className="flex items-end w-[23rem] mt-[5rem]">
        <div className="flex flex-col gap-[4rem]">
          <h1 className="text-4xl font-bold">{personalData.footer}</h1>

          <div className="flex items-center">
            <div className="flex gap-[2rem] items-center ">
              <p className="text-2xl">👉</p>
              <p className="text-rose-700"> sametorbukk@gmail.com</p>
            </div>

            <div className=" absolute flex justify-between gap-[2rem] left-[50rem] ">
              <a className="font-bold" href="">
                Personal Blog
              </a>
              <a
                className="text-emerald-400 font-bold"
                target="_blank"
                href="https://github.com/sametorbuk?tab=repositories"
              >
                Github
              </a>
              <a
                className="text-sky-600 font-bold"
                target="_blank"
                href="https://www.linkedin.com/in/sametorbuk/"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
