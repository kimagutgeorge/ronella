"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { Reveal } from "../hooks/reveal";

const members = [
    {
        category: "Director",
        title: "Charles Show",
        role: "Board Director",
        image: "/members/image-1.png",
        bio: `With over 45 years of experience in construction and civil engineering, Charles brings deep practical knowledge in project delivery, property development, and infrastructure to support Ronella’s global initiatives. His career, including a decade in the Middle East leading major projects, has shaped his ability to guide diverse, high-performing teams and deliver complex solutions in challenging environments. At Ronella, this experience is applied to developing scalable, sustainable projects that address real-world challenges,particularly for communities affected by climate change. Charles focuses on building strong partnerships, aligning stakeholders, and ensuring that ideas are translated into practical, impactful outcomes. His role is centred on enabling collaboration, maintaining strategic direction, and helping Ronella deliver meaningful, long-term value where it is needed most.`,
    },
    {
        category: "Staff",
        title: "Juan Manuel Cadenas",
        role: "Programme Lead",
        image: "/members/image-2.png",
        bio: `Juan has over 30 years of international experience in civil engineering and infrastructure project leadership, with a strong track record in managing large-scale construction and complex delivery environments. His career spans Spain, Europe, and the Middle East, where he has led multicultural teams across sectors including transport, industrial, petrochemical, and major civil works. At Ronella, Juan applies this expertise to support the planning and delivery of high-impact infrastructure projects, ensuring they are designed and executed to the highest standards. His experience on landmark programmes such as major metro systems provides valuable insight into managing scale, complexity, and long-term sustainability. Juan also contributes to strengthening partnerships and promoting innovation, helping Ronella develop solutions that are both technically robust and aligned with its mission to support communities globally.`
    },
    {
        category: "Staff",
        title: "Peter Lalor",
        role: "Technical Advisor",
        image: "/members/image-3.png",
        bio: `Peter has extensive international experience across strategic leadership, financial management, and organisational transformation, developed over a career spanning global infrastructure groups and diversified investments. His 18 years in the Middle East as CFO of major organisations, combined with experience across the USA, Japan, and Europe, provide Ronella with a strong foundation in navigating complex, multi-cultural environments. At Ronella, Peter applies this expertise to strengthen financial governance, support sustainable growth, and ensure that projects are structured for long-term viability and impact. His background in restructuring, digitalisation, ERP systems, and financial reporting enables the organisation to operate efficiently while scaling its global initiatives. Peter plays a key role in building robust partnerships, aligning commercial and humanitarian objectives, and supporting Ronella’s ability to deliver meaningful, sustainable outcomes worldwide.`,
    },
    {
        category: "Director",
        title: "John Shaw",
        role: "Board Director",
        image: "/members/image-4.png",
        bio: `John brings a broad range of entrepreneurial and leadership experience across construction, property, hospitality, and digital enterprise in both the UK and Australia. His background in building and managing diverse ventures, including large-scale property operations and online investment initiatives, provides Ronella with practical insight into delivering and scaling projects across different sectors. At Ronella, John contributes a strong people-focused approach, drawing on his experience in behavioural psychology and crisis intervention to support effective leadership, collaboration, and decision-making. His ability to understand both commercial dynamics and human factors helps ensure that projects are delivered with clarity, resilience, and sensitivity to the communities they serve. John plays an important role in strengthening team cohesion, supporting strategic direction, and helping Ronella build initiatives that are both commercially sound and socially impactful.`,
    },
];

const tabs = ["All", "Director", "Staff"];

