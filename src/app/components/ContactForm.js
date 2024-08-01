import React from "react";

const ContactForm = () => {
  return (
    <div className="flex mt-[4rem] justify-between min-h-screen p-4">
      <div>
        <h1 className="text-yellow-400 ml-[2rem] leading-tight mt-[2rem] text-[3rem]" style={{ fontFamily: "Monument Extended" }}>SAY</h1>
        <h1
          className="text-white text-[10rem] leading-tight ml-[2rem]"
          style={{ fontFamily: "Monument Extended" }}
        >
          HELLO!
        </h1>
      </div>
      <div className="w-full m-4 max-w-xl p-8 shadow-lg shadow-yellow-500 rounded-3xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-50 text-left">For project queries</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-200 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="phone"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 text-sm font-bold mb-2">
              Project Type
            </label>
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="project-type"
            >
              <option>IT</option>
              <option>Ecommerce</option>
              <option>Trade</option>
              <option>FMCG</option>
              <option>Cafe and Restraunts</option>
              <option>Doctors and Chemists</option>
              <option>Others</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-200 text-sm font-bold mb-2">
              Project Details
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              id="project-details"
              placeholder="Enter your project details"
              rows="3"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-yellow-500 hover:bg-yellow-200 hover:text-black text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Lets Talk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
