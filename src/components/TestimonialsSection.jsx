
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "BrightPath Solutions",
    review:
      "Their strategic approach helped us improve our business operations and achieve meaningful growth. The team was professional, responsive, and committed to our success.",
    rating: 5,
    initials: "SM",
  },
  {
    id: 2,
    name: "James Anderson",
    role: "Chief Executive Officer",
    company: "Nexa Digital",
    review:
      "Working with this team was an excellent experience. Their innovative thinking and attention to detail helped us develop solutions that delivered real business value.",
    rating: 5,
    initials: "JA",
  },
  {
    id: 3,
    name: "Emily Roberts",
    role: "Business Consultant",
    company: "Global Ventures",
    review:
      "The quality of service exceeded our expectations. Their expertise, communication, and understanding of our goals made the entire process smooth and productive.",
    rating: 5,
    initials: "ER",
  },
  {
    id: 4,
    name: "Michael Carter",
    role: "Operations Manager",
    company: "Prime Business Group",
    review:
      "They brought fresh ideas and practical strategies to our project. We appreciated their dedication, professionalism, and ability to turn challenges into opportunities.",
    rating: 5,
    initials: "MC",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useGSAP(
    () => {
      if (
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
      ) {
        return;
      }

      gsap.from(".testimonials-animate", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
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
      className="testimonials-section"
      id="home-testimonials"
      ref={sectionRef}
    >
      <div className="container testimonials-layout">
        <div className="testimonials-intro testimonials-animate">
          <span className="section-eyebrow">
            CLIENT TESTIMONIALS
          </span>

          <h2 className="section-title">
            What Our Clients Say About Us.
          </h2>

          <p>
            Discover how our solutions and services
            have helped businesses move forward.
          </p>

          <div className="testimonials-navigation">
            <button
              ref={prevRef}
              className="testimonial-nav-btn"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={21} />
            </button>

            <button
              ref={nextRef}
              className="testimonial-nav-btn"
              aria-label="Next testimonial"
            >
              <ArrowRight size={21} />
            </button>
          </div>
        </div>

        <div className="testimonials-slider testimonials-animate">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <article className="testimonial-card">
                  <Quote
                    size={36}
                    className="testimonial-quote"
                    strokeWidth={1.5}
                  />

                  <div
                    className="testimonial-stars"
                    aria-label={`${item.rating} out of 5 stars`}
                  >
                    {Array.from(
                      { length: item.rating },
                      (_, index) => (
                        <Star
                          key={index}
                          size={17}
                          fill="currentColor"
                        />
                      )
                    )}
                  </div>

                  <p className="testimonial-review">
                    “{item.review}”
                  </p>

                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      {item.initials}
                    </div>

                    <div>
                      <h3>{item.name}</h3>
                      <span>
                        {item.role}
                      </span>
                      <small>{item.company}</small>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
