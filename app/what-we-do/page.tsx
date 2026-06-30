"use client"
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Reveal, RevealGroup } from "../hooks/reveal";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";

/**
 * FOCUS AREAS
 * Maps to wireframe section "Focus Areas" — Water, Food Security, Renewable
 * Energy, Climate-Resilient Housing, Waste / Circular Solutions.
 *
 * NOTE: "Ronella_food-security.avif" and "Ronella_housing.avif" do not exist
 * yet in /public/icons — swap in real assets when available. Renewable
 * Energy, Water and Waste icons reuse the existing set from the About Us page.
 */
const focusAreas = [
  {
    icon: "/icons/Ronella_38-Hydro-Energy.avif",
    title: "Clean Water",
    description:
      "Rainwater harvesting, wastewater recycling and irrigation systems that give communities reliable access to safe water.",
  },
  {
    icon: "/icons/Ronella_food-security.avif",
    title: "Food Security",
    description:
      "Local food production designed to withstand changing climates, reducing dependence on imported or unstable supply.",
  },
  {
    icon: "/icons/Ronella_49-Renewable-Electricity.avif",
    title: "Renewable Energy",
    description:
      "Small-scale solar, wind and waste-to-energy systems that power households, schools and medical centres.",
  },
  {
    icon: "/icons/Ronella_housing.avif",
    title: "Climate-Resilient Housing",
    description:
      "Safe, affordable homes built with materials and methods suited to local conditions and a changing climate.",
  },
  {
    icon: "/icons/Ronella_68-Waste-Management.avif",
    title: "Waste & Circular Solutions",
    description:
      "Recycling and energy-recovery systems that turn waste into a resource and reduce landfill use.",
  },
];

/**
 * PROCESS
 * Maps to wireframe section "Need to Solution" — this is a genuine sequence,
 * so numbered markers are justified here (unlike a purely decorative use).
 */
const processSteps = [
  {
    number: "01",
    title: "Identify the need",
    description:
      "We start by listening — to communities, local partners and trusted intermediaries on the ground.",
  },
  {
    number: "02",
    title: "Assess the context",
    description:
      "Our Research and Evaluation team studies conditions, infrastructure and what has worked elsewhere.",
  },
  {
    number: "03",
    title: "Match solutions",
    description:
      "We pair the need with proven, appropriate technology — never a one-size-fits-all answer.",
  },
  {
    number: "04",
    title: "Build partnerships",
    description:
      "We bring together funders, innovators and local stakeholders around a shared, workable plan.",
  },
  {
    number: "05",
    title: "Support implementation",
    description:
      "Our Project Delivery team oversees installation through to completion, to international quality standards.",
  },
];

