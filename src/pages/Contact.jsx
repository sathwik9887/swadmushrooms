import React, { useRef, useState } from "react";
import { IoLocation, IoPhonePortrait } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // "success" or "error"

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wpx1gmj",
        "template_9lurae8",
        form.current,
        "sE04fAdKt15M3Jh05"
      )
      .then(
        (result) => {
          setStatus("success"); // Show success alert
          form.current.reset();
          setTimeout(() => setStatus(null), 5000); // Hide alert after 5s
        },
        (error) => {
          setStatus("error"); // Show error alert
          setTimeout(() => setStatus(null), 5000); // Hide alert after 5s
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Swad Mushrooms | Contact</title>
      </Helmet>
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 md:py-20">
        <nav className="text-sm text-gray-600 mb-4">
          <Link to="/" className="hover:underline text-green-700">
            Home
          </Link>{" "}
          / <span className="text-gray-800">Contact Us</span>
        </nav>

        {/* Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-lora font-semibold mb-8 md:mb-10 text-green-800">
          Contact Us
        </h1>

        {/* Status Alert */}
        {status === "success" && (
          <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md">
            Message has been sent successfully!
          </div>
        )}
        {status === "error" && (
          <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-md">
            Failed to send message, please try again.
          </div>
        )}

        {/* Flex container */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Section */}
          <div className="flex-1 space-y-6">
            <p className="text-sm sm:text-base md:text-base leading-relaxed text-gray-800">
              Swad Mushrooms Farm
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-800">
                <IoLocation className="text-green-700 text-lg" />
                <span>Swad Mushrooms, Narnakaje, Sullia, D.K.</span>
              </div>

              <div className="flex items-center gap-2 text-gray-800">
                <IoPhonePortrait className="text-green-700 text-lg" />
                <span>
                  <a href="tel:+918123279734" className="hover:underline">
                    +91-8123279734
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-800">
                <CgMail className="text-green-700 text-lg" />
                <span>
                  <a
                    href="mailto:swadmushrooms@gmail.com"
                    className="hover:underline"
                  >
                    swadmushrooms@gmail.com
                  </a>
                </span>
              </div>
            </div>

            <div className="w-full sm:w-96 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md">
              <iframe
                title="Swad Mushrooms Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.7767345725706!2d75.45956670950893!3d12.596960987633658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4efff9b7f6887%3A0x422a25da6de90fea!2sSwad%20Mushrooms!5e0!3m2!1sen!2sin!4v1758273232665!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Section: Form */}
          <div className="flex-1 space-y-6">
            <p className="flex flex-col text-sm sm:text-base md:text-base leading-relaxed text-gray-800">
              <span>
                We'd love to hear from you! If you have any questions about our
                offerings or farm,
              </span>
              <span>Please add your details below.</span>
            </p>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-4 bg-white p-6 rounded-2xl shadow-md"
            >
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="Your Phone Number"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
