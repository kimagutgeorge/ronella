"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navbar_items = [
    { label: "About us", link: "/about-us" },
    { label: "What We Do", link: "/what-we-do" },
    { label: "Technology Pathway", link: "/technology-pathway" },
    { label: "Projects", link: "#", 
        children: [
            { label: "Aftrak", link: "/project/aftrak" },
            { label: "Africa", link: "/project/aftrak" },
            { label: "Mapanda", link: "/project/aftrak" },
        ],
    },
    { label: "Partners", link: "/partners" },
    {label: "More", link: "#",
        children: [
            {label: "R&D", link: "/r-and-d"},
            {label: "Insights", link: "/insights"},
            {label: "COntacts", link: "/contact-us"}
        ]
    }
    /* { label: "Insights", link: "#" },
    { label: "Contact", link: "#" }, */
];

function NavItem({ item, scrolled }: { item: typeof navbar_items[0]; scrolled: boolean }) {
    if (!item.children) {
        return (
            <Link
                href={item.link}
                className={`px-4 uppercase transition-all ease-in-out duration-150
                    hover:text-[#0150C2]
                    ${scrolled ? "text-black" : "text-white"}`}
            >
                {item.label}
            </Link>
        );
    }

    return (
        <div className="group relative">
            <button
                className={`px-4 uppercase transition-all ease-in-out duration-150 flex items-center gap-1 cursor-pointer
                    group-hover:text-[#0150C2]
                    ${scrolled ? "text-black" : "text-white"}`}
            >
                {item.label}
                <svg
                    className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <div className="absolute top-full left-0 mt-2 min-w-[160px] bg-white shadow-lg border border-gray-100 overflow-hidden z-50
                opacity-0 invisible translate-y-1
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                transition-all duration-200 ease-in-out">
                {item.children.map((child, i) => (
                    <Link
                        key={i}
                        href={child.link}
                        className="block px-4 py-2.5 text-sm uppercase text-gray-700 hover:bg-[#0150C2] hover:text-white transition-colors duration-150"
                    >
                        {child.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}


export default function Navbar({ isNotAbsolute = false }: { isNotAbsolute?: boolean }) {
    const [scrolled, setScrolled] = useState(isNotAbsolute); // Initialize from prop

    useEffect(() => {
        if (isNotAbsolute) return; // Skip scroll listener when forced scrolled state

        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isNotAbsolute]);

    return (
        <div
            className={`w-screen flex justify-center py-4 fixed top-0 left-0 z-[9999] transition-all duration-300 ease-in-out
                ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
        >
            <div className="w-full flex max-w-[1400px] gap-2 px-6">
                <div className="w-[10%]">
                    <Link href="/" className="w-fit">
                        <Image src="/Ronella_web_logo.avif" width="40" height="40" alt={""} />
                    </Link>
                </div>

                <div className="w-full flex gap-2 justify-end items-center">
                    {navbar_items.map((item, index) => (
                        <NavItem key={index} item={item} scrolled={scrolled} />
                    ))}
                </div>
            </div>
        </div>
    );
}