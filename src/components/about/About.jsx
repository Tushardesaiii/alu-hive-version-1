function About (){
    return (
<>

<section className="">
    <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="lg:text-center">
                <h2
                    className="font-heading mb-4 bg-orange-100  px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                    Why Our Alumni Platform?
                </h2>
                <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                    Connecting Alumni, Empowering Communities
                </p>
                <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                    Our platform is designed to bridge the gap between alumni and their alma mater, fostering meaningful
                    connections, mentorship, and opportunities. We are dedicated to building a thriving network that
                    benefits students and graduates alike.
                </p>
            </div>

            <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/503163/api-settings.svg" alt="API" />
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Seamless Networking</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">
                            Stay connected with fellow alumni, build professional relationships, and collaborate on projects effortlessly.
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/503138/webpack.svg" alt="SDK" />
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Exclusive Mentorship</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">
                            Gain access to mentorship from experienced alumni who can guide students in career choices, skills, and opportunities.
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" alt="Dashboard" />
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Career & Job Opportunities</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">
                            Discover job openings, internships, and referrals through a strong alumni network that fosters career growth.
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" alt="Engagement" />
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Community Engagement</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">
                            Participate in alumni events, knowledge-sharing sessions, and give back to your institution by engaging with current students.
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</section>

</>
    )
}

export default About