"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Reveal, RevealGroup } from "./hooks/reveal.jsx"

import Mapanada_road from "./assets/projects/Mapanada_road.avif";
import afritak_image from "./assets/projects/pexels-mikomikarro-25945334.jpg";


const slides = [
  {
    id: 0,
    type: "video" as const,
    src: "/videos/9653705-hd_1920_1080_25fps.mp4",
    heading: "Healing, Feeding and Fueling the world",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 1,
    type: "image" as const,
    src: "bf1d90_20b6ef15f9054ad8bd49d3000cf6495bf000 (1).avif",
    heading: "Building a Better Tomorrow Through Innovation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 2,
    type: "color" as const,
    className: "bg-gradient-to-br from-blue-900 to-blue-600",
    heading: "Building a Better Tomorrow Through Innovation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 3,
    type: "color" as const,
    className: "bg-gradient-to-br from-emerald-900 to-emerald-600",
    heading: "Empowering Communities Across the Globe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];

const grid_items = [
  {
    image: "/images/pexels-david-pastory-1377991555-37807581.jpg",
    title: "Sustainable housing and shelter",
  },
  {
    image: "/images/pexels-guilherme-pedrosa-2156844062-34406294.jpg",
    title: "Waste management and circular economy",
  },
  {
    image: "/images/pexels-illustrate-digital-ug-924569584-28101461.jpg",
    title: "Clean water and sanitation",
  },
];

const projects = [
  {
    title: "Mapanda",
    description: "Maranda Community Project, Malawi – 2026",
    image: Mapanada_road,
  },
  {
    title: "Afritak",
    description: "Empowering communities through sustainable agricultural innovation",
    image: afritak_image,
  },
];

type Slide = (typeof slides)[number];

function SlideBackground({ slide }: { slide: Slide }) {
  if (slide.type === "video") {
    return (
      <video className="w-full h-full object-cover" autoPlay muted loop preload="auto">
        <source src={slide.src} type="video/mp4" />
      </video>
    );
  }
  if (slide.type === "image") {
    return <img src={slide.src} alt={slide.heading} className="w-full h-full object-cover" />;
  }
  return <div className={`w-full h-full ${slide.className}`} />;
}

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const goTo = (index: number) => {
    setCurrent(index);
    setProgressKey((k) => k + 1);
    setAnimKey((k) => k + 1);
  };

  const goNext = () => goTo((current + 1) % slides.length);

  useEffect(() => {
    const timeout = setTimeout(goNext, 10000);
    return () => clearTimeout(timeout);
  }, [current]);

  return (
    <>
      <style>{`
        /* ── Hero slider animations ── */
        @keyframes grow-width { from { width: 0% } to { width: 100% } }
        .progress-animate { animation: grow-width 10s linear forwards; }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(50px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-title       { opacity: 0; animation: fade-up 0.7s ease-out 0s   forwards; }
        .anim-description { opacity: 0; animation: fade-up 0.7s ease-out 0.7s forwards; }
        .anim-button      { opacity: 0; animation: fade-up 0.7s ease-out 1.4s forwards; }

        /* ── Project card: description slides up & fades in on hover ── */
        .project-card .card-description {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.4s cubic-bezier(0.4,0,0.2,1),
                      transform 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .project-card:hover .card-description {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Reduced motion: respect user preference ── */
        @media (prefers-reduced-motion: reduce) {
          .anim-title, .anim-description, .anim-button {
            opacity: 1 !important;
            animation: none !important;
          }
          .project-card .card-description {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* ── Hero Slider ───────────────────────────────────────────── */}
      <div className="w-full h-screen relative overflow-hidden">
        <Navbar />

        <div
          className="flex w-full h-full absolute top-0 left-0 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full h-full relative">
              <SlideBackground slide={slide} />
            </div>
          ))}
        </div>

        <div className="w-full h-full absolute inset-0 bg-black/40 z-10" />

        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="w-full max-w-[1400px] px-6">
            <h1
              key={`title-${animKey}`}
              className="text-white text-5xl font-bold max-w-[50%] leading-snug anim-title"
            >
              {slides[current].heading}
            </h1>
            <p
              key={`desc-${animKey}`}
              className="text-white mt-4 max-w-[50%] leading-relaxed anim-description"
            >
              {slides[current].description}
            </p>
            <button
              key={`btn-${animKey}`}
              className="bg-red-500 text-white p-3 px-8 mt-6 rounded-full flex flex-nowrap gap-2 transition-colors duration-150 ease-in-out hover:bg-red-600 cursor-pointer anim-button"
            >
              Donate <FaRegHeart className="mt-[4px]" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                i === current ? "bg-white scale-125" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="w-full h-[5px] bg-white/20 absolute z-40 bottom-0">
          <div key={progressKey} className="h-full bg-white progress-animate" />
        </div>
      </div>

      {/* ── About Us ─────────────────────────────────────────────────
           Heading fades up, paragraphs slide in from left & right    */}
      <div className="w-full flex justify-center mt-20 py-20 items-center">
        <div className="w-full max-w-[1000px] px-6">

          <Reveal direction="up" duration={800}>
            <h2 className="text-6xl font-medium text-center text-black">
              TOGETHER FOR TOMORROW
            </h2>
          </Reveal>

          <Reveal direction="left" delay={150} duration={700}>
            <p className="mt-6 text-center">
              Call it what you will, but we can't deny that the weather is becoming increasingly
              unpredictable each month – posing serious threats to vulnerable populations through
              rising temperatures, sea levels, and disrupted ecosystems. From our headquarters in
              the UK, The Ronella Group recognises the urgent need for global collaboration to
              implement adaptive strategies that safeguard the environment for future generations.
            </p>
          </Reveal>

          <Reveal direction="right" delay={300} duration={700}>
            <p className="mt-6 text-center">
              Through our global network, we foster collaboration with leading innovators in
              waste-to-energy, renewable power, water purification, food security, and modular
              housing – delivering impactful solutions that help reduce humanity's environmental
              footprint. Together, we are shaping a cleaner, more sustainable world.
            </p>
          </Reveal>

        </div>
      </div>

      {/* ── Our Purpose video ────────────────────────────────────────── */}
      <div className="w-full h-[90vh] mt-30 relative">
        <video className="w-full h-full object-cover absolute" autoPlay muted loop preload="auto">
          <source src="/videos/9365190-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="w-full h-full absolute z-10 bg-black opacity-20" />
        <div className="w-full h-full absolute z-20 flex justify-center items-center">
          <Reveal direction="up" duration={800} threshold={0.3}>
            <h1 className="text-white text-4xl cursor-pointer h-16 flex flex-col justify-center relative group">
              <span className="flex flex-row flex-nowrap gap-2 items-center">
                OUR PURPOSE <FaRegArrowAltCircleRight />
              </span>
              <span className="h-full w-0 transition-all duration-300 group-hover:w-[55%] bg-[#0150C2] absolute z-[-1] left-[-8]" />
            </h1>
          </Reveal>
        </div>
      </div>

      {/* ── Join the Movement ────────────────────────────────────────── */}
      <div className="w-full mt-20 flex justify-center flex-wrap">
        <Reveal direction="up" duration={700} className="w-full max-w-[1400px] flex py-6 border-b border-gray-300">
          <div className="w-1/2">
            <h2 className="text-4xl text-black">JOIN THE MOVEMENT</h2>
          </div>
          <div className="w-1/2 flex justify-end">
            <button className="bg-[#0150C2] text-white p-3 px-8 h-fit rounded-full flex flex-nowrap gap-2 transition-colors duration-150 ease-in-out hover:bg-red-600 cursor-pointer">
              Partner with us
            </button>
          </div>
        </Reveal>

        {/* Three "who we are" cards stagger from below */}
        <RevealGroup
          direction="up"
          stagger={150}
          duration={700}
          threshold={0.1}
          className="w-full max-w-[1400px] flex flex-nowrap justify-center mt-6 gap-4"
          childClassName="w-full"
        >
          <div className="relative group p-6">
            <h1 className="text-2xl font-bold text-center text-black">Who We Are</h1>
            <p className="mt-6 text-center">
              Having had the privilege of growing up in the Western world, we are deeply driven by
              a passion to help create a cleaner, healthier future – not only for those less
              fortunate, but also for our own children.
            </p>
          </div>

          <div className="relative group p-6">
            <h1 className="text-2xl font-bold text-center text-black">Our Mission</h1>
            <p className="mt-6 text-center">
              In collaboration with our international partners, we are committed to ensuring that
              technology serves to address real-world problems that people face.
            </p>
          </div>

          <div className="relative group p-6">
            <h1 className="text-2xl font-bold text-center text-black">Our Role</h1>
            <p className="mt-6 text-center">
              In collaboration with our international partners, we are committed to ensuring that
              technology serves to address real-world problems that people face.
            </p>
          </div>
        </RevealGroup>
      </div>

      {/* ── Technological Pathways ───────────────────────────────────── */}
      <div className="w-full mt-20 flex justify-center py-10">
        <div className="w-full">

          <Reveal direction="up" duration={700}>
            <h3 className="w-full text-4xl text-center px-6 text-black">
              TECHNOLOGICAL PATHWAYS
            </h3>
          </Reveal>

          {/* Grid items slide in from left, one by one */}
          <RevealGroup
            direction="left"
            stagger={180}
            duration={700}
            threshold={0.1}
            className="w-full flex flex-nowrap mt-6"
            childClassName="w-full"
          >
            {grid_items.map((item, index) => (
              <div key={index} className="aspect-square relative group border border-white">
                <div className="w-full h-full absolute bg-black opacity-20 transition-all duration-300 ease-in-out group-hover:opacity-60 z-20" />
                <div className="w-full h-full absolute z-10 overflow-hidden">
                  <Image
                    src={item.image}
                    fill
                    alt=""
                    className="object-cover transition-all duration-2000 ease-in group-hover:scale-125"
                  />
                </div>
                <div className="w-full h-full flex justify-center items-center absolute z-30 p-4">
                  <h4 className="text-3xl text-white hidden group-hover:flex transition-all duration-300 ease-in-out">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </RevealGroup>

        </div>
      </div>

      {/* ── Projects ─────────────────────────────────────────────────── */}
      <div className="w-full mt-20 flex justify-center">
        <div className="w-full max-w-[1400px] flex">

          {/* Left copy – slides in from left */}
          <Reveal direction="left" duration={800} threshold={0.15} className="w-[40%] flex justify-around flex-col p-6">
            <h3 className="font-bold text-lg">PROJECTS</h3>
            <h4 className="w-full text-4xl text-black uppercase">Empowering communities</h4>
            <h4 className="font-semibold text-lg">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum.
            </h4>
            <p>
              Their solar-powered microgrid and micro-tractor system has already transformed
              farming conditions for smallholder communities in East Africa.
            </p>
            <button className="bg-red-500 text-white p-3 w-fit px-8 mt-6 rounded-full flex flex-nowrap gap-2 transition-colors duration-150 ease-in-out hover:bg-red-600 cursor-pointer">
              Get Started
            </button>
          </Reveal>

          {/* Project cards – stagger up from below */}
          <RevealGroup
            direction="up"
            stagger={200}
            duration={800}
            threshold={0.1}
            className="w-[60%] p-6 flex gap-4 flex-nowrap"
            childClassName="w-1/2"
          >
            {projects.map((project, index) => (
              /* 
                project-card class drives the CSS hover → description slide-up.
                This is purely CSS (no JS), so it works independently of the
                scroll-reveal system.
              */
              <div
                key={index}
                className="project-card aspect-[3/4] relative overflow-hidden cursor-pointer group"
              >
                <div className="w-full h-full absolute">
                  <Image
                    src={project.image}
                    fill
                    alt={project.title}
                    className="object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="w-full h-full absolute z-10 bg-black opacity-30" />
                <div className="w-full h-full absolute z-30 text-white p-6 flex flex-col justify-end">
                  <h1 className="text-3xl uppercase">{project.title}</h1>
                  {/* 
                    card-description: starts translated down + invisible.
                    On .project-card:hover it slides to Y(0) and fades in.
                    Driven entirely by the CSS in <style> above.
                  */}
                  <p className="card-description mt-1 text-white/90">{project.description}</p>
                </div>
              </div>
            ))}
          </RevealGroup>

        </div>
      </div>
      <Footer />
    </>
  );
}