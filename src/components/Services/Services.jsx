function Contact (){
    return(
        <>
         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-sky-500">
            Our Services
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Empowering Our <span className="text-indigo-600">Alumni</span> with Exclusive Benefits
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Our platform provides valuable services to connect, mentor, and support our alumni network for a thriving community.
        </p>
      </div>

      <div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
        {/* Networking Opportunities */}
        <div className="flex flex-col sm:flex-row">
          <div className="sm:mr-4">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50">
              <svg className="w-12 h-12 text-blue-400" stroke="currentColor" viewBox="0 0 52 52">
                <circle cx="26" cy="26" r="25" strokeWidth="3" fill="none" />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">Networking & Events</h6>
            <p className="mb-3 text-sm text-gray-900">
              Connect with fellow alumni through exclusive networking events, reunions, and online forums.
            </p>
          </div>
        </div>

        {/* Mentorship Program */}
        <div className="flex flex-col sm:flex-row">
          <div className="sm:mr-4">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-50">
              <svg className="w-12 h-12 text-green-400" stroke="currentColor" viewBox="0 0 52 52">
                <rect x="10" y="10" width="32" height="32" strokeWidth="3" fill="none" />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">Mentorship Program</h6>
            <p className="mb-3 text-sm text-gray-900">
              Gain insights and career advice from experienced alumni through our structured mentorship program.
            </p>
          </div>
        </div>

        {/* Job & Internship Assistance */}
        <div className="flex flex-col sm:flex-row">
          <div className="sm:mr-4">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-yellow-50">
              <svg className="w-12 h-12 text-yellow-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="26 10 10 42 42 42" />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">Job & Internship Assistance</h6>
            <p className="mb-3 text-sm text-gray-900">
              Access job listings, internships, and career support tailored for our alumni network.
            </p>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default Contact