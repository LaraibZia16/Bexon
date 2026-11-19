
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, CalendarDays } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    id: 1,
    category: "BUSINESS",
    date: "October 12, 2026",
    title: "Building a Strong Business Strategy for Long-Term Growth",
    description:
      "Explore practical approaches to business planning, decision-making, and sustainable growth.",
    image: "/images/blog-1.jpg",
  },
  {
    id: 2,
    category: "INNOVATION",
    date: "October 20, 2026",
    title: "How Digital Innovation Is Changing Modern Businesses",
    description:
      "Discover how organizations can use technology and creative thinking to improve their operations.",
    image: "/images/blog-2.jpg",
  },
  {
    id: 3,
    category: "LEADERSHIP",
    date: "November 5, 2026",
    title: "Leadership Skills That Help Successful Teams Thrive",
    description:
      "Learn why communication, collaboration, and clear direction matter in business leadership.",
    image: "/images/blog-3.jpg",
  },
];

export default function BlogSection() {
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

      gsap.from(".blog-animate", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      className="blog-section"
      id="home-blog"
      ref={sectionRef}
    >
      <div className="container blog-layout">
        <div className="blog-intro blog-animate">
          <div>
            <span className="section-eyebrow">
              LATEST INSIGHTS
            </span>

            <h2 className="section-title">
              Explore Our Latest News & Insights.
            </h2>

            <p>
              Stay informed with ideas, industry trends,
              and practical advice for modern businesses.
            </p>
          </div>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article
              className="blog-card blog-animate"
              key={post.id}
            >
              <div className="blog-image">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                />

                <span className="blog-category">
                  {post.category}
                </span>
              </div>

              <div className="blog-content">
                <div className="blog-meta">
                  <CalendarDays size={16} />
                  <span>{post.date}</span>
                </div>

                <h3>{post.title}</h3>

                <p>{post.description}</p>

                <div className="blog-bottom">
                  <span>Latest Insights</span>

                  <span
                    className="blog-arrow"
                    aria-hidden="true"
                  >
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
