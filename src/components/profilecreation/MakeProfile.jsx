import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload, FiX } from "react-icons/fi";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore"; // Firestore SDK must be initialized
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Storage SDK must be initialized

const MakeProfile = () => {
    const [progress, setProgress] = useState(0);
    const [profileImage, setProfileImage] = useState(null);
    const [role, setRole] = useState('Student');
    const [profileData, setProfileData] = useState({
        fullName: '',
        email: '',
        enrollmentNumber: '',
        collegeName: '',
        degree: '',
        branch: '',
        batch: '',
        isPublic: true,
        skills: '',
        interests: '',
        graduationYear: '',
        currentCompany: '',
        jobTitle: '',
        workLocation: '',
        linkedIn: '',
        achievements: '',
        expectedGraduationYear: '',
        internshipExperience: '',
        lookingForJob: false,
        preferredCompanies: '',
        githubProfile: '',
        bio: ''  // Added the bio field per your earlier structure.
    });

    // Firestore and Storage References
    const db = getFirestore();
    const storage = getStorage();

    const { getRootProps, getInputProps } = useDropzone({
        accept: { "image/*": [".jpeg", ".jpg", ".png"] },
        maxSize: 5242880,
        onDrop: (acceptedFiles) => {
            const file = acceptedFiles[0];
            setProfileImage(Object.assign(file, {
                preview: URL.createObjectURL(file)
            }));
        }
    });

    useEffect(() => {
        // Fetch existing user data from Firestore when the component loads
        const fetchUserData = async () => {
            const userId = "USER_ID"; // Replace with dynamic user ID
            const userDoc = doc(db, "users", userId);
            const userSnapshot = await getDoc(userDoc);
            if (userSnapshot.exists()) {
                const data = userSnapshot.data();
                setProfileData(data);
                if (data.profileImage) {
                    setProfileImage({ preview: data.profileImage });
                }
            } else {
                console.error("No such document!");
            }
        };
        fetchUserData();
    }, [db]);

    useEffect(() => {
        calculateProgress();
        return () => {
            if (profileImage) {
                URL.revokeObjectURL(profileImage.preview);
            }
        };
    }, [profileData, profileImage]);

    const calculateProgress = () => {
        const fields = Object.values(profileData).filter(value => value !== "").length;
        const totalFields = Object.keys(profileData).length;
        const imageScore = profileImage ? 1 : 0;
        setProgress(Math.round(((fields + imageScore) / (totalFields + 1)) * 100));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleRoleChange = (e) => {
        const selectedRole = e.target.value;
        setRole(selectedRole);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = "USER_ID"; // Replace with dynamic user ID
        try {
            // Upload profile image to Firebase Storage
            if (profileImage) {
                const storageRef = ref(storage, `profileImages/${userId}`);
                await uploadBytes(storageRef, profileImage);
                const downloadURL = await getDownloadURL(storageRef);
                profileData.profileImage = downloadURL;  // Add the download URL to profile data
            }
            // Save profile data to Firestore
            const userDoc = doc(db, "users", userId);
            await updateDoc(userDoc, profileData);
            alert('Profile updated successfully!'); // Handle success message
        } catch (error) {
            alert(`Error updating profile: ${error.message}`); // Better error handling
        }
    };

    return (
        <>
            <br />
            <div
                className="min-h-screen bg-cover bg-no-repeat"
                style={{
                    backgroundImage: "url('./loginbg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backdropFilter: "blur(8px)"
                }}
            >
                <br />
                <div className="flex items-center justify-center min-h-screen">
                    <div className="max-w-3xl w-full mx-auto bg-white rounded-xl shadow-lg p-8">
                        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center"> Let's Get Started with your Profile</h1>
                        <form onSubmit={handleSubmit}>
                            {/* Progress Bar */}
                            <div className="mb-8">
                                <div className="relative pt-1">
                                    <div className="flex mb-2 items-center justify-between">
                                        <div>
                                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                                Progress
                                            </span>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xs font-semibold inline-block text-blue-600">
                                                {progress}%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                                        <div
                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-500"
                                            style={{ width: `${progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>

                            {/* Role Selection */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700">Role</label>
                                <select
                                    value={role}
                                    onChange={handleRoleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="Student">Student</option>
                                    <option value="Alumni">Alumni</option>
                                </select>
                            </div>

                            {/* Personal Information */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={profileData.fullName}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Profile Image Upload */}
                            <div className="mb-6">
                                <div {...getRootProps()} className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:border-blue-500 transition-colors">
                                    <input {...getInputProps()} />
                                    <div className="space-y-1 text-center">
                                        {profileImage ? (
                                            <div className="relative">
                                                <img
                                                    src={profileImage.preview}
                                                    alt="Preview"
                                                    className="mx-auto h-32 w-32 rounded-full object-cover border-4 border-white"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setProfileImage(null);
                                                    }}
                                                    className="absolute top-0 right-0 -mr-2 -mt-2 bg-red-500 text-white rounded-full p-1"
                                                >
                                                    <FiX className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ) : (
                                            <>
                                                <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
                                                <p>Drag & drop or click to upload profile picture</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Other Profile Inputs */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={profileData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700">Bio</label>
                                <textarea
                                    name="bio"
                                    value={profileData.bio}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700">Enrollment Number</label>
                                <input
                                    type="text"
                                    name="enrollmentNumber"
                                    value={profileData.enrollmentNumber}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700">College Name</label>
                                <input
                                    type="text"
                                    name="collegeName"
                                    value={profileData.collegeName}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700">Degree & Branch</label>
                                <select
                                    name="degree"
                                    value={profileData.degree}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">Select Degree</option>
                                    <option value="B.Tech">B.Tech</option>
                                    <option value="M.Tech">M.Tech</option>
                                    <option value="MBA">MBA</option>
                                </select>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700">Batch</label>
                                <input
                                    type="text"
                                    name="batch"
                                    value={profileData.batch}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Profile Visibility */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700">Profile Visibility</label>
                                <div className="mt-1">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="isPublic"
                                            value={true}
                                            checked={profileData.isPublic === true}
                                            onChange={() => handleInputChange({ target: { name: 'isPublic', value: true } })}
                                            className="form-radio text-blue-600"
                                        />
                                        <span className="ml-2">Public</span>
                                    </label>
                                    <label className="inline-flex items-center ml-4">
                                        <input
                                            type="radio"
                                            name="isPublic"
                                            value={false}
                                            checked={profileData.isPublic === false}
                                            onChange={() => handleInputChange({ target: { name: 'isPublic', value: false } })}
                                            className="form-radio text-blue-600"
                                        />
                                        <span className="ml-2">Private</span>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700">Skills & Interests</label>
                                <input
                                    type="text"
                                    name="skills"
                                    value={profileData.skills}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Additional Fields for GTU Alumni */}
                            {role === 'Alumni' && (
                                <>
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700">Graduation Year</label>
                                        <input
                                            type="text"
                                            name="graduationYear"
                                            value={profileData.graduationYear}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700">Current Company</label>
                                        <input
                                            type="text"
                                            name="currentCompany"
                                            value={profileData.currentCompany}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700">Job Title / Role</label>
                                        <input
                                            type="text"
                                            name="jobTitle"
                                            value={profileData.jobTitle}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700">Work Location</label>
                                        <input
                                            type="text"
                                            name="workLocation"
                                            value={profileData.workLocation}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700">LinkedIn Profile</label>
                                        <input
                                            type="text"
                                            name="linkedIn"
                                            value={profileData.linkedIn}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700">Professional Achievements</label>
                                        <textarea
                                            name="achievements"
                                            value={profileData.achievements}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </>
                            )}

                            {/* Additional Fields for Current/Future Students */}
                            {role === 'Student' && (
                                <>
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700">Expected Graduation Year</label>
                                        <input
                                            type="text"
                                            name="expectedGraduationYear"
                                            value={profileData.expectedGraduationYear}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700">Internship/Work Experience</label>
                                        <input
                                            type="text"
                                            name="internshipExperience"
                                            value={profileData.internshipExperience}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700">Looking for Internship/Job?</label>
                                        <div className="mt-1">
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    name="lookingForJob"
                                                    value="true"
                                                    checked={profileData.lookingForJob === true}
                                                    onChange={() => handleInputChange({ target: { name: 'lookingForJob', value: true } })}
                                                    className="form-radio text-blue-600"
                                                />
                                                <span className="ml-2">Yes</span>
                                            </label>
                                            <label className="inline-flex items-center ml-4">
                                                <input
                                                    type="radio"
                                                    name="lookingForJob"
                                                    value="false"
                                                    checked={profileData.lookingForJob === false}
                                                    onChange={() => handleInputChange({ target: { name: 'lookingForJob', value: false } })}
                                                    className="form-radio text-blue-600"
                                                />
                                                <span className="ml-2">No</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700">Preferred Companies</label>
                                        <input
                                            type="text"
                                            name="preferredCompanies"
                                            value={profileData.preferredCompanies}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700">LinkedIn/GitHub Profile</label>
                                        <input
                                            type="text"
                                            name="githubProfile"
                                            value={profileData.githubProfile}
                                            onChange={handleInputChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </>
                            )}

                            <div className="mt-8">
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-700 transition"
                                >
                                    Complete my Profile
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <br />
            </div>
        </>
    );
};

export default MakeProfile;