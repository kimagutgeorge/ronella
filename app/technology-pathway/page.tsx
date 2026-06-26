"use client"
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";

export default function TechnologyPathway(){
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [])
    return(
        <>
        {loading && (
            <Loader />
        )}
        {!loading && (
        <>
            <div className="w-full h-[60vh] relative">
                <Navbar />
                <div className="w-full h-full absolute">
                    <Image src="/images/bf1d90_75dd4d3285fd4f56ad356ff84c8d9a1b~mv2.avif" fill alt="" className="object-cover" />
                    {/* overlay */}
                    <div className="w-full h-full absolute z-20 bg-black opacity-20" />
                </div>
            </div>

            <Footer />
        </>
        )}
        </>
    )
}