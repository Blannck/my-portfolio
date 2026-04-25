import { RevealOnScroll } from "../RevealOnScroll";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/blannck.08",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 6.025 4.388 11.02 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.03 1.792-4.705 4.533-4.705 1.313 0 2.686.236 2.686.236v2.976h-1.514c-1.49 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.093 24 18.098 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/laeportillo",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.94 1.12a1.19 1.19 0 1 1 0 2.38 1.19 1.19 0 0 1 0-2.38zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/Blannck",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 .5A12 12 0 0 0 8.207 23.89c.6.11.793-.258.793-.577 0-.285-.01-1.04-.016-2.04-3.226.708-3.906-1.555-3.906-1.555-.528-1.34-1.29-1.697-1.29-1.697-1.054-.72.08-.706.08-.706 1.166.082 1.78 1.2 1.78 1.2 1.036 1.776 2.718 1.263 3.38.966.106-.75.405-1.262.737-1.552-2.576-.293-5.285-1.288-5.285-5.735 0-1.267.453-2.304 1.195-3.115-.12-.294-.518-1.476.114-3.078 0 0 .975-.313 3.194 1.19a11.06 11.06 0 0 1 5.818 0c2.217-1.503 3.19-1.19 3.19-1.19.634 1.602.236 2.784.116 3.078.744.81 1.193 1.848 1.193 3.115 0 4.458-2.713 5.438-5.297 5.724.417.36.79 1.096.79 2.21 0 1.594-.014 2.878-.014 3.27 0 .322.19.694.8.576A12 12 0 0 0 12 .5z" />
      </svg>
    ),
  },
  {
    name: "Discord",
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

export const Home = () => {
  const handleSectionJump = (event, targetId) => {
    event.preventDefault();

    window.dispatchEvent(
      new CustomEvent("reveal-section", { detail: { targetId } }),
    );

    window.location.hash = targetId;
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm Lae Portillo
          </h1>
          <p className="text-gray-400 text-lg mb-8 mt-5 max-w-xl mx-auto">
            I'm a frontend developer who loves crafting beautiful and functional
            web experiences. With a passion for design and a knack for coding, I
            create websites that are not only visually stunning but also
            user-friendly. Let's build something amazing together!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              onClick={(event) => handleSectionJump(event, "projects")}
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(58, 130, 246, 0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(event) => handleSectionJump(event, "contact")}
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(58, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-7 flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="text-gray-300 p-3 rounded-full border border-blue-500/30 bg-white/5 transition-all duration-200 hover:text-white hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-[0_0_14px_rgba(59,130,246,0.35)]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
