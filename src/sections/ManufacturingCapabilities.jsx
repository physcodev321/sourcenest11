import {
  FaPrint,
  FaTshirt,
  FaPalette,
  FaTags,
  FaBoxOpen,
  FaCheckCircle,
  FaSearch,
  FaIndustry,
  FaArrowRight,
} from "react-icons/fa";

const capabilities = [
  {
    icon: <FaPrint />,
    title: "Screen Printing",
    description:
      "Bold, vibrant and durable prints for premium apparel collections.",
  },
  {
    icon: <FaTshirt />,
    title: "Embroidery",
    description:
      "High-end embroidery for logos, branding and corporate apparel.",
  },
  {
    icon: <FaPalette />,
    title: "DTG Printing",
    description:
      "Photorealistic printing for complex artwork and detailed graphics.",
  },
  {
    icon: <FaIndustry />,
    title: "Sublimation",
    description:
      "Full-coverage all-over printing with long-lasting color vibrancy.",
  },
  {
    icon: <FaTags />,
    title: "Private Label",
    description:
      "Labels, hang tags, packaging and complete branding solutions.",
  },
  {
    icon: <FaBoxOpen />,
    title: "Custom Packaging",
    description:
      "Premium packaging experiences tailored to your apparel brand.",
  },
  {
    icon: <FaSearch />,
    title: "Fabric Sourcing",
    description:
      "Access to premium fabrics, trims and accessories worldwide.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Quality Control",
    description:
      "Multi-stage inspections ensuring consistency and excellence.",
  },
];

export default function ManufacturingCapabilities() {
  return (
    <section className="py-28 bg-[#111111] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-12 gap-14 items-start">

          {/* LEFT SIDE */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">

            <span className="inline-flex px-4 py-2 rounded-full bg-[#6E1E2A]/20 text-[#B5B7B9] text-sm font-semibold">
              Manufacturing Capabilities
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Everything You Need To Build A Successful Apparel Brand
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              From fabric sourcing and sampling to branding, production,
              packaging and worldwide shipping, SourceNest provides
              complete apparel manufacturing solutions under one roof.
            </p>

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3 text-gray-300">
                <FaCheckCircle className="text-[#6E1E2A]" />
                End-to-End Manufacturing
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <FaCheckCircle className="text-[#6E1E2A]" />
                Low Minimum Order Quantities
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <FaCheckCircle className="text-[#6E1E2A]" />
                Global Shipping Support
              </div>

            </div>

            <button className="mt-10 bg-[#6E1E2A] hover:bg-[#5b1822] text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 transition">
              Get Manufacturing Quote
              <FaArrowRight />
            </button>

          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-8">

            <div className="grid md:grid-cols-2 gap-6">

              {capabilities.map((item) => (
                <div
                  key={item.title}
                  className="
                    group
                    bg-white/[0.03]
                    backdrop-blur-sm
                    border
                    border-white/10
                    rounded-3xl
                    p-8
                    hover:border-[#6E1E2A]/50
                    hover:bg-white/[0.05]
                    hover:-translate-y-2
                    transition-all
                    duration-300
                  "
                >

                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-[#6E1E2A]/15
                      flex
                      items-center
                      justify-center
                      text-[#6E1E2A]
                      text-2xl
                      mb-6
                      group-hover:bg-[#6E1E2A]
                      group-hover:text-white
                      transition-all
                    "
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}