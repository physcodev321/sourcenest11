import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Manufacturing() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* HERO */}
      <section id="top" className="bg-black text-white py-28">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl md:text-7xl font-bold">
            Manufacturing Process
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            From concept to final delivery, SourceNest handles every step of apparel manufacturing
            with precision, quality control, and global standards.
          </p>

        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Design & Requirement Gathering",
                desc: "We understand your idea, tech packs, references, and product requirements.",
              },
              {
                title: "Fabric Sourcing",
                desc: "We source high-quality fabrics based on your product type and budget.",
              },
              {
                title: "Sampling",
                desc: "We create samples so you can approve fit, fabric, and design.",
              },
              {
                title: "Production",
                desc: "Bulk manufacturing begins under strict quality control standards.",
              },
              {
                title: "Quality Inspection",
                desc: "Every piece is inspected to ensure consistency and premium quality.",
              },
              {
                title: "Packaging & Shipping",
                desc: "Products are branded, packed, and shipped worldwide.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* QUALITY */}
      <section id="quality" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold">
              Strict Quality Control Standards
            </h2>

            <p className="mt-6 text-gray-600">
              Every product goes through multiple inspection stages to ensure durability,
              stitching quality, color accuracy, and brand consistency.
            </p>

            <ul className="mt-8 space-y-3 text-gray-700">
              <li>✔ Fabric Inspection</li>
              <li>✔ Stitching Quality Check</li>
              <li>✔ Size Accuracy Verification</li>
              <li>✔ Final Product Inspection</li>
              <li>✔ Packaging Quality Check</li>
            </ul>
          </div>

          <div className="bg-gray-200 h-[400px] rounded-2xl flex items-center justify-center">
            <span className="text-gray-500">Quality Control Image</span>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Ready To Start Production?
          </h2>

          <p className="mt-6 text-gray-300">
            Share your requirements and we’ll guide you from sampling to full-scale manufacturing.
          </p>

          <button className="mt-8 bg-white text-black px-8 py-4 rounded-xl font-bold">
            Request Manufacturing Quote
          </button>

        </div>
      </section>

      <Footer />
    </>
  );
}