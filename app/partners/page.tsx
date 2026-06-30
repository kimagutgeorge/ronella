"use client"
import { useEffect, useState } from "react"
import Image from "next/image";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Reveal } from "../hooks/reveal";

const partners = [
    {
        category: "Anaerobic Digestion",
        description: "Welcome to our curated collection of valuable resources focused on Anaerobic Digestion services. Whether you are seeking expert insights, innovative technologies, or practical solutions, we provide direct access to trusted companies like these who are leaders in their field. We can help your team explore these resources to deepen their knowledge and find the support you need to address your Anaerobic Digestion requirements.",
        partnerList: [
            {logo: "/logos/bf1d90_7c4803272fe64132a1c2615e0f11965f~mv2.jpg"},
            {logo: "/logos/bf1d90_7df4ff8c67994c298fbe9e7d88c00d6f~mv2.jpg"},
            {logo: "/logos/bf1d90_8e907ce47df841f685378f599b6e20c6~mv2.jpg"},
            {logo: "/logos/bf1d90_46a4aa375a804d3ba9b9a5ce6d7a0c51~mv2.jpg"},
            {logo: "/logos/bf1d90_4883c77dc5064dc3a8c7b85a25b25629~mv2.jpg"},
            {logo: "/logos/bf1d90_7647ccc9c1424663ad342162eb4fed2a~mv2.jpg"},
            {logo: "/logos/bf1d90_94068debb8644e4fbf928b6eaf3badac~mv2.jpg"},
            {logo: "/logos/bf1d90_47752745f6864342b3452eb49cdc8053~mv2.jpg"},
            {logo: "/logos/bf1d90_b70a0a5be9c04d239b06901c16bb3a73~mv2.jpg"},
            {logo: "/logos/bf1d90_ec53472e98b5458eaf3377bd15a14f18~mv2.jpg"},
        ]
    },
    {
        category: "Solar Energy",
        description: "Welcome to our curated collection of valuable resources focused on Solar Energy services. Whether you are seeking expert insights, innovative technologies, or practical solutions, we provide direct access to trusted companies like these who are leaders in their field. We can help your team explore these resources to deepen their knowledge and find the support you need to address your Solar Energy requirements.",
        partnerList: [
            {logo: "/logos/bf1d90_7c4803272fe64132a1c2615e0f11965f~mv2.jpg"},
            {logo: "/logos/bf1d90_7df4ff8c67994c298fbe9e7d88c00d6f~mv2.jpg"},
            {logo: "/logos/bf1d90_8e907ce47df841f685378f599b6e20c6~mv2.jpg"},
            {logo: "/logos/bf1d90_46a4aa375a804d3ba9b9a5ce6d7a0c51~mv2.jpg"},
            {logo: "/logos/bf1d90_4883c77dc5064dc3a8c7b85a25b25629~mv2.jpg"},
            {logo: "/logos/bf1d90_7647ccc9c1424663ad342162eb4fed2a~mv2.jpg"},
            {logo: "/logos/bf1d90_94068debb8644e4fbf928b6eaf3badac~mv2.jpg"},
            {logo: "/logos/bf1d90_47752745f6864342b3452eb49cdc8053~mv2.jpg"},
            {logo: "/logos/bf1d90_b70a0a5be9c04d239b06901c16bb3a73~mv2.jpg"},
            {logo: "/logos/bf1d90_ec53472e98b5458eaf3377bd15a14f18~mv2.jpg"},
        ]
    },
    {
        category: "Battery Power",
        description: "Welcome to our curated collection of valuable resources focused on Solar Energy services. Whether you are seeking expert insights, innovative technologies, or practical solutions, we provide direct access to trusted companies like these who are leaders in their field. We can help your team explore these resources to deepen their knowledge and find the support you need to address your Solar Energy requirements.",
        partnerList: [
            {logo: "/logos/bf1d90_7c4803272fe64132a1c2615e0f11965f~mv2.jpg"},
            {logo: "/logos/bf1d90_7df4ff8c67994c298fbe9e7d88c00d6f~mv2.jpg"},
            {logo: "/logos/bf1d90_8e907ce47df841f685378f599b6e20c6~mv2.jpg"},
            {logo: "/logos/bf1d90_46a4aa375a804d3ba9b9a5ce6d7a0c51~mv2.jpg"},
            {logo: "/logos/bf1d90_4883c77dc5064dc3a8c7b85a25b25629~mv2.jpg"},
            {logo: "/logos/bf1d90_7647ccc9c1424663ad342162eb4fed2a~mv2.jpg"},
            {logo: "/logos/bf1d90_94068debb8644e4fbf928b6eaf3badac~mv2.jpg"},
            {logo: "/logos/bf1d90_47752745f6864342b3452eb49cdc8053~mv2.jpg"},
            {logo: "/logos/bf1d90_b70a0a5be9c04d239b06901c16bb3a73~mv2.jpg"},
            {logo: "/logos/bf1d90_ec53472e98b5458eaf3377bd15a14f18~mv2.jpg"},
        ]
    },
     {
        category: "Deserts Soil",
        description: "Welcome to our curated collection of valuable resources focused on Solar Energy services. Whether you are seeking expert insights, innovative technologies, or practical solutions, we provide direct access to trusted companies like these who are leaders in their field. We can help your team explore these resources to deepen their knowledge and find the support you need to address your Solar Energy requirements.",
        partnerList: [
            {logo: "/logos/bf1d90_7c4803272fe64132a1c2615e0f11965f~mv2.jpg"},
            {logo: "/logos/bf1d90_7df4ff8c67994c298fbe9e7d88c00d6f~mv2.jpg"},
            {logo: "/logos/bf1d90_8e907ce47df841f685378f599b6e20c6~mv2.jpg"},
            {logo: "/logos/bf1d90_46a4aa375a804d3ba9b9a5ce6d7a0c51~mv2.jpg"},
            {logo: "/logos/bf1d90_4883c77dc5064dc3a8c7b85a25b25629~mv2.jpg"},
            {logo: "/logos/bf1d90_7647ccc9c1424663ad342162eb4fed2a~mv2.jpg"},
            {logo: "/logos/bf1d90_94068debb8644e4fbf928b6eaf3badac~mv2.jpg"},
            {logo: "/logos/bf1d90_47752745f6864342b3452eb49cdc8053~mv2.jpg"},
            {logo: "/logos/bf1d90_b70a0a5be9c04d239b06901c16bb3a73~mv2.jpg"},
            {logo: "/logos/bf1d90_ec53472e98b5458eaf3377bd15a14f18~mv2.jpg"},
        ]
    },
     {
        category: "Tyre Recycling",
        description: "Welcome to our curated collection of valuable resources focused on Solar Energy services. Whether you are seeking expert insights, innovative technologies, or practical solutions, we provide direct access to trusted companies like these who are leaders in their field. We can help your team explore these resources to deepen their knowledge and find the support you need to address your Solar Energy requirements.",
        partnerList: [
            {logo: "/logos/bf1d90_7c4803272fe64132a1c2615e0f11965f~mv2.jpg"},
            {logo: "/logos/bf1d90_7df4ff8c67994c298fbe9e7d88c00d6f~mv2.jpg"},
            {logo: "/logos/bf1d90_8e907ce47df841f685378f599b6e20c6~mv2.jpg"},
            {logo: "/logos/bf1d90_46a4aa375a804d3ba9b9a5ce6d7a0c51~mv2.jpg"},
            {logo: "/logos/bf1d90_4883c77dc5064dc3a8c7b85a25b25629~mv2.jpg"},
            {logo: "/logos/bf1d90_7647ccc9c1424663ad342162eb4fed2a~mv2.jpg"},
            {logo: "/logos/bf1d90_94068debb8644e4fbf928b6eaf3badac~mv2.jpg"},
            {logo: "/logos/bf1d90_47752745f6864342b3452eb49cdc8053~mv2.jpg"},
            {logo: "/logos/bf1d90_b70a0a5be9c04d239b06901c16bb3a73~mv2.jpg"},
            {logo: "/logos/bf1d90_ec53472e98b5458eaf3377bd15a14f18~mv2.jpg"},
        ]
    },
    {
        category: "Alagae Co2 Purification",
        description: "Welcome to our curated collection of valuable resources focused on Solar Energy services. Whether you are seeking expert insights, innovative technologies, or practical solutions, we provide direct access to trusted companies like these who are leaders in their field. We can help your team explore these resources to deepen their knowledge and find the support you need to address your Solar Energy requirements.",
        partnerList: [
            {logo: "/logos/bf1d90_7c4803272fe64132a1c2615e0f11965f~mv2.jpg"},
            {logo: "/logos/bf1d90_7df4ff8c67994c298fbe9e7d88c00d6f~mv2.jpg"},
            {logo: "/logos/bf1d90_8e907ce47df841f685378f599b6e20c6~mv2.jpg"},
            {logo: "/logos/bf1d90_46a4aa375a804d3ba9b9a5ce6d7a0c51~mv2.jpg"},
            {logo: "/logos/bf1d90_4883c77dc5064dc3a8c7b85a25b25629~mv2.jpg"},
            {logo: "/logos/bf1d90_7647ccc9c1424663ad342162eb4fed2a~mv2.jpg"},
            {logo: "/logos/bf1d90_94068debb8644e4fbf928b6eaf3badac~mv2.jpg"},
            {logo: "/logos/bf1d90_47752745f6864342b3452eb49cdc8053~mv2.jpg"},
            {logo: "/logos/bf1d90_b70a0a5be9c04d239b06901c16bb3a73~mv2.jpg"},
            {logo: "/logos/bf1d90_ec53472e98b5458eaf3377bd15a14f18~mv2.jpg"},
        ]
    },
    {
        category: "Wave Power",
        description: "Welcome to our curated collection of valuable resources focused on Solar Energy services. Whether you are seeking expert insights, innovative technologies, or practical solutions, we provide direct access to trusted companies like these who are leaders in their field. We can help your team explore these resources to deepen their knowledge and find the support you need to address your Solar Energy requirements.",
        partnerList: [
            {logo: "/logos/bf1d90_7c4803272fe64132a1c2615e0f11965f~mv2.jpg"},
            {logo: "/logos/bf1d90_7df4ff8c67994c298fbe9e7d88c00d6f~mv2.jpg"},
            {logo: "/logos/bf1d90_8e907ce47df841f685378f599b6e20c6~mv2.jpg"},
            {logo: "/logos/bf1d90_46a4aa375a804d3ba9b9a5ce6d7a0c51~mv2.jpg"},
            {logo: "/logos/bf1d90_4883c77dc5064dc3a8c7b85a25b25629~mv2.jpg"},
            {logo: "/logos/bf1d90_7647ccc9c1424663ad342162eb4fed2a~mv2.jpg"},
            {logo: "/logos/bf1d90_94068debb8644e4fbf928b6eaf3badac~mv2.jpg"},
            {logo: "/logos/bf1d90_47752745f6864342b3452eb49cdc8053~mv2.jpg"},
            {logo: "/logos/bf1d90_b70a0a5be9c04d239b06901c16bb3a73~mv2.jpg"},
            {logo: "/logos/bf1d90_ec53472e98b5458eaf3377bd15a14f18~mv2.jpg"},
        ]
    },
    
]

