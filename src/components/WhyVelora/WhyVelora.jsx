import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WhyVelora.css";

gsap.registerPlugin(ScrollTrigger);

function WhyVelora() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-title-line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".why-heading",
          start: "top 80%",
        },
      });

      gsap.from(".why-description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-intro",
          start: "top 75%",
        },
      });

      gsap.from(".why-feature", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-features",
          start: "top 80%",
        },
      });

      gsap.from(".why-visual", {
        scale: 0.94,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-visual",
          start: "top 80%",
        },
      });

      gsap.from(".why-statement-text", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".why-statement",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="why-velora">
      <div className="why-noise" />

      <div className="why-glow why-glow-one" />
      <div className="why-glow why-glow-two" />

      <div className="why-grid" />

      <div className="why-header">
        <span>/ 05 — THE VELORA STANDARD</span>

        <span>DESIGNED DIFFERENTLY</span>
      </div>

      <div className="why-intro">
        <div className="why-heading">
          <span className="why-label">OUR PHILOSOPHY</span>

          <h2>
            <span className="why-title-line">DESIGNED</span>

            <span className="why-title-line why-accent">DIFFERENT.</span>
          </h2>
        </div>

        <p className="why-description">
          We believe the future of fashion is not about choosing between
          performance and design. It is about creating products where both
          become one.
        </p>
      </div>

      <div className="why-visual">
        <div className="why-visual-ring" />

        <div className="why-visual-content">
          <span>VELORA</span>

          <strong>FUTURE</strong>

          <small>PERFORMANCE / DESIGN / MOTION</small>
        </div>

        <div className="why-visual-corner top-left">05.01</div>

        <div className="why-visual-corner top-right">VLR / 2026</div>

        <div className="why-visual-corner bottom-left">SYSTEM 01</div>

        <div className="why-visual-corner bottom-right">↗</div>
      </div>

      <div className="why-features">
        <article className="why-feature">
          <div className="feature-number">01</div>

          <div className="feature-content">
            <span>DESIGN</span>

            <h3>
              PRECISION
              <br />
              FIRST.
            </h3>

            <p>
              Every line has a reason. Every detail has a purpose. Nothing
              unnecessary.
            </p>
          </div>

          <div className="feature-arrow">↗</div>
        </article>

        <article className="why-feature">
          <div className="feature-number">02</div>

          <div className="feature-content">
            <span>MATERIAL</span>

            <h3>
              BUILT
              <br />
              BETTER.
            </h3>

            <p>
              Premium materials selected for comfort, durability and everyday
              performance.
            </p>
          </div>

          <div className="feature-arrow">↗</div>
        </article>

        <article className="why-feature">
          <div className="feature-number">03</div>

          <div className="feature-content">
            <span>MOTION</span>

            <h3>
              MADE TO
              <br />
              MOVE.
            </h3>

            <p>
              Lightweight construction designed around the way you actually
              move.
            </p>
          </div>

          <div className="feature-arrow">↗</div>
        </article>

        <article className="why-feature">
          <div className="feature-number">04</div>

          <div className="feature-content">
            <span>FUTURE</span>

            <h3>
              ALWAYS
              <br />
              FORWARD.
            </h3>

            <p>We create today with tomorrow already in mind.</p>
          </div>

          <div className="feature-arrow">↗</div>
        </article>
      </div>

      <div className="why-statement">
        <span className="statement-label">/ VELORA PHILOSOPHY</span>

        <div className="why-statement-text">
          <span>DON'T FOLLOW</span>

          <span>THE NEXT MOVE.</span>

          <span className="statement-accent">DESIGN IT.</span>
        </div>

        <span className="statement-index">05 / 05</span>
      </div>
    </section>
  );
}

export default WhyVelora;
