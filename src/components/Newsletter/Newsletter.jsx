import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Newsletter.css";

gsap.registerPlugin(ScrollTrigger);

function Newsletter() {
  const sectionRef = useRef(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".newsletter-eyebrow", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".newsletter-content",
          start: "top 80%",
        },
      });

      gsap.from(".newsletter-title-line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".newsletter-title",
          start: "top 80%",
        },
      });

      gsap.from(".newsletter-description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".newsletter-form",
          start: "top 85%",
        },
      });

      gsap.from(".newsletter-form", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".newsletter-form",
          start: "top 85%",
        },
      });

      gsap.from(".newsletter-orbit", {
        scale: 0.5,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".newsletter-visual",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Enter your email address.");
      return;
    }

    setMessage("You're on the list.");
    setEmail("");
  };

  return (
    <section ref={sectionRef} className="newsletter">
      <div className="newsletter-grid" />

      <div className="newsletter-glow" />

      <div className="newsletter-header">
        <span>/ 09 — STAY IN MOTION</span>

        <span>VELORA / FUTURE GOODS</span>
      </div>

      <div className="newsletter-content">
        <div className="newsletter-eyebrow">
          <span className="eyebrow-dot" />
          JOIN THE MOVEMENT
        </div>

        <div className="newsletter-title">
          <span className="newsletter-title-line">STAY</span>

          <span className="newsletter-title-line">
            AHEAD<span>.</span>
          </span>
        </div>

        <p className="newsletter-description">
          Get first access to new collections, limited releases and everything
          happening next at Velora.
        </p>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">
            <span>JOIN</span>
            <span>↗</span>
          </button>
        </form>

        {message && <p className="newsletter-message">{message}</p>}

        <div className="newsletter-note">
          <span>NO SPAM. JUST VELORA.</span>

          <span>UNSUBSCRIBE ANYTIME.</span>
        </div>
      </div>

      <div className="newsletter-visual">
        <div className="newsletter-orbit orbit-one" />

        <div className="newsletter-orbit orbit-two" />

        <div className="newsletter-orbit orbit-three" />

        <div className="newsletter-core">
          <span>V</span>
        </div>

        <div className="visual-label visual-top">VLR / 07</div>

        <div className="visual-label visual-bottom">ALWAYS FORWARD</div>
      </div>

      <div className="newsletter-bottom">
        <span>VELORA®</span>

        <span>DESIGNING WHAT'S NEXT</span>

        <span>07 / 08</span>
      </div>
    </section>
  );
}

export default Newsletter;
