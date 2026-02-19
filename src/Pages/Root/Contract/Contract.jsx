import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaUser,
  FaPhoneAlt,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contract = () => {
  const form = useRef();

  // AOS init
  useEffect(() => {
    AOS.init({
      duration: 1000,
      // once: true,
      easing: "ease-in-out",
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ftzh5dp",
        "template_re6h82t",
        form.current,
        "KAvlHYTIieG35i_cq"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-center justify-center bg-gray-50 px-4 py-16"
    >
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-2xl grid md:grid-cols-2 overflow-hidden">

        {/* Left Side - Contact Info */}
        <div
          data-aos="fade-right"
          className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white p-10 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-2xl font-bold mb-8">Contact Info</h2>
            <div className="space-y-5 text-sm">
              <p className="flex items-center gap-3"><FaMapMarkerAlt /> Sylhet, Bangladesh</p>
              <p className="flex items-center gap-3"><FaEnvelope /> mizanasif1@gmail.com</p>
              <p className="flex items-center gap-3"><FaUser /> Mizanur Rahman</p>
              <p className="flex items-center gap-3"><FaPhoneAlt /> +8801869438544</p>
            </div>
          </div>

          <div className="flex gap-4 text-xl mt-10">
            <a href="https://github.com/mizanurrahman017" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-purple-400 cursor-pointer" />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-purple-400 cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/mizanur-rahman-asif-599711383/" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-purple-400 cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="p-10"
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-2">Let’s Work Together</h2>
          <p className="text-gray-500 mb-8">Have a project in mind or just want to say hi?</p>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Type your message..."
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contract;
