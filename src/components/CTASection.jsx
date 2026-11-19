
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, MoveRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) return;

      gsap.from(".cta-animate", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      className="cta-section"
      id="home-cta"
      ref={sectionRef}
    >
      <div className="container">
        <div className="cta-layout">
          <div className="cta-content">
            <span className="cta-eyebrow cta-animate">
              LET'S WORK TOGETHER
            </span>

            <h2 className="cta-title cta-animate">
              Have a Project in Mind?
              <span> Let's Make It Happen.</span>
            </h2>

            <p className="cta-description cta-animate">
              Every great business starts with a bold idea.
              Let's discuss your goals and explore how the
              right strategy can turn your vision into
              meaningful results.
            </p>
          </div>

          <div className="cta-actions cta-animate">
            <Link to="/contact" className="cta-button">
              Get in Touch
              <ArrowUpRight size={21} />
            </Link>

            <div className="cta-note">
              <MoveRight size={20} />
              <span>
                Your next opportunity starts here.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
