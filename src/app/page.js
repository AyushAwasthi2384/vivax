"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import matrix_innovation from "../Assets/matrix_innovation.png";
import Grayy from "@/Assets/grayy_logo.png";
import vivax from "@/Assets/vivax.jpeg";
import Apna_Colsultant from "@/Assets/Apna_consultant.png";
import { CiGlobe } from "react-icons/ci";
import TestimonialCard from "./components/TestimonialCard";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function Home() { 
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const [flag, setflag] = useState(true);
  const [bgColor, setBgColor] = useState("bg-gray-800");
  const [bgDesign, setbgDesign] = useState("bg-yellow-500");
  const packages = [
    {
      fame: "basic",
      features: ["Feature 1", "Feature 2", "Ese hi 4-6"],
      Price: "1500",
    },
    {
      fame: "Premium",
      features: ["Feature 1", "Feature 2", "Ese hi 4-6"],
      Price: "3000",
    },
    {
      fame: "Enterprise",
      features: ["Feature 1", "Feature 2", "Ese hi 4-6"],
      Price: "5000",
    },
  ];
  const testimonials = [
    {
      company: "Apna Consultant",
      content:
        "Vivax recognized our needs, and went beyond what we expected. Our online visibility has never been this good.",
      author: "Mirza Shakeel, CEO",
    },
    {
      company: "Matrix Innovation",
      content:
        "Their creativity and expertise revolutionized our online strategy. They connected us with our audience in ways we never imagined. Highly recommend!",
      author: "Raunik Shukla, CEO",
    },
    {
      company: "Grayy",
      content:
        "Vivax is a partner in our success! I am very happy with their work. Their efforts led to great results. Thank you guys.",
      author: "Nishant Jaiswal, CEO",
    },
    {
      company: "Amorr",
      content:
        "Vivax nailed it! Their fresh approach helped us connect with our audience like never before. So glad we chose them!",
      author: "Tushar Tiwari, CEO",
    },
  ];

  const Apnaconsultant = () => {
    if (flag) {
      setBgColor("bg-yellow-500 text-black");
      setbgDesign("bg-gray-800 text-white");
    } else {
      setBgColor("bg-gray-800 text-white");
      setbgDesign("bg-yellow-500 text-black");
    }
    setflag(!flag);
  };

  return (
    <main className="">
      {visible && <Loader />}
      <div className="flex  flex-col md:flex-row">
        <div className=" md:w-[70%]  m-[2rem]  mt-[2rem] ">
          <Image
            src={vivax}
            className="md:rounded-tr-[5rem] rounded-[3rem] h-[30rem] object-cover md:rounded-br-[5rem]"
            alt="vivax"
            placeholder="blur"
          ></Image>
        </div>
        <div className=" md:w-[20%]  ml-[2rem] m-4 ">
          <p className="md:translate-y-[17rem]  text-white">
            At Vivax, we offer tailored packages to boost your online presence.
            From social media reels and blogs to SEO and user-friendly websites,
            we provide a perfect mix of creativity and strategy.
            <br />
            <br />
            Let us be your guide as you navigate through the online realm!
          </p>
        </div>
      </div>
      <div className="text-center">
        <span
          className="text-white leading-tight text-[5rem] md:text-[20rem]"
          style={{ fontFamily: "Monument Extended" }}
        >
          VIVAX
        </span>
      </div>
      <div className="md:justify-between justify-around  text-white py-12 px-4">
        <div className="  grid  md:grid-cols-2 gap-4">
          <div className="flex   flex-col justify-between">
            <div id="about" className="flex  items-center space-x-4">
              <span className="uppercase text-[3rem] tracking-widest">
                Located in India
              </span>
              <div
                className="rounded-full bg-gray-700 p-3 hover:cursor-pointer hover:scale-[1.7] hover:rotate-[-127deg]"
                style={{ transition: "all 0.3s ease-in-out" }}
              >
                <CiGlobe />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-gray-300">
                Vivax focuses in boosting your online presence and helping your
                business grow in the digital world. Our packages are customised
                to fit your unique requirements and enhance the online exposure
                of what you do.
                <br />
                <br />
                We provide everything from excellent SEO and slick,
                user-friendly websites to intriguing blogs and social media
                reels. It is your one-stop shop for digital success, merging
                vision with creativity in a seamless manner.
                <br />
                <br />
                We use our experience to make your digital wishes come true and
                make sure your brand stands out in the jam-packed internet
                market. Are you prepared to leave your imprint in the online
                world? Together, let&apos;s go into this thrilling adventure!
              </p>
            </div>
            <div className="-t -gray-700 pt-4 mt-4">
              <h2 className="text-xl font-bold">Discuss Your Ideas</h2>
              <p className="text-sm">
                Discuss your ideas and get advice from professionals
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-black text-white py-12 px-4">
        <div className="text-left ml-5 mb-10">
          <h1
            className="md:text-[5rem] font-bold"
            style={{ fontFamily: "Monument Extended" }}
          >
            PACKAGES
          </h1>
          <p className="mt-4 opacity-55">
            Discover our customized packages, intended to boost your brand and
            turn your digital aspirations into reality.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((item) => (
            <div
              key={item}
              className="bg-gray-800  -yellow-500 rounded-lg overflow-hidden p-6 space-y-6"
            >
              <div className="h-[25rem] border bg-gray-700">
                <div className="text-center capitalize text-[2rem]">
                  {item.fame}
                </div>
                <div className="">
                  {
                    item.features.map((e)=>{
                      return <div key={e} className="text-center text-gray-400 text-sm">{e
                        }</div>
                    })
                  }
                </div>
              </div>
              <button className="w-full bg-white text-gray-900 rounded-full py-2">
                Select Package
              </button>
            </div>
          ))}
        </div>
      </div> */}
      <div className="flex items-center  justify-center bg-black p-4">
        <div className="text-center text-white  md:my-[10rem]">
          <p className="text-2xl md:text-4xl font-bold mb-4">
            &quot;IF YOU ARE NOT A <span className="text-yellow-400">RISK</span>{" "}
            TAKER, YOU SHOULD GET THE HELL OUT OF{" "}
            <span className="text-yellow-400">BUSINESS</span>.&quot;
          </p>
          <p className="text-lg md:text-2xl font-semibold">- Ray Kroc</p>
        </div>
      </div>
      <div id="projects" className=" text-center py-8 bg-black text-white">
        <h1
          className="md:text-[5rem] text-[2rem]  font-bold"
          style={{ fontFamily: "Monument Extended" }}
        >
          PROJECTS.
        </h1>
        <p className="text-lg md:text-xl opacity-55 ">
          Check out our awesome projects, crafted to make your brand shine and
          engage with your audience!
        </p>
      </div>
      <div className="flex justify-center gap-4 mt-4 mb-8">
        <button
          className={`${bgDesign} py-2 px-4 rounded-full`}
          onClick={Apnaconsultant}
        >
          Design
        </button>
        <button
          className={`${bgColor} py-2 px-4 rounded-full`}
          onClick={Apnaconsultant}
        >
          Digital Marketing
        </button>
        <button className="bg-yellow-500 text-black py-2 px-4 rounded-full">
          Explore
        </button>
      </div>

      {flag && (
        <div className="md:flex">
          <div className="flex md:w-[50%] flex-col m-[2rem]">
            <Link
              href={"https://www.linkedin.com/company/grayy/"}
              target="_blank"
              className=""
            >
              <Image
                src={Grayy}
                alt={Grayy}
                className="object-cover rounded-[3rem]  h-[25rem] w-[100%] hover:opacity-80 cursor-pointer"
              />
            </Link>
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
          <div className="flex md:w-[50%] flex-col m-[2rem]">
            <Link
              href={"https://www.linkedin.com/company/matrix-innovation/"}
              target="_blank"
              className=""
            >
              <Image
                src={matrix_innovation}
                alt={matrix_innovation}
                className="object-cover rounded-[3rem] h-[25rem] w-[100%] hover:opacity-80 cursor-pointer"
              />
            </Link>
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
        <div className="flex flex-col m-[2rem]">
          <Link
            href={"https://www.linkedin.com/company/apnaconsultant/"}
            target="_blank"
            className=""
          >
            <Image
              src={Apna_Colsultant}
              alt={Apna_Colsultant}
              className="object-cover md:rounded-[3rem] rounded-[2rem] md:w-[60%] md:translate-x-[18rem] hover:opacity-80 cursor-pointer"
            />
          </Link>
          <div className="p-4 text-center text-white">
            <h2 className="text-2xl font-semibold">Apna Consultant</h2>
            <p className="mt-2 opacity-55">
              At Apnaconsultant, we provide comprehensive financial and tax
              advisory services tailored to your needs. Whether it&apos;s tax
              planning, auditing, or business consulting, our expert team is
              here to guide you every step of the way. Trust us to handle your
              financial matters with the utmost precision and care.
            </p>
          </div>
        </div>
      )}
      <div className="text-center mt-[5rem] md:flex justify-between py-8 px-[2rem] bg-black text-white">
        <h1
          className="text-4xl md:text-6xl font-bold"
          style={{ fontFamily: "Monument Extended" }}
        >
          TESTIMONIALS
        </h1>
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
            company={testimonial.company}
          />
        ))}
      </div>
    </main>
  );
}
