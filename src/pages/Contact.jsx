import { useState } from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    product: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbwPuBqJAAcsxHjMrnB0JfVwxhbarL6Sd3Pkf9gEfxroOgVtIcv9VoTsSLpigaX0UmNA/exec", {
        method: "POST",
        body: JSON.stringify(form),
      });

      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        company: "",
        product: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <>
      <TopBar />
      <Navbar />

      {/* HERO */}
      <section className="bg-black text-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold">
            Contact SourceNest
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Get in touch for apparel manufacturing, private label production,
            and custom clothing solutions.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE INFO */}
          <div>
            <h2 className="text-4xl font-bold">
              Let’s Start Your Project
            </h2>

            <p className="mt-6 text-gray-600">
              Share your requirements and we’ll respond with pricing,
              sampling details, and production guidance.
            </p>

            <div className="mt-10 space-y-6 text-gray-700">

              <div>
                <h3 className="font-semibold">Email</h3>
                <p>sales@sourcenest.com</p>
              </div>

              <div>
                <h3 className="font-semibold">WhatsApp</h3>
                <p>+92 XXX XXXXXXX</p>
              </div>

              <div>
                <h3 className="font-semibold">Location</h3>
                <p>Karachi, Pakistan</p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-gray-50 p-10 rounded-2xl">

            <h3 className="text-2xl font-bold mb-6">
              Send Inquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-4 border rounded-xl"
                required
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-4 border rounded-xl"
                required
              />

              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full p-4 border rounded-xl"
              />

              <input
                type="text"
                name="product"
                value={form.product}
                onChange={handleChange}
                placeholder="Product Type (T-Shirts, Hoodies, etc.)"
                className="w-full p-4 border rounded-xl"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us your requirements"
                rows="5"
                className="w-full p-4 border rounded-xl"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Submit Inquiry"}
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Ready To Build Your Brand?
          </h2>

          <p className="mt-6 text-gray-300">
            We help you go from idea → sample → production → delivery.
          </p>

          <button className="mt-8 bg-white text-black px-8 py-4 rounded-xl font-bold">
            Get Quote
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}