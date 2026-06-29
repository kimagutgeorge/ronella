"use client"
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { GoGraph } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { Reveal } from "../hooks/reveal";

const technology_areas = [
    {
        title: "Clean water and sanitation",
        description: "Access to safe water and sanitation underpins health, resilience, and economic stability. We explore technologies that can operate effectively in remote, climate-affected, or resource-constrained environments.",
        item_title: "Potential solutions include:",
        list_items: [
            { item: "Solar-powered water purification systems" },
            { item: "Low-energy filtration and UV treatment" },
            { item: "Atmospheric water generation" },
            { item: "Mobile or modular desalination units" },
            { item: "Community-scale wastewater treatment and reuse" },
        ],
        images: [
            { image: "/images/solar-powered-water-purification-system.avif", description: "Solar-powered water purification systems" },
            { image: "/images/sewage-system.avif", description: "Non-electric domestic sewage treatment system" },
        ],
    },
    {
        title: "Renewable and Off-grid energy",
        description: "Decentralised energy systems can provide reliable power where grid access is limited or unreliable, supporting essential services and local enterprise.",
        item_title: "Relevant technologies may include:",
        list_items: [
            { item: "Solar micro-grids" },
            { item: "Battery energy storage systems" },
            { item: "Hybrid renewable solutions" },
            { item: "Energy-efficient lighting and cooling" },
            { item: "Small-scale waste-to-energy systems" },
        ],
        images: [
            { image: "/images/pyrolysis-system.avif", description: "Small simple pyrolysis system to convert waste plastic bags and bottles into energy suitable for local cooking, baking, drying and electricity." },
        ],
    },
    {
        title: "Sustainable housing and shelter",
        description: "Climate-resilient shelter is critical for both long-term development and rapid response scenarios. We consider construction methods that prioritise durability, efficiency, and speed of deployment.",
        item_title: "Examples include:",
        list_items: [
            { item: "Modular and prefabricated housing systems" },
            { item: "Disaster-relief and transitional shelters" },
            { item: "Recycled plastic brick houses" },
            { item: "Designs adapted for flood, heat, or seismic conditions" },
        ],
        images: [
            { image: "/images/4x-waste-images.avif", description: "" },
        ],
    },
    {
        title: "Waste management and circular economy",
        description: "Turning waste into value can reduce environmental harm while creating local economic opportunities.",
        item_title: "Technologies explored may include:",
        list_items: [
            { item: "Plastic-to-fuel or material recovery systems" },
            { item: "Organic waste digestion and composting" },
            { item: "Community-scale recycling solutions" },
            { item: "Circular economy processing technologies" },
        ],
        images: [
            { image: "/images/people-standing-in-front-of-waste.avif", description: "" },
        ],
    },
    {
        title: "Food security and climate-resilient agriculture",
        description: "Resilient food systems are essential in regions affected by climate change, water scarcity, or land degradation.",
        item_title: "Potential approaches include:",
        list_items: [
            { item: "Solar powered cultivators" },
            { item: "Vertical and container farming" },
            { item: "Water-efficient irrigation systems" },
            { item: "Soil regeneration and sustainable farming technology" },
        ],
        images: [
            { image: "/images/food-security.avif", description: "Aftrak boosts farming income to cover the costs of electricity for communities" },
        ],
    },
];

