import { useState } from "react";

const CTA = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    const faqs = [
        {
            id: 1,
            question: "What is the Alumni Network?",
            answer: "Our Alumni Network connects graduates with current students and fellow alumni, offering mentorship, career growth, and networking opportunities.",
        },
        {
            id: 2,
            question: "Why should I join the Alumni Network?",
            answer: "By joining, you gain access to exclusive alumni events, job opportunities, mentorship programs, and a platform to stay connected with your peers.",
        },
        {
            id: 3,
            question: "How can I connect with other alumni?",
            answer: "You can connect with fellow alumni through discussion forums, direct messaging, alumni meetups, and professional networking events hosted on our platform.",
        },
        {
            id: 4,
            question: "How do I stay updated on alumni events?",
            answer: "Stay informed by subscribing to our newsletter, joining alumni groups, and checking the upcoming events section on our platform.",
        },
    ];

    return (
        <section className="py-12 bg-gray-50 dark:bg-gray-900 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center">
                    <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
                        We're just getting started, and the journey ahead is exciting!
                    </p>
                    <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl xl:text-5xl">
                        Building something meaningful, together
                    </h2>
                </div>

                {/* Join Us Button */}
                <div className="mt-8 text-center md:mt-16">
                    <a
                        href="#"
                        className="pb-2 text-base font-bold leading-7 text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white hover:border-gray-600 hover:text-gray-600 dark:hover:border-gray-400 dark:hover:text-gray-400 transition-all duration-200"
                    >
                        Join us on this journey
                    </a>
                </div>

                {/* Glow Background */}
                <div className="relative mt-10 md:mt-24">
                    <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                        <div
                            className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                            style={{
                                background:
                                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                            }}
                        ></div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="w-full mt-10 max-w-3xl mx-auto">
                    {faqs.map((item) => (
                        <div key={item.id} className="border border-gray-300 dark:border-gray-700 rounded-lg mb-3 p-4">
                            {/* Accordion Question */}
                            <div
                                className="flex items-center justify-between w-full py-3 text-left font-medium text-gray-900 dark:text-white cursor-pointer"
                                onClick={() => toggleAccordion(item.id)}
                            >
                                {item.question}
                                <svg
                                    width="1.5em"
                                    height="1.5em"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-5 w-5 transition-transform ${
                                        openAccordion === item.id ? "rotate-180" : ""
                                    }`}
                                >
                                    <path
                                        d="M6 9L12 15L18 9"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </div>

                            {/* Smoothly Expanding Answer */}
                            <div
                                className={`transition-max-h duration-300 overflow-hidden ${
                                    openAccordion === item.id ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0"
                                }`}
                            >
                                <p className="text-sm text-gray-600 dark:text-gray-400">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CTA;
