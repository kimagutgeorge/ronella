"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Reveal } from "../hooks/reveal";

const blogPosts = [
  {
    category: "Climate Action",
    title: "Restoring Forests to Protect Future Generations",
    description:
      "Discover how community-led tree planting initiatives are helping restore degraded landscapes, improve biodiversity, and build resilience against climate change.",
    author: "Sarah Wanjiku",
    date: "June 12, 2026",
    image:
      "/images/pexels-david-pastory-1377991555-37807581.jpg",
  },
  {
    category: "Clean Water",
    title: "Bringing Safe Drinking Water to Rural Communities",
    description:
      "Access to clean water transforms lives. Learn how new boreholes and water purification projects are improving health and reducing water scarcity.",
    author: "James Otieno",
    date: "May 30, 2026",
    image:
      "/images/pexels-fowzer-junaideen-156923256-12931319.jpg",
  },
  {
    category: "Education",
    title: "Empowering Young Minds Through Digital Learning",
    description:
      "Our education programs are equipping students with digital skills, modern learning resources, and opportunities for a brighter future.",
    author: "Grace Njeri",
    date: "April 18, 2026",
    image:
      "/images/pexels-fowzer-junaideen-156923256-12931319.jpg",
  },
  {
    category: "Healthcare",
    title: "Mobile Clinics Reaching Underserved Villages",
    description:
      "Healthcare should be accessible to everyone. Our mobile clinics are delivering essential medical services to remote communities.",
    author: "David Mwangi",
    date: "March 22, 2026",
    image:
      "/images/pexels-lagosfoodbank-8042458.jpg",
  },
  {
    category: "Healthcare",
    title: "Supporting Farmers with Sustainable Agriculture",
    description:
      "Through climate-smart farming practices, local farmers are increasing crop yields while protecting natural resources for future generations.",
    author: "Faith Kiptoo",
    date: "February 14, 2026",
    image:
      "/images/pexels-lagosfoodbank-8042458.jpg",
  },
  {
    category: "Women's Empowerment",
    title: "Creating Opportunities for Women Entrepreneurs",
    description:
      "Small business training and financial support are helping women establish sustainable livelihoods and strengthen their communities.",
    author: "Mercy Achieng",
    date: "January 28, 2026",
    image:
      "/images/pexels-lorna-pauli-1320744316-36093586.jpg",
  },
  {
    category: "Clean Water",
    title: "Youth Leadership Programs Inspiring Positive Change",
    description:
      "Our leadership workshops are empowering young people with the confidence, skills, and networks needed to become community changemakers.",
    author: "Peter Kamau",
    date: "December 9, 2025",
    image:
      "/images/pexels-vladimirsrajber-18103937.jpg",
  },
  {
    category: "Renewable Energy",
    title: "Solar Energy Lighting Up Rural Schools",
    description:
      "Installing solar power systems is providing reliable electricity for classrooms, improving education and reducing dependence on fossil fuels.",
    author: "Anne Chebet",
    date: "November 21, 2025",
    image:
      "/images/pexels-lagosfoodbank-8042458.jpg",
  },
  {
    category: "Women's Empowerment",
    title: "Building Stronger Communities Through Partnership",
    description:
      "Collaboration with local leaders and international partners is enabling long-term development projects that create lasting social impact.",
    author: "Michael Ochieng",
    date: "October 15, 2025",
    image:
      "/images/pexels-fowzer-junaideen-156923256-12931319.jpg",
  },
];

// unique, ordered list of categories derived from the posts
const categories = [...new Set(blogPosts.map((post) => post.category))];

