import profile from "../assets/Profile/profile.png"
import { HiOutlineMinus } from "react-icons/hi";

export default function About() {
  const skills = [
    { name: 'React', percentage: 70 },
    { name: 'JavaScript', percentage: 60 },
    { name: 'Redux', percentage: 60 },
    { name: 'HTML & CSS', percentage: 70 },
    { name: 'Tailwind', percentage: 60 },
    { name: 'Node.js', percentage: 50 },
  ];

  return (
    <div className="mt-[6rem]">
      {/* About Me Section */}
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 flex justify-center">
          {/* Add your photo here */}
          <img
            src={profile}
            alt="Your Photo"
            className="max-w-full h-auto rounded-full"
          />
        </div>
        <div className="w-full sm:w-1/2 mt-4 sm:mt-0 flex justify-center lg:justify-start">
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
            <button className="bg-highLighter hover:bg-[#ff577f] mt-3 text-white font-bold py-2 px-4 rounded-sm shadow-lg">Hire me</button>
          </div>
        </div>
      </div>
      {/* Skills Section */}
      <div className="lg:mt-[4rem] px-20 grid sm:grid-cols-2 gap-x-9 relative">
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

      {/* Add CSS for the fill animation */}
      <style>
        {`
          @keyframes fillAnimation {
            0% {
              width: 0;
            }
          }
        `}
      </style>
    </div>
  );
}
