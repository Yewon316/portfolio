import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-sora text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Let's Connect
        </h2>
        <p className="text-gray-500 text-center mb-12">
          Have a project in mind or just want to chat? Reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-sora font-semibold text-gray-900 mb-1">
                Email
              </h3>
              <a
                href="mailto:readchoi0316@gmail.com"
                className="text-accent hover:underline"
              >
                readchoi0316@gmail.com
              </a>
            </div>
            <div>
              <h3 className="font-sora font-semibold text-gray-900 mb-1">
                LinkedIn
              </h3>
              <a
                href="https://www.linkedin.com/in/choi-amyyyy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                linkedin.com/in/choi-amyyyy
              </a>
            </div>
            <div>
              <h3 className="font-sora font-semibold text-gray-900 mb-1">
                Location
              </h3>
              <p className="text-gray-600">West Lafayette, IN</p>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-[12px] border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-[12px] border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-[12px] border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-accent text-white rounded-full font-medium hover:bg-blue-600 transition-colors cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
