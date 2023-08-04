import { MapPinIcon } from "@heroicons/react/24/solid";
import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";

import Link from "next/link";

function About() {
  return (
    <div className="text-white hover:font-bold mt-[14rem] justify-center items-center flex flex-col ">
      <div className="">
        <Link
          href={
            "https://www.google.com/maps/place/%D0%A1%D2%AF%D1%85%D0%B1%D0%B0%D0%B0%D1%82%D0%B0%D1%80%D1%8B%D0%BD+%D1%82%D0%B0%D0%BB%D0%B1%D0%B0%D0%B9/@47.9199232,106.9056,12z/data=!4m6!3m5!1s0x5d9692442297c949:0x71884efc4dce5cb2!8m2!3d47.9188691!4d106.9175785!16s%2Fm%2F02wywv3"
          }
        >
          <p className="rounded-full font-normal text-sm flex items-center py-[0.3rem] px-[1rem] absolute mt-[-3rem] ml-[0.1rem] bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400">
            <MapPinIcon className=" z-[1] h-6 w-4" /> Ulaanbaatar, Mongolia
          </p>
        </Link>
        <h1 className="text-4xl justify-start items-start whitespace-nowrap">
          {" "}
          Bilegt Amartuvshin
        </h1>
        <p>17 y/o - Front-End Web Developer</p>
        <div className=" flex space-x-4 mt-4 ">
        <Link href={"https://github.com/bilegt6969"}><FaGithub className="h-8 cursor-pointer w-8 hover:text-gray-500 duration-150">
            
          </FaGithub>{" "}</Link>

          <Link href={"https://www.instagram.com/b1lgeeeeeeee/"}>          <FaInstagram className="h-8 w-8 hover:text-gray-500 duration-150" />{" "}
</Link>
          
          <Link href={"https://www.facebook.com/bilegt.bilegt.7777"}>
          <FaFacebook className="h-8 w-8 hover:text-gray-500 duration-150" />
</Link>
        </div>{" "}
      </div>

      <section>
        <h1 className="text-3xl mt-[3rem] mx-auto justify-start items-start">
          About 💭
        </h1>
        <p className="mt-[2rem] leading-8 font-normal lg:w-[40rem] md:w-[30rem] sm:w-[25rem] w-[18rem]">
          As a 16-year-old front-end web developer based in Mongolia, I have
          been learning to code since 8th grade, starting with C++. While I
          enjoy building things from scratch and watching movies in my free
          time, my future aspiration is to become a full-stack developer and to
          learn more about machine learning.
        </p>
      </section>
      <div className=" justify-center flex flex-colx items mt-[2rem] ">
        <section className="flex-col flex justify-start items-start mb-12 ">
          <h1 className="text-4xl block list-disc font-bold tracking-tight justify-center items-center flex-col mx-auto mb-6 dark:text-white undefined">
            Technologies 💻
          </h1>
          <ul className="block text-center list-disc">
            <a
              href="https://reactjs.org/"
              title="ReactJS"
              rel="noreferrer"
              target="_blank"
            >
              <li className="mr-4 cursor-pointer hover:translate-y-1 text-sm inline-block rounded-full mb-4 duration-300 font-semibold py-2 px-8 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-white">
                ReactJS
              </li>
            </a>
            <a
              href="https://nextjs.org/"
              title="NextJS"
              rel="noreferrer"
              target="_blank"
            >
              <li className="mr-4 cursor-pointer hover:translate-y-1 text-sm inline-block rounded-full mb-4 duration-300 font-semibold py-2 px-8 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-white">
                NextJS
              </li>
            </a>
            <a
              href="https://nodejs.org/en/"
              title="NodeJS"
              rel="noreferrer"
              target="_blank"
            >
              <li
                className="mr-4 cursor-pointer hover:translate-y-1 text-sm inline-block rounded-full
mb-4 duration-300 font-semibold py-2 px-8 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-white"
              >
                NodeJS
              </li>
            </a>
            <a
              href="https://www.javascript.com/"
              title="JavaScript"
              rel="noreferrer"
              target="_blank"
            >
              <li className="mr-4 cursor-pointer hover:translate-y-1 text-sm inline-block rounded-full mb-4 duration-300 font-semibold py-2 px-8 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-white">
                JavaScript
              </li>
            </a>
            <a
              href="https://tailwindcss.com/"
              title="TailwindCSS"
              rel="noreferrer"
              target="_blank"
            >
              <li
                className="mr-4 cursor-pointer hover:translate-y-1 text-sm inline-block rounded-full mb-4 duration-300 font-semibold py-2 px-8 bg-gray-100
hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-white"
              >
                TailwindCSS
              </li>
            </a>
            <a
              href="https://www.python.org/"
              title="Python"
              rel="noreferrer"
              target="_blank"
            >
              <li className="mr-4 cursor-pointer hover:translate-y-1 text-sm inline-block rounded-full mb-4 duration-300 font-semibold py-2 px-8 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-white">
                Python
              </li>
            </a>
            <a
              href="https://numpy.org/"
              title="Python"
              rel="noreferrer"
              target="_blank"
            >
              <li className="mr-4 cursor-pointer hover:translate-y-1 text-sm inline-block rounded-full mb-4 duration-300 font-semibold py-2 px-8 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-white">
                Numpy
              </li>
            </a>
            <a
              href="https://opencv.org/"
              title="Python"
              rel="noreferrer"
              target="_blank"
            >
              <li className="mr-4 cursor-pointer hover:translate-y-1 text-sm inline-block rounded-full mb-4 duration-300 font-semibold py-2 px-8 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-white">
                Open cv
              </li>
            </a>
            
            <a
              href="https://git-scm.com/"
              title="Git"
              rel="noreferrer"
              target="_blank"
            >
              <li className="mr-4 cursor-pointer hover:translate-y-1 text-sm inline-block rounded-full mb-4 duration-300 font-semibold py-2 px-8 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-white">
                Git
              </li>
            </a>
            <a
              href="https://html.com/"
              title="Ubuntu"
              rel="noreferrer"
              target="_blank"
            >
              <li
                className="mr-4 cursor-pointer hover:translate-y-1 text-sm inline-block rounded-full mb-4 duration-300 font-semibold py-2 px-8 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900
dark:text-white"
              >
                Html
              </li>
            </a>
            <a
              href="https://cplusplus.com/"
              title="CentOS"
              rel="noreferrer"
              target="_blank"
            >
              <li className="mr-4 cursor-pointer hover:translate-y-1 text-sm inline-block rounded-full mb-4 duration-300 font-semibold py-2 px-8 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-white">
                C++
              </li>
            </a>
            <a
              href="https://code.visualstudio.com/"
              title="Visual Studio Code"
              rel="noreferrer"
              target="_blank"
            >
              <li className="mr-4 cursor-pointer hover:translate-y-1 text-sm inline-block rounded-full mb-4 duration-300 font-semibold py-2 px-8 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-white">
                Visual Studio Code
              </li>
            </a>
          </ul>
        </section>
      </div>

      
    </div>
  );
}

export default About;
