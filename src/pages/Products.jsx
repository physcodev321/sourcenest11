import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = [
  {
    title: "Custom T-Shirts",
    description: "Premium cotton, oversized, heavyweight and fashion tees.",
  },
  {
    title: "Custom Activewear",
    description: "Premium cotton, oversized, heavyweight and fashion tees.",
  },
  {
    title: "Custom Caps",
    description: "Premium cotton, oversized, heavyweight and fashion tees.",
  },
  {
    title: "Custom Hoodies",
    description: "Pullover, zip-up, fleece and heavyweight hoodies.",
  },
  {
    title: "Custom Jackets",
    description: "Premium cotton, oversized, heavyweight and fashion tees.",
  },
  {
    title: "Custom Joggers",
    description: "Premium cotton, oversized, heavyweight and fashion tees.",
  },
  {
    title: "Custom Polos",
    description: "Premium cotton, oversized, heavyweight and fashion tees.",
  },
  {
    title: "Custom Shorts",
    description: "Premium cotton, oversized, heavyweight and fashion tees.",
  },
  {
    title: "Custom TankTops",
    description: "Premium cotton, oversized, heavyweight and fashion tees.",
  },
  {
    title: "Sweatshirts",
    description: "Crewneck sweatshirts for fashion and lifestyle brands.",
  },
  {
    title: "Custom Sportswear",
    description: "Performance apparel for sports and fitness brands.",
  },
  {
    title: "Activewear",
    description: "Gym wear, compression garments and workout apparel.",
  },
  {
    title: "Streetwear",
    description: "Premium streetwear collections and fashion apparel.",
  },
  {
    title: "Joggers",
    description: "Custom joggers and sweatpants with private labeling.",
  },
  {
    title: "Shorts",
    description: "Athletic, casual and lifestyle shorts manufacturing.",
  },
  {
    title: "Uniforms",
    description: "Corporate, school and industrial uniform solutions.",
  },
];

export default function Products() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* HERO */}

      <section className="bg-black text-white py-28">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl md:text-7xl font-bold">
            Products We Manufacture
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            From startups to established apparel brands,
            SourceNest manufactures premium-quality garments
            with complete customization options.
          </p>

        </div>

      </section>

      {/* PRODUCT GRID */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {products.map((product) => (
              <div
                key={product.title}
                className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold mb-4">
                  {product.title}
                </h3>

                <p className="text-gray-600">
                  {product.description}
                </p>

                <button className="mt-6 font-semibold text-blue-600">
                  Learn More →
                </button>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gray-900 text-white py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Need A Custom Product?
          </h2>

          <p className="mt-6 text-gray-300">
            Tell us what you're looking for and we'll help
            develop, sample, manufacture and ship it.
          </p>

          <button className="mt-8 bg-white text-black px-8 py-4 rounded-xl font-bold">
            Request Quote
          </button>

        </div>

      </section>

      <Footer />
    </>
  );
}