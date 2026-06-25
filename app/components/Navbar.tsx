"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navbar_items = [
    { label: "About us", link: "/about-us" },
    { label: "What We Do", link: "/what-we-do" },
    { label: "Technology Pathway", link: "/technology-pathway" },
    { label: "Projects", link: "#" },
    { label: "Partners", link: "#" },
    { label: "Insights", link: "#" },
    { label: "Contact", link: "#" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`w-screen flex justify-center px-6 py-4 fixed top-0 left-0 z-[9999] transition-all duration-300 ease-in-out
                ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
        >
            <div className="w-full flex max-w-[1400px] gap-2">
                <div className="w-[10%] flex justify-center">
                    <Link href="/" className="w-fit">
                        <Image src="/Ronella_web_logo.avif" width="40" height="40" alt={""} />
                    </Link>
                </div>

                <div className="w-full flex gap-2 justify-end items-center">
                    {navbar_items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className={`px-4 uppercase transition-all ease-in-out duration-150
                                hover:text-[#0150C2]
                                ${scrolled ? "text-black" : "text-white"}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}