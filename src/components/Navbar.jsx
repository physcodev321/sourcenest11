import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes, FaHome, FaBox, FaCogs, FaUser, FaPhone} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleEnter = (menu) => {
    if (timeoutId) clearTimeout(timeoutId);
    setOpenMenu(menu);
  };

  const handleLeave = () => {
    const id = setTimeout(() => {
      setOpenMenu(null);
    }, 180); // prevents flicker when moving cursor
    setTimeoutId(id);
  };

  return (
   <header className="sticky top-0 z-50 bg-[#B5B7B9] backdrop-blur-md border-b border-gray-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link to="/" className="text-3xl font-extrabold tracking-tight text-[#111111]">
           Source<span className="text-[#6E1E2A]">Nest</span>
         </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">

            <Link to="/" className="font-semibold text-gray-700 hover:text-[#6E1E2A] transition-colors duration-200">
              Home
            </Link>

            {/* SERVICES */}
            <div className="relative" onMouseLeave={handleLeave}>
              <button
                onMouseEnter={() => handleEnter("services")}
                className="flex items-center gap-2 font-semibold text-gray-700 hover:text-[#6E1E2A] transition-colors duration-200">
                Services <FaChevronDown size={12} />
              </button>

              {openMenu === "services" && (
                <div
                  onMouseEnter={() => handleEnter("services")}
                  onMouseLeave={handleLeave}
                  className="absolute left-0 top-full mt-3 z-50"
                >
                  <div className="bg-white border border-red-100 shadow-2xl rounded-2xl w-80 p-4">

                    <Link to="/services" className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-[#6E1E2A] transition-all duration-500">
                      All Services
                    </Link>

                    <Link to="/services/PrivateLabel" className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-[#6E1E2A] transition-all duration-500">
                      Private Label
                    </Link>

                    <Link to="/services/CutAndSew" className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-[#6E1E2A] transition-all duration-500">
                      Cut & Sew
                    </Link>

                    <Link to="/services/ScreenPrinting" className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-[#6E1E2A] transition-all duration-500">
                      Screen Printing
                    </Link>

                    <Link to="/services/embroidery"className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-[#6E1E2A] transition-all duration-500">
                      Embroidery
                    </Link>

                  </div>
                </div>
              )}
            </div>

            {/* PRODUCTS */}
            <div className="relative" onMouseLeave={handleLeave}>
              <button
                onMouseEnter={() => handleEnter("products")}
                className="flex items-center gap-2 font-semibold text-gray-700 hover:text-[#6E1E2A] transition-colors duration-500"
              >
                Products <FaChevronDown size={12} />
              </button>

              {openMenu === "products" && (
                <div
                  onMouseEnter={() => handleEnter("products")}
                  onMouseLeave={handleLeave}
                  className="absolute left-0 top-full mt-3 z-50"
                >
                  <div className="bg-white border border-red-100 shadow-2xl rounded-2xl w-[520px] p-5">
                   
                   <div className="grid grid-cols-2 gap-2"> 

                    <Link to="/products" className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-[#6E1E2A] transition-all duration-500">
                      All Products
                    </Link>

                    <Link to="/products/Activewear" className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-[#6E1E2A] transition-all duration-500">
                      Activewear
                    </Link>

                    <Link to="/products/Caps" className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-[#6E1E2A] transition-all duration-500">
                      Caps
                    </Link>

                    <Link to="/products/Jackets" className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-[#6E1E2A] transition-all duration-500">
                      Jackets
                    </Link>

                    <Link to="/products/Joggers" className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-[#6E1E2A] transition-all duration-500">
                      Joggers
                    </Link>

                    <Link to="/products/Polos" className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-[#6E1E2A] transition-all duration-500">
                      Polos
                    </Link>

                    <Link to="/products/Shorts" className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-[#6E1E2A] transition-all duration-500">
                      Shorts
                    </Link>

                    <Link to="/products/TankTops" className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-[#6E1E2A] transition-all duration-500">
                      TankTops
                    </Link>

                    <Link to="/products/tshirts" className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-[#6E1E2A] transition-all duration-500">
                      T-Shirts
                    </Link>

                    <Link to="/products/hoodies" className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-[#6E1E2A] transition-all duration-500">
                      Hoodies
                    </Link>

                    <Link to="/products/sportswear" className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-[#6E1E2A] transition-all duration-500">
                      Sportswear
                    </Link>

                    <Link to="/products/Sweatshirts" className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-[#6E1E2A] transition-all duration-500">
                      Sweatshirts
                    </Link>

                    <Link to="/products/Uniforms" className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-[#6E1E2A] transition-all duration-500">
                      Uniforms
                    </Link>

                   </div>
                   

                  </div>
                </div>
              )}
            </div>

            {/* MANUFACTURING */}
            <div className="relative" onMouseLeave={handleLeave}>
              <button
                onMouseEnter={() => handleEnter("manufacturing")}
                className="flex items-center gap-2 font-semibold text-gray-700 hover:text-[#6E1E2A] transition-colors duration-500"
              >
                Manufacturing <FaChevronDown size={12} />
              </button>

              {openMenu === "manufacturing" && (
                <div
                  onMouseEnter={() => handleEnter("manufacturing")}
                  onMouseLeave={handleLeave}
                  className="absolute left-0 top-full mt-3 z-50"
                >
                  <div className="bg-white border border-red-100 shadow-2xl rounded-2xl w-80 p-4">

                    <a href="/manufacturing#top" className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-[#6E1E2A] transition-all duration-500">
                      Overview
                    </a>

                    <a href="/manufacturing#process" className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-[#6E1E2A] transition-all duration-500">
                      Process
                    </a>

                    <a href="/manufacturing#quality" className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-[#6E1E2A] transition-all duration-500">
                      Quality Control
                    </a>

                    <a href="/manufacturing#cta" className="block px-4 py-3 rounded-xl hover:bg-red-50 hover:text-[#6E1E2A] transition-all duration-500">
                      Get Started
                    </a>

                  </div>
                </div>
              )}
            </div>

            <Link to="/portfolio"className="font-semibold text-gray-700 hover:text-[#6E1E2A] transition-colors duration-200">
             Portfolio
            </Link>

            <Link to="/about" className="font-semibold text-gray-700 hover:text-[#6E1E2A] transition-colors duration-200">
              About
            </Link>

            <Link to="/contact" className="font-semibold text-gray-700 hover:text-[#6E1E2A] transition-colors duration-200">
              Contact
            </Link>

          </nav>

          {/* CTA */}
          <Link
            to="/contact"className="hiddenlg:flexitems-centerjustify-center bg-[#6E1E2A] text-white px-6
             py-3
             rounded-2xl
             font-semibold
             shadow-lg">
             Get Quote
           </Link>

          {/* MOBILE ICON */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMobileOpen(true)}>
           <FaBars />
         </button>

        </div>
      </div>
  {mobileOpen && (
  <div className="fixed inset-0 z-50">

    {/* BACKDROP */}
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        onClick={() => setMobileOpen(false)}
      />

    {/* DRAWER */}
    <div
  className="
  absolute
  top-0
  left-0
  w-100
  h-full
  bg-black
  text-white
  shadow-100xl
  border-r
  border-[#6E1E2A]/10
  "
>

      {/* HEADER */}
      <div className="flex items-center justify-between p-5 border-b">
        <h2 className="text-2xl font-extrabold">Source<span className="text-[#6E1E2A]">Nest</span></h2>

        <button
          onClick={() => setMobileOpen(false)}
          className="text-2xl"
        >
          <FaTimes />
        </button>
      </div>

      {/* LINKS */}
      <div className="flex flex-col p-6 space-y-5 text-lg">

        <Link to="/" onClick={() => setMobileOpen(false)} className="font-semibold text-gray-200 hover:text-[#6E1E2A] transition-colors">
           Home
        </Link>

        <Link to="/services" onClick={() => setMobileOpen(false)} className="font-semibold text-gray-200 hover:text-[#6E1E2A]  transition-colors">
           Services
        </Link>

        <Link to="/products" onClick={() => setMobileOpen(false)} className="font-semibold text-gray-200 hover:text-[#6E1E2A]  transition-colors">
           Products
        </Link>

        <Link to="/manufacturing" onClick={() => setMobileOpen(false)} className="font-semibold text-gray-200 hover:text-[#6E1E2A]  transition-colors">
           Manufacturing
        </Link>

       <Link to="/about" onClick={() => setMobileOpen(false)} className="font-semibold text-gray-200 hover:text-[#6E1E2A]  transition-colors">
           About
        </Link>

        <Link to="/contact" onClick={() => setMobileOpen(false)} className="font-semibold text-gray-200 hover:text-[#6E1E2A]  transition-colors">
           Contact
        </Link>

         <Link to="/contact" onClick={() => setMobileOpen(false)} className="
           bg-[#6E1E2A]
           text-white
           py-3
           text-center
           rounded-2xl
           mt-6
           font-semibold
           shadow-lg"> 
           Get Quote
        </Link>

      </div>

    </div>
  </div>
)}
    </header>
  );
}