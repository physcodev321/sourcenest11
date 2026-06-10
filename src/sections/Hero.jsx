import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import hoodie from "../assets/products/hoodie.jpg";
import sportswear from "../assets/products/sportswear.jpg";
import activewear from "../assets/products/activewear.jpg";

export default function Hero() {
  const slides = [
    hoodie,
    sportswear,
    activewear,
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#f8f8f8]">

      <div className="max-w-7xl mx-auto px-6 py-24 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#6E1E2A]/10 text-[#6E1E2A] font-semibold text-sm">
              Trusted Apparel Manufacturing Partner
            </span>

            <h1 className="mt-6 text-5xl lg:text-7xl font-extrabold leading-tight text-[#111111]">
              Build Your
              <span className="text-[#6E1E2A]"> Clothing Brand </span>
              With Confidence
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              From private label manufacturing to premium custom apparel,
              SourceNest helps startups and established brands bring their
              ideas to life with quality production and worldwide delivery.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                to="/contact"
                className="bg-[#6E1E2A] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#5a1822] transition"
              >
                Get Free Quote
              </Link>

              <Link
                to="/portfolio"
                className="border border-gray-300 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition"
              >
                View Portfolio
              </Link>

            </div>

            <div className="flex flex-wrap gap-8 mt-12">

              <div>
                <h3 className="text-3xl font-bold">500+</h3>
                <p className="text-gray-500">Projects</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">20+</h3>
                <p className="text-gray-500">Countries</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">100%</h3>
                <p className="text-gray-500">Quality Focus</p>
              </div>

            </div>

          </div>

          {/* RIGHT CAROUSEL */}
          <div className="relative">

            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop
              slidesPerView={1}
              className="rounded-[32px] overflow-hidden shadow-2xl"
            >
              {slides.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt="SourceNest Product"
                    className="w-full h-[350px] md:h-[500px] lg:h-[600px] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* FLOATING CARD */}
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl px-6 py-4">
              <p className="text-sm text-gray-500">
                Manufacturing Experience
              </p>

              <h3 className="text-2xl font-bold text-[#6E1E2A]">
                10+ Years
              </h3>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}