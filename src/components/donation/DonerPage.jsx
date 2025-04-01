
import { FaShareAlt, FaHeart, FaRegHeart } from 'react-icons/fa';

import React, { useState } from "react";

import Sidebar from '../sidebar';


const Donerpage = () => {
  const [donationAmount, setDonationAmount] = useState(1000);
  const [isRecurring, setIsRecurring] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
  const [hearts, setHearts] = useState(new Array(3).fill(false));

  const donationProjects  = [
    {


      id: 1,
      name: "AI-Powered Learning Assistant for Rural Students",
      description: "A group of final-year GTU students is building an AI-powered chatbot to provide 24/7 educational support for underprivileged students in rural areas. They need funding for cloud storage, AI training models, and deployment costs.",
      fundingGoal: 60000,
      amountRaised: 35000,
      image: "https://images.pexels.com/photos/4145355/pexels-photo-4145355.jpeg",
    },
    {
      id: 2,
      name: "Affordable Prosthetic Limbs Using 3D Printing",
      description: "A biomedical engineering student at GTU has designed low-cost, 3D-printed prosthetic limbs for disabled individuals. With funding, he can manufacture and distribute these life-changing devices.",
      fundingGoal: 80000,
      amountRaised: 42000,
      image: "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg",
    },
    {
      id: 3,
      name: "Smart Irrigation System for Farmers",
      description: "An electrical engineering student is developing an IoT-based smart irrigation system that conserves water and increases crop yield. The project needs funding for hardware components and real-world testing in Gujarat’s farms.",
      fundingGoal: 50000,
      amountRaised: 30000,
      image: "https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg",
    },
    {
      id: 4,
      name: "Solar-Powered Electric Rickshaw",
      description: "A team of GTU mechanical students is designing a solar-powered rickshaw to reduce pollution and provide an affordable, eco-friendly alternative for public transport.",
      fundingGoal: 90000,
      amountRaised: 50000,
      image: "https://picsum.photos/600/400?random=1",   },
    {
      id: 5,
      name: "Mental Health Support App for Students",
      description: "A GTU computer science student is developing a mental health app that connects students with professional counselors and AI-driven mindfulness techniques.",
      fundingGoal: 55000,
      amountRaised: 25000,
      image: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg",
    },
  ];
  
  const handleDonationAmountChange = (e) => {
    const value = parseInt(e.target.value);
    setCustomAmount(e.target.value);
    if (!isNaN(value)) {
      setDonationAmount(value);
    }
  };

  const handleHeartClick = (index) => {
    const updatedHearts = hearts.map((heart, i) => (i === index ? !heart : heart));
    setHearts(updatedHearts);
  };
  return (
    
    <div className="flex md:flex-row h-screen bg-gray-50">
      
            <Sidebar />
       
        {/* Main Content */}
        <div className="flex-1 ml-4 overflow-y-auto p-1">
  
    {/* Main Content (Margin to Avoid Overlapping Sidebar) */}
    <div className="flex-1 ml-3  overflow-y-auto">
    <div className="bg-gray-100 min-h-screen px-4 lg:px-16 py-8">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg mb-8">
        <h1 className="text-3xl font-bold text-blue-600">GTU Crowdfunding Platform</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300">
          Donate Now
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative bg-blue-600 rounded-lg shadow-lg mb-8 p-8 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Empower Dreams, Transform Futures!</h2>
        <p className="mb-6">Your support fuels student innovations, breakthroughs, and success stories. Join us in shaping the future!</p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg shadow-lg transition duration-300">
          Be a Changemaker
        </button>
      </section>

      {/* Donation Projects Section */}
      <section className="px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Support Inspiring Student Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {donationProjects.map((project, index) => (
            <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    {hearts[index] ? (
                      <FaHeart className="text-red-500 cursor-pointer" onClick={() => handleHeartClick(index)} />
                    ) : (
                      <FaRegHeart className="text-gray-400 cursor-pointer" onClick={() => handleHeartClick(index)} />
                    )}
                    <span className="ml-2 text-sm text-gray-500">Like this project</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    ₹{project.amountRaised.toLocaleString()} / ₹{project.fundingGoal.toLocaleString()}
                  </span>
                </div>

                <div className="bg-gray-300 rounded-full h-2 mb-4">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(project.amountRaised / project.fundingGoal) * 100}%` }}
                  />
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300">
                  Donate Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Search and Donate by Institute Section */}
      <section className="bg-white rounded-lg shadow-md p-8 mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Find and Support Your Institute</h2>
        <p className="text-center text-gray-600 mb-6">Search for a specific GTU college or institute and contribute directly to its projects.</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter institute name..."
            className="w-full md:w-2/3 px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition duration-300">
            Search
          </button>
        </div>
        <div className="text-center">
          <p className="text-gray-700">Can't find your institute? Reach out to request its addition.</p>
        </div>
      </section>

      {/* Make a Donation Section */}
      <section className="bg-white rounded-lg shadow-md p-8 mt-10">
  <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
    Your Support Transforms Lives
  </h2>
  <p className="text-center text-gray-600 mb-6">
    Every donation helps students innovate, learn, and achieve their dreams. Choose how you'd like to contribute!
  </p>

  <div className="flex flex-col md:flex-row md:justify-between mb-6">
    {/* Donation Amount Selection */}
    <div className="w-full md:w-1/2">
      <h3 className="text-lg font-semibold mb-3 text-gray-700">Choose Your Impact</h3>
      <div className="flex items-center flex-wrap gap-3">
        {[1000, 2000, 5000].map((amount) => (
          <button
            key={amount}
            className={`px-4 py-2 rounded-md transition duration-300 ${
              donationAmount === amount ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => {
              setDonationAmount(amount);
              setCustomAmount('');
            }}
          >
            ₹{amount}
          </button>
        ))}
        <input
          type="number"
          value={customAmount}
          onChange={handleDonationAmountChange}
          placeholder="Custom Amount"
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md w-28"
        />
      </div>
    </div>

    {/* Payment Methods */}
    <div className="w-full md:w-1/2 mt-6 md:mt-0">
      <h3 className="text-lg font-semibold mb-3 text-gray-700">Select Payment Method</h3>
      <div className="grid grid-cols-2 gap-4">
        {["Credit Card", "Debit Card", "PayPal", "UPI"].map((method) => (
          <button
            key={method}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md transition duration-300"
          >
            {method}
          </button>
        ))}
      </div>
    </div>
  </div>

  {/* Donate Button */}
  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 w-full">
    Contribute Now & Make an Impact
  </button>
</section>


</div>
      
    </div>
    </div>
</div>


  );
};

export default Donerpage;