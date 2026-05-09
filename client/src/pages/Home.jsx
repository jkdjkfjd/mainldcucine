import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CommonCarousel from '../components/CommonCarousel'
import Popup from '../components/Popup'
import { ChevronUp, ChevronDown, Sparkles, Check, ArrowRight, MoveRight } from "lucide-react";
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const galleryData = [
    {
        image:
            // "https://i.ibb.co/DDNVLjF6/alberto-castillo-q-mx4m-Sk-K9zeo-unsplash.jpg",
            "https://i.ibb.co/gbMwvTcg/3.jpg",
    },
    {
        image:
            // "https://i.ibb.co/hRXS90z0/danilo-oliveira-7j-SS7-TPze-M-unsplash.jpg",
            "https://i.ibb.co/5hyGJPr4/4.jpg",
    },
    {
        image:
            // "https://i.ibb.co/wFBBDmXc/spacejoy-9-M66-C-w-To-M-unsplash.jpg",
            "https://i.ibb.co/nspznVnT/1.jpg",

    },
    {
        image:
            // "https://i.ibb.co/wFBBDmXc/spacejoy-9-M66-C-w-To-M-unsplash.jpg",
            "https://i.ibb.co/TMwvh45Y/2.jpg",

    },
]

const services = [
    {
        id: "01",
        title: "Interior Design",
        desc: "Creative and functional spaces that reflect your unique style.",
        icon: "🛋️",
    },
    {
        id: "02",
        title: "Modular Kitchens",
        desc: "Smart, elegant and efficient kitchen solutions.",
        icon: "🏠",
    },
    {
        id: "03",
        title: "Wardrobes & Storage",
        desc: "Organized spaces designed for modern living.",
        icon: "🗄️",
    },
    {
        id: "04",
        title: "Space Planning",
        desc: "Optimized layouts for seamless flow and comfort.",
        icon: "📐",
    },
    {
        id: "05",
        title: "3D Visualization",
        desc: "Realistic 3D renders that bring your vision to life.",
        icon: "◫",
    },
    {
        id: "06",
        title: "Turnkey Projects",
        desc: "From concept to completion, we handle it all.",
        icon: "🔑",
    },
];

const collections = [
    {
        id: "01",
        title: "Modern Kitchens",
        image:
            "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=1974&auto=format&fit=crop",
    },
    {
        id: "02",
        title: "Luxury Living Rooms",
        image:
            "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1974&auto=format&fit=crop",
    },
    {
        id: "03",
        title: "Premium Bedrooms",
        image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1974&auto=format&fit=crop",
    },
    {
        id: "04",
        title: "Luxury Wardrobes",
        image:
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1974&auto=format&fit=crop",
    },
    {
        id: "05",
        title: "Dining Spaces",
        image:
            "https://images.unsplash.com/photo-1616594039964-3f6d6fdb4b1c?q=80&w=1974&auto=format&fit=crop",
    },
];

const processSteps = [
    {
        id: "01",
        title: "Consultation",
        desc: "Understanding your needs, vision and lifestyle requirements.",
        icon: "✦",
    },
    {
        id: "02",
        title: "Design",
        desc: "Concepts and 3D visualizations tailored exclusively for you.",
        icon: "◈",
    },
    {
        id: "03",
        title: "Execution",
        desc: "Expert craftsmanship and flawless project implementation.",
        icon: "⬢",
    },
    {
        id: "04",
        title: "Handover",
        desc: "On-time delivery with luxury finishing and perfection.",
        icon: "◎",
    },
];

const testimonials = [
    {
        id: 1,
        name: "Priya Mehta",
        role: "Homeowner",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
        review:
            "Ldcucine transformed our home into a luxurious masterpiece. Every detail was beautifully crafted with elegance and sophistication.",
    },
    {
        id: 2,
        name: "Rohit Sharma",
        role: "Business Owner",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
        review:
            "The team delivered interiors beyond our expectations. Premium quality, modern aesthetics and flawless execution.",
    },
    {
        id: 3,
        name: "Anjali Verma",
        role: "Interior Client",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
        review:
            "From concept to completion, everything felt smooth and luxurious. Truly the best interior experience we’ve had.",
    },
];

