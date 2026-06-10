import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* HERO */}
      <section className="bg-black text-white py-28">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl md:text-7xl font-bold">
            About SourceNest
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            We are a full-service apparel manufacturing and sourcing partner
            helping brands transform ideas into high-quality garments
            with global production standards.
          </p>

        </div>
      </section>

      {/* STORY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold">
              Our Story
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              SourceNest was created to simplify apparel manufacturing for
              brands around the world. From startups to established labels,
              we connect design ideas with reliable production partners,
              ensuring quality, consistency, and scalability.
              <br /><br />
              Our goal is to remove the complexity of sourcing, sampling,
              and production so brands can focus on growth and design.
            </p>
          </div>

          <div className="bg-gray-200 h-[400px] rounded-2xl flex items-center justify-center">
            <span className="text-gray-500">
              Company Image
            </span>
          </div>

        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To provide seamless, reliable, and high-quality apparel
              manufacturing solutions that help brands scale globally.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To become a leading global sourcing partner for apparel
              brands by combining quality manufacturing with innovation
              and transparency.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Why Brands Trust SourceNest
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Reliable Manufacturing Network",
              "Strict Quality Control",
              "Low Minimum Order Quantity",
              "Global Shipping Support",
              "Private Label Expertise",
              "End-to-End Production Support",
            ].map((item) => (
              <div
                key={item}
                className="border border-gray-200 rounded-2xl p-8"
              >
                <h3 className="font-semibold text-lg">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Let’s Build Your Apparel Brand
          </h2>

          <p className="mt-6 text-gray-300">
            From concept to production, we help you manufacture
            premium-quality apparel at scale.
          </p>

          <button className="mt-8 bg-white text-black px-8 py-4 rounded-xl font-bold">
            Contact Us
          </button>

        </div>
      </section>

      <Footer />
    </>
  );
}