export default function Insights(){
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("All");
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
    
        return () => clearTimeout(timer);
    }, []);

    const isAll = activeCategory === "All";
    const visiblePosts = isAll
        ? blogPosts
        : blogPosts.filter((post) => post.category === activeCategory);
    
    return(
        <>
        {loading && (
            <Loader />
        )}
        {!loading && (
            <>
                {/* Hero */}
                <div className="w-full h-[90vh] relative">
                    <Navbar />
                    <div className="w-full h-full absolute">
                        <div className="w-full h-full relative">
                            <div className="w-full h-full absolute bg-black z-30 opacity-30" />
                            <div className="w-full h-full absolute z-10">
                                <Image
                                    src="/images/pexels-lagosfoodbank-8042458.jpg"
                                    fill
                                    alt=""
                                    className="object-cover object-top"
                                />
                            </div>
                            <div className="w-full h-full py-10 absolute z-40 flex justify-center">
                                <div className="w-full h-full max-w-[1400px] flex flex-col justify-end py-6 p-6">
                                    <Reveal direction="up" delay={20} duration={700}>
                                        <span className="border border-custom-blue text-sm text-white bg-custom-blue/50 p-[3px] px-6 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-custom-green/30">
                                            Featured
                                        </span>
                                        <h1 className="text-6xl font-bold text-white max-w-[1200px]">A cleaner energy pathway for African communities</h1>
                                        <p className="text-white mt-4 w-full max-w-[1000px]">
                                            Ronella Group supports emerging sustainability leaders at the University of Leicester’s Climate Innovation Lab and prepares for a new employer project with the University of..
                                        </p>
                                    </Reveal>
                                    {/* <Reveal direction="up" delay={100} duration={700}>
                                        <button className="bg-custom-green text-white p-3 w-fit px-8 mt-8 rounded-full flex flex-nowrap gap-2 transition-colors duration-150 ease-in-out hover:bg-red-700 cursor-pointer">
                                            Discuss Technology Partnership
                                        </button>
                                    </Reveal> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* blog grid */}
                <div className="w-full flex justify-center">
                    <div className="w-full max-w-[1400px] p-6">

                        {/* category tabs */}
                        <Reveal direction="up" delay={50} duration={700}>
                            <div className="w-full flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-6">
                                <div className="flex flex-wrap items-center gap-3">
                                    <button
                                        onClick={() => setActiveCategory("All")}
                                        className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors duration-150 ease-in-out cursor-pointer ${
                                            isAll
                                                ? "bg-custom-green text-white"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                    >
                                        All
                                    </button>
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setActiveCategory(category)}
                                            className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors duration-150 ease-in-out cursor-pointer ${
                                                activeCategory === category
                                                    ? "bg-custom-green text-white"
                                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>

                                <div className="flex items-center gap-2">
                                    {isSearchOpen && (
                                        <input
                                            type="text"
                                            placeholder="Search articles..."
                                            autoFocus
                                            className="border-b border-gray-300 focus:border-custom-green outline-none px-2 py-2 text-sm w-40 sm:w-56"
                                        />
                                    )}
                                    <button
                                        onClick={() => setIsSearchOpen((prev) => !prev)}
                                        aria-label="Toggle search"
                                        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-150 ease-in-out cursor-pointer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-5 h-5 text-gray-700"
                                        >
                                            <circle cx="11" cy="11" r="7" />
                                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Reveal>

                        {/* posts grid */}
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                            {visiblePosts.map((post, index) => (
                                <Reveal key={`${post.title}-${index}`} direction="up" delay={50 + (index % 3) * 50} duration={700}>
                                    <div className="w-full flex flex-col cursor-pointer group">
                                        <div className="w-full aspect-[4/3] relative overflow-hidden">
                                            <Image
                                                src={post.image}
                                                fill
                                                alt={post.title}
                                                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                            />
                                        </div>
                                        <span className="text-xs text-custom-green uppercase tracking-wide mt-4">
                                            {post.category}
                                        </span>
                                        <h3 className="text-xl font-medium mt-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 mt-2 text-sm">
                                            {post.description}
                                        </p>
                                        <div className="w-full flex justify-between items-center mt-4 pt-4 border-t border-gray-200 text-sm text-gray-500">
                                            <span>{post.author}</span>
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )}
        </>
    )
}