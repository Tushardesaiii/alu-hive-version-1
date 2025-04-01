import React from "react";

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-lg border-b">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 text-gray-300">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-sky-200">
                                {section.title}
                            </h2>
                            <ul className="font-medium">
                                {section.links.map((link, i) => (
                                    <li className="mb-4" key={i}>
                                        <a href={link.href} className="hover:text-sky-200 transition duration-200">
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="px-4 py-6 bg-gray-950 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-400 sm:text-center">
                        © {new Date().getFullYear()} Alu-Hive. An Excellent Project of a GTU-DE by [Frontend by Vivek yadav & Tushar desai] [backend by Anuj dhameja and Slok rami ]
                    </span>
                    <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5">
                        {socialIcons.map((icon, i) => (
                            <a key={i} href={icon.href} className="hover:text-sky-400 transition duration-200">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox={icon.viewBox}>
                                    <path fillRule="evenodd" d={icon.path} clipRule="evenodd" />
                                </svg>
                                <span className="sr-only">{icon.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

const sections = [
    {
        title: "Company",
        links: [
            { text: "About", href: "#" },
            { text: "Careers", href: "#" },
            { text: "Brand Center", href: "#" },
            { text: "Blog", href: "#" },
        ],
    },
    {
        title: "Help Center",
        links: [
            { text: "Discord Server", href: "#" },
            { text: "Twitter", href: "#" },
            { text: "Facebook", href: "#" },
            { text: "Contact Us", href: "#" },
        ],
    },
    {
        title: "Legal",
        links: [
            { text: "Privacy Policy", href: "#" },
            { text: "Licensing", href: "#" },
            { text: "Terms & Conditions", href: "#" },
        ],
    },
    {
        title: "Download",
        links: [
            { text: "iOS", href: "#" },
            { text: "Android", href: "#" },
            { text: "Windows", href: "#" },
            { text: "MacOS", href: "#" },
        ],
    },
];

const socialIcons = [
    {
        label: "Facebook page",
        href: "#",
        viewBox: "0 0 8 19",
        path: "M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z",
    },
    {
        label: "Discord community",
        href: "#",
        viewBox: "0 0 21 16",
        path: "M16.942  1.556a16.3 16.3 0 0 0-4.126-1.3  12.04 12.04 0 0 0-.529 1.1...",
    },
];

export default Footer;
