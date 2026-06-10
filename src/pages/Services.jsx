import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
FaTags,
FaCut,
FaPrint,
FaTshirt,
FaPalette,
FaBoxOpen,
FaArrowRight,
FaGlobe,
FaCheckCircle,
} from "react-icons/fa";

export default function Services() {
const services = [
{
title: "Private Label Manufacturing",
icon: <FaTags />,
description:
"Custom labels, hang tags, packaging, and complete branding solutions for apparel brands.",
},
{
title: "Cut & Sew Manufacturing",
icon: <FaCut />,
description:
"Full custom garment production tailored to your specifications and measurements.",
},
{
title: "Screen Printing",
icon: <FaPrint />,
description:
"High-quality printing solutions with vibrant colors and long-lasting durability.",
},
{
title: "Embroidery",
icon: <FaTshirt />,
description:
"Premium embroidery for logos, branding, uniforms, and fashion collections.",
},
{
title: "Sublimation",
icon: <FaPalette />,
description:
"All-over printing with unlimited colors and exceptional design flexibility.",
},
{
title: "Custom Packaging",
icon: <FaBoxOpen />,
description:
"Custom packaging solutions that elevate your customer unboxing experience.",
},
];

return (
<> <TopBar /> <Navbar />

```
  {/* HERO */}
  <section className="relative overflow-hidden bg-[#111111] text-white py-32">

    <div className="absolute top-0 left-0 w-96 h-96 bg-[#6E1E2A]/20 blur-[120px]" />
    <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#6E1E2A]/10 blur-[120px]" />

    <div className="relative max-w-7xl mx-auto px-6">

      <span className="inline-flex px-5 py-2 rounded-full bg-[#6E1E2A]/20 text-[#B5B7B9] font-semibold">
        Apparel Manufacturing Solutions
      </span>

      <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight max-w-5xl">
        End-To-End
        <span className="text-[#6E1E2A]">
          {" "}Manufacturing Services
        </span>
        <br />
        For Modern Apparel Brands
      </h1>

      <p className="mt-8 text-xl text-gray-400 max-w-3xl">
        From product development and sampling to private label,
        packaging, and worldwide shipping, SourceNest provides
        complete apparel manufacturing solutions under one roof.
      </p>

      <div className="flex flex-wrap gap-4 mt-10">

        <button className="bg-[#6E1E2A] hover:bg-[#5d1823] px-8 py-4 rounded-2xl font-semibold transition">
          Get A Quote
        </button>

        <button className="border border-white/20 px-8 py-4 rounded-2xl font-semibold hover:bg-white/5 transition">
          View Portfolio
        </button>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

        <div>
          <h3 className="text-4xl font-extrabold">500+</h3>
          <p className="text-gray-500">Projects Delivered</p>
        </div>

        <div>
          <h3 className="text-4xl font-extrabold">20+</h3>
          <p className="text-gray-500">Countries Served</p>
        </div>

        <div>
          <h3 className="text-4xl font-extrabold">98%</h3>
          <p className="text-gray-500">Client Satisfaction</p>
        </div>

        <div>
          <h3 className="text-4xl font-extrabold">100%</h3>
          <p className="text-gray-500">Quality Focus</p>
        </div>

      </div>

    </div>

  </section>

  {/* SERVICES GRID */}
  <section className="py-28 bg-[#F8F8F8]">

    <div className="max-w-7xl mx-auto px-6">

      <div className="text-center mb-20">

        <span className="text-[#6E1E2A] font-semibold uppercase tracking-wider">
          What We Offer
        </span>

        <h2 className="text-5xl font-extrabold mt-4 text-[#111111]">
          Complete Manufacturing Ecosystem
        </h2>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
          Every service required to launch, grow, and scale a successful apparel brand.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map((service) => (
          <div
            key={service.title}
            className="
              group
              bg-white
              rounded-[28px]
              p-8
              border
              border-gray-100
              hover:border-[#6E1E2A]/20
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >
            <div className="w-16 h-16 rounded-2xl bg-[#6E1E2A]/10 flex items-center justify-center text-[#6E1E2A] text-2xl mb-6 group-hover:bg-[#6E1E2A] group-hover:text-white transition">

              {service.icon}

            </div>

            <h3 className="text-2xl font-bold text-[#111111] mb-4">
              {service.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>

            <button className="flex items-center gap-3 mt-8 text-[#6E1E2A] font-semibold">
              Learn More
              <FaArrowRight />
            </button>

          </div>
        ))}

      </div>

    </div>

  </section>

  {/* WHY WORK WITH US */}
  <section className="py-24 bg-white">

    <div className="max-w-7xl mx-auto px-6">

      <div className="text-center mb-16">

        <span className="text-[#6E1E2A] font-semibold uppercase tracking-wider">
          Why SourceNest
        </span>

        <h2 className="text-5xl font-extrabold mt-4">
          More Than A Manufacturer
        </h2>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {[
          "Low MOQ Production",
          "Dedicated Project Manager",
          "Private Label Expertise",
          "Worldwide Shipping",
        ].map((item) => (
          <div
            key={item}
            className="text-center p-8 rounded-3xl bg-gray-50"
          >
            <FaCheckCircle className="mx-auto text-[#6E1E2A] text-4xl mb-5" />

            <h3 className="font-bold text-xl">
              {item}
            </h3>
          </div>
        ))}

      </div>

    </div>

  </section>

  {/* CTA */}
  <section className="py-24 bg-[#111111] text-white">

    <div className="max-w-5xl mx-auto px-6 text-center">

      <FaGlobe className="mx-auto text-5xl text-[#6E1E2A] mb-6" />

      <h2 className="text-5xl font-extrabold">
        Ready To Start Manufacturing?
      </h2>

      <p className="mt-6 text-gray-400 text-lg">
        Let's discuss your project requirements and create a production plan tailored to your brand.
      </p>

      <button className="mt-10 bg-[#6E1E2A] hover:bg-[#5d1823] px-8 py-4 rounded-2xl font-semibold transition">
        Request A Quote
      </button>

    </div>

  </section>

  <Footer />
</>

);
}
