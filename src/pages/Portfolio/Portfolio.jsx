import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { portfolioItems } from "./PortfolioData";

export default function Portfolio() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* HERO */}
      <section className="bg-black text-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-7xl font-bold">
            Our Portfolio
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Real manufacturing projects we’ve delivered for brands worldwide.
          </p>

        </div>
      </section>

      {/* GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border rounded-2xl p-6 shadow hover:shadow-xl transition"
              >

                <div className="text-sm text-gray-500">
                  {item.category}
                </div>

                <h3 className="text-xl font-bold mt-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {item.description}
                </p>

                <button className="mt-6 text-blue-600 font-medium">
                  View Details →
                </button>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Want to Build Something Like This?
          </h2>

          <p className="mt-6 text-gray-600">
            Let’s turn your idea into a real product with full manufacturing support.
          </p>

          <button className="mt-10 bg-black text-white px-10 py-4 rounded-xl">
            Get Quote
          </button>

        </div>
      </section>

      <Footer />
    </>
  );
}