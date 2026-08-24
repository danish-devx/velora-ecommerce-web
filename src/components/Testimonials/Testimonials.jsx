import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Testimonials.css";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: "01",
    name: "Alex Morgan",
    role: "Creative Director",
    location: "London, UK",
    quote:
      "Velora feels like the future of everyday fashion. The design is minimal, but every detail feels intentional.",
    rating: "5.0",
    initials: "AM",
  },
  {
    id: "02",
    name: "Sofia Williams",
    role: "Digital Creator",
    location: "New York, USA",
    quote:
      "The comfort surprised me the most. It looks premium, feels effortless and works with almost everything.",
    rating: "4.9",
    initials: "SW",
  },
  {
    id: "03",
    name: "Daniel Carter",
    role: "Product Designer",
    location: "Berlin, Germany",
    quote:
      "Clean design, great materials and a completely different shopping experience. Velora gets the details right.",
    rating: "5.0",
    initials: "DC",
  },
];

function Testimonials() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  const current = testimonials[active];

  useEffect(() => {
    let ctx;

    const setupAnimations = () => {
      ctx = gsap.context(() => {
        gsap.from(".testimonial-header > *", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: ".testimonial-header",
            start: "top 90%",
            once: true,
          },
        });

        gsap.from(".testimonial-main", {
          y: 70,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: ".testimonial-main",
            start: "top 90%",
            once: true,
          },
        });

        gsap.from(".testimonial-small", {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: ".testimonial-list",
            start: "top 90%",
            once: true,
          },
        });

        ScrollTrigger.refresh();
      }, sectionRef);
    };

    if (document.readyState === "complete") {
      setupAnimations();
    } else {
      window.addEventListener("load", setupAnimations);
    }

    return () => {
      window.removeEventListener("load", setupAnimations);
      if (ctx) ctx.revert();
    };
  }, []);

  const changeTestimonial = (index) => {
    if (index === active) return;

    gsap.to(".testimonial-main-content", {
      opacity: 0,
      y: 15,
      duration: 0.2,
      onComplete: () => {
        setActive(index);

        gsap.fromTo(
          ".testimonial-main-content",
          {
            opacity: 0,
            y: -15,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "power3.out",
          },
        );
      },
    });
  };

  return (
    <section ref={sectionRef} className="testimonials" id="testimonials">
      <div className="testimonial-grid" />

      <div className="testimonial-glow" />

      <div className="testimonial-header">
        <span>/ 07 — CUSTOMER VOICES</span>

        <span>REAL PEOPLE / REAL EXPERIENCE</span>
      </div>

      <div className="testimonial-intro">
        <div>
          <span className="testimonial-label">THE VELORA EXPERIENCE</span>

          <h2>
            THEY
            <br />
            <span>SPEAK.</span>
          </h2>
        </div>

        <p>
          Great products should not only look different. They should feel
          different. Here's what the people wearing Velora have to say.
        </p>
      </div>

      <div className="testimonial-layout">
        <div className="testimonial-main">
          <div className="testimonial-main-top">
            <span>{current.id} / 03</span>

            <span className="testimonial-stars">★★★★★</span>
          </div>

          <div className="testimonial-main-content">
            <div className="quote-mark">“</div>

            <blockquote>{current.quote}</blockquote>

            <div className="testimonial-author">
              <div className="author-avatar">{current.initials}</div>

              <div>
                <strong>{current.name}</strong>

                <span>
                  {current.role} / {current.location}
                </span>
              </div>
            </div>
          </div>

          <div className="testimonial-main-bottom">
            <span>VERIFIED CUSTOMER</span>

            <span>{current.rating} / 5</span>
          </div>
        </div>

        <div className="testimonial-list">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              className={`testimonial-small ${
                active === index ? "active" : ""
              }`}
              onClick={() => changeTestimonial(index)}
            >
              <div className="small-number">{item.id}</div>

              <div className="small-info">
                <strong>{item.name}</strong>

                <span>{item.role}</span>
              </div>

              <span className="small-arrow">↗</span>
            </button>
          ))}
        </div>
      </div>

      <div className="testimonial-bottom">
        <div>
          <span>01</span>
          <strong>TRUSTED BY</strong>
        </div>

        <div className="testimonial-marquee">
          VELORA — DESIGN — MOTION — PERFORMANCE — VELORA — DESIGN — MOTION —
          PERFORMANCE —
        </div>

        <span>06 / 08</span>
      </div>
    </section>
  );
}

export default Testimonials;
