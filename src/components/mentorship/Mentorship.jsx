import React, { useState } from 'react';
import Sidebar from '../sidebar';

// Sample Mentor Data
const mentorData = [
    {
        name: 'Alex Patel',
        title: 'Software Engineer',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        description: 'Expert in cloud technologies and agile methodologies.',
        details: 'Over 7 years of experience in full-stack development and cloud architecture. Helps students transition to successful tech careers.',
      },
      {
        name: 'Priya Shah',
        title: 'Cybersecurity Consultant',
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
        description: 'Professional in data protection and network security.',
        details: 'Specializes in risk management and data breach prevention. Offers a unique perspective on cybersecurity careers.',
      },
      {
        name: 'Ravi Desai',
        title: 'Full-Stack Developer',
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        description: 'Enthusiastic about modern web applications and mentoring.',
        details: 'Creates enterprise-level applications using JavaScript frameworks and mentoring best practices.',
      },
      {
        name: 'Jinal Mehta',
        title: 'Data Scientist',
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
        description: 'Passionate about machine learning and big data analytics.',
        details: 'Works on AI-driven solutions for businesses, helping students explore data science careers.',
      },
      {
        name: 'Kunal Trivedi',
        title: 'DevOps Engineer',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
        description: 'Expert in CI/CD pipelines and cloud automation.',
        details: 'Helps companies streamline their development processes with Kubernetes and AWS.',
      },
      {
        name: 'Mansi Patel',
        title: 'Product Manager',
        image: 'https://randomuser.me/api/portraits/women/6.jpg',
        description: 'Brings ideas to life through agile product development.',
        details: 'Specializes in UX research, market strategy, and cross-functional team leadership.',
      },
      {
        name: 'Rahul Bhatt',
        title: 'Embedded Systems Engineer',
        image: 'https://randomuser.me/api/portraits/men/7.jpg',
        description: 'Specialist in IoT and microcontroller programming.',
        details: 'Develops smart hardware solutions and mentors students in embedded tech.',
      },
      {
        name: 'Sneha Joshi',
        title: 'AI/ML Engineer',
        image: 'https://randomuser.me/api/portraits/women/8.jpg',
        description: 'Transforming industries through artificial intelligence.',
        details: 'Builds deep learning models for finance and healthcare applications.',
      },
      {
        name: 'Harsh Vora',
        title: 'Blockchain Developer',
        image: 'https://randomuser.me/api/portraits/men/9.jpg',
        description: 'Advocate for decentralized applications and Web3.',
        details: 'Develops smart contracts and NFT platforms while educating others on blockchain technology.',
      },];

function Mentorship() {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Handle mentor selection for detailed view
  const handleMentorClick = (mentor) => {
    setSelectedMentor(mentor);
  };

  // Filter mentors based on the search term
  const filteredMentors = mentorData.filter(mentor =>
    mentor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex md:flex-row h-screen bg-gray-50">
      
            <Sidebar />
       
        {/* Main Content */}
        <div className="flex-1 ml-4 overflow-y-auto p-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-blue-400 to-blue-600 h-[85vh] flex items-center relative">
  {/* Background Image Overlay */}
  <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: 'url(hero-bg.jpg)' }} />
  
  {/* Content Container */}
  <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-16 relative z-10 space-y-6 lg:space-y-0">
    
    {/* Text Content */}
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
        Unlock Your Potential<br />
        <span className="text-yellow-300">with GTU Mentorship</span>
      </h1>
      <p className="mt-3 max-w-md mx-auto lg:mx-0 text-lg text-gray-200">
        Connect with experienced alumni to gain insights and guidance for your career journey.
      </p>
      <div className="mt-5">
        <a
          href="#find-mentor"
          className="px-6 py-3 text-lg font-semibold text-white bg-yellow-500 rounded-md transition duration-200 ease-in-out hover:bg-yellow-600 shadow-md transform hover:scale-105"
          aria-label="Find a Mentor"
        >
          Find Your Mentor
        </a>
      </div>
    </div>

    {/* Image Section */}
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
      <img
        src="./mentor.png"
        alt="GTU Alumni Mentorship"
        className="w-full max-w-md lg:max-w-lg object-cover rounded-lg shadow-lg"
        loading="lazy"
        aria-hidden="true"
      />
    </div>
  </div>
</section>


         {/* Search Functionality */}
