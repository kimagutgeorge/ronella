"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { Reveal } from "../hooks/reveal";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ResearchAndDevelopment(){
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
                                            <h1 className="text-5xl font-bold text-white">Research and Development</h1>
                                            <p className="text-white mt-4 w-full max-w-[700px]">
                                                Ronella Group collaborates with international partners, specialists, and technology providers to design and deliver sustainable projects. We assess and integrate proven, resilient, and scalable technologies tailored to local needs, ensuring each solution is practical, feasible, and capable of creating lasting positive impact for the communities we serve.
                                            </p>
                                        </Reveal>
                                        <Reveal direction="up" delay={100} duration={700}>
                                            <button className="bg-custom-green text-white p-3 w-fit px-8 mt-8 rounded-full flex flex-nowrap gap-2 transition-colors duration-150 ease-in-out hover:bg-red-700 cursor-pointer">
                                                Collaborate With Ronella
                                            </button>
                                        </Reveal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />
                    </>
            )}
            </>
        )
}