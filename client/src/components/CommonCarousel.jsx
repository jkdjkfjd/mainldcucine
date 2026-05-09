import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Luxury Interiors\nCrafted For Modern Living",
    subtitle: "LDCUCINE INTERIOR STUDIO",
    desc: "Creating timeless spaces with refined elegance, premium materials, and world-class craftsmanship tailored to your lifestyle.",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Design Spaces\nThat Inspire Everyday",
    subtitle: "BESPOKE INTERIOR EXPERIENCE",
    desc: "Minimal, sophisticated, and functional interiors designed to elevate comfort and luxury living.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Timeless Kitchens\nWith Premium Aesthetics",
    subtitle: "MODULAR KITCHEN SPECIALIST",
    desc: "Elegant modular kitchens crafted with precision, modern innovation, and luxurious detailing.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Transforming Houses\nInto Dream Homes",
    subtitle: "PREMIUM INTERIOR SOLUTIONS",
    desc: "From concept to execution, we design interiors that blend beauty, warmth, and functionality.",
    image:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop",
  },
];



const CommonCarousel = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        loop={true}
        speed={1200}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="h-full heroSwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-screen overflow-hidden">

              {/* Background Image */}
              <img
                src={slide.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover scale-105"
              />

              {/* Premium Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Left Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10"></div>

              {/* Bottom Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

              {/* Floating Luxury Box */}
              <div className="absolute top-10 right-10 z-20 hidden xl:block">
                <div className="backdrop-blur-md bg-white/10 border border-white/10 p-5 rounded-2xl w-[260px]">
                  <img
                    src={slide.image}
                    alt=""
                    className="w-full h-[160px] object-cover rounded-xl"
                  />

                  <div className="mt-4">
                    <p className="text-[#c89b63] uppercase tracking-[3px] text-xs mb-2">
                      Premium Interior
                    </p>

                    <h3 className="text-white text-lg leading-7 font-light">
                      Elegant Luxury
                      <br />
                      Living Spaces
                    </h3>
                  </div>
                </div>
              </div>

              {/* Hero Content */}
              <div className="relative z-30 h-full flex items-center">
                <div className="max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-20">
                  <div className="max-w-3xl">

                    {/* Subtitle */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-[1px] bg-[#c89b63]"></div>

                      <span className="uppercase tracking-[5px] text-[#c89b63] text-xs md:text-sm">
                        {slide.subtitle}
                      </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-white text-5xl md:text-7xl xl:text-[95px] leading-[1] font-light tracking-[-3px] whitespace-pre-line">
                      {slide.title}
                    </h1>

                    {/* Description */}
                    <p className="mt-8 text-gray-300 text-base md:text-lg leading-8 max-w-2xl">
                      {slide.desc}
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap items-center gap-5">
                      <button className="bg-[#c89b63] hover:bg-white text-black px-8 py-4 uppercase tracking-[2px] text-sm transition-all duration-300 rounded-full">
                        Explore Projects
                      </button>

                      <button className="border border-white/30 hover:border-[#c89b63] text-white px-8 py-4 uppercase tracking-[2px] text-sm transition-all duration-300 rounded-full backdrop-blur-sm bg-white/5">
                        View Collections
                      </button>
                    </div>

                    {/* Bottom Stats */}
                    <div className="flex flex-wrap gap-10 mt-16">
                      <div>
                        <h2 className="text-4xl md:text-5xl text-white font-light">
                          12+
                        </h2>
                        <p className="text-gray-400 mt-2 uppercase tracking-[2px] text-xs">
                          Years Experience
                        </p>
                      </div>

                      <div>
                        <h2 className="text-4xl md:text-5xl text-white font-light">
                          450+
                        </h2>
                        <p className="text-gray-400 mt-2 uppercase tracking-[2px] text-xs">
                          Projects Delivered
                        </p>
                      </div>

                      <div>
                        <h2 className="text-4xl md:text-5xl text-white font-light">
                          98%
                        </h2>
                        <p className="text-gray-400 mt-2 uppercase tracking-[2px] text-xs">
                          Client Satisfaction
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Left Vertical counting */}
              <div className="absolute left-6 md:left-10 top-1/3 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-8">
                {slides.map((_, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 ${index === i
                        ? "text-[#c89b63]"
                        : "text-white/40"
                      }`}
                  >
                    <span className="tracking-[3px] text-sm">
                      0{i + 1}
                    </span>

                    <div
                      className={`h-[1px] ${index === i
                          ? "w-12 bg-[#c89b63]"
                          : "w-0"
                        } transition-all duration-500`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Styling */}
      <style jsx>{`
        .heroSwiper .swiper-pagination {
          bottom: 40px !important;
          left: 80px
        }

        .heroSwiper .swiper-pagination-bullet {
          width: 40px;
          height: 3px;
          border-radius: 20px;
          background: rgba(255,255,255,0.3);
          opacity: 1;
        }

        .heroSwiper .swiper-pagination-bullet-active {
          background: #c89b63;
        }

        .heroSwiper .swiper-button-next,
        .heroSwiper .swiper-button-prev {
          color: #c89b63;
          width: 30px;
          height: 30px;
          border-radius: 999px;
          backdrop-filter: blur(10px);
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .heroSwiper .swiper-button-next:after,
        .heroSwiper .swiper-button-prev:after {
          font-size: 10px; 
          font-weight: 700;
          
        }

        .heroSwiper .swiper-button-next {
          right: 30px;
        }

        .heroSwiper .swiper-button-prev {
          left: auto;
          right: 100px;
        }
      `}</style>
    </section>
  );
};

export default CommonCarousel;