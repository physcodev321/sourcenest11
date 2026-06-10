import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function ProductTemplate({
  title,
  description,
  features,
}) {
  return (
    <>
      <SEO
        title={`${title} Manufacturing | SourceNest`}
        description={description}
      />

      <TopBar />
      <Navbar />

      <section className="bg-black text-white py-28">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl md:text-7xl font-bold">
            {title}
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            {description}
          </p>

        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-4xl font-bold">
              Product Features
            </h2>

            <div className="mt-8 space-y-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="border rounded-xl p-4"
                >
                  ✓ {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl h-[450px]"></div>

        </div>
      </section>

      <Footer />
    </>
  );
}