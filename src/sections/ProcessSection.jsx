import {
  FaClipboardList,
  FaPencilRuler,
  FaVial,
  FaIndustry,
  FaCheckCircle,
  FaShippingFast,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaClipboardList />,
    title: "Share Requirements",
    description:
      "Tell us about your apparel concept, target market, materials, branding and order quantity.",
  },
  {
    icon: <FaPencilRuler />,
    title: "Product Development",
    description:
      "Our team develops specifications, sourcing plans and manufacturing solutions.",
  },
  {
    icon: <FaVial />,
    title: "Sampling",
    description:
      "Receive samples to review fit, fabric quality, printing and finishing details.",
  },
  {
    icon: <FaIndustry />,
    title: "Production",
    description:
      "Once approved, your products move into full-scale manufacturing.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Quality Inspection",
    description:
      "Every batch undergoes strict quality control before final approval.",
  },
  {
    icon: <FaShippingFast />,
    title: "Packaging & Shipping",
    description:
      "Products are packed, branded and shipped worldwide directly to your destination.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-28 bg-[#fafafa]">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <span className="inline-flex px-4 py-2 rounded-full bg-[#6E1E2A]/10 text-[#6E1E2A] font-semibold text-sm">
            Our Process
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-[#111111]">
            From Concept To Global Delivery
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            A streamlined manufacturing workflow designed to help apparel
            brands launch faster while maintaining premium quality standards.
          </p>

        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* Desktop Connector Line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-[#6E1E2A]/20 via-[#6E1E2A] to-[#6E1E2A]/20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 relative">

            {steps.map((step, index) => (
              <div
                key={step.title}
                className="
                  group
                  relative
                  text-center
                "
              >

                {/* ICON */}
                <div
                  className="
                    relative
                    z-10
                    w-24
                    h-24
                    mx-auto
                    rounded-3xl
                    bg-white
                    border
                    border-gray-100
                    shadow-md
                    flex
                    items-center
                    justify-center
                    text-3xl
                    text-[#6E1E2A]
                    mb-6
                    group-hover:bg-[#6E1E2A]
                    group-hover:text-white
                    group-hover:-translate-y-2
                    transition-all
                    duration-300
                  "
                >
                  {step.icon}
                </div>

                {/* STEP NUMBER */}
                <div className="text-sm font-bold text-[#6E1E2A] mb-3">
                  STEP {index + 1}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-[#111111] mb-4">
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}