"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Reveal, RevealGroup } from "../hooks/reveal";
import Loader from "../components/Loader";

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
        role: "Board Director",
        category: "Director",
        image: "/members/image-1.png",
        bio: `With over 45 years of experience in construction and civil engineering, Charles brings deep practical knowledge in project delivery, property development, and infrastructure to support Ronella's global initiatives. His career, including a decade in the Middle East leading major projects, has shaped his ability to guide diverse, high-performing teams and deliver complex solutions in challenging environments. At Ronella, this experience is applied to developing scalable, sustainable projects that address real-world challenges, particularly for communities affected by climate change. Charles focuses on building strong partnerships, aligning stakeholders, and ensuring that ideas are translated into practical, impactful outcomes. His role is centred on enabling collaboration, maintaining strategic direction, and helping Ronella deliver meaningful, long-term value where it is needed most.`,
    },
    {
        title: "Juan Manuel Cadenas",
        role: "Programme Lead",
        category: "Staff",
        image: "/members/image-2.png",
        bio: `Juan has over 30 years of international experience in civil engineering and infrastructure project leadership, with a strong track record in managing large-scale construction and complex delivery environments. His career spans Spain, Europe, and the Middle East, where he has led multicultural teams across sectors including transport, industrial, petrochemical, and major civil works. At Ronella, Juan applies this expertise to support the planning and delivery of high-impact infrastructure projects, ensuring they are designed and executed to the highest standards. His experience on landmark programmes such as major metro systems provides valuable insight into managing scale, complexity, and long-term sustainability. Juan also contributes to strengthening partnerships and promoting innovation, helping Ronella develop solutions that are both technically robust and aligned with its mission to support communities globally.`,
    },
    {
        title: "Peter Lalor",
        role: "Technical Advisor",
        category: "Staff",
        image: "/members/image-3.png",
        bio: `Peter has extensive international experience across strategic leadership, financial management, and organisational transformation, developed over a career spanning global infrastructure groups and diversified investments. His 18 years in the Middle East as CFO of major organisations, combined with experience across the USA, Japan, and Europe, provide Ronella with a strong foundation in navigating complex, multi-cultural environments. At Ronella, Peter applies this expertise to strengthen financial governance, support sustainable growth, and ensure that projects are structured for long-term viability and impact. His background in restructuring, digitalisation, ERP systems, and financial reporting enables the organisation to operate efficiently while scaling its global initiatives. Peter plays a key role in building robust partnerships, aligning commercial and humanitarian objectives, and supporting Ronella's ability to deliver meaningful, sustainable outcomes worldwide.`,
    },
    {
        title: "John Shaw",
        role: "Board Director",
        category: "Director",
        image: "/members/image-4.png",
        bio: `John brings a broad range of entrepreneurial and leadership experience across construction, property, hospitality, and digital enterprise in both the UK and Australia. His background in building and managing diverse ventures, including large-scale property operations and online investment initiatives, provides Ronella with practical insight into delivering and scaling projects across different sectors. At Ronella, John contributes a strong people-focused approach, drawing on his experience in behavioural psychology and crisis intervention to support effective leadership, collaboration, and decision-making. His ability to understand both commercial dynamics and human factors helps ensure that projects are delivered with clarity, resilience, and sensitivity to the communities they serve. John plays an important role in strengthening team cohesion, supporting strategic direction, and helping Ronella build initiatives that are both commercially sound and socially impactful.`,
    },
];

