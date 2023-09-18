import profileImg from "../assets/profile'.jpeg";
export default function Home() {
  return (
    <section className="information flex justify-around items-center">
      <div className="w-[35rem]">
        <p>---Hello</p>
        <p>Hello, I'm Rahul Kumar, a Web Developer with a specialisation in React, based in
          Noida, Uttar Pradesh, India. I'm a passionate engineer eager to contribute my skills
          and collaborate with teams around the world. With 2 years of diverse development
          experience across various technology stacks, I bring creativity and expertise to
          every project.
        </p>
      </div>
      <img src={profileImg} alt="" className="w-[30rem] h-[30rem] bg-slate-500 rounded-full" />
    </section>
  );
}
