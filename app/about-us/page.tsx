"use client"
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Reveal, RevealGroup } from "../hooks/reveal";
import { useState } from "react";

const approaches = [
    {
        image: "/images/pexels-lorna-pauli-1320744316-36093586.jpg",
        icon: "/icons/Ronella_49-Renewable-Electricity.avif",
        title: "Renewable Energy",
        description: "We harness the power of clean energy to reduce carbon emissions and promote energy independence. From solar and wind to biofuels and waste-to-energy systems, our technologies drive efficiency while safeguarding the planet.",
    },
    {
        image: "/images/pexels-vladimirsrajber-18103937.jpg",
        icon: "/icons/Ronella_68-Waste-Management.avif",
        title: "Waste Management",
        description: "Transforming waste into resources, we promote a circular economy through innovative recycling technologies and energy recovery systems. Our solutions help reduce landfill use and minimize environmental impact.",
    },
    {
        image: "/images/pexels-lagosfoodbank-8042458.jpg",
        icon: "/icons/Ronella_47-Green-Thinking.avif",
        title: "Community Development",
        description: "Building resilient and eco-friendly communities is at the heart of what we do. From sustainable housing to localized energy and water systems, we design environments that enhance quality of life while reducing resource dependency.",
    },
    {
        image: "/images/pexels-fowzer-junaideen-156923256-12931319.jpg",
        icon: "/icons/Ronella_38-Hydro-Energy.avif",
        title: "Water Management",
        description: "Ensuring access to clean, reliable water is a cornerstone of sustainability. Our water solutions include rainwater harvesting, wastewater recycling, and efficient irrigation systems that conserve this vital resource.",
    },
];

const members = [
    {
        title: "Charles Show",
        image: "/members/image-1.png"
    },
    {
        title: "Juan Manuel Cadenas",
        image: "/members/image-2.png",
    },
    {
        title: "Peter Lalor",
        image: "/members/image-3.png",
    },
    {
        title: "John Shaw",
        image: "/members/image-4.png",
    }
]

