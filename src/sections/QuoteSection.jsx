import {
FaCheckCircle,
FaGlobe,
FaTshirt,
FaBoxOpen,
FaArrowRight,
} from "react-icons/fa";

export default function QuoteSection() {
return ( <section className="py-32 bg-[#111111] overflow-hidden relative">

```
  {/* BACKGROUND EFFECTS */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-[#6E1E2A]/20 blur-[120px]" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6E1E2A]/10 blur-[120px]" />

  <div className="relative max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE */}
      <div>

        <span className="inline-flex px-4 py-2 rounded-full bg-[#6E1E2A]/20 text-[#B5B7B9] font-semibold">
          Start Your Project
        </span>

        <h2 className="mt-6 text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Let's Build Your
          <span className="text-[#6E1E2A]">
            {" "}Next Collection
          </span>
        </h2>

        <p className="mt-8 text-lg text-gray-400 leading-relaxed">
          Whether you're launching a startup clothing brand or scaling
          an established business, SourceNest provides complete apparel
          manufacturing solutions from concept to global delivery.
        </p>

        {/* BENEFITS */}
        <div className="mt-10 space-y-5">

          <div className="flex items-center gap-4">
            <FaCheckCircle className="text-[#6E1E2A]" />
            <span className="text-gray-300">
              Low MOQ Manufacturing
            </span>
          </div>

          <div className="flex items-center gap-4">
            <FaCheckCircle className="text-[#6E1E2A]" />
            <span className="text-gray-300">
              Private Label Solutions
            </span>
          </div>

          <div className="flex items-center gap-4">
            <FaCheckCircle className="text-[#6E1E2A]" />
            <span className="text-gray-300">
              Premium Quality Control
            </span>
          </div>

          <div className="flex items-center gap-4">
            <FaCheckCircle className="text-[#6E1E2A]" />
            <span className="text-gray-300">
              Worldwide Shipping
            </span>
          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-5 mt-12">

          <div>
            <h3 className="text-3xl font-extrabold text-white">
              500+
            </h3>

            <p className="text-gray-500 text-sm">
              Projects
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-extrabold text-white">
              20+
            </h3>

            <p className="text-gray-500 text-sm">
              Countries
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-extrabold text-white">
              98%
            </h3>

            <p className="text-gray-500 text-sm">
              Satisfaction
            </p>
          </div>

        </div>

      </div>

      {/* RIGHT SIDE FORM */}
      <div
        className="
          bg-white
          rounded-[40px]
          p-8
          lg:p-10
          shadow-2xl
        "
      >

        <div className="mb-8">

          <h3 className="text-3xl font-bold text-[#111111]">
            Request A Quote
          </h3>

          <p className="text-gray-500 mt-2">
            Receive a response within 24 hours.
          </p>

        </div>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="
              w-full
              border
              border-gray-200
              rounded-2xl
              p-4
              focus:outline-none
              focus:border-[#6E1E2A]
            "
          />

          <input
            type="email"
            placeholder="Email Address"
            className="
              w-full
              border
              border-gray-200
              rounded-2xl
              p-4
              focus:outline-none
              focus:border-[#6E1E2A]
            "
          />

          <input
            type="text"
            placeholder="Company / Brand Name"
            className="
              w-full
              border
              border-gray-200
              rounded-2xl
              p-4
              focus:outline-none
              focus:border-[#6E1E2A]
            "
          />

          <select
            className="
              w-full
              border
              border-gray-200
              rounded-2xl
              p-4
              focus:outline-none
              focus:border-[#6E1E2A]
            "
          >
            <option>Select Product Type</option>
            <option>T-Shirts</option>
            <option>Hoodies</option>
            <option>Sportswear</option>
            <option>Activewear</option>
            <option>Uniforms</option>
            <option>Streetwear</option>
          </select>

          <textarea
            rows="5"
            placeholder="Tell us about your project requirements..."
            className="
              w-full
              border
              border-gray-200
              rounded-2xl
              p-4
              resize-none
              focus:outline-none
              focus:border-[#6E1E2A]
            "
          />

          <button
            className="
              w-full
              bg-[#6E1E2A]
              hover:bg-[#5d1823]
              text-white
              py-4
              rounded-2xl
              font-bold
              flex
              items-center
              justify-center
              gap-3
              transition
            "
          >
            Submit Inquiry
            <FaArrowRight />
          </button>

        </form>

        {/* TRUST BAR */}
        <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t">

          <div className="text-center">
            <FaTshirt className="mx-auto text-[#6E1E2A] text-xl mb-2" />
            <p className="text-xs text-gray-500">
              Custom Apparel
            </p>
          </div>

          <div className="text-center">
            <FaBoxOpen className="mx-auto text-[#6E1E2A] text-xl mb-2" />
            <p className="text-xs text-gray-500">
              Private Label
            </p>
          </div>

          <div className="text-center">
            <FaGlobe className="mx-auto text-[#6E1E2A] text-xl mb-2" />
            <p className="text-xs text-gray-500">
              Global Shipping
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>


);
}
