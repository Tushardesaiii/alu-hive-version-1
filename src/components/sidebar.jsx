import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    const [isMoreOpen, setIsMoreOpen] = useState(false);

    return (
        <div className="w-full md:w-64 bg-gradient-to-r from-black via-gray-900 to-black border-b dark:bg-gray-900/80 text-white shadow-lg flex-shrink-0 ">
           
            <ul className="flex flex-col p-4 space-y-2">
                <li>
                <div className="p-5">
                <h2 className="font-semibold text-xl  block opacity-100 visible text-inherit">
 Navigate here
</h2>


            </div>
                    <Link className="flex items-center px-4 py-2 rounded-lg transition duration-300 hover:bg-gray-700" to="/dashboard">
                        <span className="mr-2"></span> Home
                    </Link>
                </li>
                <li>
                    <Link className="flex items-center px-4 py-2 rounded-lg transition duration-300 hover:bg-gray-700" to="/mentorship">
                        <span className="mr-2"></span> Mentorship
                    </Link>
                </li>
                <li>
                    <Link className="flex items-center px-4 py-2 rounded-lg transition duration-300 hover:bg-gray-700" to="/internship-job">
                        <span className="mr-2"></span> Internship/Job
                    </Link>
                </li>
                <li>
                    <Link className="flex items-center px-4 py-2 rounded-lg transition duration-300 hover:bg-gray-700" to="/donation">
                        <span className="mr-2"></span> Donation
                    </Link>
                </li>
                <li>
                    <Link className="flex items-center px-4 py-2 rounded-lg transition duration-300 hover:bg-gray-700" to="/events">
                        <span className="mr-2"></span> Events (coming soon)
                    </Link>
                </li>
                <li>
                    <Link className="flex items-center px-4 py-2 rounded-lg transition duration-300 hover:bg-gray-700" to="/complprofile">
                        <span className="mr-2"></span> My Profile
                    </Link>
                </li>
                <li className="flex justify-between items-center cursor-pointer px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-lg" onClick={() => setIsMoreOpen(!isMoreOpen)}>
                    <span className="flex items-center">
                        <span className="mr-2"></span> More
                    </span>
                    <span className={`transform transition-transform ${isMoreOpen ? "rotate-180" : ""}`}>▼</span>
                </li>
                {isMoreOpen && (
                    <ul className="pl-5 pt-2 transition-all duration-300">
                        <li>
                            <Link className="block text-gray-300 hover:bg-gray-700 rounded-lg px-3 py-1 transition duration-300" to="/inbox">
                                <span className="mr-2"></span> Inbox
                            </Link>
                        </li>
                        <li>
                            <Link className="block text-gray-300 hover:bg-gray-700 rounded-lg px-3 py-1 transition duration-300" to="/trash">
                                <span className="mr-2"></span> Trash
                            </Link>
                        </li>
                        <li>
                            <Link className="block text-gray-300 hover:bg-gray-700 rounded-lg px-3 py-1 transition duration-300" to="/settings">
                                <span className="mr-2"></span> Settings
                            </Link>
                        </li>
                    </ul>
                )}
                <hr className="my-3 border-gray-600" />
                <li>
                    <Link className="flex items-center px-4 py-2 text-red-400 hover:bg-red-600/30 rounded-lg transition duration-300" to="/logout">
                        <span className="mr-2"></span> Logout
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;