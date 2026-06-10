import {
  FaGlobe,
  FaShippingFast,
  FaTags,
  FaCheckCircle,
  FaHeadset,
  FaTshirt,
  FaBoxOpen,
  FaIndustry,
} from "react-icons/fa";

export default function TrustSection() {
  const items = [
    {
      icon: <FaTags />,
      text: "Low MOQ",
    },
    {
      icon: <FaTshirt />,
      text: "Private Label",
    },
    {
      icon: <FaGlobe />,
      text: "Worldwide Shipping",
    },
    {
      icon: <FaCheckCircle />,
      text: "Premium Quality",
    },
    {
      icon: <FaShippingFast />,
      text: "Fast Turnaround",
    },
    {
      icon: <FaHeadset />,
      text: "Dedicated Support",
    },
    {
      icon: <FaBoxOpen />,
      text: "Custom Packaging",
    },
    {
      icon: <FaIndustry />,
      text: "OEM & ODM Manufacturing",
    },
  ];

  return (
    <section className="bg-white border-y border-gray-100 overflow-hidden py-6">

      <div className="relative flex overflow-hidden">

        <div className="flex animate-marquee whitespace-nowrap">

          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="
                flex
                items-center
                gap-3
                mx-4
                px-5
                py-3
                rounded-2xl
                bg-gray-50
                border
                border-gray-100
                shadow-sm
                hover:shadow-md
                transition
              "
            >
              <span className="text-[#6E1E2A] text-lg">
                {item.icon}
              </span>

              <span className="font-semibold text-gray-800">
                {item.text}
              </span>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}