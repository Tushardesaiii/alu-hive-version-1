import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

import NewsCard from "./Newscard";




const suggestionsData = [
    "Amin Prachi ",
"Angela Seloanyane",
"Angelo Amiro Jalane",
"Anuj Dhameja",
"Arjunsinh Gohil",
"Aryan Mehta",
"Bansari Darji",
"Bhargav Dave",
"Bhatt Kandarp ",
"Bhavya Shah",
"Chaudhary Kunjankumar ",
"Chaudhary Chahal ",
"Chauhan Veny ",
"Chavada Dhruvi ",
"Desai Tushar",
"Dhyey Chavda",
"Disha Goswami",
"Gajjar Lajja ",
"Herin  Barot",
"Hadia Shyama ",
"Hanee Nayak",
"Harsh Parikh",
"Harshil Kela",
"Hirapara Divyesh ",
"Khanjan  Shah",
"Khayalethu Shoba",
"Kinjal Mistry",
"Krishna  Gohil",
"Meet Prajapati",
"Nandani  Jaiswal",
"Oza Parth ",
"Patel Jinay ",
"Patel Yatri",
"Panchal Vrinda",
"Parmar Shivam ",
"Patel Dev ",
"Patel Dhvanit ",
"Patel Divy ",
"Patel Moksh ",
"Patil Harsh ",
"Pragny Dave",
"Prajapati Ayush ",
"Prajapati Pradhyuman ",
"Pratim Nag",
"Prince Butani",
"Prit Mevada",
"Priyanshi Panchal",
"Rana Heta ",
"Rabari Ayushi ",
"Rami Slok ",
"Rushi Bhatt",
"Shah Krish ",
"Sheth Utkarsh ",
"Sneha Maheria",
"Saravadiya Jasmin ",
"Savan Kathiriya",
"Senjaliya Drashti",
"Shah Khanjan ",
"Shamit Dave",
"Solanki Karan ",
"Surati Manan ",
"Thakkar Jaykumar ",
"Thummar Vaibhavi ",
"Tirth Vadhvana",
"Viramgama Bhavin ",
"Vishwa Brahmbhatt",
"Vivek Kavaiya",
"Vivek Yadav",
"Yola Macitela dos Reis Pequenino"

];

const degreesOptions = ["B.E.", "M.E.", "MBA", "MCA", "Ph.D."];
const branchesOptions = ["Computer-07", "Mechanical", "Civil", "Electrical"];
const graduationYears = Array.from({ length: 23 }, (_, i) => (2000 + i).toString());
const institutes = ["L. D. College of Engineering (LDCE), Ahmedabad",
    "Vishwakarma Government Engineering College (VGEC), Ahmedabad",
    "Sardar Vallabhbhai Patel Institute of Technology (SVIT), Vasad",
    "Government Engineering College (GEC), Gandhinagar",
    "L. J. Institute of Engineering and Technology, Ahmedabad",
    "S. P. B. Patel Engineering College (Saffrony Institute of Technology Campus), Mehsana",
    "Shantilal Shah Engineering College, Bhavnagar",
    "Lukhdhirji Engineering College, Morbi",
    "Gandhinagar Institute of Technology (GIT), Gandhinagar",
    "Government Engineering College (GEC), Rajkot",
    "School of Engineering and Technology-GTU, Ahmedabad"];
    

