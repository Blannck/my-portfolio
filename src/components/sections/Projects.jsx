import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="projects-title text-3xl font-bold mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 bg-white/3 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all h-full flex flex-col">
              <img
                src="/pylon.png"
                alt="Pylon Energy Corporation project preview"
                className="w-full h-48 object-cover rounded-lg border border-blue-500/20 mb-4"
              />
              <h3 className="text-xl font-bold mb-2">
                Pylon Energy Corporation Website
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                A website for a solar panel company, built with React and
                Tailwind CSS. The website features a sleek and modern design,
                showcasing the company's solar panel products, services, and
                contact information. It is fully responsive and optimized for
                both desktop and mobile devices, providing an engaging user
                experience.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                {[
                  "React",
                  "Tailwind CSS",
                  "TypeScript",
                  "Node.js",
                  "MongoDB",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex flex-col items-start gap-1">
                <a
                  href="#a"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
                <a
                  href="#a"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Source →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/3 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all h-full flex flex-col">
              <img
                src="/cvshealth.png"
                alt="CVS Health redesign project preview"
                className="w-full h-48 object-cover rounded-lg border border-blue-500/20 mb-4"
              />
              <h3 className="text-xl font-bold mb-2">
                CVS Health Website Redesign
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Redesigning the CVS Health website to enhance user experience
                and modernize the interface. The project focuses on improving
                navigation, visual appeal, and accessibility while maintaining
                the brand's identity. Built with React and Tailwind CSS, the
                redesign aims to create a more engaging and user-friendly online
                presence for CVS Health.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                {[
                  "React",
                  "Tailwind CSS",
                  "TypeScript",
                  "Node.js",
                  "MongoDB",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex flex-col items-start gap-1">
                <a
                  href="https://cvs-health-redesign.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/Blannck/cvs-health-redesign.git"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Source →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/3 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all h-full flex flex-col md:col-span-2">
              <img
                src="/ursal.png"
                alt="Ursal Rice Milling Services project preview"
                className="w-full h-56 object-cover object-[center_30%] rounded-lg border border-blue-500/20 mb-4"
              />
              <h3 className="text-xl font-bold mb-2">
                Ursal Rice Milling Services Website
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                A website for a local rice milling service, built with React and
                Tailwind CSS. It features a clean and modern design, showcasing
                the services offered, pricing, and contact information. The
                website is fully responsive and optimized for both desktop and
                mobile devices.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                {[
                  "React",
                  "Tailwind CSS",
                  "TypeScript",
                  "Node.js",
                  "MongoDB",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex flex-col items-start gap-1">
                <a
                  href="https://ursal-rice-milling-services.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
                <a
                  href="https://github.com/Blannck/Ursal-Rice-Milling-Services.git"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Source →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
