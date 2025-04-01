import { Link } from "react-router-dom";

function Testo() {
    return (
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-20">
            <div className="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:rounded-3xl sm:border sm:border-gray-100 sm:px-16 sm:shadow-sm">
                <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Stay Connected with Your Alumni Network!
                </h2>

                <h3 className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-500">
                    Join fellow graduates for exclusive networking opportunities, career support, and alumni events.
                </h3>

                <div className="mt-8 flex items-center justify-center gap-x-6">
                    <Link className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        to="/dashboard">
                        Explore Alumni Community
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                    </Link>
                </div>

                {/* Gradient SVG */}
                <svg viewBox="0 0 1024 1024"
                    className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                    aria-hidden="true">
                    <circle cx="512" cy="512" r="512" fill="url(#grad1)" fillOpacity="0.7"></circle>
                    <defs>
                        <radialGradient id="grad1">
                            <stop stopColor="#3b82f6"></stop>
                            <stop offset="1" stopColor="#1d4ed8"></stop>
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
}

export default Testo;