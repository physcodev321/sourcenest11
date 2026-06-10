import { useRef } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_d8ix78u",
        "template_clqagr7",
        form.current,
        "BBMa-bVcMzyZ0Isvh"
      )
      .then(
        () => {
          alert("Inquiry Sent Successfully!")
        },
        (error) => {
          alert("Something went wrong.")
          console.log(error)
        }
      )

    e.target.reset()
  }

  return (
    <section className="bg-[#0a0a0a] text-white px-10 py-24">
      <div className="max-w-4xl mx-auto">
        <p className="uppercase tracking-[4px] text-gray-400 mb-4">
          Contact
        </p>

        <h2 className="text-5xl font-bold mb-12">
          Start Your Next Production Project
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="bg-black border border-gray-800 p-4 rounded-xl outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="bg-black border border-gray-800 p-4 rounded-xl outline-none"
          />

          <input
            type="text"
            name="product"
            placeholder="Product Type"
            required
            className="bg-black border border-gray-800 p-4 rounded-xl outline-none"
          />

          <textarea
            name="message"
            placeholder="Tell us about your project"
            rows="6"
            required
            className="bg-black border border-gray-800 p-4 rounded-xl outline-none"
          ></textarea>

          <button className="bg-white text-black py-4 rounded-xl font-semibold hover:bg-gray-200 transition">
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact