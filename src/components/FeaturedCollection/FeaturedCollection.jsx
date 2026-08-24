import "./FeaturedCollection.css";
import girlimage from "../../assets/file_0000000004d08211876bea424e681a3b.png";

const collections = [
  {
    id: "01",
    category: "FOOTWEAR",
    name: "Velora Air X",
    price: "$189",
    image:
      "https://images.unsplash.com/photo-1747691875590-14db938e42d4?auto=format&fit=crop&w=1600&q=90",
  },
  {
    id: "02",
    category: "APPAREL",
    name: "Velora Studio",
    price: "$149",
    image: girlimage,
  },
  {
    id: "03",
    category: "ESSENTIALS",
    name: "Velora Carry",
    price: "$89",
    image:
      "https://images.unsplash.com/photo-1622560481979-f5b0174242a0?auto=format&fit=crop&w=1600&q=90",
  },
];

function FeaturedCollection() {
  return (
    <section className="featured-section" id="collections">
      <div className="featured-heading">
        <div>
          <p className="featured-eyebrow">/ 01 — FEATURED</p>

          <h2>
            CURATED
            <span>COLLECTION.</span>
          </h2>
        </div>

        <p className="featured-description">
          Discover carefully selected pieces designed around modern movement and
          timeless style.
        </p>
      </div>

      <div className="featured-grid">
        {collections.map((item) => (
          <article className="featured-card" key={item.id}>
            <div className="featured-image">
              <img src={item.image} alt={item.name} />

              <div className="featured-overlay"></div>

              <span className="featured-number">{item.id}</span>

              <button
                className="featured-arrow"
                aria-label={`View ${item.name}`}
              >
                ↗
              </button>
            </div>

            <div className="featured-info">
              <div>
                <p>{item.category}</p>

                <h3>{item.name}</h3>
              </div>

              <strong>{item.price}</strong>
            </div>
          </article>
        ))}
      </div>

      <div className="featured-footer">
        <span>03 SELECTED PIECES</span>

        <button>
          VIEW ALL COLLECTION
          <span>↗</span>
        </button>
      </div>
    </section>
  );
}

export default FeaturedCollection;
