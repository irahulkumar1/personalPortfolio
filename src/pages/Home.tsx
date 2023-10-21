import { useEffect, useState } from "react";
import profileImg from "../assets/Profile/profile.png";
import SocialMediaIcons from "../component/SocialMediaIcons/SocialMediaIcons";
import { TfiArrowRight } from "react-icons/tfi";
import { HiOutlineMinus } from "react-icons/hi";
import { Resume } from "../component/ResumeButton/ResumeButton"

export default function Home() {
  const [isArrowAnimated, setIsArrowAnimated] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsArrowAnimated((prev) => !prev);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="relative">
      <section className="flex flex-col-reverse md:flex-row items-center justify-center h-screen gap-20 -mt-20">
        <div className="md:w-1/2 lg:w-[30rem] text-center">
          <div className="text-lg font-bold text-left mb-4 flex">
            <div className="flex items-center -space-x-1.5">
              <span><HiOutlineMinus /></span>
              <span><HiOutlineMinus /></span>
              <a href="https://www.youtube.com/@EarningsBeats">Earning Beats</a>
            </div>
            <span className="ml-3">Hello</span>
          </div>
          <div className="text-left">
            <p>
              <span className="block text-4xl font-bold">
                I'm <span className="text-highLighter">Rahul
                </span> Kumar
              </span>
              Web Developer with a specialization in React, based in
              Noida, Uttar Pradesh, India. I'm a passionate engineer eager to contribute my skills
              and collaborate with teams around the world.
            </p>
            <div>
              <Resume />
            </div>
          </div>
        </div>
        <img
          src={profileImg}
          alt=""
          className="md:w-1/2 w-[20rem] lg:w-[36rem] lg:h-[36rem] rounded-b-full mt-4"
        />
      </section>
      <section className="absolute bottom-[3rem] flex justify-center lg:justify-between w-full">
        <div className="text-xl">
          <SocialMediaIcons />
        </div>
        <p className="transform rotate-90 hidden lg:flex items-center">
          Scroll down
          <span
            className={`pl-3 ${isArrowAnimated
              ? "animate-ping"
              : ""
              } origin-center`}
          >
            <TfiArrowRight />
          </span>
        </p>
      </section>
    </main>
  );
}