const Contentpage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState({
        degree: "",
        branch: "",
        graduationYear: "",
        institute: "",
    });

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        setSuggestions(
            value ? suggestionsData.filter((item) => item.toLowerCase().includes(value.toLowerCase())) : []
        );
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setSelectedFilters((prev) => ({ ...prev, [name]: value }));
        setSuggestions([]);
    };

    const handleResetFilters = () => {
        setSelectedFilters({ degree: "", branch: "", graduationYear: "", institute: "" });
        setSearchQuery("");
        setSuggestions([]);
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchQuery(suggestion);
        setSuggestions([]);
    };

    const handleFilterRemove = (key) => {
        setSelectedFilters((prev) => ({ ...prev, [key]: "" }));
    };

    return (  <>
       
            <h2 className="text-center text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                Search For The Specific Alumni
            </h2>
            {/* Search Bar */}
            <div className="relative w-full mb-4">
                <div className="flex items-center border border-gray-300 rounded-lg shadow-sm">
                    <AiOutlineSearch className="absolute left-3 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search for alumni, companies, or skills..."
                        value={searchQuery}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 focus:ring-0 focus:border-blue-500 border-none outline-none rounded-lg"
                    />
                </div>
                {suggestions.length > 0 && (
                    <ul className="absolute bg-white shadow-lg w-full mt-1 max-h-60 overflow-y-auto border rounded-md z-10">
                        {suggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Filters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-4">
                {["degree", "branch", "graduationYear", "institute"].map((filter) => (
                    <select
                        key={filter}
                        name={filter}
                        value={selectedFilters[filter]}
                        onChange={handleFilterChange}
                        className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 w-full"
                    >
                        <option value="">{filter.charAt(0).toUpperCase() + filter.slice(1)}</option>
                        {filter === "degree" &&
                            degreesOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        {filter === "branch" &&
                            branchesOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        {filter === "graduationYear" &&
                            graduationYears.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        {filter === "institute" &&
                            institutes.map((inst) => (
                                <option key={inst} value={inst}>
                                    {inst}
                                </option>
                            ))}
                    </select>
                ))}
            </div>

            {/* Applied Filters */}
            <div className="flex flex-wrap gap-2 mb-4">
                {Object.entries(selectedFilters).map(([key, value]) =>
                    value ? (
                        <div key={key} className="flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                            {value}
                            <AiOutlineClose onClick={() => handleFilterRemove(key)} className="ml-2 cursor-pointer text-blue-600" />
                        </div>
                    ) : null
                )}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center w-full">
                <button
                    onClick={() => console.log("Search initiated with query:", searchQuery)}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                    Search
                </button>
                <button onClick={handleResetFilters} className="text-blue-600 hover:underline">
                    Reset Filters
                </button>
            </div>

            <hr className="border-gray-300 my-6" />
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Ongoing Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <NewsCard
    title="GTU Startup & Innovation Summit"
    description="A grand event where GTU alumni showcase their startups, exchange entrepreneurial insights, and explore funding opportunities."
    image="https://tse1.mm.bing.net/th?id=OIP.T9wjt6p3-6G_LYukiY2pIwHaFj&pid=Api" // Startup event image
    buttonText="Explore More"
    onClick={() => alert("GTU Startup Summit Clicked!")}
                                                        />

            <NewsCard
    title="GTU Leadership & Career Guidance Panel"
    description="Hear from accomplished GTU alumni as they share industry trends, career tips, and leadership experiences to inspire the next generation."
    image="https://tse3.mm.bing.net/th?id=OIP.hQlKImbYIz17sveta7uV2QHaE8&pid=Api" // Leadership panel image
    buttonText="Join the Session"
    onClick={() => alert("Leadership Panel Clicked!")}
                                                        /> 

            <NewsCard      
    title="GTU Alumni Meet 2025 - Ahmedabad"
    description="Gather with fellow GTU graduates for a memorable evening of networking, sharing success stories, and reconnecting with old friends."
    image="https://tse2.mm.bing.net/th?id=OIP.y6CQwiaxYpn29vmch099wAHaEK&pid=Api" // Alumni event image
    buttonText="Know More"
    onClick={() => alert("GTU Alumni Meet Clicked!")}
                                                        />
           




                
            </div>
               

        <div className="bg-gray-100 rounded-lg p-4 shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Recent News</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                       
            <NewsCard
    title="GTU Alumnus Secures ₹5 Cr Funding for AI Startup!"
    description="GTU alumnus Rahul Mehta’s AI-powered analytics startup has raised ₹5 Cr in Series A funding. Discover how GTU shaped his journey."
    image="./card1.jpg"
    buttonText="Read More"
    onClick={() => alert('Opening Funding News')}
/>

<NewsCard
    title="GTU Alumni-Led Startup Hiring Fresh Talent!"
    description="Fast-growing GTU alumni startups are hiring! Explore career opportunities with some of the most innovative companies."
    image="./card2.jpg"
    buttonText="Apply Now"
    onClick={() => alert('Opening Job Listings')}
/>

<NewsCard
    title="GTU Alumni Achievements: From Campus to CEO"
    description="Discover the inspiring journeys of GTU alumni who started from campus and are now leading multinational companies."
    image="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800"
    buttonText="Read Their Stories"
    onClick={() => alert('Opening Alumni Achievements')}
/>
  
                       
                       
                       
                       
                         </div>
         
        </div>
        </>
    );
}

export default Contentpage;