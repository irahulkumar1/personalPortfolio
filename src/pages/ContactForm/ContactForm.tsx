import { useState } from "react";

export default function ContactForm() {
    const initialFormData = {
        name: '',
        email: '',
        phoneNumber: '',
        description: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbyNHrWR7jvMIand6YUa0kzCbR8yjoJ_h_n4pwv3hQGtf1bc9rPTkiL3VcCpL-4c5e-PiA/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Form submitted successfully
                console.log('Form submitted successfully');
                setSuccessMessage("Form submitted successfully!");
                setFormData(initialFormData); // Clear form fields
            } else {
                // Handle errors
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (<>
        <form className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Your Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
                    Phone No.
                </label>
                <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                    placeholder="+919987654301"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Mail Address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                    placeholder="example@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                    Project Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                    rows={4}
                    placeholder="Tell us about your project..."
                    value={formData.description}
                    onChange={handleInputChange}
                ></textarea>
            </div>
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-[#3e4355] text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                    Hire Me
                </button>
            </div>
            <div className="flex justify-center"> {successMessage && <p className="text-green-500">{successMessage}</p>}</div>
        </form>
    </>
    );
}
