import profile from "../../assets/Profile/profile2.jpg"
import { HiOutlineMinus } from "react-icons/hi";
import { skills } from "./skillData";
import './About.css';


export default function About() {

  return (
    <div className="mt-[4rem]">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="w-full sm:w-1/2 flex justify-center animate-bounce-left">
          <img
            src={profile}
            alt="Your Photo"
            className="max-w-full h-auto rounded-full w-[23rem]"
          />
        </div>
        <div className="w-full sm:w-1/2 mt-4 sm:mt-0 flex justify-center lg:justify-start animate-right-appear">
          <div>
            <div className="flex">
              <div className="flex items-center -space-x-1.5">
                <span><HiOutlineMinus /></span>
                <span><HiOutlineMinus /></span>
              </div>
              <h1 className="text-darkHeadingColor text-4xl font-bold mb-4">
                About Me
              </h1>
            </div>
            <p className="text-gray-700 text-lg">
              With 2 years of diverse development experience across various technology stacks, I bring creativity
              and expertise to every project.
            </p>
            <button className="bg-highLighter hover:bg-[#ff577f] mt-3 text-white font-bold py-2 px-4 rounded-sm shadow-lg">
              Hire me
            </button>
          </div>
        </div>
      </div>
      <div className="lg:mt-[4rem] px-20 grid sm:grid-cols-2 gap-x-20 relative">
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="text-left font-semibold flex items-center gap-2 p-2">
              <span className="text-[1.6rem] flex">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
            <div className="h-2 bg-gray-300 rounded-full">
              <div
                className="h-full bg-[#3e4455] rounded-full"
                style={{
                  width: `${(skill.percentage / 100) * 100}%`,
                  animation: 'fillAnimation 1s ease-in-out forwards',
                }}
              ></div>
            </div>
          </div>
        ))}
        <div className="absolute top-10 font-bold text-2xl ">
          <div className="flex transform -rotate-90 -ml-5">
            <div className="flex items-center -space-x-1.5">
              <span><HiOutlineMinus /></span>
              <span><HiOutlineMinus /></span>
            </div>
            <p>
              My Skills
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
