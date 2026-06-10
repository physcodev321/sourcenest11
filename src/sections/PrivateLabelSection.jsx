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

export default function PrivateLabelSection() {
  const features = [
    {
      icon: <FaTags />,
      title: "Custom Woven Labels",
    },
    {
      icon: <FaTshirt />,
      title: "Printed Neck Labels",
    },
    {
      icon: <FaBoxOpen />,
      title: "Premium Packaging",
    },
    {
      icon: <FaCheckCircle />,
      title: "Complete Brand Identity",
    },
  ];

  return (
    <section className="py-28 bg-[#111111] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            <span className="inline-flex px-4 py-2 rounded-full bg-[#6E1E2A]/20 text-[#B5B7B9] font-semibold text-sm">
              Private Label Manufacturing
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Build A Brand,
              <span className="text-[#6E1E2A]">
                {" "}Not Just A Product
              </span>
            </h2>

            <p className="mt-8 text-lg text-gray-400 leading-relaxed">
              SourceNest helps startups, ecommerce brands,
              wholesalers and retailers create fully customized apparel
              collections with complete private label solutions.
            </p>

            <p className="mt-4 text-lg text-gray-400 leading-relaxed">
              From labels and hang tags to premium packaging and branded
              inserts, every detail is customized to strengthen your
              brand identity.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="
                    flex
                    items-center
                    gap-4
                    bg-white/[0.04]
                    border
                    border-white/10
                    rounded-2xl
                    p-4
                    hover:border-[#6E1E2A]/50
                    transition
                  "
                >
                  <div className="text-[#6E1E2A] text-xl">
                    {feature.icon}
                  </div>

                  <span className="text-white font-medium">
                    {feature.title}
                  </span>
                </div>
              ))}

            </div>

            <button
              className="
                mt-10
                bg-[#6E1E2A]
                hover:bg-[#5b1822]
                text-white
                px-8
                py-4
                rounded-2xl
                font-semibold
                flex
                items-center
                gap-3
                transition
              "
            >
              Start Your Brand
              <FaArrowRight />
            </button>

          </div>

          {/* RIGHT SIDE */}
         
<div className="relative">

  {/* MAIN SHOWCASE CARD */}
  <div
    className="
      relative
      h-[550px]
      rounded-[36px]
      overflow-hidden
      border
      border-white/10
      shadow-2xl
      bg-[#0f0f0f]
    "
  >

    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      loop={true}
      className="h-full"
    >

      {/* IMAGE 1 */}
      <SwiperSlide>
        <div className="w-full h-full bg-[#161616] flex flex-col items-center justify-center text-center p-10">

          <div
            className="
              w-28
              h-28
              rounded-3xl
              border-2
              border-dashed
              border-[#6E1E2A]
              flex
              items-center
              justify-center
              text-[#6E1E2A]
              text-5xl
              mb-6
            "
          >
            1
          </div>

          <h3 className="text-3xl font-bold text-white">
            Label Showcase
          </h3>

          <p className="mt-4 text-gray-400">
            Replace with custom label image
          </p>

        </div>
      </SwiperSlide>

      {/* IMAGE 2 */}
      <SwiperSlide>
        <div className="w-full h-full bg-[#161616] flex flex-col items-center justify-center text-center p-10">

          <div
            className="
              w-28
              h-28
              rounded-3xl
              border-2
              border-dashed
              border-[#6E1E2A]
              flex
              items-center
              justify-center
              text-[#6E1E2A]
              text-5xl
              mb-6
            "
          >
            2
          </div>

          <h3 className="text-3xl font-bold text-white">
            Packaging Showcase
          </h3>

          <p className="mt-4 text-gray-400">
            Replace with packaging image
          </p>

        </div>
      </SwiperSlide>

      {/* IMAGE 3 */}
      <SwiperSlide>
        <div className="w-full h-full bg-[#161616] flex flex-col items-center justify-center text-center p-10">

          <div
            className="
              w-28
              h-28
              rounded-3xl
              border-2
              border-dashed
              border-[#6E1E2A]
              flex
              items-center
              justify-center
              text-[#6E1E2A]
              text-5xl
              mb-6
            "
          >
            3
          </div>

          <h3 className="text-3xl font-bold text-white">
            Brand Identity
          </h3>

          <p className="mt-4 text-gray-400">
            Replace with branded apparel image
          </p>

        </div>
      </SwiperSlide>

    </Swiper>

  </div>

  {/* FLOATING CARD */}
  <div
    className="
      hidden md:block
      absolute
      top-8
      -right-6
      bg-black
      rounded-3xl
      shadow-2xl
      px-6
      py-5
      z-10
    "
  >
    <div className="text-2xl font-extrabold text-[#6E1E2A]">
      Custom
    </div>

    <div className="text-white">
      Labels & Tags
    </div>
  </div>

  {/* FLOATING CARD */}
  <div
    className="
      hidden md:block
      absolute
      -bottom-6
      -left-6
      bg-black
      rounded-3xl
      shadow-2xl
      px-8
      py-6
      z-10
    "
  >
    <div className="text-3xl font-extrabold text-[#6E1E2A]">
      100%
    </div>

    <div className="text-white">
      Brand Customization
    </div>
  </div>

</div>

        </div>

      </div>

    </section>
  );
}