"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import matrix_innovation from "../Assets/matrix_innovation_logo.jpeg";
import Grayy from "../Assets/grayy_logo.jpeg";
import vivax from "../Assets/vivax.jpeg";
import Apna_Colsultant from "../Assets/Apna_Consultant.png";
import { CiGlobe } from "react-icons/ci";
import TestimonialCard from "./components/TestimonialCard";
import { useState } from "react";
export default function Home() {
  const [flag, setflag] = useState(true);
  const [bgColor, setBgColor] = useState('bg-gray-800');
  const[bgDesign,setbgDesign] =useState('bg-yellow-500');
  const testimonials = [
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ex non porttitor aliquet. Nam varius ac lacus id luctus.",
      author: "Lorem Ipsum",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ex non porttitor aliquet. Nam varius ac lacus id luctus.",
      author: "Lorem Ipsum",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ex non porttitor aliquet. Nam varius ac lacus id luctus.",
      author: "Lorem Ipsum",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ex non porttitor aliquet. Nam varius ac lacus id luctus.",
      author: "Lorem Ipsum",
    },
  ];

  const Apnaconsultant = () => {
    if(flag) {
      setBgColor('bg-yellow-500');
      setbgDesign('bg-gray-800');
    }
    else {
      setBgColor('bg-gray-800');
      setbgDesign('bg-yellow-500');
    }
    setflag(!flag);}
  
  return (
    <main className="">
      <div className="flex flex-col space-x-[5rem] md:flex-row">
        <div className=" w-[70%] mt-[2rem]">
          <Image
            src={vivax}
            className="rounded-tr-[5rem] rounded-br-[5rem]"
            alt="vivax"
          ></Image>
        </div>
        <div className=" w-[20%] m-4 ">
          <p className="font-[Roboto]  translate-y-[25rem]  text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            saepe corporis tenetur laboriosam vero, modi excepturi, aut, dolorem
            impedit ipsa sunt. Asperiores, optio sunt. Neque molestiae quasi
            sunt magnam nulla. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maiores saepe corporis tenetur laboriosam vero,
            modi excepturi, aut, dolorem impedit ipsa sunt. Asperiores, optio
            sunt. Neque molestiae quasi sunt magnam nulla.
          </p>
        </div>
      </div>
      <div className=" text-center">
        <span className="text-white text-[15rem]">VIVAX</span>
      </div>
      <div className="justify-between text-white py-12 px-4">
        <div className="  grid grid-cols-2 gap-4">
          <div className="flex  flex-col justify-between">
            <div className="flex  items-center space-x-4">
              <span className="uppercase text-[3rem] tracking-widest">
                Located in India
              </span>
              <div className="rounded-full bg-gray-700 p-3">
                <CiGlobe />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus rhoncus ex non porttitor aliquet. Nam varius ac lacus
                id luctus. Mauris auctor dolor vel felis feugiat tincidunt.
                Quisque et dolor dapibus, lobortis lectus vitae, pretium nunc.
                Suspendisse potenti.
              </p>
              <p className="mt-4 text-gray-300">
                Ut eu odio lorem. Morbi pretium sem pulvinar, malesuada magna
                ut, euismod nulla. Curabitur finibus tincidunt dictum. Curabitur
                suscipit blandit fermentum. Sed dictum ligula vitae elit
                convallis porttitor.
              </p>
            </div>
            <div className="border-t border-gray-700 pt-4 mt-4">
              <h2 className="text-xl font-bold">Discuss Your Ideas</h2>
              <p className="text-sm">
                Discuss your ideas and get advice from professionals
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white py-12 px-4">
        <div className="text-center mb-10">
          <h1 className="text-[5rem] font-bold">PACKAGES</h1>
          <p className="mt-4 opacity-55">
            Every one of us loves something different. So, explore the world
            through the lens of our visual capabilities, and find what you love.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-gray-800 border border-yellow-500 rounded-lg overflow-hidden p-6 space-y-6"
            >
              <div className="h-[25rem] bg-gray-700"></div>
              <button className="w-full bg-white text-gray-900 rounded-full py-2">
                Select Package
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center  bg-black p-4">
        <div className="text-center text-white max-w-xl">
          <p className="text-2xl md:text-4xl font-bold mb-4">
            "IF YOU ARE NOT A <span className="text-yellow-400">RISK</span>{" "}
            TAKER, YOU SHOULD GET THE HELL OUT OF{" "}
            <span className="text-yellow-400">BUSINESS</span>."
          </p>
          <p className="text-lg md:text-2xl font-semibold">- Ray Kroc</p>
        </div>
      </div>
      <div className="text-center py-8 bg-black text-white">
        <h1 className="text-4xl md:text-6xl font-bold">PROJECTS.</h1>
        <p className="text-lg md:text-xl mt-4 opacity-55">
          Every one of us loves something different. So, explore the world
          through the lens of our visual capabilities, and find what you love.
        </p>
      </div>
      <div className="flex justify-center gap-4 mt-4 mb-8">
        <button className={`${bgDesign} text-white py-2 px-4 rounded-full`} onClick={Apnaconsultant}>
          Design
        </button>
        <button
          className={`${bgColor} text-white py-2 px-4 rounded-full`}
          onClick={Apnaconsultant}
        >
          Digital Marketing
        </button>
        <button className="bg-yellow-500 text-black py-2 px-4 rounded-full">
          Explore
        </button>
      </div>

      {flag && (
        <div className=" flex">
          <div className="flex w-[50%] flex-col m-[2rem]">
            <div className="">
              <Image
                src={Grayy}
                alt={Grayy}
                className="object-cover rounded-[5rem] w-[50%] translate-x-36"
              />
            </div>
            <div className="p-4 text-center text-white">
              <h2 className="text-2xl font-semibold">Grayy</h2>
              <p className="mt-2 opacity-55">
                Grayy is an innovative investment platform dedicated to
                connecting retail investors with high-growth startups. By
                leveraging blockchain technology, we ensure secure and
                transparent transactions, significantly streamlining the
                fundraising process for startups.
              </p>
            </div>
          </div>
          <div className="flex w-[50%] flex-col m-[2rem]">
            <div className="">
              <Image
                src={matrix_innovation}
                alt={matrix_innovation}
                className="object-cover rounded-[5rem] w-[50%] translate-x-36"
              />
            </div>
            <div className="p-4 text-center text-white">
              <h2 className="text-2xl font-semibold">Matrix innovation</h2>
              <p className="mt-2 opacity-55">
                Matrix Innovation embraces remote work, promoting flexibility
                and productivity. Employees are encouraged to maintain open
                communication, adhere to work hours, ensure data security, and
                use reliable tools for seamless collaboration. Trust,
                responsibility, and results drive our remote work culture.
              </p>
            </div>
          </div>
        </div>
      )}
      {!flag && (
        <div className="flex  flex-col m-[2rem]">
          <div className="">
            <Image
              src={Apna_Colsultant}
              alt={Apna_Colsultant}
              className="object-cover rounded-[1rem] w-[60%] translate-x-[18rem]"
            />
          </div>
          <div className="p-4 text-center text-white">
            <h2 className="text-2xl font-semibold">Grayy</h2>
            <p className="mt-2 opacity-55">
              At Apnaconsultant, we provide comprehensive financial and tax
              advisory services tailored to your needs. Whether it's tax
              planning, auditing, or business consulting, our expert team is
              here to guide you every step of the way. Trust us to handle your
              financial matters with the utmost precision and care.
            </p>
          </div>
        </div>
      )}
      <div className="text-center flex gap-[45rem] py-8 bg-black text-white">
        <h1 className="text-4xl md:text-6xl font-bold">TESTIMONIAL.</h1>
        <button className="mt-4  bg-yellow-500 text-black py-2 px-4 rounded-full">
          More Testimonials
        </button>
      </div>
      <div className="container mx-auto  px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            content={testimonial.content}
            author={testimonial.author}
          />
        ))}
      </div>
    </main>
  );
}
