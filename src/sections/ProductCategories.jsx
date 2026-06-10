import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import tshirt from "../assets/products/tshirt.jpg";
import hoodie from "../assets/products/hoodie.jpg";
import sportswear from "../assets/products/sportswear.jpg";
import activewear from "../assets/products/activewear.jpg";
import streetwear from "../assets/products/streetwear.jpg";
import sweatshirt from "../assets/products/sweatshirt.jpg";

export default function ProductCategories() {
  return (
    <section className="py-28 bg-[#fafafa]">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <span className="inline-flex px-4 py-2 rounded-full bg-[#6E1E2A]/10 text-[#6E1E2A] font-semibold text-sm">
            Product Categories
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-[#111111]">
            Products We Manufacture
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Premium apparel manufacturing solutions for startups,
            ecommerce brands, wholesalers and established fashion labels.
          </p>

        </div>

        {/* FEATURED ROW */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">

          {/* HOODIES */}
          <Link
            to="/products/hoodies"
            className="
            group
            relative
            h-[520px]
            overflow-hidden
            rounded-[32px]
            shadow-lg
            hover:shadow-2xl
            transition-all
            duration-500
            "
          >
            <img
              src={hoodie}
              alt="Hoodies"
              className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              group-hover:scale-110
              transition-transform
              duration-700
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-8 left-8">

              <span className="inline-block px-4 py-2 rounded-full bg-white/90 text-[#6E1E2A] font-semibold text-sm mb-4">
                Best Seller
              </span>

              <h3 className="text-4xl font-bold text-white">
                Custom Hoodies
              </h3>

              <div className="flex items-center gap-2 text-white mt-4 font-semibold">
                View Collection
                <FaArrowRight />
              </div>

            </div>

          </Link>

          {/* SPORTSWEAR */}
          <Link
            to="/products/sportswear"
            className="
            group
            relative
            h-[520px]
            overflow-hidden
            rounded-[32px]
            shadow-lg
            hover:shadow-2xl
            transition-all
            duration-500
            "
          >
            <img
              src={sportswear}
              alt="Sportswear"
              className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              group-hover:scale-110
              transition-transform
              duration-700
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-8 left-8">

              <span className="inline-block px-4 py-2 rounded-full bg-white/90 text-[#6E1E2A] font-semibold text-sm mb-4">
                Performance
              </span>

              <h3 className="text-4xl font-bold text-white">
                Sportswear
              </h3>

              <div className="flex items-center gap-2 text-white mt-4 font-semibold">
                View Collection
                <FaArrowRight />
              </div>

            </div>

          </Link>

        </div>

        {/* SMALLER PRODUCTS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              title: "T-Shirts",
              image: tshirt,
              link: "/products/tshirts",
            },
            {
              title: "Activewear",
              image: activewear,
              link: "/products/activewear",
            },
            {
              title: "Streetwear",
              image: streetwear,
              link: "/products/streetwear",
            },
            {
              title: "Sweatshirts",
              image: sweatshirt,
              link: "/products/sweatshirts",
            },
          ].map((product) => (
            <Link
              key={product.title}
              to={product.link}
              className="
              group
              relative
              h-[320px]
              overflow-hidden
              rounded-3xl
              shadow-md
              hover:shadow-xl
              transition-all
              duration-500
              "
            >
              <img
                src={product.image}
                alt={product.title}
                className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                group-hover:scale-110
                transition-transform
                duration-700
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6">

                <h3 className="text-2xl font-bold text-white">
                  {product.title}
                </h3>

                <div className="flex items-center gap-2 text-white mt-3 font-medium">
                  View
                  <FaArrowRight className="text-sm" />
                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}