import profileImg from "../assets/Profile/profile.png";
import SocialMediaIcons from "../component/SocialMediaIcons/SocialMediaIcons";
import { HiOutlineMinus } from "react-icons/hi";
import { Resume } from "../component/ResumeButton/ResumeButton"

export default function Home() {
  return (
    <main className="relative">
       <section className="flex flex-col-reverse md:flex-row items-center justify-center h-screen gap-20 -mt-20">
        <div className="md:w-1/2 lg:w-[30rem] text-center">
          <div className="text-lg font-bold text-left mb-4 flex">
            <div className="flex items-center -space-x-1.5">
              <span><HiOutlineMinus /></span>
              <span><HiOutlineMinus /></span>
            
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
      <section className="absolute bottom-[-4rem] flex flex-col lg:flex-row justify-center lg:justify-between w-full items-center">
        <div className="text-xl mb-[1rem] m-[2rem] lg:mb-[6rem]">
          <SocialMediaIcons />
        </div>
      </section>
    </main>
  );
}