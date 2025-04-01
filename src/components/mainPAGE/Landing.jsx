import React from "react";
import Sidebar from "../sidebar";
import MegaSearch from "../MegaSearch";
import Contentpage from "../Contentpage";

function Landing() {
    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100">
            {/* Sidebar on the left */}
            <Sidebar />

            <div className="flex-1 flex flex-col">
                {/* Search bar at the top */}
                

                {/* Main content area */}
                <div className="flex-1 p-4 md:p-6 overflow-auto">
                    <Contentpage />
                </div>
            </div>
        </div>
    );
}

export default Landing;