export default function WhatWeDo() {
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
          {/* ── Hero ──────────────────────────────────────────────────── */}
          <div className="w-full h-[70vh] relative">
            <Navbar />
            <div className="w-full h-full absolute">
              <div className="w-full h-full relative">
                <div className="w-full h-full absolute bg-black z-30 opacity-30" />
                <div className="w-full h-full absolute z-10">
                  <video
                    className="w-full h-full object-cover absolute"
                    autoPlay
                    muted
                    loop
                    preload="auto"
                  >
                    <source src="/videos/9653705-hd_1920_1080_25fps.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="w-full h-full absolute z-40 flex justify-center">
                  <div className="w-full h-full max-w-[1400px] flex flex-col justify-end py-6 p-6">
                    <h1 className="text-5xl font-bold text-white">What We Do</h1>
                    <p className="mt-4 max-w-[600px] text-white">
                      Ronella works with partners on the ground to support practical,
                      lasting sustainability solutions — built around what each
                      community actually needs.
                    </p>
                    <Link
                      href="/projects"
                      className="bg-red-500 text-white p-3 w-fit px-8 mt-6 rounded-full flex flex-nowrap gap-2 transition-colors duration-150 ease-in-out hover:bg-red-600 cursor-pointer"
                    >
                      Explore Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Practical Solutions ──────────────────────────────────────
               Direct, grounded copy — distinct from the homepage's
               "Together for Tomorrow" intro, kept short on purpose.     */}
          <div className="w-full flex justify-center mt-20 py-10 items-center">
            <div className="w-full max-w-[900px] px-6">
              <Reveal direction="up" duration={700}>
                <h2 className="text-4xl font-medium text-center text-black">
                  Why these focus areas
                </h2>
              </Reveal>

              <Reveal direction="up" delay={150} duration={700}>
                <p className="mt-6 text-center">
                  Climate change hits hardest where resources are already
                  stretched thin. Water runs short, harvests fail, homes
                  aren't built for the weather they now face. We focus on
                  the essentials that determine whether a community can
                  adapt — and we build practical pathways to get there,
                  not abstract pledges.
                </p>
              </Reveal>
            </div>
          </div>

          {/* ── Focus Areas ───────────────────────────────────────────── */}
          <div className="w-full mt-10 flex justify-center py-10">
            <div className="w-full max-w-[1400px] px-6">
              <Reveal direction="up" duration={700}>
                <h3 className="w-full text-4xl text-center text-black">
                  OUR FOCUS AREAS
                </h3>
              </Reveal>

              <RevealGroup
                direction="up"
                stagger={120}
                duration={700}
                threshold={0.1}
                className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-10"
                childClassName="w-full"
              >
                {focusAreas.map((area, index) => (
                  <div
                    key={index}
                    className="group border border-gray-200 p-6 flex flex-col items-center text-center transition-colors duration-150 hover:border-custom-blue"
                  >
                    <div className="w-[56px] h-[56px] relative mb-4">
                      <Image src={area.icon} fill alt="" />
                    </div>
                    <h4 className="text-lg font-semibold text-black">{area.title}</h4>
                    <p className="mt-2 text-sm text-gray-600">{area.description}</p>
                  </div>
                ))}
              </RevealGroup>

              <div className="w-full flex justify-center mt-10">
                <Link
                  href="/contact"
                  className="bg-[#0150C2] text-white p-3 w-fit px-8 rounded-full flex flex-nowrap gap-2 transition-colors duration-150 ease-in-out hover:bg-red-600 cursor-pointer"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>

          {/* ── Community-Led Approach ────────────────────────────────────
               No fixed background — instead an offset frame + overlapping
               pull-quote card, so the image reads as a deliberate
               composition rather than a flat full-bleed panel. Copy is
               written from "with", not "for" — guardrail in the wireframe
               is to avoid sounding top-down or externally imposed. */}
          <div className="w-full flex justify-center mt-24 py-10">
            <div className="w-full max-w-[1400px] px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
              <Reveal
                direction="left"
                duration={800}
                threshold={0.15}
                className="w-full lg:w-1/2 flex justify-center"
              >
                <div className="relative w-full max-w-[440px] aspect-[4/5]">
                  {/* offset frame sits behind the photo, not fixed to the viewport */}
                  <div className="absolute -top-6 -left-6 w-full h-full border-2 border-custom-blue" />
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src="/images/pexels-lagosfoodbank-8042458.jpg"
                      fill
                      alt="Community members working together on a local project"
                      className="object-cover"
                    />
                  </div>
                  {/* overlapping pull-quote, anchors the composition */}
                  <div className="hidden sm:block absolute -bottom-8 -right-8 max-w-[230px] bg-white p-6 shadow-xl">
                    <p className="text-lg font-medium text-black leading-snug">
                      &ldquo;We start by listening, not leading.&rdquo;
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="right" delay={150} duration={800} className="w-full lg:w-1/2">
                <span className="text-sm font-semibold text-custom-blue uppercase">
                  Community-Led
                </span>
                <h2 className="mt-2 text-3xl font-semibold text-black">
                  We start by listening
                </h2>
                <p className="mt-6">
                  Every project begins on the ground, not in a boardroom. We
                  connect with communities directly, often through trusted
                  introductions from British Embassies, the International
                  Chamber of Commerce and local organisations who already
                  have their confidence. From there, our Research and
                  Evaluation team works alongside local stakeholders to
                  understand what's needed and what's feasible — so the
                  solutions we build are shaped by the people who will use
                  them, not handed down to them.
                </p>
              </Reveal>
            </div>
          </div>

          {/* ── Need to Solution (process) ───────────────────────────────
               Numbered sequence — a real process, so markers are earned. */}
          <div className="w-full mt-20 flex justify-center py-10">
            <div className="w-full max-w-[1400px] px-6">
              <Reveal direction="up" duration={700}>
                <h3 className="w-full text-4xl text-center text-black">
                  FROM NEED TO SOLUTION
                </h3>
              </Reveal>

              <RevealGroup
                direction="up"
                stagger={150}
                duration={700}
                threshold={0.1}
                className="w-full flex flex-col lg:flex-row mt-12 gap-8 lg:gap-0"
                childClassName="w-full lg:w-1/5"
              >
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`relative px-4 ${
                      index !== 0 ? "lg:border-l lg:border-gray-200" : ""
                    }`}
                  >
                    <span className="text-3xl font-bold text-custom-blue">
                      {step.number}
                    </span>
                    <h4 className="mt-3 text-lg font-semibold text-black">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </RevealGroup>

              <div className="w-full flex justify-center mt-14">
                <Link
                  href="/projects"
                  className="bg-red-500 text-white p-3 w-fit px-8 rounded-full flex flex-nowrap gap-2 transition-colors duration-150 ease-in-out hover:bg-red-600 cursor-pointer"
                >
                  Explore Projects
                </Link>
              </div>
            </div>
          </div>

          <Footer with_no_margin />
        </>
      )}
    </>
  );
}