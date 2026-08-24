import { useState } from "react";
import girlimageimages from "../../assets/file_00000000331c8211b25b02616709a1b4.png";
import "./Hero.css";

const products = [
  {
    id: 1,
    category: "01 / FOOTWEAR",
    name: "Velora Air X",
    description: "Engineered for movement. Designed for the modern lifestyle.",
    price: "$189",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1600&q=90",
  },
  {
    id: 2,
    category: "02 / ESSENTIALS",
    name: "Velora Studio",
    description: "Minimal silhouettes crafted for everyday confidence.",
    price: "$149",
    image: girlimageimages,
  },
  {
    id: 3,
    category: "03 / COLLECTION",
    name: "Velora Motion",
    description: "Performance and luxury brought together in one design.",
    price: "$219",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 4,
    category: "04 / SIGNATURE",
    name: "Velora Core",
    description: "A refined essential built around timeless simplicity.",
    price: "$169",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=90",
  },
];

function Hero() {
  const [activeProduct, setActiveProduct] = useState(0);

  const nextProduct = () => {
    setActiveProduct((current) =>
      current === products.length - 1 ? 0 : current + 1,
    );
  };

  const previousProduct = () => {
    setActiveProduct((current) =>
      current === 0 ? products.length - 1 : current - 1,
    );
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background-text">VELORA</div>

      <div className="hero-top-label">
        <span>V / 2026</span>
        <span>THE NEW STANDARD</span>
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span></span>
          NEW COLLECTION
        </div>

        <h1 className="hero-title">
          THE NEW
          <span>STANDARD.</span>
        </h1>

        <p className="hero-description">
          Curated essentials engineered for those who move differently.
        </p>

        <div className="hero-actions">
          <button className="hero-primary-btn">
            Shop Collection
            <span>↗</span>
          </button>

          <button className="hero-secondary-btn">
            Discover
            <span>↓</span>
          </button>
        </div>

        <div className="hero-info">
          <span>DESIGNED FOR EVERYDAY</span>
          <span>CRAFTED WITH INTENT</span>
        </div>
      </div>

      <div className="hero-carousel-area">
        <div className="carousel-counter">
          <span className="current-number">
            {String(activeProduct + 1).padStart(2, "0")}
          </span>

          <span className="counter-line"></span>

          <span>{String(products.length).padStart(2, "0")}</span>
        </div>

        <div className="depth-carousel">
          {products.map((product, index) => {
            let position = index - activeProduct;

            if (position > 2) position -= products.length;
            if (position < -2) position += products.length;

            return (
              <article
                key={product.id}
                className={`carousel-card position-${position}`}
                onClick={() => setActiveProduct(index)}
              >
                <img src={product.image} alt={product.name} />

                <div className="image-overlay"></div>

                {position === 0 && (
                  <div className="carousel-product">
                    <p>{product.category}</p>

                    <h2>{product.name}</h2>

                    <span>{product.price}</span>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="carousel-controls">
          <button onClick={previousProduct} aria-label="Previous product">
            ←
          </button>

          <button onClick={nextProduct} aria-label="Next product">
            →
          </button>
        </div>
      </div>

      <div className="hero-bottom">
        <span>SCROLL TO EXPLORE</span>

        <div className="scroll-line">
          <span></span>
        </div>

        <span>VELORA / 01</span>
      </div>
    </section>
  );
}

export default Hero;
