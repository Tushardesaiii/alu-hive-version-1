

import Sidebar from "../sidebar";

function Job (){
    
    return (
        <>
        <div className="flex md:flex-row h-screen bg-gray-50">
  <div className="w-64 h-full bg-gray-900 shadow-lg overflow-y-auto bg-gradient-to-r from-black via-gray-900 to-black  top-0 left-0 ">
    <Sidebar />
  </div>



      {/* Main Content - Scrollable on the right side */}
      <div className="flex-1  overflow-y-auto ">
                  {/* Hero Section */}
           <section className="bg-white dark:bg-gray-900 py-12">
               <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-16">
                   {/* Left Section - Text Content */}
                   <div className="w-full lg:w-1/2 text-center lg:text-left">
                       <a
                            href="#"
                            className="inline-flex items-center py-1 px-3 pr-4 mb-5 text-sm bg-gray-100 text-gray-700 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            <span className="text-xs bg-blue-600 text-white px-4 py-1.5 rounded-full mr-3">New</span>
                            <span className="text-sm font-medium">
                                Hiring Now! Browse Internships &amp; Jobs.
                            </span>
                        </a>
                        <h1 className="text-4xl font-extrabold leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                            Step into your Future <br /> 
                            <span className="text-blue-600 dark:text-blue-500">With Alu-Hive</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-500 dark:text-gray-400">
                            At Alu-Hive, we connect students with real-world projects,
                            internships, and job opportunities. Our goal is to bridge the gap
                            between learning and industry experience, helping students gain
                            practical skills and kickstart their careers.
                        </p>
                        <div className="mt-6">
                            <a
                                href="#"
                                className="px-6 py-3 text-white bg-blue-700 rounded-lg text-lg font-semibold hover:bg-blue-800 transition"
                            >
                                Post a Job/Internship
                            </a>
                        </div>
                    </div>
                    {/* Right Section - Image */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
                        <img
                            src="JobHero.png"
                            alt="Job Portal"
                            className="w-full max-w-lg object-contain"
                        />
                    </div>
                </div>
            </section>

           {/* Latest Job & Internship Openings Section */}
<section className="py-12 bg-gray-100">
    <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8 text-center relative">
    <span className="bg-gradient-to-r from-blue-500 to-sky-500 text-transparent bg-clip-text">
        Latest Jobs
    </span>
    <span className="block w-full h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
</h2>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Job Card */}
            {[
                 {
                    id: "1",
                    title: "Full Stack Developer",
                    company: "Tech Innovators Pvt. Ltd.",
                    location: "Remote",
                    description: "Looking for a GTU graduate to develop and maintain scalable web applications using React and Node.js. Strong problem-solving skills and teamwork required.",
                    logo: "https://imgs.search.brave.com/WkZu5FFkuIRteqAL5BR_VG6PrBuCV2QHfZOrfNLjBtQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vdXB3b3JrLWNs/b3VkLWFjcXVpc2l0/aW9uLXByb2QvaW1h/Z2UvdXBsb2FkL2Nf/Zml0L2dlbmVyYWwv/bG9nb2Jhci9jb2xv/cmVkL3VuaWxldmVy/LnBuZw",
                },
                {
                    id: "2",
                    title: "AI/ML Engineer",
                    company: "AI Vision Labs",
                    location: "Hybrid",
                    description: "Seeking a GTU student skilled in Python and TensorFlow to work on real-world machine learning applications. Experience with data analysis and deep learning is a plus.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
                },
                {
                    id: "3",
                    title: "Cybersecurity Specialist",
                    company: "SecureNet Solutions",
                    location: "On-site",
                    description: "Hiring a GTU graduate to protect enterprise systems from cyber threats and enhance security protocols. Familiarity with network security tools is essential.",
                    logo: "https://imgs.search.brave.com/oee4ftm_oKwV_bSq03l66PUJ31ZWIvDpWGO2oimsfGQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2hlY2twb2ludC5j/b20vd3AtY29udGVu/dC91cGxvYWRzL3do/YXQtaXMtY3liZXJz/ZWN1cml0eS1pY29u/LmpwZw",
                },
                {
                    id: "4",
                    title: "Digital Marketing Manager",
                    company: "Growth Hackers Inc.",
                    location: "Remote",
                    description: "Seeking a GTU student to lead SEO strategies, content marketing, and brand growth initiatives. Hands-on experience with Google Ads and analytics preferred.",
                    logo: "https://imgs.search.brave.com/lKF1j4LNdFHI0S12xtk8pdFSNceBskt3Bb4GN4jkc5E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/MjgxMTE4MC9waG90/by9kaWdpdGFsLW1h/cmtldGluZy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9cUJ2/MVcyclpaZWRqQm5h/OTRhUjVHREVnc0Vj/bUhyUnBvcUx2Yjcy/N1dlbz0",
                },
                {
                    id: "5",
                    title: "Embedded Systems Engineer",
                    company: "Robotics Tech Solutions",
                    location: "On-site",
                    description: "Looking for a GTU graduate to design and develop IoT and embedded systems for automation and robotics. C/C++ and microcontroller experience required.",
                    logo: "https://imgs.search.brave.com/EbIow9qV6-sJCxrDEepGJmb7wVRjXVlTnYYsFmRXxls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbnNp/Z2h0Z2xvYmFsLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8wMy9IaXJpbmct/YS1OZXR3b3JrLVNl/Y3VyaXR5LUVuZ2lu/ZWVyLUpvYi1EZXNj/cmlwdGlvbi1QYXkt/YW5kLU1vcmUtMzMy/eDI1Ni5wbmc",
                },
                {
                    id: "6",
                    title: "Cloud Solutions Architect",
                    company: "CloudSphere Pvt. Ltd.",
                    location: "Hybrid",
                    description: "Seeking a GTU student to optimize and deploy cloud-based applications with industry-leading technologies. Knowledge of AWS, Azure, or Google Cloud is a must.",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
                }
            ].map((job) => (
                <div key={job.id} className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all">
                    <a href="#">
                        <img
                            className="rounded-t-lg w-full h-48 object-contain p-4"
                            src={job.logo}
                            alt={`${job.company} Logo`}
                        />
                    </a>
                    <div className="p-5">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{job.title}</h5>
                        <p className="mb-1 font-medium text-gray-600">{job.company} • {job.location}</p>
                        <p className="mb-3 font-normal text-gray-700">{job.description}</p>
                        <a
                            href="#"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition"
                        >
                            Apply Now
                            <svg
                                className="ml-1 w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15v4a2 2 0 002 2h14a2 2 0 002-2v-4M12 3v12M6 9h12" />
                            </svg>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>

            <hr />
{/* Internship Openings Section */}
<section className="py-12 bg-gray-100">
    <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8 text-center relative">
    <span className="bg-gradient-to-r from-blue-500 to-sky-500 text-transparent bg-clip-text">
    Internship Openings by GTU Students (Alu-Hive Initiative)
    </span>
    <span className="block w-full h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
</h2>
      

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Internship Card */}
            {[
                {
                    id: "1",
                    title: "Frontend Developer Intern",
                    company: "Alu-Hive (GTU Alumni at StartupX)",
                    location: "Remote",
                    description: "Work on real-world projects using React and Tailwind CSS for a fast-growing startup.",
                    duration: "3 months",
                    stipend: "₹10,000/month (Paid)",
                    mode: "Online",
                    conductor: "Rahul Mehta (Software Engineer at StartupX)",
                    certificate: "Yes",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                },
                {
                    id: "2",
                    title: "Machine Learning Intern",
                    company: "Alu-Hive (GTU Alumni at AI Labs)",
                    location: "Hybrid",
                    description: "Develop and optimize ML models for predictive analytics in finance and healthcare.",
                    duration: "6 months",
                    stipend: "₹15,000/month (Paid)",
                    mode: "Hybrid",
                    conductor: "Sneha Patel (ML Engineer at AI Labs)",
                    certificate: "Yes",
                    logo: "https://tse1.mm.bing.net/th?id=OIP.jNd5Xw6w9ck_jdUvoJTC7gAAAA&pid=Api&P=0&h=180.svg",
                },
                {
                    id: "3",
                    title: "Cybersecurity Analyst Intern",
                    company: "Alu-Hive (GTU Alumni at SecureNet)",
                    location: "On-site",
                    description: "Assist in securing networks and applications by identifying vulnerabilities and conducting penetration testing.",
                    duration: "4 months",
                    stipend: "Unpaid",
                    mode: "Offline",
                    conductor: "Amit Shah (Cybersecurity Analyst at SecureNet)",
                    certificate: "Yes",
                    logo: "https://tse3.mm.bing.net/th?id=OIP.bbEEd54qM4AaajuX0HFlcQHaE7&pid=Api&P=0&h=180",
                },
                {
                    id: "4",
                    title: "VLSI Design Intern",
                    company: "Alu-Hive (GTU Alumni at Silicon Core Technologies)",
                    location: "On-site",
                    description: "Gain hands-on experience in FPGA programming and ASIC design using industry-standard tools.",
                    duration: "6 months",
                    stipend: "₹12,000/month (Paid)",
                    mode: "Offline",
                    conductor: "Priya Shah (VLSI Engineer at Silicon Core Technologies)",
                    certificate: "Yes",
                    logo: "https://i.pinimg.com/originals/46/6b/7d/466b7d440152e89dfe1221d69d18aa46.jpg",
                },
                {
                    id: "5",
                    title: "Embedded Systems Intern",
                    company: "Alu-Hive (GTU Alumni at RoboTech)",
                    location: "On-site",
                    description: "Work on IoT and embedded system projects with real-world hardware integration in automation and robotics.",
                    duration: "5 months",
                    stipend: "₹12,000/month (Paid)",
                    mode: "Offline",
                    conductor: "Vikas Kumar (Embedded Engineer at RoboTech)",
                    certificate: "Yes",
                    logo: "https://thumbs.dreamstime.com/b/embedded-system-icon-white-background-logo-symbol-vector-illustration-microcontroller-chip-code-print-circuit-board-254064610.jpg",
                }
            ].map((internship) => (
                <div key={internship.id} className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all">
                    <a href="#">
                        <img
                            className="rounded-t-lg w-full h-48 object-contain p-4"
                            src={internship.logo}
                            alt={`${internship.company} Logo`}
                        />
                    </a>
                    <div className="p-5">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{internship.title}</h5>
                        <p className="mb-1 font-medium text-gray-600">{internship.company} • {internship.location}</p>
                        <p className="mb-1 font-normal text-gray-700">Duration: {internship.duration}</p>
                        <p className="mb-1 font-normal text-gray-700">Stipend: {internship.stipend}</p>
                        <p className="mb-1 font-normal text-gray-700">Mode: {internship.mode}</p>
                        <p className="mb-1 font-normal text-gray-700">Conductor: {internship.conductor}</p>
                        <p className="mb-3 font-normal text-gray-700">Certificate: {internship.certificate}</p>
                        <p className="mb-3 font-normal text-gray-700">{internship.description}</p>
                        <a
                            href="#"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition"
                        >
                            Apply Now
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>


          

            </div>
            </div>
           
        </>
    );
};




export default Job