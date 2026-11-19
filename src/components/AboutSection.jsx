
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".about-animate", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        y: 45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="container about-grid">
        <div className="about-image-wrap about-animate">
          <img
            src="/images/about-business.jpg"
            alt="Business professionals collaborating"
            className="about-image"
          />

          <div className="about-experience">
            <strong>15+</strong>
            <span>Years of Experience</span>
          </div>
        </div>

        <div className="about-content">
          <span className="section-eyebrow about-animate">
            ABOUT OUR COMPANY
          </span>

          <h2 className="section-title about-animate">
            We Build Stronger Businesses Through
            Smart Solutions.
          </h2>

          <p className="about-description about-animate">
            We help organizations achieve meaningful growth
            through strategic thinking, innovative solutions,
            and a commitment to long-term success.
          </p>

          <div className="about-features about-animate">
            <div>
              <CheckCircle2 size={21} />
              <span>Experienced Business Professionals</span>
            </div>

            <div>
              <CheckCircle2 size={21} />
              <span>Innovative Growth Strategies</span>
            </div>

            <div>
              <CheckCircle2 size={21} />
              <span>Reliable Client-Focused Solutions</span>
            </div>
          </div>

          <Link to="/about" className="hero-button about-animate">
            More About Us
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </div>
    </section>
  );
}
