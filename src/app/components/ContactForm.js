"use client";
import React, { useState } from "react";
import { transporter } from "../../../utils/mailer";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    projectDetails: "",
  });

  const handleChange = (e) => {
    try {
      const { name, value } = e.target;
      console.log(value);
      setData(() => {
        return {
          ...data,
          [name]: value,
        };
      });
    } catch (err) {
      console.log(err);
    }
  };

  const sendEmail = async () => {
    try {
      const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: "vivaxmarketers@gmail.com", // replace with recipient email
        subject: "New Project Query",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2 style="color: #f4c20d;">New Project Query</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Project Type:</strong> ${data.projectType}</p>
            <p><strong>Project Details:</strong> ${data.projectDetails}</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="contact" className="md:flex md:mt-[4rem] justify-between min-h-screen p-4">
      <div className="flex flex-row mb-[1rem] justify-center md:flex-col">
        <h1
          className="text-yellow-400 ml-[2rem] leading-tight mt-[2rem] text-[2rem] md:text-[3rem]"
          style={{ fontFamily: "Monument Extended" }}
        >
          SAY
        </h1>
        <h1
          className="text-white md:text-[10rem] text-[2rem] mt-[2rem] leading-tight ml-[2rem]"
          style={{ fontFamily: "Monument Extended" }}
        >
          HELLO!
        </h1>
      </div>
      <div className="w-full  md:m-4 max-w-xl p-8 shadow-lg shadow-yellow-500 rounded-3xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-50 text-left">
          For project queries
        </h2>
        <form className="">
          <div className="mb-4">
            <label className="block text-gray-200 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email address"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="phone"
              placeholder="Enter your phone number"
              name="phone"
              value={data.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 text-sm font-bold mb-2">
              Project Type
            </label>
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="project-type"
              name="projectType"
              value={data.projectType}
              onChange={handleChange}
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
              name="projectDetails"
              value={data.projectDetails}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-yellow-500 hover:bg-yellow-200 hover:text-black text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={sendEmail}
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
