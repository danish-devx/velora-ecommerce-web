import { useEffect, useState } from "react";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { label: "All Products", value: "all" },
    { label: "Men", value: "mens-shirts" },
    { label: "Women", value: "womens-dresses" },
    { label: "Shoes", value: "mens-shoes" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        let url = "";

        if (activeCategory === "all") {
          url = "https://dummyjson.com/products?limit=8";
        } else {
          url = `https://dummyjson.com/products/category/${activeCategory}?limit=8`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data.products);
      } catch (error) {
        console.error(error);
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [activeCategory]);

  return (
    <section className="products-section" id="products">
      <div className="products-header">
        <div>
          <p className="products-eyebrow">/ 02 — SHOP THE EDIT</p>

          <h2>
            EXPLORE
            <span>PRODUCTS.</span>
          </h2>
        </div>

        <p className="products-description">
          A curated selection of everyday essentials, performance pieces and
          modern statement products.
        </p>
      </div>

      <div className="products-filter">
        {categories.map((category) => (
          <button
            key={category.value}
            className={
              activeCategory === category.value
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() => setActiveCategory(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {loading && (
        <div className="products-loading">
          <div className="loader"></div>

          <p>CURATING THE COLLECTION...</p>
        </div>
      )}

      {error && !loading && (
        <div className="products-error">
          <p>{error}</p>

          <button onClick={() => setActiveCategory(activeCategory)}>
            TRY AGAIN
          </button>
        </div>
      )}

      {!loading && !error && (
        <div className="products-grid">
          {products.map((product, index) => (
            <article className="product-card" key={product.id}>
              <div className="product-image">
                <span className="product-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="product-category">
                  {product.category.replace("-", " ")}
                </span>

                <img src={product.thumbnail} alt={product.title} />

                <button
                  className="quick-view"
                  aria-label={`Quick view ${product.title}`}
                >
                  QUICK VIEW
                  <span>↗</span>
                </button>
              </div>

              <div className="product-details">
                <div>
                  <h3>{product.title}</h3>

                  <div className="product-meta">
                    <span>★ {product.rating}</span>

                    <span>{product.stock} IN STOCK</span>
                  </div>
                </div>

                <div className="product-price">
                  <span>
                    $
                    {(
                      product.price -
                      (product.price * product.discountPercentage) / 100
                    ).toFixed(2)}
                  </span>

                  <del>${product.price}</del>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {!loading && !error && (
        <div className="products-footer">
          <span>{products.length} PRODUCTS DISPLAYED</span>

          <button>
            VIEW ALL PRODUCTS
            <span>↗</span>
          </button>
        </div>
      )}
    </section>
  );
}

export default Products;
