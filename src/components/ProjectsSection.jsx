
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    category: "CONNECT",
    title: "Event Management Platform",
    image: "/images/project-1.jpg",
  },
  {
    id: "02",
    category: "EMPOWER",
    title: "Digital Marketing Campaign",
    image: "/images/project-2.jpg",
  },
  {
    id: "03",
    category: "SUPPORT",
    title: "Interactive Learning Platform",
    image: "/images/project-3.jpg",
  },
  {
    id: "04",
    category: "BUSINESS",
    title: "Environmental Impact Dashboard",
    image: "/images/project-4.jpg",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
      ) {
        return;
      }

      gsap.from(".projects-animate", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      className="projects-section"
      id="home-projects"
      ref={sectionRef}
    >
      <div className="container projects-layout">
        <div className="projects-intro projects-animate">
          <div>
            <span className="section-eyebrow">
              PROUD PROJECTS
            </span>

            <h2 className="section-title">
              Breaking Boundaries, Building Dreams.
            </h2>

            <p className="projects-description">
              We work closely with our clients to
              understand their unique needs and craft
              tailored solutions that address challenges.
            </p>
          </div>

          <a
            href="#projects-grid"
            className="projects-more"
          >
            Explore Projects
            <ArrowUpRight size={19} />
          </a>
        </div>

        <div className="projects-grid" id="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card projects-animate"
              key={project.id}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
                <span className="project-index">
                  {project.id}
                </span>
              </div>

              <div className="project-info">
                <div>
                  <span className="project-category">
                    {project.category}
                  </span>
                  <h3>{project.title}</h3>
                </div>

                <span
                  className="project-arrow"
                  aria-hidden="true"
                >
                  <ArrowUpRight size={22} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
