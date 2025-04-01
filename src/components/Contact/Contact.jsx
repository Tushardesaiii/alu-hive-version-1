function Contact (){
    return (
        <>
        <div className="max-w-screen-lg mx-auto p-5">
            <div className="grid grid-cols-1 md:grid-cols-12 border">
                <div className="bg-gray-900 md:col-span-4 p-10 text-white">
                    <p className="mt-4 text-sm leading-7 font-regular uppercase">Contact Us</p>
                    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                        Connect With <span className="text-indigo-600">Alu-Hive devs</span>
                    </h3>
                    <p className="mt-4 leading-7 text-gray-200">
                        Have questions or want to collaborate? Reach out to us and become a part of our growing alumni network.
                    </p>

                    <div className="flex items-center mt-5">
                        <span className="text-sm">Academic Block-5 ,GTU (University Campus), Ahmedabad, India</span>
                    </div>

                    <div className="flex items-center mt-5">
                        <span className="text-sm">Reach Out Only To DE-Team</span>
                    </div>

                    <div className="flex items-center mt-5">
                        <span className="text-sm">Available: Mon - Fri (9AM - 5PM)</span>
                    </div>
                </div>

                <form className="md:col-span-8 p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="first-name">First Name</label>
                            <input className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none focus:bg-white" id="first-name" type="text" placeholder="John" />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="last-name">Last Name</label>
                            <input className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none focus:bg-white" id="last-name" type="text" placeholder="Doe" />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="email">Email Address</label>
                        <input className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none focus:bg-white" id="email" type="email" placeholder="your@email.com" />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="message">Your Message</label>
                        <textarea rows="5" className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 focus:outline-none focus:bg-white" id="message"></textarea>
                    </div>

                    <div className="flex justify-between items-center">
                        <label className="flex items-center text-gray-500 text-sm">
                            <input className="mr-2" type="checkbox" />
                            Subscribe to our alumni newsletter
                        </label>
                        <button className="bg-indigo-600 hover:bg-indigo-400 text-white font-bold py-2 px-6 rounded focus:outline-none" type="submit">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    

        </>
    )
}

export default Contact 