export default function AboutUs(){
    const [sectionBackground, setSectionBackground] = useState("/images/pexels-lorna-pauli-1320744316-36093586.jpg");
    return(
        <>
        <div className="w-full h-[90vh] relative">
            <Navbar />
            <div className="w-full h-full absolute">
                <div className="w-full h-full relative">
                    <div className="w-full h-full absolute bg-black z-30 opacity-30" />
                    {/* <Image src={about_us_hero} fill alt="" className="object-cover absolute z-10" /> */}
                    <div className="w-full h-full absolute z-10">
                        <video className="w-full h-full object-cover absolute" autoPlay muted loop preload="auto">
                            <source src="/videos/about-us-file.mp4" type="video/mp4" />
                        </video>
                    </div>
                    {/* front */}
                    <div className="w-full h-full absolute z-40 flex justify-center">
                        <div className="w-full h-full max-w-[1400px] flex flex-col justify-end py-6 p-6">
                            <h1 className="text-5xl font-bold text-white">About Us</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
              {/* ── About Us ─────────────────────────────────────────────────
           Heading fades up, paragraphs slide in from left & right    */}
      <div className="w-full flex justify-center mt-20 py-20 items-center">
        <div className="w-full max-w-[1000px] px-6">

          <Reveal direction="up" delay={150} duration={700}>
            <p className="mt-6 text-center text-xl">
              Call it what you will, but we can't deny that the weather is becoming increasingly
              unpredictable each month – posing serious threats to vulnerable populations through
              rising temperatures, sea levels, and disrupted ecosystems. From our headquarters in
              the UK, The Ronella Group recognises the urgent need for global collaboration to
              implement adaptive strategies that safeguard the environment for future generations.
            </p>
          </Reveal>

          <Reveal direction="up" delay={300} duration={700}>
            <p className="mt-6 text-center text-xl">
              Through our global network, we foster collaboration with leading innovators in
              waste-to-energy, renewable power, water purification, food security, and modular
              housing – delivering impactful solutions that help reduce humanity's environmental
              footprint. Together, we are shaping a cleaner, more sustainable world.
            </p>
          </Reveal>

        </div>
      </div>

      {/* about us */}
      <div className="w-full flex justify-center mt-20">
        <div className="w-full max-w-[1400px] p-10 bg-custom-green flex text-white rounded-xl">
            <div className="w-1/2 p-4">
            <Reveal direction="up" delay={150} duration={700}>
                <span className="text-[15px] font-bold">ABOUT US</span>
                <h2 className="text-3xl font-medium mt-4">Working together for a more sustainable future </h2>
                </Reveal>
                <Reveal direction="up" delay={300} duration={700}>
                    <p className="mt-4">
                    Climate change is affecting communities across the world, with the greatest impact often felt by those most vulnerable to environmental and economic challenges. Ronella works alongside partners globally to deliver practical, sustainable solutions that help communities adapt, thrive, and build long-term resilience. Our work focuses on improving access to clean water, supporting climate-resilient food production, developing safe and affordable sustainable housing.
                    </p>
                    <div className="mt-6 w-full flex gap-4">
                        <button className="bg-white text-custom-green p-3 w-fit px-8 mt-6 rounded-full flex flex-nowrap gap-2 transition-colors duration-150 ease-in-out hover:bg-red-700 hover:text-[#ffffff] cursor-pointer">
                            Learn More
                        </button>

                         <button className="bg-red-600 text-white p-3 w-fit px-8 mt-6 rounded-full flex flex-nowrap gap-2 transition-colors duration-150 ease-in-out hover:bg-red-700 cursor-pointer">
                            Donate
                        </button>
                    </div>
                </Reveal>
            </div>
            <div className="w-1/2 aspect-4/2.5 p-4">
                <div className="w-full h-full relative">
                    <Image src="/images/pexels-david-pastory-1377991555-37807581.jpg" fill alt="" className="object-cover rounded-xl" />
                </div>
            </div>
        </div>
      </div>

      <div className="w-full h-[80vh] mt-20 relative" style={{
            backgroundImage: `url(${sectionBackground})`, 
            backgroundSize: "cover", 
            backgroundRepeat: "no-repeat"
        }}>
        <div className="bg-black opacity-50 h-full w-full absolute z-10" />
        <div className="w-full h-full flex flex-nowrap absolute z-20">
            {approaches.map((approach, index) => (
                <div key={index} 
                    onMouseEnter={()=> setSectionBackground(approach.image)}
                    className={`w-full flex flex-col justify-center p-6 border-white ${index === 0 ? '' : 'border-l'}`}>
                    <div className="w-[60px] h-[60px] relative">
                        <Image src={approach.icon} fill alt="" />
                    </div>
                    <h2 className="text-white text-4xl font-medium">{approach.title}</h2>
                </div>
            ))}
        </div>
        
      </div>

      {/* member section */}
      <div className="w-full mt-20 flex flex-col justify-center items-center bg-custom-green py-10">
        <div className="w-full max-w-[1400px] p-6">
            <h2 className="text-center text-4xl text-white uppercase">Governance</h2>
        </div>
        <div className="w-full max-w-[1400px] p-6 flex gap-4">
            {members.map((mem, index) => (
                <div key={index} className="w-[25%] p-4 flex flex-col justify-center items-center">
                    <div className="w-[200px] h-[200px] aspect-square relative">
                        <Image src={mem.image} fill alt="" className="rounded-full" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-white">{mem.title}</h3>
                </div>
            ))}
        </div>
        <div className="w-full max-w-[1400px] p-6 flex justify-center">
            <button className="bg-white text-custom-green p-3 w-fit px-8 mt-6 rounded-full flex flex-nowrap gap-2 transition-colors duration-150 ease-in-out hover:bg-red-600 cursor-pointer hover:text-white">View Leadership</button>
        </div>
      </div>
        <Footer />
        </>
    )
}