export default function AboutUs(){
    const [sectionBackground, setSectionBackground] = useState("/images/pexels-lorna-pauli-1320744316-36093586.jpg");
    const [visibleApproach, setVisibleApproach] = useState(0);
    const [loading, setLoading] = useState(true);
    const [selectedMember, setSelectedMember] = useState<typeof members[number] | null>(null);

    function setNewVisibleApproach(bg: string, key:number){
        setSectionBackground(bg);
        setVisibleApproach(key);
    }

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

    return(
        <>
        {loading && (
            <Loader />
        )}
        {!loading && (
        <>
        <div className="w-full h-[70vh] relative">
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
      <div className="w-full flex justify-center mt-10 py-20 items-center">
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
            <div className="mt-6 w-full flex justify-center gap-4">
                <button className="bg-custom-green text-white p-3 w-fit px-8 mt-6 rounded-full flex flex-nowrap gap-2 transition-colors duration-150 ease-in-out hover:bg-red-700 hover:text-[#ffffff] cursor-pointer">
                    Learn More
                </button>

                <button className="bg-red-600 text-white p-3 w-fit px-8 mt-6 rounded-full flex flex-nowrap gap-2 transition-colors duration-150 ease-in-out hover:bg-red-700 cursor-pointer">
                    Donate
                </button>
            </div>
          </Reveal>

        </div>
      </div>

    <div className="w-full flex mt-10 h-100">
        <div className="w-1/2 p-8 flex flex-col justify-center">
        <Reveal direction="up" delay={50} duration={700}>
            <h1 className="text-3xl font-semibold text-black">Our Mission</h1>
            <p className="mt-6">Having had the privilege of growing up in the Western world, we are deeply driven by a passion to help create a cleaner, healthier future – not only for those less fortunate, but also for our own children. Guided by empathy, integrity, and unwavering determination, we strive to uplift the vulnerable and champion sustainable solutions that protect our planet.</p>
        </Reveal>
        </div>
        <div className="w-1/2" style={{
            backgroundImage: "url(/images/pexels-lagosfoodbank-8042458.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed"
      }}>
        
        </div>
      </div>
        <div className="w-full flex h-100">
        <div className="w-1/2" style={{
            backgroundImage: "url(/images/pexels-lagosfoodbank-8042458.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed"
      }}>
        
        </div>
        <div className="w-1/2 p-8 flex flex-col justify-center">
        <Reveal direction="up" delay={50} duration={700}>
            <h1 className="text-3xl font-semibold text-black">Our Role</h1>
            <p className="mt-6">In collaboration with our international partners, we are committed to ensuring that technology serves to address real-world problems that people face. We design customised programs tailored to meet the specific needs of end users, solving critical issues they encounter. We also emphasise that these initiatives represent sustainable business opportunities that do not require substantial upfront investments. Instead, participants contribute value through their efforts and by maintaining transparency in project management. Our goal is to actively support the development and market introduction of transformative ideas. We facilitate access to funding, encourage cross-border partnerships, and accelerate the deployment of sustainable solutions, driving technological innovation and fostering global collaboration.</p>
        </Reveal>
        </div>
      </div>

        <div className="w-full h-170 mt-20 relative" style={{
                backgroundImage: `url(${sectionBackground})`, 
                backgroundSize: "cover", 
                backgroundRepeat: "no-repeat"
            }}>
            <div className="bg-black opacity-60 h-full w-full absolute z-10" />
            <div className="w-full h-full flex flex-nowrap absolute z-20">
                {approaches.map((approach, index) => (
                    <div key={index} 
                        onClick={()=> setNewVisibleApproach(approach.image, index)}
                        className={`w-full flex flex-col justify-center p-6 border-white ${visibleApproach === index ? 'bg-custom-green' : undefined} cursor-pointer ${index === 0 ? '' : 'border-l-2'}`}>
                        <>
                        <Reveal key={`icon-${visibleApproach === index}`} direction="up" delay={10} duration={700}>
                            <div className="w-[50px] h-[50px] relative">
                            <Image src={approach.icon} fill alt="" />
                            </div>
                        </Reveal>
                        <Reveal key={`title-${visibleApproach === index}`} direction="up" delay={100} duration={700}>
                            <h2 className="text-white text-4xl font-medium">{approach.title}</h2>
                        </Reveal>
                        {visibleApproach === index && (
                            <Reveal direction="up" delay={200} duration={700}>
                            <p className="text-white mt-4">{approach.description}</p>
                            </Reveal>
                        )}
                        </>
                    </div>
                ))}
            </div>
            
        </div>

      {/* member section */}
      {/* bg-custom-green */}
      <div className="w-full mt-20 flex flex-col justify-center items-center py-10">
        <div className="w-full max-w-[1400px] p-6">
            <h2 className="text-center text-4xl text-custom-green uppercase">Governance</h2>
        </div>
        <div className="w-full max-w-[1400px] p-6 flex gap-4">
            {members.map((mem, index) => (
                <div
                    key={index}
                    onClick={() => setSelectedMember(mem)}
                    className="w-[25%] p-4 flex flex-col justify-center items-center shadow-md shadow-transparent cursor-pointer transition-all duration-150 hover:shadow-gray-200"
                >
                    <div className="w-[200px] h-[200px] aspect-square relative">
                        <Image src={mem.image} fill alt="" className="rounded-full" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-custom-blue">{mem.title}</h3>
                </div>
            ))}
        </div>
        <div className="w-full max-w-[1400px] p-6 flex justify-center">
            <button className="bg-red-600 text-white p-3 w-fit px-8 mt-6 rounded-full flex flex-nowrap gap-2 transition-colors duration-150 ease-in-out hover:bg-red-700 cursor-pointer hover:text-white"><Link href="/leadership">View Leadership</Link></button>
        </div>
      </div>
      <div className="w-full h-200 relative" style={{
            backgroundImage: `url(/images/pexels-lorna-pauli-1320744316-36093586.jpg)`, 
            backgroundRepeat: "no-repeat", 
            backgroundSize: "cover", 
            backgroundAttachment: "fixed"
        }}>
        <div className="w-full h-full bg-black absolute opacity-30" />
        <div className="w-full h-full absolute z-10 text-white p-6 flex justify-center">
            <div className="w-full max-w-[1400px] flex flex-col justify-center">
                <span>NETWORK</span>
                <h2 className="text-4xl text-white uppercase">Our Global Network</h2>
                <p className="mt-4 w-full max-w-[700px]">
                    With the support of our colleagues around the world, and collaboration with the UK Government and the World Bank, we are establishing a comprehensive international network spanning over 150 countries.
                </p>
                <button className="bg-red-600 text-white p-3 w-fit px-8 mt-6 rounded-full flex flex-nowrap gap-2 transition-colors duration-150 ease-in-out hover:bg-red-700 cursor-pointer hover:text-white">View Our Network</button>
            </div>
            
        </div>
      </div>
        <Footer with_no_margin />

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
    )
}