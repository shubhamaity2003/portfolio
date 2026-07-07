import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("✅ Your message has been sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("❌ Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Contact Me
          </h2>

          <p className="mt-3 text-gray-600">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* Contact Info */}

          <div className="space-y-6">

            <div className="flex items-center gap-5 p-5 bg-white rounded-xl shadow">
              <FaEnvelope className="text-2xl text-blue-600 shrink-0" />
              <div className="min-w-0">
                <h3 className="font-semibold">Email</h3>
                <a
                  href="mailto:shubhankarexpress2003@gmail.com"
                  className="text-gray-600 hover:text-blue-600 break-all"
                >
                  shubhankarexpress2003@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 p-5 bg-white rounded-xl shadow">
              <FaGithub className="text-2xl text-blue-600 shrink-0" />
              <div className="min-w-0">
                <h3 className="font-semibold">GitHub</h3>

                <a
                  href="https://github.com/shubhamaity2003"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-blue-600 break-all"
                >
                  github.com/shubhamaity2003
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 p-5 bg-white rounded-xl shadow">
              <FaLinkedin className="text-2xl text-blue-600 shrink-0" />
              <div className="min-w-0">
                <h3 className="font-semibold">LinkedIn</h3>

                <a
                  href="https://www.linkedin.com/in/shubhankar-maity-1ba675308"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-blue-600 break-all"
                >
                  linkedin.com/in/shubhankar-maity-1ba675308
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 p-5 bg-white rounded-xl shadow">
              <FaPhone className="text-2xl text-blue-600 shrink-0" />
              <div className="min-w-0">
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">
                  +91 8918656723
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}

          <div className="bg-white rounded-xl shadow p-6 sm:p-8">

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >

              <div>
                <label className="block mb-2 font-medium">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:border-blue-600"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <div
                  className={`mt-4 text-center font-medium ${
                    status.startsWith("✅")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {status}
                </div>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;