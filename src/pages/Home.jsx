
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import StatsSection from "../components/StatsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BlogSection from "../components/BlogSection";
import CTASection from "../components/CTASection";

export default function Home() {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".hero-animate", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power2.out",
      });
    },
    { scope: heroRef }
  );

  return (
    <>
      {/* HERO SECTION */}
      <section className="bexon-hero" ref={heroRef}>
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="hero-eyebrow hero-animate">
              CHOOSE THE BEST
            </span>

            <h1 className="hero-animate">
              Empowering Business with Expertise.
            </h1>

            <p className="hero-description hero-animate">
              We help businesses grow through innovative
              strategies, expert guidance, and meaningful
              solutions built for long-term success.
            </p>

            <Link
              to="/services"
              className="hero-button hero-animate"
            >
              Explore Our Services
              <ArrowUpRight size={19} />
            </Link>
          </div>


          <div className="hero-visual hero-animate">
            <img
              src="/images/hero-business.png"
              alt="Business consulting team collaborating in a modern office"
              className="hero-image"
              fetchPriority="high"
            />

            <div className="hero-visual-inner">
              <span>BUSINESS CONSULTING</span>
              <strong>Ideas. Strategy. Growth.</strong>
              <p>Building a stronger future together.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <StatsSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
    </>
  );
}