function ImageCarousel({ images }) {
    const [current, setCurrent] = useState(0);
    const hasMultiple = images.length > 1;

    const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
    const next = () => setCurrent((c) => (c + 1) % images.length);

    return (
        <div className="flex flex-col h-full w-full">
            <div className="relative w-full h-64 md:h-96 overflow-hidden bg-gray-100">
                <Image
                    src={images[current].image}
                    fill
                    alt={images[current].description || "Technology image"}
                    className="object-cover transition-opacity duration-300"
                />

                {hasMultiple && (
                    <>
                        <button
                            onClick={prev}
                            aria-label="Previous image"
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-1.5 shadow transition-colors duration-150"
                        >
                            <FaChevronLeft size={20} className="cursor-pointer" />
                        </button>
                        <button
                            onClick={next}
                            aria-label="Next image"
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-1.5 shadow transition-colors duration-150"
                        >
                            <FaChevronRight size={20} className="cursor-pointer" />
                        </button>

                        {/* Dot indicators */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                            {images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    aria-label={`Go to image ${i + 1}`}
                                    className={`w-2 h-2 rounded-full transition-colors duration-150 ${
                                        i === current ? "bg-white" : "bg-white/50"
                                    }`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Description below the image */}
            {images[current].description && (
                <p className="mt-2 text-sm text-gray-500 italic text-center px-2">
                    {images[current].description}
                </p>
            )}

            {hasMultiple && (
                <p className="mt-1 text-xs text-gray-400 text-center">
                    {current + 1} / {images.length}
                </p>
            )}
        </div>
    );
}

export default function TechnologyPathway() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && <Loader />}
            {!loading && (
                <>
                    {/* Hero */}
                    <div className="w-full h-[70vh] relative">
                        <Navbar />
                        <div className="w-full h-full absolute">
                            <div className="w-full h-full relative">
                                <div className="w-full h-full absolute bg-black z-30 opacity-30" />
                                <div className="w-full h-full absolute z-10">
                                    <Image
                                        src="/images/bf1d90_75dd4d3285fd4f56ad356ff84c8d9a1b~mv2.avif"
                                        fill
                                        alt=""
                                        className="object-cover"
                                    />
                                </div>
                                <div className="w-full h-full py-10 absolute z-40 flex justify-center">
                                    <div className="w-full h-full max-w-[1400px] flex flex-col justify-end py-6 p-6">
                                        <Reveal direction="up" delay={20} duration={700}>
                                            <h1 className="text-5xl font-bold text-white">Technology Pathway</h1>
                                            <p className="text-white mt-4 w-full max-w-[700px]">
                                                Ronella Group collaborates with international partners, specialists, and technology providers to design and deliver sustainable projects. We assess and integrate proven, resilient, and scalable technologies tailored to local needs, ensuring each solution is practical, feasible, and capable of creating lasting positive impact for the communities we serve.
                                            </p>
                                        </Reveal>
                                        <Reveal direction="up" delay={100} duration={700}>
                                            <button className="bg-custom-green text-white p-3 w-fit px-8 mt-8 rounded-full flex flex-nowrap gap-2 transition-colors duration-150 ease-in-out hover:bg-red-700 cursor-pointer">
                                                Discuss Technology Partnership
                                            </button>
                                        </Reveal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Identify / Evaluate / Integrate bar */}
                    <div className="w-full h-full flex justify-center p-6 bg-custom-green">
                        <div className="w-full max-w-[1400px] flex flex-col md:flex-row">
                            <div className="p-4 text-white w-full md:w-[33%] flex flex-nowrap gap-4 md:border-r border-green-300 px-8">
                                <div className="w-fit">
                                    <BiSearch size={30} />
                                </div>
                                <div className="w-full">
                                    <h2 className="font-semibold text-lg">Identify</h2>
                                    <p className="mt-2">Assess appropriate, proven technologies for each context</p>
                                </div>
                            </div>
                            <div className="p-4 text-white w-full md:w-[33%] flex flex-nowrap gap-4 md:border-r border-green-300 px-8">
                                <div className="w-fit">
                                    <GoGraph size={30} />
                                </div>
                                <div className="w-full">
                                    <h2 className="font-semibold text-lg">Evaluate</h2>
                                    <p className="mt-2">Measure fit, feasibility, and long-term sustainability</p>
                                </div>
                            </div>
                            <div className="p-4 text-white w-full md:w-[33%] flex flex-nowrap gap-4 px-8">
                                <div className="w-fit">
                                    <FaUserFriends size={30} />
                                </div>
                                <div className="w-full">
                                    <h2 className="font-semibold text-lg">Integrate &amp; collaborate</h2>
                                    <p className="mt-2">Deploy solutions with partners and community stakeholders</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Technology sections — alternating layout */}
                    <div className="w-full flex flex-col items-center mt-10">
                        {technology_areas.map((tech, index) => {
                            const isEven = index % 2 === 0; // even → text left, image right
                            return (
                                <div
                                    key={index}
                                    className={`w-full max-w-[1400px] p-6 py-12 flex flex-col gap-8 ${
                                        isEven ? "md:flex-row" : "md:flex-row-reverse"
                                    } items-center border-b border-gray-100 last:border-b-0`}
                                >
                                    {/* Text block */}
                                    <div className="w-full md:w-1/2">
                                        <h2 className="text-black text-2xl font-semibold">{tech.title}</h2>
                                        <p className="mt-3 text-gray-600 leading-relaxed">{tech.description}</p>
                                        <div className="mt-4 ml-4">
                                            <h3 className="text-base text-black font-medium">{tech.item_title}</h3>
                                            <ul className="mt-2 space-y-1">
                                                {tech.list_items.map((item, i) => (
                                                    <li key={i} className="list-disc ml-5 text-gray-600">
                                                        {item.item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Image carousel */}
                                    <div className="w-full md:w-1/2">
                                        <ImageCarousel images={tech.images} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <Footer />
                </>
            )}
        </>
    );
}