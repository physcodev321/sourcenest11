import { useState } from "react";
import { FaArrowRight, FaGlobe, FaTshirt } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import hoodie1 from "../assets/portfolio/hoodie-1.jpg";
import tshirt1 from "../assets/portfolio/tshirt-1.jpg";
import sportswear1 from "../assets/portfolio/sportswear-1.jpg";
import streetwear1 from "../assets/portfolio/streetwear-1.jpg";
import hoodie2 from "../assets/portfolio/hoodie-2.jpg";
import uniform1 from "../assets/portfolio/uniform-1.jpg";

const portfolioItems = [
{
title: "Custom Hoodie Collection",
category: "Streetwear",
image: hoodie1,
},
{
title: "Premium T-Shirts",
category: "Private Label",
image: tshirt1,
},
{
title: "Sportswear Production",
category: "Sportswear",
image: sportswear1,
},
{
title: "Streetwear Manufacturing",
category: "Streetwear",
image: streetwear1,
},
{
title: "Private Label Hoodies",
category: "Private Label",
image: hoodie2,
},
{
title: "Corporate Uniforms",
category: "Uniforms",
image: uniform1,
},
];

export default function PortfolioSection() {
const [activeFilter, setActiveFilter] = useState("All");

const filters = [
"All",
"Streetwear",
"Sportswear",
"Private Label",
"Uniforms",
];

const filtered =
activeFilter === "All"
? portfolioItems
: portfolioItems.filter(
(item) => item.category === activeFilter
);

return ( <section className="py-32 bg-[#fafafa]">

```
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center max-w-3xl mx-auto">

      <span className="inline-flex px-4 py-2 rounded-full bg-[#6E1E2A]/10 text-[#6E1E2A] font-semibold">
        Recent Projects
      </span>

      <h2 className="mt-6 text-5xl font-extrabold text-[#111111]">
        Built For Brands
        That Want To Stand Out
      </h2>

      <p className="mt-6 text-lg text-gray-600">
        Explore premium apparel collections manufactured
        for fashion startups, ecommerce brands and
        established companies worldwide.
      </p>

    </div>

    {/* STATS */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 mb-20">

      <div className="bg-white rounded-3xl p-6 text-center shadow-sm">
        <h3 className="text-3xl font-extrabold text-[#6E1E2A]">
          500+
        </h3>
        <p className="text-gray-600 mt-2">
          Projects
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 text-center shadow-sm">
        <h3 className="text-3xl font-extrabold text-[#6E1E2A]">
          20+
        </h3>
        <p className="text-gray-600 mt-2">
          Countries
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 text-center shadow-sm">
        <h3 className="text-3xl font-extrabold text-[#6E1E2A]">
          98%
        </h3>
        <p className="text-gray-600 mt-2">
          Satisfaction
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 text-center shadow-sm">
        <h3 className="text-3xl font-extrabold text-[#6E1E2A]">
          Low MOQ
        </h3>
        <p className="text-gray-600 mt-2">
          Available
        </p>
      </div>

    </div>

    {/* FILTERS */}
    <div className="flex flex-wrap justify-center gap-4 mb-16">

      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`
            px-6 py-3 rounded-full font-semibold transition
            ${
              activeFilter === filter
                ? "bg-[#6E1E2A] text-white"
                : "bg-white text-gray-700 border"
            }
          `}
        >
          {filter}
        </button>
      ))}

    </div>

    {/* MOBILE SWIPER */}
    <div className="lg:hidden">

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
        }}
        loop
        spaceBetween={20}
      >
        {filtered.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="overflow-hidden rounded-[28px] bg-white shadow-lg">

              <div className="relative h-[420px]">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute top-5 left-5 bg-white rounded-full px-4 py-2 text-[#6E1E2A] font-semibold text-sm">
                  {item.category}
                </div>

                <div className="absolute bottom-6 left-6 right-6">

                  <h3 className="text-white text-2xl font-bold">
                    {item.title}
                  </h3>

                </div>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>

    {/* DESKTOP FEATURED GRID */}
    <div className="hidden lg:grid grid-cols-12 gap-6">

      {filtered.map((item, index) => (

        <div
          key={item.title}
          className={`
            group
            relative
            overflow-hidden
            rounded-[32px]
            cursor-pointer
            ${
              index === 0
                ? "col-span-8 row-span-2 h-[650px]"
                : "col-span-4 h-[315px]"
            }
          `}
        >

          <img
            src={item.image}
            alt={item.title}
            className="
              w-full
              h-full
              object-cover
              transition
              duration-700
              group-hover:scale-110
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

          <div className="absolute top-6 left-6">

            <span className="bg-white px-4 py-2 rounded-full text-[#6E1E2A] font-semibold text-sm">
              {item.category}
            </span>

          </div>

          <div className="absolute bottom-8 left-8 right-8">

            <div className="flex gap-4 text-white/80 text-sm mb-4">

              <span className="flex items-center gap-2">
                <FaTshirt />
                Apparel
              </span>

              <span className="flex items-center gap-2">
                <FaGlobe />
                Global
              </span>

            </div>

            <h3 className="text-white text-3xl font-bold">
              {item.title}
            </h3>

            <button
              className="
                mt-5
                flex
                items-center
                gap-3
                text-white
                font-semibold
                opacity-0
                group-hover:opacity-100
                transition
              "
            >
              View Project
              <FaArrowRight />
            </button>

          </div>

        </div>

      ))}

    </div>

    {/* CTA */}
    <div className="text-center mt-20">

      <button
        className="
          bg-[#6E1E2A]
          hover:bg-[#5c1923]
          text-white
          px-10
          py-4
          rounded-2xl
          font-semibold
          transition
        "
      >
        View Full Portfolio
      </button>

    </div>

  </div>

</section>


);
}
