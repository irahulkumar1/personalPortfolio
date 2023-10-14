import certificate1 from "../assets/Certificates/2023bootCamp.jpg";
const certifications = [
  {
    title: "Web Development Bootcamp 2023",
    image: certificate1,
    link: "https://www.udemy.com/certificate/UC-f45447c1-ec65-4265-af55-a7951c7798ed/",
  }, {
    title: "Web Development Bootcamp 2023",
    image: certificate1,
    link: "https://www.udemy.com/certificate/UC-f45447c1-ec65-4265-af55-a7951c7798ed/",
  },
];
export default function Resume() {
  return (
    <div>
      <section className="mt-10 flex justify-center">
        <h1 className="text-darkHeadingColor text-3xl">
          Resume
        </h1>
      </section>
      <section className="flex justify-center gap-[8rem]">
        <div className="w-[29rem] space-y-7">
          <div className="">
            <p className="text-darkHeadingColor text-center text-2xl font-bold p-5">Education</p>
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
        </div>
        <div className="w-[29rem] space-y-7">
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
        </div>
      </section>
      <section>
        <p className="text-darkHeadingColor text-center text-2xl font-bold p-5">
          Certifications
        </p>
        <div className="flex flex-wrap gap-10">
          {certifications.map((certification, index) => (
            <div
              key={index}
              className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/5"
            >
              <div className="rounded-lg transition-transform duration-300 ease-in-out hover:bg-[#dee1ec] hover:cursor-pointer hover:shadow-md hover:transform hover:scale-105">
                <a href={certification.link} target="_blank" rel="noopener noreferrer">
                  <div className=" rounded-lg transition-transform duration-300 ease-in-out hover:bg-[#dee1ec] hover:cursor-pointer hover:shadow-md hover:transform hover:scale-105">
                    <img
                      src={certification.image}
                      alt={certification.title}
                      className="max-w-full"
                    />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
