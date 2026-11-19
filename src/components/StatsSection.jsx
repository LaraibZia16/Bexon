
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BriefcaseBusiness,
  UsersRound,
  Trophy,
  Clock3,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: 250,
    suffix: "+",
    label: "Projects Completed",
    icon: BriefcaseBusiness,
  },
  {
    value: 180,
    suffix: "+",
    label: "Happy Clients",
    icon: UsersRound,
  },
  {
    value: 25,
    suffix: "+",
    label: "Industry Awards",
    icon: Trophy,
  },
  {
    value: 15,
    suffix: "+",
    label: "Years of Experience",
    icon: Clock3,
  },
];

export default function StatsSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const counters = gsap.utils.toArray(".stat-number");

      if (
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
      ) {
        return;
      }

      counters.forEach((counter) => {
        const target = Number(counter.dataset.target);
        const value = { count: 0 };

        gsap.to(value, {
          count: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            counter.textContent = Math.round(
              value.count
            ).toLocaleString();
          },
        });
      });

      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="container stats-layout">
        <div className="stats-heading">
          <span className="section-eyebrow">
            OUR ACHIEVEMENTS
          </span>

          <h2 className="section-title">
            Numbers That Reflect Our Commitment.
          </h2>

          <p>
            Our dedication to quality, innovation, and
            client satisfaction drives everything we do.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div className="stat-card" key={stat.label}>
                <Icon
                  size={34}
                  strokeWidth={1.6}
                  className="stat-icon"
                />

                <div className="stat-value">
                  <span
                    className="stat-number"
                    data-target={stat.value}
                  >
                    {stat.value}
                  </span>
                  <span>{stat.suffix}</span>
                </div>

                <p>{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