<section className="mt-16 px-6 py-12 bg-gradient-to-r from-blue-50 to-gray-100 rounded-2xl shadow-xl">
  <div className="max-w-screen-lg mx-auto text-center">
    <h2 className="mb-6 text-4xl font-extrabold text-gray-800">
      🔍 Find Your Mentor
    </h2>
    <p className="mb-6 text-lg text-gray-600">
      Search for experienced mentors by name and connect for guidance.
    </p>

    {/* Search Input */}
    <div className="relative mx-auto max-w-md">
      <input
        type="text"
        placeholder="Search by Name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-5 py-3 w-full border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        aria-label="Search for mentors"
      />
      <span className="absolute inset-y-0 right-4 flex items-center text-gray-500">
        🔎
      </span>
    </div>

    {/* Mentor Cards */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredMentors.length > 0 ? (
        filteredMentors.map((mentor, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow-lg transition duration-300 transform hover:shadow-2xl hover:-translate-y-2 border border-gray-200"
            onClick={() => handleMentorClick(mentor)}
          >
            <h3 className="text-2xl font-semibold text-gray-900">{mentor.name}</h3>
            <p className="mt-1 text-blue-600 font-medium">{mentor.title}</p>
            <p className="mt-3 text-gray-600 text-sm">{mentor.description}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500 col-span-full mt-6 text-lg">No mentors found. Try a different name.</p>
      )}
    </div>
  </div>
</section>


          {/* Why Mentorship Section */}
          <section className="mt-20 px-6 py-12 bg-gray-100 rounded-lg shadow-md">
            <div className="max-w-screen-lg mx-auto text-center">
              <h2 className="mb-6 text-5xl font-bold text-gray-900">
                Why <mark className="px-2 text-white bg-blue-600 rounded-sm">Mentorship</mark> Matters
              </h2>
              <p className="text-lg font-normal text-gray-600 mb-12">
                Discover the power of mentorship and how it can guide you in your career path.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: 'Career Growth', description: 'Mentored professionals are 5x more likely to secure leadership roles.' },
                  { title: 'Networking & Access', description: '80% of job opportunities come from networking with established professionals.' },
                  { title: 'Real World Skills', description: 'Gain practical knowledge that complements your academic studies.' },
                  { title: 'Personalized Guidance', description: 'Get tailored advice to navigate career challenges.' },
                  { title: 'Confidence Boost', description: 'Mentorship empowers you to embrace new challenges.' },
                  { title: 'Lifelong Connections', description: 'Build a network of mentors as you progress in your career.' },
                ].map((card, index) => (
                  <div key={index} className="p-6 bg-gradient-to-br from-blue-300 to-blue-600 text-white rounded-xl shadow-lg transition-all duration-300 transform hover:shadow-2xl hover:scale-105">
                    <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
<hr />
         {/* Meet Our Alumni Mentors Section */}
<section id="find-mentor" className="py-16 bg-gradient-to-b from-blue-50 to-gray-100 rounded-2xl shadow-xl">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-5xl font-extrabold text-gray-900 mb-8">
       Explore Our Alumni Mentors
    </h2>
    <p className="text-lg text-gray-600 mb-12">
      Connect with experienced alumni who can guide you on your career path.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {mentorData.map((mentor, index) => (
        <div 
          key={index} 
          className="relative bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <a href="#" className="block" onClick={() => handleMentorClick(mentor)}>
            <div className="w-full h-40 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            <img 
              className="rounded-full w-32 h-32 object-cover border-4 border-white mx-auto -mt-16 transition-transform duration-300 hover:scale-110" 
              src={mentor.image} 
              alt={mentor.name} 
            />
          </a>
          <div className="p-6 text-center">
            <h5 className="mb-2 text-2xl font-bold text-gray-900">{mentor.name}</h5>
            <p className="mb-2 text-blue-600 font-medium">{mentor.title}</p>
            <p className="mb-4 text-gray-700 text-sm">{mentor.description}</p>
            <button
              onClick={() => handleMentorClick(mentor)}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:opacity-90 transition-all duration-300"
              aria-label={`Connect with ${mentor.name}`}
            >
              🤝 Connect Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Selected Mentor Profile Modal */}
{selectedMentor && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 backdrop-blur-md">
    <div className="bg-white rounded-xl shadow-xl max-w-lg mx-auto p-6 text-center transform transition-all duration-300 scale-95 hover:scale-100">
      <h3 className="text-3xl font-bold text-gray-900">{selectedMentor.name}</h3>
      <p className="text-blue-600 font-medium">{selectedMentor.title}</p>
      <img 
        className="rounded-full w-36 h-36 object-cover mx-auto mt-4 border-4 border-gray-200 transition-transform duration-300 hover:scale-110" 
        src={selectedMentor.image} 
        alt={selectedMentor.name} 
      />
      <p className="mt-4 text-gray-700">{selectedMentor.details}</p>
      <div className="mt-6">
        <button 
          onClick={() => setSelectedMentor(null)} 
          className="px-5 py-3 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all duration-300"
        >
          ❌ Close
        </button>
      </div>
    </div>
  </div>
)}

        </div>
      </div>
    </>
  );
}

export default Mentorship;