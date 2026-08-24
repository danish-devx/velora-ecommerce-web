import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ProductSpotlight.css";

gsap.registerPlugin(ScrollTrigger);

function ProductSpotlight() {
  const sectionRef = useRef(null);
  const productRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const product = productRef.current;

    const ctx = gsap.context(() => {
      gsap.from(".spotlight-copy > *", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
        },
      });

      gsap.from(".spotlight-product", {
        y: 60,
        scale: 0.92,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      });

      gsap.from(".tech-point", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
        },
      });
    }, section);

    const moveProduct = (event) => {
      if (window.innerWidth <= 768) return;

      const rect = section.getBoundingClientRect();

      const x = (event.clientX - rect.left - rect.width / 2) * 0.025;

      const y = (event.clientY - rect.top - rect.height / 2) * 0.025;

      gsap.to(product, {
        x,
        y,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    const resetProduct = () => {
      gsap.to(product, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });
    };

    section.addEventListener("mousemove", moveProduct);
    section.addEventListener("mouseleave", resetProduct);

    return () => {
      section.removeEventListener("mousemove", moveProduct);
      section.removeEventListener("mouseleave", resetProduct);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="product-spotlight">
      <div className="spotlight-bg-text">VELOCITY</div>

      <div className="spotlight-header">
        <span>/ 04 — FEATURED PRODUCT</span>

        <span>VELORA / PERFORMANCE SERIES / 2026</span>
      </div>

      <div className="spotlight-grid">
        <div className="spotlight-copy">
          <span className="spotlight-eyebrow">ENGINEERED TO MOVE</span>

          <h2>
            VELOCITY
            <span>01.</span>
          </h2>

          <p className="spotlight-description">
            Precision-built for movement. A lightweight silhouette combining
            responsive comfort, premium materials and modern performance.
          </p>

          <div className="spotlight-meta">
            <div>
              <span>PRICE</span>
              <strong>$189</strong>
            </div>

            <div>
              <span>COLOR</span>
              <strong>ONYX / LIME</strong>
            </div>
          </div>

          <div className="spotlight-actions">
            <button className="spotlight-primary">
              ADD TO BAG
              <span>+</span>
            </button>

            <button className="spotlight-secondary">
              VIEW DETAILS
              <span>↗</span>
            </button>
          </div>
        </div>

        <div className="spotlight-visual">
          <div className="spotlight-grid-lines" />

          <div className="spotlight-orb" />

          <div ref={productRef} className="spotlight-product">
            <div className="product-shadow" />

            <img
              src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1600&q=90"
              alt="Velora Velocity"
            />
          </div>

          <div className="tech-point tech-point-one">
            <span>01</span>
            <p>FLEX CORE</p>
          </div>

          <div className="tech-point tech-point-two">
            <span>02</span>
            <p>ULTRA LIGHT</p>
          </div>

          <div className="tech-point tech-point-three">
            <span>03</span>
            <p>AIR FLOW</p>
          </div>

          <div className="product-index">01 / 03</div>

          <div className="product-caption">VELOCITY / PERFORMANCE</div>
        </div>
      </div>

      <div className="spotlight-specs">
        <div className="spec-item">
          <span>01</span>
          <div>
            <strong>ULTRA LIGHTWEIGHT</strong>
            <p>280G CONSTRUCTION</p>
          </div>
        </div>

        <div className="spec-item">
          <span>02</span>
          <div>
            <strong>RESPONSIVE COMFORT</strong>
            <p>FLEX CORE SYSTEM</p>
          </div>
        </div>

        <div className="spec-item">
          <span>03</span>
          <div>
            <strong>PREMIUM MATERIAL</strong>
            <p>PERFORMANCE MESH</p>
          </div>
        </div>

        <div className="spec-item">
          <span>04</span>
          <div>
            <strong>LIMITED EDITION</strong>
            <p>VELORA / 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSpotlight;
