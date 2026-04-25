import { useRef, useEffect } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  const replayTimeoutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("visible");
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();

      if (replayTimeoutRef.current) {
        clearTimeout(replayTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleReplay = (event) => {
      const targetId = event.detail?.targetId;
      const currentSection = ref.current?.closest("section");

      if (!targetId || !currentSection || currentSection.id !== targetId) {
        return;
      }

      ref.current?.classList.add("nav-instant-hide");
      ref.current.classList.remove("visible");

      if (replayTimeoutRef.current) {
        clearTimeout(replayTimeoutRef.current);
      }

      // Remove the transitionless hide flag on the next frame, then replay the default reveal animation.
      requestAnimationFrame(() => {
        ref.current?.classList.remove("nav-instant-hide");

        replayTimeoutRef.current = setTimeout(() => {
          ref.current?.classList.add("visible");
          replayTimeoutRef.current = null;
        }, 180);
      });
    };

    window.addEventListener("reveal-section", handleReplay);

    return () => window.removeEventListener("reveal-section", handleReplay);
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};
