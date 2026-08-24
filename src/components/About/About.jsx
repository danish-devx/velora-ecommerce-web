import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-header > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-header",
          start: "top 85%",
        },
      });

      gsap.from(".about-copy", {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-copy",
          start: "top 80%",
        },
      });

      gsap.from(".about-visual", {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-visual",
          start: "top 80%",
        },
      });

      gsap.from(".about-stat", {
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-stats",
          start: "top 85%",
        },
      });

      gsap.to(".about-orbit", {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about-section" id="about">
      <div className="about-grid"></div>

      <div className="about-glow"></div>

      <div className="about-header">
        <span>/ 06 — ABOUT VELORA</span>

        <span>BUILT FOR THE EVERYDAY</span>
      </div>

      <div className="about-layout">
        <div className="about-copy">
          <span className="about-eyebrow">MORE THAN CLOTHING</span>

          <h2>
            WE MAKE
            <br />
            <span>EVERYDAY</span>
            <br />
            MATTER.
          </h2>

          <p className="about-lead">
            Velora is an independent fashion label built around one simple idea
            — everyday pieces should never feel ordinary.
          </p>

          <p className="about-description">
            We combine considered design, premium materials and modern
            silhouettes to create products that move naturally with you. No
            unnecessary noise. No compromise on detail. Just thoughtful design
            made for everyday life.
          </p>

          <div className="about-signature">
            <span>VELORA / EST. 2026</span>

            <span className="signature-line"></span>

            <span>DESIGNED WITH INTENT</span>
          </div>
        </div>

        <div className="about-visual">
          <div className="about-frame">
            <div className="about-frame-top">
              <span>VLR / 001</span>
              <span>STUDIO OBJECT</span>
            </div>

            <div className="about-orbit">
              <div className="orbit-ring"></div>

              <div className="orbit-dot"></div>

              <div className="orbit-text">
                VELORA — DESIGN — MOTION — QUALITY —
              </div>
            </div>

            <div className="about-center">
              <span className="center-small">THE</span>

              <strong>V</strong>

              <span className="center-small">VELORA</span>
            </div>

            <div className="about-frame-bottom">
              <span>01</span>

              <span>OBJECT / EVERYDAY</span>

              <span>26</span>
            </div>
          </div>

          <div className="about-floating-card">
            <span>OUR APPROACH</span>

            <strong>
              LESS,
              <br />
              BUT BETTER.
            </strong>

            <span className="floating-arrow">↗</span>
          </div>
        </div>
      </div>

      <div className="about-stats">
        <div className="about-stat">
          <span className="stat-number">01</span>

          <strong>PURPOSE</strong>

          <p>Every piece begins with a reason to exist.</p>
        </div>

        <div className="about-stat">
          <span className="stat-number">02</span>

          <strong>QUALITY</strong>

          <p>Materials selected for comfort and longevity.</p>
        </div>

        <div className="about-stat">
          <span className="stat-number">03</span>

          <strong>SIMPLICITY</strong>

          <p>Clean design without unnecessary details.</p>
        </div>

        <div className="about-stat">
          <span className="stat-number">04</span>

          <strong>MOVEMENT</strong>

          <p>Designed to live beyond a single occasion.</p>
        </div>
      </div>

      <div className="about-bottom">
        <span>OUR PHILOSOPHY</span>

        <div>
          DESIGN SHOULD FEEL
          <span>EFFORTLESS.</span>
        </div>

        <span>/ 2026</span>
      </div>
    </section>
  );
}

export default About;
