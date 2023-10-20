import ContactForm from './ContactForm';
import { BsArrowRight } from 'react-icons/bs';
import SocialMedia from './SocailMedia';
export default function Contact() {
  return (
    <>
      <main className="flex items-center h-screen">
        <section className="w-1/2 p-8 pr-24 flex justify-end items-center ">
          <div className="w-72 text-right relative flex-col ">
            <p className="text-lg">
              Let’s make something new, different and more meaningful or think more visual or conceptual?
              <span className='flex items-center justify-end'>
                <span className="text-2xl">Just say hello!</span>
              </span>
              <span className='text-4xl pl-10 absolute -right-16 bottom-1'><BsArrowRight /></span>
            </p>
          </div>
        </section>
        <section className="w-1/2 p-8">
          <ContactForm />
        </section>
      </main>
      <section className="socialMedia bg-[#F0F0F0] flex-none w-full h-[20rem] -z-10 -mt-80 ">
        <SocialMedia />
      </section>
    </>
  );
}