// flatten every partner logo for the "All" tab
const allPartnersList = partners.flatMap((p) => p.partnerList);

export default function Partners(){
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer)
    }, []);

    const isAll = activeCategory === "All";
    const activePartner = partners.find((p) => p.category === activeCategory);
    const logosToShow = isAll ? allPartnersList : activePartner?.partnerList ?? [];

    return(
        <>
            {loading && (
                <Loader />
            )}
            {!loading && (
                <>
                    {/* Hero */}
                    <div className="w-full h-[70vh] relative">
                        <Navbar />
                        <div className="w-full h-full absolute">
                            <div className="w-full h-full relative">
                                <div className="w-full h-full absolute bg-black opacity-40 z-30 " />
                                <div className="w-full h-full absolute z-10">
                                    <Image
                                        src="/images/bf1d90_bd9dbff3ae644a7ca28b8adcd940014e~mv2.avif"
                                        fill
                                        alt=""
                                        className="object-cover"
                                    />
                                </div>
                                <div className="w-full h-full py-10 absolute z-40 flex justify-center">
                                    <div className="w-full h-full max-w-[1400px] flex flex-col justify-end py-6 p-6">
                                        <Reveal direction="up" delay={20} duration={700}>
                                            <h1 className="text-5xl font-medium text-white max-w-[1000px]">No One Solves Global Challenges Alone.</h1>
                                        </Reveal>
                                        <Reveal direction="up" delay={100} duration={700}>
                                            <p className="mt-6 max-w-[1000px] text-white">
                                            We collaborate with our global contacts to help them draft concise briefs and identify potential solutions for their local challenges. After conducting a due diligence check and high-level feasibility assessments
                                        </p>
                                        </Reveal>
                                        <Reveal direction="up" delay={150} duration={700}>
                                            <button className="bg-custom-blue text-white p-3 w-fit px-8 mt-8 rounded-full flex flex-nowrap gap-2 transition-colors duration-150 ease-in-out hover:bg-red-700 cursor-pointer">
                                                Partner with us
                                            </button>
                                        </Reveal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* why partnerships matter */}
                    {/* <div className="w-full flex justify-center gap-6">
                            <div className="w-1/2 p-8 flex flex-col justify-center pl-[280px]">
                            <Reveal direction="up" delay={100} duration={700}>
                                <p className="mt-6">
                                We collaborate with our global contacts to help them draft concise briefs and identify potential solutions for their local challenges. After conducting a due diligence check and high-level feasibility assessments
                            </p>
                            </Reveal>
                            <Reveal direction="up" delay={150} duration={700}>
                                <button className="bg-custom-green text-white p-3 w-fit px-8 mt-8 rounded-full flex flex-nowrap gap-2 transition-colors duration-150 ease-in-out hover:bg-red-700 cursor-pointer">
                                    Partner with us
                                </button>
                            </Reveal>
                            </div>
                            <div className="w-1/2">
                                <div className="aspect-[4/2] relative">
                                    <Image
                                    src="/images/bf1d90_bd9dbff3ae644a7ca28b8adcd940014e~mv2.avif"
                                    fill
                                    alt=""
                                    className="object-cover "
                                />
                                </div>
                                
                            </div>
                            
                    </div> */}

                    {/* Partners */}
                    <div className="w-full flex justify-center mt-20">
                        <div className="w-full max-w-[1400px] p-6">

                            {/* category tabs */}
                            <Reveal direction="up" delay={50} duration={700}>
                                <div className="w-full flex flex-wrap items-center gap-3 border-b border-gray-200 pb-6">
                                    <button
                                        onClick={() => setActiveCategory("All")}
                                        className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors duration-150 ease-in-out cursor-pointer ${
                                            isAll
                                                ? "bg-custom-blue text-white"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                    >
                                        All
                                    </button>
                                    {partners.map((partner) => (
                                        <button
                                            key={partner.category}
                                            onClick={() => setActiveCategory(partner.category)}
                                            className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors duration-150 ease-in-out cursor-pointer ${
                                                activeCategory === partner.category
                                                    ? "bg-custom-blue text-white"
                                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            }`}
                                        >
                                            {partner.category}
                                        </button>
                                    ))}
                                </div>
                            </Reveal>

                            {/* description, only shown for a selected category (not "All") */}
                            {!isAll && activePartner && (
                                <Reveal direction="up" delay={50} duration={700}>
                                    <p className="mt-8  text-gray-600">
                                        {activePartner.description}
                                    </p>
                                </Reveal>
                            )}

                            {/* logos grid */}
                            <Reveal direction="up" delay={100} duration={700}>
                                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-8">
                                    {logosToShow.map((partner, index) => (
                                        <div
                                            key={`${activeCategory}-${index}`}
                                            className="aspect-[4/3] relative bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center"
                                        >
                                            <Image
                                                src={partner.logo}
                                                fill
                                                alt=""
                                                className="object-contain p-4"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </Reveal>
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </>
    )
}