import { FaStar, FaQuoteLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


const testimonials = [
{
name: "James Carter",
company: "Streetwear Brand Owner",
location: "Los Angeles, USA",
text: "SourceNest helped us launch our first collection. Quality, communication and delivery exceeded expectations.",
},
{
name: "Sarah Mitchell",
company: "Ecommerce Fashion Brand",
location: "London, UK",
text: "The sampling process was smooth and production quality was outstanding. We will definitely continue working together.",
},
{
name: "Michael Torres",
company: "Sportswear Startup",
location: "Toronto, Canada",
text: "Reliable manufacturing partner with excellent attention to detail and branding requirements.",
},
{
name: "David Wilson",
company: "Private Label Brand",
location: "Sydney, Australia",
text: "From custom labels to packaging, everything was professionally managed and delivered on time.",
},
];

export default function TestimonialsSection() {
return ( <section className="py-32 bg-gradient-to-b from-[#111111] to-[#1a1a1a] overflow-hidden">

```
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-16">

      <span className="inline-flex px-4 py-2 rounded-full bg-[#6E1E2A]/20 text-[#B5B7B9] font-semibold">
        Client Testimonials
      </span>

      <h2 className="mt-6 text-5xl font-extrabold text-white">
        Trusted By Growing Apparel Brands
      </h2>

      <p className="mt-6 text-lg text-gray-400">
        We help startups, ecommerce businesses and established fashion brands manufacture premium apparel with confidence.
      </p>

    </div>

    {/* TRUST STATS */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 text-center">
        <h3 className="text-3xl font-extrabold text-[#6E1E2A]">
          500+
        </h3>
        <p className="text-gray-400 mt-2">
          Projects Completed
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 text-center">
        <h3 className="text-3xl font-extrabold text-[#6E1E2A]">
          20+
        </h3>
        <p className="text-gray-400 mt-2">
          Countries Served
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 text-center">
        <h3 className="text-3xl font-extrabold text-[#6E1E2A]">
          98%
        </h3>
        <p className="text-gray-400 mt-2">
          Client Retention
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 text-center">
        <h3 className="text-3xl font-extrabold text-[#6E1E2A]">
          4.9★
        </h3>
        <p className="text-gray-400 mt-2">
          Average Rating
        </p>
      </div>

    </div>

    {/* TESTIMONIAL SWIPER */}
    <Swiper
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      spaceBetween={30}
      loop={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
      }}
    >

      {testimonials.map((item) => (
        <SwiperSlide key={item.name}>

          <div
            className="
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              rounded-[32px]
              p-10
              h-full
              hover:border-[#6E1E2A]/50
              transition
            "
          >

            <FaQuoteLeft
              className="
                text-[#6E1E2A]
                text-4xl
                mb-6
              "
            />

            {/* STARS */}
            <div className="flex gap-1 mb-6">

              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className="text-yellow-400"
                />
              ))}

            </div>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              "{item.text}"
            </p>

            {/* CLIENT */}
            <div className="flex items-center gap-4">

              <div
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#6E1E2A]
                  flex
                  items-center
                  justify-center
                  text-white
                  font-bold
                "
              >
                {item.name.charAt(0)}
              </div>

              <div>

                <h4 className="text-white font-bold">
                  {item.name}
                </h4>

                <p className="text-gray-400 text-sm">
                  {item.company}
                </p>

                <p className="text-gray-500 text-sm">
                  {item.location}
                </p>

              </div>

            </div>

          </div>

        </SwiperSlide>
      ))}

    </Swiper>

  </div>

</section>


);
}
