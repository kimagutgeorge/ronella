"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Loader from "@/app/components/Loader";
import Footer from "@/app/components/Footer";
import { Reveal } from "@/app/hooks/reveal";
import { IoCloseSharp, IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

/* ── Types ── */
interface GalleryItem {
    image: string;
}

interface ProjectSpec {
    item: string;
    value: string;
}

interface ProjectDetail {
    item: string;
    value: number;
    bgImage: string;
}

interface ProjectData {
    title: string;
    subTitle: string;
    projectImage: string;
    projectVideo: string;
    description: string;
    projectSpecs: ProjectSpec[];
    project_details: ProjectDetail[];
    content: string;
    gallery: GalleryItem[];
}

type SlideDirection = "left" | "right";

/* ── Component ── */
export default function ProjectDetails() {
    const [loading, setLoading]               = useState<boolean>(true);
    const [visibleModal, setVisibleModal]     = useState<boolean>(false);
    const [galleryImages, setGalleryImages]   = useState<GalleryItem[]>([]);

    /* slider state */
    const [currentIndex, setCurrentIndex]     = useState<number>(0);
    const [nextIndex, setNextIndex]           = useState<number | null>(null);
    const [slideDir, setSlideDir]             = useState<SlideDirection | null>(null);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
    const [animating, setAnimating]           = useState<boolean>(false);

    const DURATION = 420; // ms — keep in sync with the transition value below

    const projectDetails: ProjectData = {
        title: "Afratak",
        subTitle: "Empowering communities through sustainable agricultural innovation",
        projectImage: "",
        projectVideo: "/videos/project_video.mp4",
        description:
            "Ronella Group is proud to be working closely with the team behind Aftrak, an award-winning initiative developed by Professors Dr Jonathan Wilson and Dr Toby Williams at Loughborough University. Their solar-powered microgrid and micro-tractor system has already transformed farming conditions for smallholder communities in East Africa, and we are excited to support the expansion of this groundbreaking technology.",
        projectSpecs: [
            { item: "status",          value: "Complete"          },
            { item: "start Date",      value: "15 JAN 2026"       },
            { item: "Completion Date", value: "26 JUNE 2026"      },
            { item: "Region",          value: "East Africa"       },
            { item: "Country",         value: "Malawi"            },
            { item: "Project Lead",    value: "Mr Soustain Chigalu" },
        ],
        project_details: [
            { item: "People",     value: 5000, bgImage: "/bgs/g18.png" },
            { item: "Households", value: 800,  bgImage: "/bgs/g3.png"  },
            { item: "Villages",   value: 4,    bgImage: "/bgs/g4.png"  },
            { item: "Pillars",    value: 3,    bgImage: "/bgs/g17.png" },
        ],
        content: `
            <p>
            The Mapanda Community Development Project is a collaborative initiative between
            <strong>Ronella Group</strong> and <strong>Kamkom Technologies</strong> aimed at improving the lives of
            approximately <strong>5,000 people</strong> across four villages in Malawi's Zomba region.
            Led by <strong>Mr. Soustain Chigalu</strong>, the project focuses on delivering sustainable
            solutions that strengthen communities and create long-term opportunities.
            </p>

            <h2>Our Approach</h2>
            <p>The project is built around three key pillars that work together to support community development:</p>

            <h3>Community Social Services</h3>
            <p>Providing clean water, renewable energy, a two-classroom school, and a community health clinic to improve access to essential services.</p>

            <h3>Economic Empowerment</h3>
            <p>Supporting local livelihoods through irrigation, fish farming, livestock production, poultry, pig farming, and cold storage facilities that improve food security and increase household incomes.</p>

            <h3>Environmental Sustainability</h3>
            <p>Promoting responsible land management, organic farming practices, forestry, and water conservation to ensure long-term environmental resilience.</p>

            <h2>Expected Impact</h2>
            <p>By combining social infrastructure, economic development, and environmental stewardship, the project aims to build stronger, healthier, and more resilient communities while creating lasting benefits for future generations.</p>
        `,
        gallery: [
            { image: "/images/food-security.avif"                               },
            { image: "/images/people-standing-in-front-of-waste.avif"           },
            { image: "/images/pexels-david-pastory-1377991555-37807581.jpg"      },
            { image: "/images/pyrolysis-system.avif"                            },
            { image: "/images/4x-waste-images.avif"                             },
            { image: "/images/sewage-system.avif"                               },
        ],
    };

    /* ── Open modal at a specific index ── */
    function openModal(images: GalleryItem[], startIndex: number): void {
        setGalleryImages(images);
        setCurrentIndex(startIndex);
        setNextIndex(null);
        setSlideDir(null);
        setIsTransitioning(false);
        setAnimating(false);
        setVisibleModal(true);
    }

    /* ──────────────────────────────────────────────────────────
       slide()
       1. Set up nextIndex + slideDir  →  renders BOTH images
          at their OFF-SCREEN starting positions (no transition).
       2. Two rAFs let the browser paint that initial layout.
       3. setAnimating(true) triggers the CSS transition on both
          images simultaneously — current exits, next enters.
       4. After DURATION ms swap currentIndex and tear down.
    ────────────────────────────────────────────────────────── */
    const slide = useCallback(
        (dir: SlideDirection): void => {
            if (isTransitioning) return;

            const total: number = galleryImages.length;
            const next: number =
                dir === "right"
                    ? (currentIndex + 1) % total
                    : (currentIndex - 1 + total) % total;

            setNextIndex(next);
            setSlideDir(dir);
            setIsTransitioning(true);

            // Double rAF: first rAF queues after current paint,
            // second rAF queues after the browser has actually rendered
            // the initial (off-screen) positions, then we flip animating.
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setAnimating(true);

                    setTimeout(() => {
                        setCurrentIndex(next);
                        setNextIndex(null);
                        setSlideDir(null);
                        setIsTransitioning(false);
                        setAnimating(false);
                    }, DURATION);
                });
            });
        },
        [isTransitioning, currentIndex, galleryImages.length]
    );

    /* ── Jump to dot ── */
    function jumpTo(index: number): void {
        if (index === currentIndex || isTransitioning) return;
        slide(index > currentIndex ? "right" : "left");
        // Override the next index calculated inside slide()
        // (slide() always computes +1 / -1; for jumps we set it directly)
        setNextIndex(index);
    }

    /* ── Keyboard navigation ── */
    useEffect(() => {
        if (!visibleModal) return;
        function handleKey(e: KeyboardEvent): void {
            if (e.key === "ArrowRight") slide("right");
            if (e.key === "ArrowLeft")  slide("left");
            if (e.key === "Escape")     setVisibleModal(false);
        }
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [visibleModal, slide]);

    /* ── Lock body scroll ── */
    useEffect(() => {
        document.body.style.overflow = visibleModal ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [visibleModal]);

    /* ── Initial loader ── */
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    /* ──────────────────────────────────────────────────────────
       Slide styles
       • Current image: sits at 0, then exits to -100% (right)
         or +100% (left) once animating.
       • Entering image: starts off-screen at +100% (right) or
         -100% (left) — no transition — then slides to 0 once
         animating is true.
    ────────────────────────────────────────────────────────── */
    const TRANSITION = `transform ${DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;

    function currentStyle(): React.CSSProperties {
        if (!isTransitioning) return { transform: "translateX(0%)" };
        return {
            transform: animating
                ? slideDir === "right" ? "translateX(-100%)" : "translateX(100%)"
                : "translateX(0%)",
            transition: animating ? TRANSITION : "none",
        };
    }

    function enteringStyle(): React.CSSProperties {
        // Initial off-screen position — NO transition so it snaps into place.
        // Once animating fires, add transition and move to 0.
        return {
            transform: animating
                ? "translateX(0%)"
                : slideDir === "right" ? "translateX(100%)" : "translateX(-100%)",
            transition: animating ? TRANSITION : "none",
        };
    }

    return (
        <>
            {loading && <Loader />}

            {!loading && (
                <>
                    {/* ── IMAGE SLIDER MODAL ── */}
                    {visibleModal && (
                        <div className="fixed inset-0 z-[99999] flex items-center justify-center">
                            {/* backdrop */}
                            <div
                                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                                onClick={() => setVisibleModal(false)}
                            />

                            {/* modal panel */}
                            <div
                                className="relative z-10 w-full max-w-5xl mx-4 bg-white flex flex-col"
                                style={{ maxHeight: "90vh" }}
                            >
                                {/* header */}
                                <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
                                    <span className="text-gray-400 text-sm tracking-widest uppercase">
                                        {currentIndex + 1} / {galleryImages.length}
                                    </span>
                                    <button
                                        onClick={() => setVisibleModal(false)}
                                        className="text-gray-500 hover:text-red-500 cursor-pointer transition-colors duration-150 p-1"
                                        aria-label="Close"
                                    >
                                        <IoCloseSharp size={22} />
                                    </button>
                                </div>

                                {/* ── SLIDER VIEWPORT ── */}
                                <div
                                    className="relative w-full overflow-hidden"
                                    style={{ height: "70vh" }}
                                >
                                    {/* Current image — exits when animating */}
                                    <div className="absolute inset-0" style={currentStyle()}>
                                        {galleryImages[currentIndex] && (
                                            <Image
                                                src={galleryImages[currentIndex].image}
                                                fill
                                                alt={`Gallery image ${currentIndex + 1}`}
                                                className="object-contain"
                                                priority
                                            />
                                        )}
                                    </div>

                                    {/* Entering image — only mounted during transition */}
                                    {isTransitioning && nextIndex !== null && galleryImages[nextIndex] && (
                                        <div className="absolute inset-0" style={enteringStyle()}>
                                            <Image
                                                src={galleryImages[nextIndex].image}
                                                fill
                                                alt={`Gallery image ${nextIndex + 1}`}
                                                className="object-contain"
                                            />
                                        </div>
                                    )}

                                    {/* Left arrow */}
                                    <button
                                        onClick={() => slide("left")}
                                        disabled={isTransitioning}
                                        aria-label="Previous image"
                                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/10 hover:bg-black/20 text-black rounded-full p-2 transition-all duration-150 disabled:opacity-40 cursor-pointer"
                                    >
                                        <IoChevronBackOutline size={24} />
                                    </button>

                                    {/* Right arrow */}
                                    <button
                                        onClick={() => slide("right")}
                                        disabled={isTransitioning}
                                        aria-label="Next image"
                                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/10 hover:bg-black/20 text-black rounded-full p-2 transition-all duration-150 disabled:opacity-40 cursor-pointer"
                                    >
                                        <IoChevronForwardOutline size={24} />
                                    </button>
                                </div>

                                {/* Dot indicators */}
                                <div className="flex justify-center gap-2 py-4 border-t border-gray-100">
                                    {galleryImages.map((_: GalleryItem, i: number) => (
                                        <button
                                            key={i}
                                            onClick={() => jumpTo(i)}
                                            aria-label={`Go to image ${i + 1}`}
                                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                                i === currentIndex
                                                    ? "bg-black scale-125"
                                                    : "bg-gray-300 hover:bg-gray-500"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    <Navbar isNotAbsolute />

                    <div className="w-full flex flex-col items-center justify-center mt-16">
                        <div className="w-full max-w-[1400px] mt-6 p-6">
                            <Reveal direction="up" delay={150} duration={700}>
                                <h1 className="text-custom-blue text-lg">{projectDetails.title}</h1>
                                <h2 className="mt-2 text-4xl font-medium uppercase text-black">
                                    {projectDetails.subTitle}
                                </h2>
                            </Reveal>

                            {/* video */}
                            <div className="w-full mt-10 flex justify-center">
                                <video className="w-full h-full" controls preload="auto">
                                    <source src={projectDetails.projectVideo} type="video/mp4" />
                                </video>
                            </div>

                            {/* specs */}
                            <div className="w-full flex justify-end gap-4 py-5">
                                {projectDetails.projectSpecs.map((det: ProjectSpec, index: number) => (
                                    <div key={index} className="w-fit flex flex-col border-l border-gray-200 px-4">
                                        {det.item !== "status" && (
                                            <span className="text-sm text-end uppercase px-4">{det.item}</span>
                                        )}
                                        <span
                                            className={`text-sm font-medium text-black text-end p-[3px] px-4 ${
                                                det.value === "Complete"
                                                    ? "rounded-full text-custom-blue bg-custom-blue/30 border border-custom-blue"
                                                    : ""
                                            }`}
                                        >
                                            {det.value}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* description + impact cards */}
                            <div className="mt-10 py-8 border-b border-gray-200">
                                <div className="py-4">
                                    <h3 className="flex gap-4 items-center">
                                        <span className="text-black font-semibold">Jump to: </span>
                                        <span className="border border-custom-green text-sm text-custom-green bg-custom-green/20 p-[3px] px-6 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-custom-green/30">
                                            <a href="#overview">Project Overview</a>
                                        </span>
                                        <span className="border border-custom-green text-sm text-custom-green bg-custom-green/20 p-[3px] px-6 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-custom-green/30">
                                            <a href="#gallery">Gallery</a>
                                        </span>
                                    </h3>
                                </div>

                                <p className="text-gray-500">{projectDetails.description}</p>

                                <div className="w-full mt-10 flex flex-nowrap gap-4">
                                    {projectDetails.project_details.map((detail: ProjectDetail, index: number) => (
                                        <div key={index} className="w-full aspect-[4/4.5] text-white relative">
                                            <div className="w-full h-full absolute">
                                                <div className="w-full h-full relative z-10">
                                                    <Image src={detail.bgImage} fill alt="" />
                                                </div>
                                            </div>
                                            <div className="w-full h-full absolute z-20 bg-black/30" />
                                            <div className="w-full h-full flex flex-col justify-between absolute z-30 p-6">
                                                <h3 className="text-2xl">{detail.item}</h3>
                                                <h4 className="text-4xl font-black">{detail.value}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* project overview */}
                    <div className="w-full flex justify-center" id="overview">
                        <div className="w-full max-w-[1400px] p-6 gap-4 border-b border-gray-200">
                            <div className="w-full">
                                <h3 className="text-black text-2xl font-medium">PROJECT OVERVIEW</h3>
                            </div>
                            <div
                                dangerouslySetInnerHTML={{ __html: projectDetails.content }}
                                className="text-black mt-6"
                            />
                        </div>
                    </div>

                    {/* gallery */}
                    <div className="w-full flex justify-center" id="gallery">
                        <div className="w-full max-w-[1400px] p-6">
                            <h3 className="text-black text-2xl font-medium">GALLERY</h3>
                            <div className="w-full flex flex-wrap gap-4 mt-6">
                                {projectDetails.gallery.map((gal: GalleryItem, index: number) => (
                                    <div
                                        key={index}
                                        onClick={() => openModal(projectDetails.gallery, index)}
                                        className="w-[32%] aspect-[4/3] relative cursor-pointer overflow-hidden group"
                                    >
                                        <Image
                                            src={gal.image}
                                            fill
                                            alt={`Gallery image ${index + 1}`}
                                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Footer />
                </>
            )}
        </>
    );
}