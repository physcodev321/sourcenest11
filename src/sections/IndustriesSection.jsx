import {
  FaTshirt,
  FaBolt,
  FaDumbbell,
  FaBuilding,
  FaRocket,
  FaShoppingBag,
  FaBullhorn,
  FaBoxOpen,
  FaArrowRight,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";




const industries = [
{
title: "Fashion Brands",
icon: FaTshirt,
description:
"Premium apparel manufacturing for fashion labels seeking quality, consistency and scalability.",
},
{
title: "Streetwear Brands",
icon: FaBolt,
description:
"Oversized tees, hoodies, cargos and custom garments designed for modern streetwear collections.",
},
{
title: "Sportswear Brands",
icon: FaDumbbell,
description:
"Performance-focused sportswear and team apparel manufactured with premium fabrics.",
},
{
title: "Gym Wear Companies",
icon: FaDumbbell,
description:
"Activewear, compression wear and fitness apparel tailored for growing fitness brands.",
},
{
title: "Corporate Uniforms",
icon: FaBuilding,
description:
"Professional uniforms and branded workwear for organizations worldwide.",
},
{
title: "Startups",
icon: FaRocket,
description:
"Low MOQ manufacturing solutions helping startups launch apparel brands with confidence.",
},
{
title: "Ecommerce Stores",
icon: FaShoppingBag,
description:
"Scalable production support for Shopify, Amazon and direct-to-consumer brands.",
},
{
title: "Promotional Merchandise",
icon: FaBullhorn,
description:
"Custom apparel and branded merchandise for events, campaigns and marketing initiatives.",
},
];

export default function IndustriesSection() {
return ( <section className="py-32 bg-[#fafafa] overflow-hidden">

```
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-16">

      <span className="inline-flex px-4 py-2 rounded-full bg-[#6E1E2A]/10 text-[#6E1E2A] font-semibold">
        Who We Serve
      </span>

      <h2 className="mt-6 text-5xl font-extrabold text-[#111111]">
        Industries We Help Scale
      </h2>

      <p className="mt-6 text-lg text-gray-600">
        From startup clothing brands to global organizations,
        SourceNest delivers apparel manufacturing solutions
        tailored to every business model.
      </p>

    </div>

    {/* STATS BAR */}
    {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">

      <div className="bg-white rounded-3xl p-6 text-center shadow-sm border border-gray-100">
        <h3 className="text-3xl font-extrabold text-[#6E1E2A]">
          500+
        </h3>
        <p className="text-gray-600 mt-2">
          Projects Delivered
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 text-center shadow-sm border border-gray-100">
        <h3 className="text-3xl font-extrabold text-[#6E1E2A]">
          20+
        </h3>
        <p className="text-gray-600 mt-2">
          Countries Served
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 text-center shadow-sm border border-gray-100">
        <h3 className="text-3xl font-extrabold text-[#6E1E2A]">
          Low MOQ
        </h3>
        <p className="text-gray-600 mt-2">
          Startup Friendly
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 text-center shadow-sm border border-gray-100">
        <h3 className="text-3xl font-extrabold text-[#6E1E2A]">
          Global
        </h3>
        <p className="text-gray-600 mt-2">
          Shipping Network
        </p>
      </div>

    </div> */}

    {/* MOBILE SWIPER */}
    <div className="lg:hidden">

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop
        spaceBetween={20}
      >
        {industries.map((item) => {
          const Icon = item.icon;

          return (
            <SwiperSlide key={item.title}>
              <div className="bg-white rounded-[32px] p-8 shadow-lg">

                <div className="w-16 h-16 rounded-2xl bg-[#6E1E2A]/10 flex items-center justify-center mb-6">
                  <Icon className="text-[#6E1E2A] text-2xl" />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>

              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

    </div>

    {/* DESKTOP GRID */}
    <div className="hidden lg:grid grid-cols-4 gap-8">

      {industries.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              group
              bg-white
              rounded-[32px]
              p-8
              border
              border-gray-100
              shadow-sm
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-500
            "
          >

            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-[#6E1E2A]/10
                flex
                items-center
                justify-center
                mb-6
                group-hover:bg-[#6E1E2A]
                transition
              "
            >
              <Icon
                className="
                  text-[#6E1E2A]
                  text-2xl
                  group-hover:text-white
                  transition
                "
              />
            </div>

            <h3 className="text-xl font-bold mb-4">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              {item.description}
            </p>

            <button
              className="
                flex
                items-center
                gap-2
                text-[#6E1E2A]
                font-semibold
                opacity-0
                group-hover:opacity-100
                transition
              "
            >
              Learn More
              <FaArrowRight />
            </button>

          </div>
        );
      })}

    </div>

    {/* BOTTOM CTA */}
    <div className="mt-20 text-center">

      <div className="bg-[#111111] rounded-[40px] p-12">

        <FaBoxOpen className="text-[#6E1E2A] text-5xl mx-auto mb-6" />

        <h3 className="text-4xl font-bold text-white">
          Manufacturing For Every Stage Of Growth
        </h3>

        <p className="text-gray-400 max-w-2xl mx-auto mt-6">
          Whether you're launching your first apparel collection
          or scaling an established brand, SourceNest provides
          the manufacturing infrastructure to support your growth.
        </p>

        <button
    
          className="
            mt-8
            bg-[#6E1E2A]
            hover:bg-[#5d1824]
            text-white
            px-8
            py-4
            rounded-2xl
            font-semibold
            transition
          "
        >
          Start Your Project
        </button>

      </div>

    </div>

  </div>

</section>

);
}
