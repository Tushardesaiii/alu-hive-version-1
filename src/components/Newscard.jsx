import React from "react";

const NewsCard = ({ title, description, image, buttonText, onClick }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                <p className="text-gray-600 mt-2">{description}</p>
                <button
                    onClick={onClick}
                    className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-600"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default NewsCard;