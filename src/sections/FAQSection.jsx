import { useState } from "react";
import {
  FaPlus,
  FaMinus,
  FaSearch,
  FaHeadset,
} from "react-icons/fa";



const faqs = [
{
category: "MOQ",
q: "What is your minimum order quantity (MOQ)?",
a: "Our MOQ varies depending on the product type, fabric selection and customization requirements. We offer startup-friendly MOQ options whenever possible.",
},
{
category: "Private Label",
q: "Do you offer private label manufacturing?",
a: "Yes. We provide woven labels, printed neck labels, hang tags, packaging, custom branding and complete private label solutions.",
},
{
category: "Shipping",
q: "Do you ship internationally?",
a: "Absolutely. We work with brands across North America, Europe, Australia, the Middle East and many other regions worldwide.",
},
{
category: "Development",
q: "Can you help with product development?",
a: "Yes. We can assist with tech packs, fabric sourcing, sampling, pattern development and production planning.",
},
{
category: "Production",
q: "How long does production take?",
a: "Lead times depend on order size and complexity. Most projects move from sampling to production within a structured timeline discussed during onboarding.",
},
{
category: "Quality",
q: "How do you ensure product quality?",
a: "Every order passes through multiple quality control checkpoints before packaging and shipment to ensure consistency and accuracy.",
},
];

export default function FAQSection() {
const [open, setOpen] = useState(0);
const [search, setSearch] = useState("");

const filteredFaqs = faqs.filter(
(faq) =>
faq.q.toLowerCase().includes(search.toLowerCase()) ||
faq.a.toLowerCase().includes(search.toLowerCase())
);

return ( <section className="py-32 bg-[#fafafa]">

```
  <div className="max-w-5xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center mb-16">

      <span className="inline-flex px-4 py-2 rounded-full bg-[#6E1E2A]/10 text-[#6E1E2A] font-semibold">
        Frequently Asked Questions
      </span>

      <h2 className="mt-6 text-5xl font-extrabold text-[#111111]">
        Everything You Need To Know
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        Find answers to the most common questions about apparel manufacturing,
        private labeling, sampling, production and worldwide shipping.
      </p>

    </div>

    {/* SEARCH */}
    <div className="relative mb-12">

      <FaSearch
        className="
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          text-gray-400
        "
      />

      <input
        type="text"
        placeholder="Search FAQs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full
          bg-white
          border
          border-gray-200
          rounded-2xl
          py-4
          pl-14
          pr-5
          text-lg
          outline-none
          focus:border-[#6E1E2A]
        "
      />

    </div>

    {/* FAQ ITEMS */}
    <div className="space-y-5">

      {filteredFaqs.map((faq, index) => (
        <div
          key={faq.q}
          className="
            bg-white
            rounded-[28px]
            border
            border-gray-100
            shadow-sm
            overflow-hidden
          "
        >

          <button
            onClick={() =>
              setOpen(open === index ? null : index)
            }
            className="
              w-full
              flex
              justify-between
              items-center
              p-7
              text-left
            "
          >

            <div>

              <span
                className="
                  inline-block
                  mb-3
                  px-3
                  py-1
                  rounded-full
                  bg-[#6E1E2A]/10
                  text-[#6E1E2A]
                  text-xs
                  font-semibold
                "
              >
                {faq.category}
              </span>

              <h3 className="text-xl font-bold text-[#111111]">
                {faq.q}
              </h3>

            </div>

            <div
              className="
                w-10
                h-10
                rounded-full
                bg-[#6E1E2A]/10
                flex
                items-center
                justify-center
                text-[#6E1E2A]
              "
            >
              {open === index ? (
                <FaMinus />
              ) : (
                <FaPlus />
              )}
            </div>

          </button>

          <div
            className={`
              transition-all
              duration-300
              overflow-hidden
              ${
                open === index
                  ? "max-h-96"
                  : "max-h-0"
              }
            `}
          >

            <div className="px-7 pb-7 text-gray-600 leading-relaxed">
              {faq.a}
            </div>

          </div>

        </div>
      ))}

    </div>

    {/* CTA */}
    <div className="mt-20">

      <div
        className="
          bg-[#111111]
          rounded-[40px]
          p-12
          text-center
        "
      >

        <div
          className="
            w-20
            h-20
            mx-auto
            rounded-full
            bg-[#6E1E2A]
            flex
            items-center
            justify-center
            mb-6
          "
        >
          <FaHeadset className="text-white text-3xl" />
        </div>

        <h3 className="text-4xl font-bold text-white">
          Still Have Questions?
        </h3>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Speak directly with our team about your project,
          MOQ requirements, product development needs,
          pricing and production timelines.
        </p>

        <button
          className="
            mt-8
            bg-[#6E1E2A]
            hover:bg-[#5c1823]
            text-white
            px-8
            py-4
            rounded-2xl
            font-semibold
            transition
          "
        >
          Talk To Our Team
        </button>

      </div>

    </div>

  </div>

</section>

);
}
