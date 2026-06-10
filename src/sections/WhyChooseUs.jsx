import {
  FaTags,
  FaAward,
  FaBoxOpen,
  FaGlobe,
  FaUserTie,
  FaBolt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaTags />,
    title: "Low MOQ Production",
    description:
      "Start with smaller quantities and scale confidently as your brand grows without heavy inventory risk.",
  },
  {
    icon: <FaAward />,
    title: "Premium Quality Control",
    description:
      "Every production stage is monitored to ensure consistency, durability, and premium finishing.",
  },
  {
    icon: <FaBoxOpen />,
    title: "Private Label Solutions",
    description:
      "Custom neck labels, hang tags, packaging, embroidery, printing, and complete brand customization.",
  },
  {
    icon: <FaGlobe />,
    title: "Global Manufacturing Partner",
    description:
      "Serving startups, ecommerce brands, wholesalers, and retailers across multiple international markets.",
  },
  {
    icon: <FaUserTie />,
    title: "Dedicated Project Management",
    description:
      "A single point of contact keeps communication streamlined from sampling to final delivery.",
  },
  {
    icon: <FaBolt />,
    title: "Fast & Reliable Turnarounds",
    description:
      "Efficient production workflows help you launch collections faster and meet market demand.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <span className="inline-flex px-4 py-2 rounded-full bg-[#6E1E2A]/10 text-[#6E1E2A] font-semibold text-sm">
            Why SourceNest
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-[#111111]">
            Manufacturing Built For Modern Apparel Brands
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            From concept development to final delivery, SourceNest helps
            brands launch, scale, and manufacture premium apparel with
            confidence.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                group
                bg-white
                p-8
                rounded-3xl
                border
                border-gray-100
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              {/* Icon */}
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-[#6E1E2A]/10
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
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-[#111111] mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}