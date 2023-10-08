import profile from "../assets/Profile/profile2.jpg"
import { HiOutlineMinus } from "react-icons/hi";

export default function About() {
  const skills = [
    { name: 'JavaScript', percentage: 190 },
    { name: 'React', percentage: 185 },
    { name: 'TypeScript', percentage: 165 },
    { name: 'Redux', percentage: 175 },
    { name: 'HTML & CSS', percentage: 176 },
    { name: 'Tailwind', percentage: 165 },
    { name: 'Node.js', percentage: 150 },
  ];

  return (

    <div className="mt-[3rem]">
      <div className="flex flex-col sm:flex-row items-center">
        {/* Left side */}
        <div className="w-full sm:w-1/2 flex justify-center animate-left-appear">
          <img
            src={profile}
            alt="Your Photo"
            className="max-w-full h-auto rounded-full w-[23rem]"
          />
        </div>
        {/* Right side */}
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
            <p className="text-left font-semibold">{skill.name}</p>
            <div className="h-2 bg-gray-300 rounded-full">
              <div
                className="h-full bg-[#3e4455] rounded-full"
                style={{
                  width: `${skill.percentage * 2}px`,
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
      <style>
        {`
          @keyframes fillAnimation {
            0% {
              width: 0;
            }
          }
          
          @keyframes leftAppear {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(0%);
            }
          }
          
          @keyframes rightAppear {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(0%);
            }
          }
          
          .animate-left-appear {
            animation: leftAppear 1s ease-in-out forwards;
          }
          
          .animate-right-appear {
            animation: rightAppear 1s ease-in-out forwards;
          }
        `}
      </style>
    </div>
  );
}
