import { certifications } from "./ResumeData";
import { motion } from "framer-motion";

export default function Resume() {
  const experienceVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const educationVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div>
      <section className="mt-10 flex justify-center">
        <h1 className="text-darkHeadingColor text-3xl">
          Resume
        </h1>
      </section>
      <section className="flex-row-reverse lg:flex lg:justify-center gap-[8rem]">
      <motion.div
          className="lg:w-[29rem] space-y-7"
          initial="hidden"
          animate="visible"
          variants={experienceVariants}
        >
          <div className="">
            <p className="text-darkHeadingColor text-center text-2xl font-bold p-5">Experience</p>
            <div className="px-5 py-3 text-textColor bg-[#e5e8f3] rounded-lg transition-transform duration-300 ease-in-out hover:bg-[#dee1ec] hover:cursor-pointer hover:shadow-xl
            hover:transform hover:translate-x-2">
              <p className="text-sm">Sep 2022 to Present</p>
              <p className="text-xl font-semibold">
                {/* <span>Icon</span> */}
                Pando India Software Consultants
              </p>
              <p>Frontend Developer</p>
            </div>
          </div>
          <div className="">
            <div className="px-5 py-3 text-textColor bg-[#e5e8f3] rounded-lg transition-transform duration-300 ease-in-out hover:bg-[#dee1ec] hover:cursor-pointer hover:shadow-xl
            hover:transform hover:translate-x-2">
              <p className="text-sm">Nov 2021 to July 2022</p>
              <p className="text-xl font-semibold">
                {/* <span>Icon</span> */}
                NMS Games Private Ltd
              </p>
              <p>Backend Developer</p>
            </div>
          </div>
          <div className="">
            <div className="px-5 py-3 text-textColor bg-[#e5e8f3] rounded-lg transition-transform duration-300 ease-in-out hover:bg-[#dee1ec] hover:cursor-pointer hover:shadow-xl
            hover:transform hover:translate-x-2">
              <p className="text-sm">Aug 2021 to Oct 2021</p>
              <p className="text-xl font-semibold">
                {/* <span>Icon</span> */}
                Fynd Shopsence Private Limited a (Reliance backed Company)
              </p>
              <p>Full Stack Developer Trainee</p>
            </div>
          </div>
          </motion.div>
          <motion.div
          className="lg:w-[29rem] space-y-7"
          initial="hidden"
          animate="visible"
          variants={educationVariants}
        >
          <div className="">
            <p className="text-darkHeadingColor text-center text-2xl font-bold p-5">Education </p>
            <div className="px-5 py-3 text-textColor bg-[#e5e8f3] rounded-lg transition-transform duration-300 ease-in-out hover:bg-[#dee1ec] hover:cursor-pointer hover:shadow-xl
            hover:transform hover:translate-x-2">
              <p className="text-sm">Aug 2016 to July 2020</p>
              <p className="text-xl font-semibold">
                {/* <span>Icon</span> */}
                Bachelor's of Technology
              </p>
              <p>Bengal College of Engineering and Technology</p>
              <p>Maulana Abul Kalam Azaad University of Technology</p>
            </div>
          </div>
          <div className="">
            <div className="px-5 py-3 text-textColor bg-[#e5e8f3] rounded-lg transition-transform duration-300 ease-in-out hover:bg-[#dee1ec] hover:cursor-pointer hover:shadow-xl
            hover:transform hover:translate-x-2">
              <p className="text-sm">Nov 2021 to July 2022</p>
              <p className="text-xl font-semibold">
                {/* <span>Icon</span> */}
                Higher Secondary School Certificate
              </p>
              <p>Badri Narayan Saha Dayanand Anglo Vedic Public School</p>
            </div>
          </div>
          </motion.div>
      </section>
      <section>
        <p className="text-darkHeadingColor text-center text-2xl font-bold p-5">
          Certifications
        </p>
        <div className="flex flex-wrap justify-between flex-grow">
          {certifications.map((certification, index) => (
            <div
              key={index}
              className="w-[24rem] py-4"
            >
              <motion.div
                className="rounded-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px 2px rgba(0,0,0,0.1)",
                }}
              >
                <a href={certification.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={certification.image}
                    alt={certification.title}
                    className="max-w-full"
                  />
                  <p className="p-2 text-darkHeadingColor font-medium text-center">
                    {certification.title}
                  </p>
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
