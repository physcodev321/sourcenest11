import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaArrowRight,
  FaGlobe,
  FaTags,
  FaBoxOpen,
} from "react-icons/fa";

export default function Footer() {
return ( <footer className="bg-[#0B0B0B] text-white overflow-hidden">

```
  {/* TOP CTA STRIP */}
  <div className="border-b border-white/10">

    <div className="max-w-7xl mx-auto px-6 py-10">

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

        <div>
          <h3 className="text-3xl font-bold">
            Ready To Launch Your Next Collection?
          </h3>

          <p className="text-gray-400 mt-2">
            From concept to production, SourceNest helps brands
            manufacture premium apparel with confidence.
          </p>
        </div>

        <Link
          to="/Contact"
          className="
            bg-[#6E1E2A]
            hover:bg-[#5c1823]
            px-7
            py-4
            rounded-2xl
            font-semibold
            flex
            items-center
            gap-3
            transition
          "
        >
          Get A Quote
          <FaArrowRight />
        </Link>

      </div>

    </div>

  </div>

  {/* MAIN FOOTER */}
  <div className="max-w-7xl mx-auto px-6 py-20">

    <div className="grid lg:grid-cols-5 gap-12">

      {/* COMPANY */}
      <div className="lg:col-span-2">

        <h2 className="text-4xl font-extrabold mb-6">
          Source
          <span className="text-[#6E1E2A]">
            Nest
          </span>
        </h2>

        <p className="text-gray-400 leading-relaxed max-w-md">
          SourceNest is a global apparel manufacturing partner helping
          startups, fashion brands, ecommerce businesses and established
          companies bring premium garments to market.
        </p>

        {/* TRUST BADGES */}
        <div className="flex flex-wrap gap-3 mt-8">

          <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
            <FaTags className="text-[#6E1E2A]" />
            <span className="text-sm">
              Low MOQ
            </span>
          </div>

          <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
            <FaBoxOpen className="text-[#6E1E2A]" />
            <span className="text-sm">
              Private Label
            </span>
          </div>

          <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
            <FaGlobe className="text-[#6E1E2A]" />
            <span className="text-sm">
              Worldwide Shipping
            </span>
          </div>

        </div>

        {/* SOCIALS */}
        <div className="flex gap-4 mt-8">

          <a
            href="#"
            className="
              w-12
              h-12
              rounded-xl
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
              hover:bg-[#6E1E2A]
              transition
            "
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="
              w-12
              h-12
              rounded-xl
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
              hover:bg-[#6E1E2A]
              transition
            "
          >
            <FaLinkedin />
          </a>

          <a
            href="#"
            className="
              w-12
              h-12
              rounded-xl
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
              hover:bg-[#6E1E2A]
              transition
            "
          >
            <FaFacebook />
          </a>

        </div>

      </div>

      {/* COMPANY LINKS */}
      <div>

        <h3 className="font-bold text-lg mb-6">
          Company
        </h3>

        <ul className="space-y-4 text-gray-400">

          <li>
            <Link to="/about" className="hover:text-white">
              About Us
            </Link>
          </li>

          <li>
            <Link to="/portfolio" className="hover:text-white">
              Portfolio
            </Link>
          </li>

          <li>
            <Link to="/manufacturing" className="hover:text-white">
              Manufacturing
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
          </li>

        </ul>

      </div>

      {/* SERVICES */}
      <div>

        <h3 className="font-bold text-lg mb-6">
          Services
        </h3>

        <ul className="space-y-4 text-gray-400">

          <li>Private Label</li>
          <li>Cut & Sew</li>
          <li>Screen Printing</li>
          <li>Embroidery</li>
          <li>Sublimation</li>

        </ul>

      </div>

      {/* CONTACT */}
      <div>

        <h3 className="font-bold text-lg mb-6">
          Contact
        </h3>

        <ul className="space-y-4 text-gray-400">

          <li>
            sales@sourcenest.com
          </li>

          <li>
            Karachi, Pakistan
          </li>

          <li>
            Worldwide Manufacturing Support
          </li>

        </ul>

      </div>

    </div>

  </div>

  {/* BOTTOM BAR */}
  <div className="border-t border-white/10">

    <div
      className="
        max-w-7xl
        mx-auto
        px-6
        py-8
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-4
      "
    >

      <p className="text-gray-500 text-sm">
        © 2026 SourceNest. All Rights Reserved.
      </p>

      <div className="flex gap-6 text-gray-500 text-sm">

        <Link to="/privacy">
          Privacy Policy
        </Link>

        <Link to="/terms">
          Terms of Service
        </Link>

      </div>

    </div>

  </div>

</footer>

);
}
