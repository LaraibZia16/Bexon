
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  ChartNoAxesCombined,
  Lightbulb,
  BriefcaseBusiness,
  ShieldCheck,
  MonitorSmartphone,
  Target,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Business Strategy",
    description:
      "Helping organizations create effective strategies for sustainable business growth.",
    icon: ChartNoAxesCombined,
  },
  {
    number: "02",
    title: "Creative Solutions",
    description:
      "Developing innovative ideas and practical solutions for modern business challenges.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Business Consulting",
    description:
      "Providing expert guidance to improve operations, planning, and decision-making.",
    icon: BriefcaseBusiness,
  },
  {
    number: "04",
    title: "Risk Management",
    description:
      "Identifying business risks and building strategies for greater stability.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Digital Transformation",
    description:
      "Helping businesses adopt modern digital tools and improve their online presence.",
    icon: MonitorSmartphone,
  },
  {
    number: "06",
    title: "Growth Planning",
    description:
      "Creating clear business goals and actionable plans for long-term success.",
    icon: Target,
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) return;

      gsap.from(".services-heading-animate", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
      });

      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 85%",
          once: true,
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      className="services-section"
      id="home-services"
      ref={sectionRef}
    >
      <div className="container services-layout">
        <div className="services-intro">
          <span className="section-eyebrow services-heading-animate">
            OUR SERVICES
          </span>

          <h2 className="section-title services-heading-animate">
            Professional Solutions for Your Business.
          </h2>

          <p className="services-description services-heading-animate">
            We provide strategic and innovative services
            designed to help businesses overcome challenges
            and achieve their goals.
          </p>

          <Link
            to="/services"
            className="services-all-link services-heading-animate"
          >
            Explore All Services
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className="service-card"
                key={service.number}
              >
                <div className="service-card-top">
                  <div className="service-icon">
                    <Icon size={29} strokeWidth={1.7} />
                  </div>

                  <span className="service-number">
                    {service.number}
                  </span>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <Link
                  to="/services"
                  className="service-card-link"
                  aria-label={`Explore ${service.title}`}
                >
                  <ArrowUpRight size={21} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
