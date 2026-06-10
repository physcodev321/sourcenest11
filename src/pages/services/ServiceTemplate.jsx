import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";
import {
  FaTags,
  FaBoxOpen,
  FaTshirt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function ServiceTemplate({
  title,
  subtitle,
  overview,
  features = [],
  process = [],
}) {
  return ( 
    <>
      <TopBar />
      <Navbar />

      <SEO
        title={`${title} | SourceNest`}
        description={subtitle}
        keywords="clothing manufacturing, apparel production, private label"/>

      {/* HERO */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {title}
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>

        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Overview
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              {overview}
            </p>

            <div className="mt-10 grid gap-4">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border"
                >
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE BLOCK */}
          <div className="bg-gray-100 h-[450px] rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-gray-500">Add Image / Video Here</span>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gray-50 py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-14">
            Our Process
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {process.map((step, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-left"
              >
                <div className="text-2xl font-bold text-gray-300 mb-4">
                  0{i + 1}
                </div>
                <p className="text-gray-800 font-medium">{step}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Ready to Start Your Project?
          </h2>

          <p className="mt-6 text-gray-300">
            Get a quotation within 24 hours and start building your brand with SourceNest.
          </p>

          <button className="mt-10 bg-white text-black px-10 py-4 rounded-xl font-bold hover:bg-gray-200 transition">
            Get Quote
          </button>

        </div>
      </section>

      <Footer />
    </>
  );
}