import { useEffect, useRef, useState } from "react";
import "./Trending.css";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const arrivals = [
  {
    id: "01",
    tag: "NEW ARRIVAL",
    category: "ESSENTIAL",
    name: "Velora Motion Jacket",
    price: "$249",
    description:
      "Technical comfort with a refined silhouette built for everyday movement.",
    cta: "View jacket",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1400&q=90",
  },

  {
    id: "02",
    tag: "TRENDING NOW",
    category: "FOOTWEAR",
    name: "Velora Drift",
    price: "$189",
    description:
      "A lightweight statement piece designed to move effortlessly with you.",
    cta: "View sneaker",
    image:
      "https://images.unsplash.com/photo-1747691875590-14db938e42d4?auto=format&fit=crop&w=1600&q=90",
  },

  {
    id: "03",
    tag: "LIMITED DROP",
    category: "STREET EDIT",
    name: "Velora Utility Bag",
    price: "$129",
    description:
      "Functional storage, clean proportions and premium everyday materials.",
    cta: "View bag",
    image:
      "https://images.unsplash.com/photo-1622560481156-01fc7e1693e6?auto=format&fit=crop&w=1600&q=90",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Trending() {
  const sectionRef = useRef(null);
  const railFillRef = useRef(null);
  const cardRefs = useRef([]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const fill = railFillRef.current;
    if (!section || !fill) return;

    let ticking = false;

    const update = () => {
      ticking = false;

      const rect = section.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = rect.height - viewportH;
      const scrolled = -rect.top;

      const progress =
        total > 0 ? Math.min(1, Math.max(0, scrolled / total)) : 0;

      fill.style.transform = `scaleY(${progress})`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="trending-section" ref={sectionRef} id="trending">
      <div className="trending-header">
        <div>
          <p className="trending-eyebrow">/ 03 — NEW ARRIVALS</p>

          <h2>
            WHAT&rsquo;S
            <span>NEW.</span>
          </h2>
        </div>

        <p className="trending-description">
          Fresh pieces selected for the new season. Explore what is moving the
          VELORA collection forward.
        </p>
      </div>

      <div className="trending-body">
        <nav className="trending-rail" aria-label="Arrivals index">
          <div className="rail-track">
            <div className="rail-fill" ref={railFillRef} />
          </div>

          <ul>
            {arrivals.map((item, i) => (
              <li
                key={item.id}
                className={i === activeIndex ? "is-active" : ""}
              >
                <span className="rail-index">{item.id}</span>
                <span className="rail-name">{item.name}</span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="trending-stack-wrapper">
          <ScrollStack
            itemDistance={140}
            itemScale={0}
            itemStackDistance={24}
            stackPosition="12%"
            scaleEndPosition="10%"
            baseScale={1}
            rotationAmount={0}
            blurAmount={0}
            useWindowScroll={true}
          >
            {arrivals.map((item, i) => (
              <ScrollStackItem key={item.id} itemClassName="velora-stack-item">
                <article
                  className="arrival-card"
                  ref={(el) => (cardRefs.current[i] = el)}
                  data-index={i}
                >
                  <div className="arrival-image">
                    <img src={item.image} alt={item.name} />

                    <div className="arrival-image-overlay" />

                    <span className="corner corner-tl" />
                    <span className="corner corner-tr" />
                    <span className="corner corner-bl" />
                    <span className="corner corner-br" />

                    <div className="arrival-top">
                      <span className="arrival-number">{item.id}</span>
                      <span className="arrival-tag">{item.tag}</span>
                    </div>

                    <div className="arrival-watermark">VELORA</div>
                  </div>

                  <div className="arrival-content">
                    <div className="arrival-main">
                      <p>{item.category}</p>
                      <h3>{item.name}</h3>
                      <span className="arrival-description">
                        {item.description}
                      </span>
                    </div>

                    <div className="arrival-side">
                      <strong>{item.price}</strong>

                      <button type="button" className="arrival-cta">
                        <span>{item.cta}</span>
                        <span className="btn-icon">
                          <ArrowIcon />
                        </span>
                      </button>
                    </div>
                  </div>
                </article>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>

      <div className="trending-footer">
        <span>NEW SEASON / 2026</span>

        <button type="button" className="footer-cta">
          SHOP ALL NEW ARRIVALS
          <span className="btn-icon">
            <ArrowIcon />
          </span>
        </button>
      </div>
    </section>
  );
}

export default Trending;