export default function Leadership() {
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("All");
    const [selectedMember, setSelectedMember] = useState<typeof members[number] | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (selectedMember) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedMember]);

    const filteredMembers =
        activeTab === "All"
            ? members
            : members.filter((mem) => mem.category === activeTab);

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
                                        src="/bgs/pexels-rdne-7551184.jpg"
                                        fill
                                        alt=""
                                        className="object-cover"
                                    />
                                </div>
                                <div className="w-full h-full py-10 absolute z-40 flex justify-center">
                                    <div className="w-full h-full max-w-[1400px] flex flex-col justify-end py-6 p-6">
                                        <Reveal direction="up" delay={20} duration={700}>
                                            <h1 className="text-5xl font-bold text-white">Our Team</h1>
                                        </Reveal>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-center mt-20">
                        <div className="w-full max-w-[1400px] flex flex-col md:flex-row gap-10 px-6">
                            <div className="w-full md:w-[70%]">
                                <div className="w-full flex gap-8 py-4 border-b border-gray-200">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`relative pb-3 text-lg font-medium transition-colors duration-150 cursor-pointer ${
                                                activeTab === tab
                                                    ? "text-custom-blue"
                                                    : "text-gray-400 hover:text-custom-blue"
                                            }`}
                                        >
                                            {tab}
                                            {activeTab === tab && (
                                                <span className="absolute left-0 -bottom-[1px] w-full h-[2px] bg-custom-green" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                                <div className="w-full flex flex-wrap mt-6 gap-4">
                                    {filteredMembers.map((mem, index) => (
                                        <div
                                            key={index}
                                            onClick={() => setSelectedMember(mem)}
                                            className="w-[calc(50%-8px)] sm:w-[calc(25%-12px)] p-4 flex flex-col justify-center items-center shadow-md shadow-transparent cursor-pointer transition-all duration-150 hover:shadow-gray-200"
                                        >
                                            <div className="w-[200px] h-[200px] aspect-square relative">
                                                <Image
                                                    src={mem.image}
                                                    fill
                                                    alt={mem.title}
                                                    className="rounded-full object-cover"
                                                />
                                            </div>
                                            <h3 className="mt-4 text-xl font-bold text-custom-blue text-center">
                                                {mem.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm">{mem.category}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full md:w-[30%] flex flex-col gap-4">
                                <div className="w-full bg-custom-blue text-white p-6 flex flex-col gap-2">
                                    <h3 className="text-xl font-bold">Support Our Work</h3>
                                    <p className="text-sm text-white/80">
                                        Help us extend sustainable, resilient projects to more communities around the world.
                                    </p>
                                    <button className="mt-3 bg-custom-green text-white py-2 px-6 rounded-full w-fit transition-colors duration-150 hover:bg-red-700 cursor-pointer">
                                        Donate
                                    </button>
                                </div>
                                <div className="w-full border border-gray-200 p-6 flex flex-col gap-2">
                                    <h3 className="text-xl font-bold text-custom-blue">Our Projects</h3>
                                    <p className="text-sm text-gray-500">
                                        See the technology partnerships and initiatives currently underway.
                                    </p>
                                    <button className="mt-3 border border-custom-blue text-custom-blue py-2 px-6 rounded-full w-fit transition-colors duration-150 hover:bg-custom-blue hover:text-white cursor-pointer">
                                        View Projects
                                    </button>
                                </div>
                                <div className="w-full border border-gray-200 p-6 flex flex-col gap-2">
                                    <h3 className="text-xl font-bold text-custom-blue">Get in Touch</h3>
                                    <p className="text-sm text-gray-500">
                                        Have a question or a partnership idea? We&apos;d love to hear from you.
                                    </p>
                                    <button className="mt-3 border border-custom-blue text-custom-blue py-2 px-6 rounded-full w-fit transition-colors duration-150 hover:bg-custom-blue hover:text-white cursor-pointer">
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />

                    {/* Member modal */}
                    {selectedMember && (
                        <div
                            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 p-4"
                            onClick={() => setSelectedMember(null)}
                        >
                            <div
                                className="w-full max-w-[950px] h-[85vh] bg-white overflow-hidden flex flex-col md:flex-row relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedMember(null)}
                                    className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 text-custom-blue hover:bg-white transition-colors duration-150 cursor-pointer"
                                    aria-label="Close"
                                >
                                    ✕
                                </button>
                                <div className="w-full md:w-[30%] h-[280px] md:h-auto relative shrink-0 p-4">
                                    <div className="w-full aspect-square relative">
                                        <Image
                                        src={selectedMember.image}
                                        fill
                                        alt={selectedMember.title}
                                        className="object-cover"
                                    />
                                    </div>
                                    
                                </div>
                                <div className="w-full md:w-[70%] p-8 overflow-y-auto">
                                    <span className="text-custom-green font-medium text-sm uppercase tracking-wide">
                                        {selectedMember.category}
                                    </span>
                                    <h2 className="text-3xl font-bold text-custom-blue mt-2">
                                        {selectedMember.title}
                                    </h2>
                                    <p className="text-gray-500 mt-1">{selectedMember.role}</p>
                                    <p className="text-gray-600 mt-4 leading-relaxed">
                                        {selectedMember.bio}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    );
}