import { BsArrowRight } from 'react-icons/bs'

export default function Contact() {
  return (
    <>
      <main className="flex items-center h-screen font-[Alegreya] ">
        <section className="w-1/2 p-8 pr-24 flex justify-end items-center ">
          <div className="w-72 text-right ">
            <p className="text-lg ">
              Let’s make something new, different and more meaningful or think more visual or conceptual?
              <span className='flex items-center justify-end'>
                <span className="text-2xl"> Just say hello.</span>
                <span className='text-2xl'><BsArrowRight /></span>
              </span>
            </p>
          </div>
        </section>
        <section className="w-1/2 p-8 ">
          {/* Apply card-like styling */}
          <div className="bg-[#f8f9fe] rounded-lg shadow-lg p-6 ">
            <h1 className="text-2xl text-gray-800 mb-4">Contact</h1>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Your Name</label>
                <input type="text" id="name" name="name" className="w-full p-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Mail Address</label>
                <input type="email" id="email" name="email" className="w-full p-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Project Description</label>
                <textarea id="description" name="description" className="w-full p-2 border rounded-lg" rows={4}></textarea>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-[#3e4355] text-white py-2 px-4 rounded-lg hover:bg-blue-600">Hire Me</button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <section className="social media">
        social media
      </section>
    </>
  );
}

