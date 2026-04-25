import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";
import { useState } from "react";
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const contactItems = [
    {
      label: "Phone",
      text: "+63 929 979 6709",
      href: "tel:+639299796709",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M6.62 10.79a15.54 15.54 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4a1 1 0 0 1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.12.35.03.75-.24 1.02l-2.2 2.2z" />
        </svg>
      ),
    },
    {
      label: "Email",
      text: "ajunielfrancislae@gmail.com",
      href: "mailto:ajunielfrancislae@gmail.com",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.24-8 5-8-5V6l8 5 8-5v2.24z" />
        </svg>
      ),
    },
    {
      label: "School Email",
      text: "jflaportillo@addu.edu.ph",
      href: "https://www.addu.edu.ph",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 3 1 9l4 2.18V17h2v-4.73L12 15l9-4.91V17h2v-5.82L12 3zm0 10.82L4.98 10 12 6.18 19.02 10 12 13.82z" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      text: "Lae Portillo",
      href: "https://www.facebook.com/blannck.08",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.09 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.68.23 2.68.23v2.98h-1.51c-1.49 0-1.96.92-1.96 1.88v2.27h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.09 24 12.07z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      text: "@laeportillo",
      href: "https://www.instagram.com/laeportillo",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm4.69-3.88a1.19 1.19 0 1 0 0 2.38 1.19 1.19 0 0 0 0-2.38z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      text: "Blannck",
      href: "https://github.com/Blannck",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 .5A12 12 0 0 0 8.21 23.89c.6.11.79-.26.79-.58 0-.28-.01-1.04-.02-2.04-3.22.71-3.91-1.55-3.91-1.55-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.26 3.38.97.11-.75.41-1.26.74-1.55-2.58-.29-5.29-1.29-5.29-5.74 0-1.26.46-2.3 1.2-3.11-.12-.29-.52-1.48.11-3.08 0 0 .98-.31 3.2 1.19a11.06 11.06 0 0 1 5.82 0c2.22-1.5 3.19-1.19 3.19-1.19.63 1.6.23 2.79.12 3.08.74.81 1.19 1.85 1.19 3.11 0 4.46-2.72 5.44-5.3 5.73.42.36.79 1.1.79 2.21 0 1.59-.01 2.88-.01 3.27 0 .32.19.7.8.58A12 12 0 0 0 12 .5z" />
        </svg>
      ),
    },
    {
      label: "Discord",
      text: "blannck08",
      href: "https://discord.com/users/395955540460699651",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.32 4.37A19.79 19.79 0 0 0 15.4 3l-.24.49a18.35 18.35 0 0 1 4.4 1.34 14.2 14.2 0 0 0-4.3-1.2c-.76 1.41-1.13 2.93-1.2 4.46A14.65 14.65 0 0 0 8.74 9.1c-.06-1.53-.43-3.05-1.2-4.46a14.2 14.2 0 0 0-4.3 1.2 18.35 18.35 0 0 1 4.4-1.34L7.4 3a19.79 19.79 0 0 0-4.92 1.37C.86 7.06-.03 9.7.03 12.31a19.97 19.97 0 0 0 6.03 3.08l.52-.84c-.9-.33-1.75-.73-2.56-1.2.2.15.4.29.61.42a13.96 13.96 0 0 0 14.74 0c.21-.13.41-.27.61-.42-.8.47-1.66.87-2.56 1.2l.52.84a19.97 19.97 0 0 0 6.03-3.08c.06-2.61-.83-5.25-2.45-7.94zM8.47 13.58c-.89 0-1.62-.82-1.62-1.83 0-1 .72-1.82 1.62-1.82.9 0 1.63.82 1.62 1.82 0 1.01-.72 1.83-1.62 1.83zm7.06 0c-.89 0-1.62-.82-1.62-1.83 0-1 .72-1.82 1.62-1.82.9 0 1.63.82 1.62 1.82 0 1.01-.72 1.83-1.62 1.83z" />
        </svg>
      ),
    },
  ];
  const SERVICE_ID = "service_7xy46jf";
  const TEMPLATE_ID = "template_35f1z1e";
  const PUBLIC_KEY = "lsOba08QN6AbutH2Z";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Oops! Something went wrong. Please try again.");
      });
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="contact-title text-3xl font-bold mb-8 text-center">
            Get In Touch!
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              ></input>
            </div>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              ></input>
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/3 px-4 py-3 text-gray-200 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all"
              >
                <span className="mt-0.5 text-blue-400">{item.icon}</span>
                <span className="leading-tight">
                  <span className="block text-sm text-gray-400">
                    {item.label}
                  </span>
                  <span className="block text-sm sm:text-base">
                    {item.text}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