const Home = () => {
    const [showPopup, setShowPopup] = useState(false)
    const [open, setOpen] = useState(false);

    // website open hote hi popup show hoga
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true)
        }, 500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div>
            {/* Sidebar Wrapper */}
            <div
                className={`fixed top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ease-in-out ${open ? "right-0" : "-right-[320px]"
                    }`}
            >
                {/* Toggle Button */}
                <div
                    onClick={() => setOpen(!open)}
                    className="absolute left-[-58px] top-20 cursor-pointer group"
                >
                    <div className="bg-gradient-to-b from-black to-gray-800 text-white h-44 w-14 rounded-l-2xl shadow-2xl border border-gray-700 flex flex-col items-center justify-between py-4 transition-all duration-300 group-hover:w-16">

                        {/* Arrow */}
                        <div className="mt-1">
                            {open ? (
                                <ChevronDown
                                    size={20}
                                    className="text-white transition-transform duration-300"
                                />
                            ) : (
                                <ChevronUp
                                    size={20}
                                    className="text-white transition-transform duration-300"
                                />
                            )}
                        </div>

                        {/* Vertical Text */}
                        <span className="rotate-[-90deg] whitespace-nowrap tracking-widest text-xs font-bold uppercase">
                            Enquire Now
                        </span>

                        {open ? (
                            <ChevronDown size={18} className="mt-8" />
                        ) : (
                            <ChevronUp size={18} className="mt-8" />
                        )}
                    </div>
                </div>

                {/* Form Box */}
                <div className="w-[320px] bg-white shadow-2xl rounded-l-2xl p-6 border border-gray-200">
                    <h2 className="text-2xl font-bold mb-5 text-gray-800">
                        Enquire Now
                    </h2>

                    <form className="space-y-4">
                        {/* Name */}
                        <input
                            type="text"
                            placeholder="*Name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                        />

                        {/* Email */}
                        <input
                            type="email"
                            placeholder="*E-Mail Id"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                        />

                        {/* Phone */}
                        <input
                            type="text"
                            placeholder="*Phone"
                            maxLength={10}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                        />

                        {/* City */}
                        <input
                            type="text"
                            placeholder="*City"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                        />

                        {/* Message */}
                        <textarea
                            rows="4"
                            placeholder="Message"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black resize-none"
                        ></textarea>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg transition-all duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <Navbar />

            {/* Popup */}
            {showPopup && (
                <div className="">
                    <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-3xl w-full ">
                        <Popup />
                    </div>
                </div>
            )}

            <main>
                {/* Hero Section */}
                <div>
                    <CommonCarousel />
                </div>
                {/* Vision section */}
                <section className="relative w-full bg-[#070707] text-white py-28 overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-[#c89b63]/10 blur-[180px] rounded-full"></div>

                    <div className="max-w-[1650px] mx-auto px-6 lg:px-16 relative z-10">
                        <div className="grid lg:grid-cols-[0.9fr_1.3fr_0.7fr_0.7fr] gap-7 items-stretch">

                            {/* LEFT CONTENT */}
                            <div className="relative bg-[#0c0c0c] border border-white/5 p-12 flex flex-col justify-center overflow-hidden group">

                                {/* Hover Gradient */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-[#c89b63]/10 via-transparent to-transparent"></div>

                                {/* Decorative Line */}
                                <div className="absolute left-0 top-0 w-[3px] h-full bg-gradient-to-b from-[#c89b63] to-transparent"></div>

                                <span className="uppercase tracking-[5px] text-[#c89b63] text-xs relative z-10">
                                    About Ldcucine
                                </span>

                                <h2 className="text-5xl xl:text-6xl leading-[1.05] font-light mt-7 mb-8 relative z-10">
                                    Where Vision
                                    <br />
                                    Meets
                                    <span className="text-[#c89b63]"> Perfection</span>
                                </h2>

                                <p className="text-gray-400 leading-8 text-[15px] mb-10 max-w-md relative z-10">
                                    We believe every space tells a story. Our passion is to transform
                                    your vision into timeless interiors that reflect luxury,
                                    personality, and sophisticated living.
                                </p>

                                <div className="flex items-center gap-6 relative z-10">
                                    <button className="bg-[#c89b63] text-black px-8 py-4 uppercase tracking-[2px] text-sm hover:bg-white transition-all duration-500">
                                        Discover More
                                    </button>

                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full border border-[#c89b63]/50 flex items-center justify-center text-[#c89b63]">
                                            ▶
                                        </div>

                                        <span className="uppercase text-sm tracking-[3px] text-gray-300">
                                            Watch
                                        </span>
                                    </div>
                                </div>

                                {/* Bottom Small Stats */}
                                <div className="flex items-center gap-10 mt-16 relative z-10">
                                    <div>
                                        <h4 className="text-3xl font-light text-[#c89b63]">12+</h4>
                                        <p className="text-xs uppercase tracking-[3px] text-gray-500 mt-1">
                                            Years
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-3xl font-light text-[#c89b63]">650+</h4>
                                        <p className="text-xs uppercase tracking-[3px] text-gray-500 mt-1">
                                            Clients
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* CENTER IMAGE */}
                            <div className="relative min-h-[620px] overflow-hidden group">

                                {/* Image */}
                                <img
                                    src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1974&auto=format&fit=crop"
                                    alt="Luxury Interior"
                                    className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-all duration-[2500ms]"
                                />

                                {/* Overlays */}
                                <div className="absolute inset-0 bg-black/20"></div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                                {/* Floating Card */}
                                <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-xl border border-white/10 p-8 w-[280px]">
                                    <span className="uppercase tracking-[4px] text-[#c89b63] text-xs">
                                        Luxury Interior
                                    </span>

                                    <h3 className="text-3xl leading-tight font-light mt-4 mb-4">
                                        Timeless
                                        <br />
                                        Living Spaces
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-7">
                                        Elegant interiors crafted with refined materials and modern
                                        aesthetics.
                                    </p>
                                </div>

                                {/* Top Corner Badge */}
                                <div className="absolute top-8 right-8 bg-[#c89b63] text-black w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-2xl">
                                    <h4 className="text-3xl font-light">98%</h4>
                                    <span className="text-[10px] uppercase tracking-[2px]">
                                        Satisfaction
                                    </span>
                                </div>
                            </div>

                            {/* CARD 1 */}
                            <div className="relative bg-[#0c0c0c] border border-white/5 p-10 overflow-hidden group hover:border-[#c89b63]/30 transition-all duration-500 flex flex-col justify-between">

                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-b from-[#c89b63]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                                <div className="relative z-10">
                                    <div className="w-20 h-20 rounded-full border border-[#c89b63]/40 flex items-center justify-center text-[#c89b63] text-4xl mb-12 group-hover:rotate-12 transition-all duration-500">
                                        ✦
                                    </div>

                                    <h3 className="text-3xl leading-tight font-light mb-6">
                                        Bespoke
                                        <br />
                                        Designs
                                    </h3>

                                    <p className="text-gray-400 leading-8 text-[15px]">
                                        Tailored interiors customized to your lifestyle with luxurious
                                        aesthetics and elegant craftsmanship.
                                    </p>
                                </div>

                                <div className="flex items-center justify-between mt-20 relative z-10">
                                    <span className="text-[#c89b63] tracking-[4px] text-sm">
                                        01
                                    </span>

                                    <button className="w-12 h-12 rounded-full border border-white/10 hover:border-[#c89b63] text-[#c89b63] transition-all duration-300">
                                        →
                                    </button>
                                </div>
                            </div>

                            {/* CARD 2 */}
                            <div className="relative bg-[#0c0c0c] border border-white/5 p-10 overflow-hidden group hover:border-[#c89b63]/30 transition-all duration-500 flex flex-col justify-between">

                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-b from-[#c89b63]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                                <div className="relative z-10">
                                    <div className="w-20 h-20 rounded-full border border-[#c89b63]/40 flex items-center justify-center text-[#c89b63] text-4xl mb-12 group-hover:rotate-12 transition-all duration-500">
                                        ⬢
                                    </div>

                                    <h3 className="text-3xl leading-tight font-light mb-6">
                                        Premium
                                        <br />
                                        Quality
                                    </h3>

                                    <p className="text-gray-400 leading-8 text-[15px]">
                                        Finest materials and luxurious finishes designed for timeless
                                        elegance and sophisticated modern living.
                                    </p>
                                </div>

                                <div className="flex items-center justify-between mt-20 relative z-10">
                                    <span className="text-[#c89b63] tracking-[4px] text-sm">
                                        02
                                    </span>

                                    <button className="w-12 h-12 rounded-full border border-white/10 hover:border-[#c89b63] text-[#c89b63] transition-all duration-300">
                                        →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* our services */}
                <section className="relative w-full bg-[#060606] py-28 overflow-hidden text-white">
                    {/* Background Glow */}
                    <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-[#c89b63]/10 blur-[180px] rounded-full"></div>

                    <div className="max-w-[1650px] mx-auto px-6 lg:px-16 relative z-10">

                        {/* Top Heading */}
                        <div className="text-center mb-20">
                            <span className="uppercase tracking-[5px] text-[#c89b63] text-xs">
                                Our Services
                            </span>

                            <h2 className="text-5xl md:text-6xl font-light mt-5">
                                End-to-End Interior Solutions
                            </h2>

                            {/* Golden Line */}
                            <div className="w-24 h-[2px] bg-[#c89b63] mx-auto mt-6"></div>
                        </div>

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 border border-white/5 bg-[#0b0b0b]">

                            {services.map((service, index) => (
                                <div
                                    key={service.id}
                                    className={`relative group p-10 min-h-[320px] flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-500 hover:bg-[#111111]
              
              ${index !== services.length - 1
                                            ? "border-r border-white/5"
                                            : ""
                                        }
              `}
                                >
                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-b from-[#c89b63]/10 to-transparent"></div>

                                    {/* Icon Circle */}
                                    <div className="relative z-10 w-20 h-20 rounded-full border border-[#c89b63]/30 flex items-center justify-center text-4xl text-[#c89b63] mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                        {service.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="relative z-10 text-2xl font-light mb-5 leading-snug">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="relative z-10 text-gray-400 leading-8 text-[15px] max-w-[220px]">
                                        {service.desc}
                                    </p>

                                    {/* Bottom Number */}
                                    <div className="relative z-10 mt-12 flex items-center gap-3">
                                        <span className="text-[#c89b63] tracking-[4px] text-sm">
                                            {service.id}
                                        </span>

                                        <div className="w-8 h-[1px] bg-[#c89b63]/40"></div>
                                    </div>

                                    {/* Hover Border */}
                                    <div className="absolute inset-0 border border-transparent group-hover:border-[#c89b63]/20 transition-all duration-500"></div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom CTA */}
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-20 bg-[#0c0c0c] border border-white/5 p-10">

                            <div>
                                <span className="uppercase tracking-[4px] text-[#c89b63] text-xs">
                                    Luxury Interior Design
                                </span>

                                <h3 className="text-4xl font-light mt-4 leading-tight">
                                    Creating Timeless Spaces
                                    <br />
                                    Crafted For Modern Living
                                </h3>
                            </div>

                            <button className="bg-[#c89b63] text-black px-10 py-5 uppercase tracking-[3px] text-sm hover:bg-white transition-all duration-500">
                                Schedule Consultation
                            </button>
                        </div>
                    </div>
                </section>
                {/* our collection */}
                <section className="relative w-full bg-[#070707] py-28 overflow-hidden text-white">
                    {/* Background Glow */}
                    <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] bg-[#c89b63]/10 blur-[180px] rounded-full"></div>

                    <div className="max-w-[1650px] mx-auto px-6 lg:px-16 relative z-10">

                        {/* Heading */}
                        <div className="text-center mb-20">
                            <span className="uppercase tracking-[5px] text-[#c89b63] text-xs">
                                Our Collections
                            </span>

                            <h2 className="text-5xl md:text-6xl font-light mt-5 leading-tight">
                                Timeless Designs.
                                <span className="text-[#c89b63]"> Curated For You.</span>
                            </h2>

                            <div className="w-24 h-[2px] bg-[#c89b63] mx-auto mt-6"></div>
                        </div>

                        {/* Collections Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">

                            {collections.map((item) => (
                                <div
                                    key={item.id}
                                    className="group relative overflow-hidden bg-[#0d0d0d] border border-white/5 min-h-[520px]"
                                >
                                    {/* Image */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-[2500ms]"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-500"></div>

                                    {/* Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                                    {/* Number */}
                                    <div className="absolute top-8 left-8 z-20">
                                        <span className="text-[#c89b63] text-sm tracking-[4px]">
                                            {item.id}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 w-full p-8 z-20">

                                        {/* Line */}
                                        <div className="w-12 h-[2px] bg-[#c89b63] mb-6 group-hover:w-24 transition-all duration-500"></div>

                                        <h3 className="text-3xl leading-tight font-light mb-5">
                                            {item.title}
                                        </h3>

                                        <button className="flex items-center gap-4 uppercase tracking-[3px] text-sm text-[#c89b63] group-hover:translate-x-2 transition-all duration-500">
                                            Explore Collection
                                            <span className="text-lg">→</span>
                                        </button>
                                    </div>

                                    {/* Hover Border */}
                                    <div className="absolute inset-0 border border-transparent group-hover:border-[#c89b63]/30 transition-all duration-500"></div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Section */}
                        <div className="grid lg:grid-cols-2 gap-8 mt-20">

                            {/* Left Card */}
                            <div className="relative overflow-hidden bg-[#0d0d0d] border border-white/5 p-12 group">

                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-[#c89b63]/10 to-transparent"></div>

                                <span className="uppercase tracking-[4px] text-[#c89b63] text-xs relative z-10">
                                    Luxury Living
                                </span>

                                <h3 className="text-5xl font-light leading-tight mt-5 mb-6 relative z-10">
                                    Spaces Designed
                                    <br />
                                    To Inspire.
                                </h3>

                                <p className="text-gray-400 leading-8 max-w-xl relative z-10">
                                    Every collection is thoughtfully crafted with premium materials,
                                    elegant aesthetics and timeless interior concepts.
                                </p>

                                <button className="mt-10 bg-[#c89b63] text-black px-8 py-4 uppercase tracking-[3px] text-sm hover:bg-white transition-all duration-500 relative z-10">
                                    View Projects
                                </button>
                            </div>

                            {/* Right Stats */}
                            <div className="grid grid-cols-2 gap-6">

                                {[
                                    { number: "12+", text: "Years Experience" },
                                    { number: "650+", text: "Happy Clients" },
                                    { number: "1200+", text: "Projects Completed" },
                                    { number: "98%", text: "Client Satisfaction" },
                                ].map((stat, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#0d0d0d] border border-white/5 p-10 flex flex-col items-center justify-center text-center group hover:border-[#c89b63]/30 transition-all duration-500"
                                    >
                                        <h4 className="text-5xl font-light text-[#c89b63] mb-4">
                                            {stat.number}
                                        </h4>

                                        <p className="uppercase tracking-[3px] text-sm text-gray-400">
                                            {stat.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                {/* Process section */}
                <section className="relative w-full bg-[#f5f1ea] py-28 overflow-hidden">

                    {/* Background Texture */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/marble.png')]"></div>

                    <div className="max-w-[1650px] mx-auto px-6 lg:px-16 relative z-10">

                        {/* Heading */}
                        <div className="text-center mb-24">

                            <span className="uppercase tracking-[5px] text-[#b68a56] text-xs">
                                Our Process
                            </span>

                            <h2 className="text-5xl md:text-6xl text-[#111] font-light mt-5 leading-tight">
                                Simple Steps To Your
                                <span className="text-[#b68a56]"> Dream Space</span>
                            </h2>

                            <div className="w-24 h-[2px] bg-[#b68a56] mx-auto mt-6"></div>

                            <p className="text-[#666] text-lg leading-8 max-w-3xl mx-auto mt-8">
                                We follow a seamless and transparent process to transform your
                                vision into timeless luxury interiors crafted with perfection.
                            </p>
                        </div>

                        {/* Process Steps */}
                        <div className="relative">

                            {/* Center Line */}
                            <div className="hidden xl:block absolute top-[60px] left-0 w-full h-[1px] bg-[#d8c3a5]"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-6">

                                {processSteps.map((step, index) => (
                                    <div
                                        key={step.id}
                                        className="relative text-center group"
                                    >

                                        {/* Circle Icon */}
                                        <div className="relative z-20 w-[120px] h-[120px] mx-auto rounded-full bg-[#111] border-[8px] border-[#f5f1ea] shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex items-center justify-center text-[#c89b63] text-5xl transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">

                                            {/* Glow */}
                                            <div className="absolute inset-0 rounded-full bg-[#c89b63]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                                            <span className="relative z-10">
                                                {step.icon}
                                            </span>
                                        </div>

                                        {/* Number */}
                                        <div className="mt-10 mb-4">
                                            <span className="text-[#b68a56] text-lg tracking-[4px]">
                                                {step.id}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-3xl text-[#111] font-light mb-5">
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-[#666] leading-8 text-[15px] max-w-[280px] mx-auto">
                                            {step.desc}
                                        </p>

                                        {/* Bottom Decorative */}
                                        <div className="mt-10 flex justify-center">
                                            <div className="w-12 h-[2px] bg-[#c89b63] group-hover:w-24 transition-all duration-500"></div>
                                        </div>

                                        {/* Hover Card */}
                                        <div className="absolute inset-0 rounded-[30px] opacity-0 group-hover:opacity-100 transition-all duration-500 border border-[#c89b63]/20"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-24 bg-white border border-[#e6d6bf] shadow-[0_20px_80px_rgba(0,0,0,0.06)] p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">

                            <div>
                                <span className="uppercase tracking-[4px] text-[#b68a56] text-xs">
                                    Luxury Interior Experience
                                </span>

                                <h3 className="text-4xl lg:text-5xl text-[#111] font-light mt-5 leading-tight">
                                    From Vision To Reality,
                                    <br />
                                    We Handle Everything.
                                </h3>
                            </div>

                            <button className="bg-[#111] text-white px-10 py-5 uppercase tracking-[3px] text-sm hover:bg-[#c89b63] hover:text-black transition-all duration-500">
                                Start Your Project
                            </button>
                        </div>
                    </div>
                </section>
                {/* testimonial section */}
                <section className="relative w-full bg-[#070707] py-28 overflow-hidden text-white">

                    {/* Background Glow */}
                    <div className="absolute top-[-150px] right-[-100px] w-[450px] h-[450px] bg-[#c89b63]/10 blur-[160px] rounded-full"></div>

                    <div className="max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">

                        {/* Heading */}
                        <div className="text-center mb-20">

                            <span className="uppercase tracking-[5px] text-[#c89b63] text-xs">
                                Testimonials
                            </span>

                            <h2 className="text-5xl md:text-6xl font-light mt-5 leading-tight">
                                What Our
                                <span className="text-[#c89b63]"> Clients Say</span>
                            </h2>

                            <div className="w-24 h-[2px] bg-[#c89b63] mx-auto mt-6"></div>
                        </div>

                        {/* Main Layout */}
                        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

                            {/* Left Image */}
                            <div className="relative overflow-hidden min-h-[700px] group">

                                <img
                                    src="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1974&auto=format&fit=crop"
                                    alt="Interior"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[2500ms]"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/45"></div>

                                {/* Content */}
                                <div className="absolute bottom-10 left-10 max-w-[350px]">

                                    <span className="uppercase tracking-[4px] text-[#c89b63] text-xs">
                                        Luxury Interior
                                    </span>

                                    <h3 className="text-4xl font-light leading-tight mt-5 mb-5">
                                        Elegant Spaces
                                        <br />
                                        Designed For Living
                                    </h3>

                                    <p className="text-gray-300 leading-8 text-[15px]">
                                        Crafted with luxury, sophistication and timeless aesthetics for
                                        modern lifestyles.
                                    </p>
                                </div>
                            </div>

                            {/* Right Swiper */}
                            <div className="relative">

                                <Swiper
                                    modules={[Autoplay, Pagination]}
                                    slidesPerView={1}
                                    loop={true}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    className="h-full"
                                >
                                    {testimonials.map((item) => (
                                        <SwiperSlide key={item.id}>

                                            <div className="bg-[#0d0d0d] border border-white/5 p-12 md:p-16 min-h-[700px] flex flex-col justify-between relative overflow-hidden">

                                                {/* Glow */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#c89b63]/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-all duration-700"></div>

                                                {/* Quote */}
                                                <div className="relative z-10">
                                                    <span className="text-[#c89b63] text-8xl leading-none">
                                                        “
                                                    </span>

                                                    <p className="text-2xl md:text-3xl leading-[1.8] font-light text-gray-200 mt-8">
                                                        {item.review}
                                                    </p>
                                                </div>

                                                {/* User */}
                                                <div className="relative z-10 flex items-center justify-between flex-wrap gap-6 mt-16">

                                                    <div className="flex items-center gap-5">

                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="w-20 h-20 rounded-full object-cover border border-[#c89b63]/30"
                                                        />

                                                        <div>
                                                            <h4 className="text-2xl font-light">
                                                                {item.name}
                                                            </h4>

                                                            <p className="uppercase tracking-[3px] text-sm text-gray-400 mt-2">
                                                                {item.role}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Stars */}
                                                    <div className="text-[#c89b63] text-2xl">
                                                        ★★★★★
                                                    </div>
                                                </div>

                                                {/* Bottom Border */}
                                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#c89b63] via-transparent to-transparent"></div>
                                            </div>

                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}

export default Home