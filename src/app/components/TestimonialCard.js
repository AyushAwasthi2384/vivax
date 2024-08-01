import React from 'react';

const TestimonialCard = ({ content, author, company }) => {
  return (
    <div className="bg-[#131111] text-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <div className="bg-blue-500 rounded-full w-12 h-12"></div>
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{company}</h2>
        </div>
      </div>
      <p className="text-gray-300">{content}</p>
      <button className="mt-4 text-yellow-400">{author}</button>
    </div>
  );
}

export default TestimonialCard;
