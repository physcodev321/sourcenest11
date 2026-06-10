import { Link } from "react-router-dom";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

const products = [
  {
    title: "T-Shirts",
    path: "/products/t-shirts",
  },
  {
    title: "Hoodies",
    path: "/products/hoodies",
  },
  {
    title: "Sweatshirts",
    path: "/products/sweatshirts",
  },
  {
    title: "Joggers",
    path: "/products/joggers",
  },
  {
    title: "Shorts",
    path: "/products/shorts",
  },
  {
    title: "Tank Tops",
    path: "/products/tank-tops",
  },
  {
    title: "Caps",
    path: "/products/caps",
  },
];

export default function Products() {
  return (
    <>
      <SEO
        title="Products | SourceNest"
        description="Explore apparel products manufactured by SourceNest."
      />

      <TopBar />
      <Navbar />

      <section className="bg-black text-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold">
            Apparel Products
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Premium clothing categories available for custom manufacturing.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {products.map((product) => (
              <Link
                key={product.title}
                to={product.path}
                className="border rounded-2xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="h-48 bg-gray-100 rounded-xl mb-6"></div>

                <h3 className="text-2xl font-bold">
                  {product.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  Custom manufacturing available.
                </p>
              </Link>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}