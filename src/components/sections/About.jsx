import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "React",
    "TypeScript",
  ];
  const backendSkills = [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "MySQL",
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <h2 className="about-title text-3xl font-bold mb-8 text-center">
            About Me
          </h2>
          <div className="rounded-xl p-6 md:p-8 border-white/10 border bg-white/3 hover:-translate-y-1 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8 items-start">
              <div className="md:pr-4">
                <h3 className="text-xl font-bold mb-3 text-white">Who Am I?</h3>
                <p className="text-gray-300 leading-relaxed">
                  A 3rd year Computer Science student at Ateneo de Davao
                  University, I have a strong passion for frontend development
                  and design. I enjoy creating visually appealing and
                  user-friendly websites that provide seamless experiences. I am
                  eager to contribute my creativity and technical expertise to
                  build innovative web applications that make a positive impact.
                </p>
                <h3 className="text-xl font-bold mt-6 mb-4 text-white">
                  Specialization
                </h3>
                <div className="grid grid-cols-1 gap-6 border-t border-white/10 pt-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {frontendSkills.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {backendSkills.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-sm mx-auto md:mx-0 md:justify-self-end md:self-start">
                <img
                  src="/resume photo.png"
                  alt="Lae Portillo"
                  className="w-full aspect-4/5 object-cover rounded-xl border border-blue-500/30 shadow-[0_8px_24px_rgba(59,130,246,0.2)]"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 items-stretch">
            <div className="p-6 rounded-xl border-white/10 border bg-white/3 hover:-translate-y-1 transition-all h-full">
              <h3 className="text-xl font-bold mb-5 tracking-wide">
                🏫 Education
              </h3>
              <ul className="space-y-4 text-gray-200">
                <li className="rounded-lg border border-white/8 bg-white/2 px-4 py-3">
                  <p className="font-semibold leading-snug text-white">
                    Ateneo de Davao University Grade School
                  </p>
                  <p className="text-sm text-gray-400 mt-1">2010 - 2016</p>
                </li>
                <li className="rounded-lg border border-white/8 bg-white/2 px-4 py-3">
                  <p className="font-semibold leading-snug text-white">
                    Ateneo de Davao University High School
                  </p>
                  <p className="text-sm text-gray-400 mt-1">2016 - 2020</p>
                </li>
                <li className="rounded-lg border border-white/8 bg-white/2 px-4 py-3">
                  <p className="font-semibold leading-snug text-white">
                    STEM Pre-Engineering and Architecture
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    Ateneo de Davao University
                  </p>
                  <p className="text-sm text-gray-400 mt-1">2020 - 2022</p>
                </li>
                <li className="rounded-lg border border-white/8 bg-white/2 px-4 py-3">
                  <p className="font-semibold leading-snug text-white">
                    Bachelor of Science in Computer Science
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    Ateneo de Davao University
                  </p>
                  <p className="text-sm text-gray-400 mt-1">2022 - Present</p>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border bg-white/3 hover:-translate-y-1 transition-all h-full">
              <h3 className="text-xl font-bold mb-5 tracking-wide">
                💻 Work Experience
              </h3>
              <div className="space-y-4 text-gray-200">
                <article className="rounded-lg border border-white/8 bg-white/2 px-4 py-3">
                  <h4 className="font-semibold leading-snug text-white">
                    Frontend Developer
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">2024 - 2025</p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-gray-300">
                    Developed a web page for Pylon Energy Corporation showing
                    key details about the company, projects, and team members.
                  </p>
                </article>
                <article className="rounded-lg border border-white/8 bg-white/2 px-4 py-3">
                  <h4 className="font-semibold leading-snug text-white">
                    Frontend Developer
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">2024 - 2025</p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-gray-300">
                    Developed a fully responsive and interactive website for an
                    Application Development project redesigning the existing CVS
                    Health website.
                  </p>
                </article>
                <article className="rounded-lg border border-white/8 bg-white/2 px-4 py-3">
                  <h4 className="font-semibold leading-snug text-white">
                    Frontend and Backend Developer
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">2024 - 2025</p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-gray-300">
                    Developed a full-stack web application with a working
                    e-commerce system for Ursal Rice Milling Services.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
