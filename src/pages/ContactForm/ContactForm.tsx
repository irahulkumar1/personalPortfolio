export default function ContactForm() {
    return (
        <>
            <form className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Your Name
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                            placeholder="John Doe"
                        />
                        <span className="absolute top-0 left-0 mt-2 ml-2 text-gray-600 text-xs transition-all transform origin-0 scale-0 group-focus:scale-100 group-focus:text-blue-500">
                            Your Name
                        </span>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Phone No.
                    </label>
                    <div className="relative">
                        <input
                            type="number"
                            id="phoneNumber"
                            name="phoneNumber"
                            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                            placeholder="+919987654301"
                        />
                        <span className="absolute top-0 left-0 mt-2 ml-2 text-gray-600 text-xs transition-all transform origin-0 scale-0 group-focus:scale-100 group-focus:text-blue-500">
                            Mail Address
                        </span>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Mail Address
                    </label>
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                            placeholder="example@example.com"
                        />
                        <span className="absolute top-0 left-0 mt-2 ml-2 text-gray-600 text-xs transition-all transform origin-0 scale-0 group-focus:scale-100 group-focus:text-blue-500">
                            Mail Address
                        </span>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                        Project Description
                    </label>
                    <div className="relative">
                        <textarea
                            id="description"
                            name="description"
                            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                            rows={4}
                            placeholder="Tell us about your project..."
                        ></textarea>
                        <span className="absolute top-0 left-0 mt-2 ml-2 text-gray-600 text-xs transition-all transform origin-0 scale-0 group-focus:scale-100 group-focus:text-blue-500">
                            Project Description
                        </span>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-[#3e4355] text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                    >
                        Hire Me
                    </button>
                </div>
            </form>
        </>
    );
}
