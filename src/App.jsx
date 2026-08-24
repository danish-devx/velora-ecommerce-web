import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import FeaturedCollection from "./components/FeaturedCollection/FeaturedCollection";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import Products from "./components/Products/Products";
import ProductSpotlight from "./components/ProductSpotlight/ProductSpotlight";
import Testimonials from "./components/Testimonials/Testimonials";
import Trending from "./components/Trending/Trending";
import WhyVelora from "./components/WhyVelora/WhyVelora";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <Products />
      <Trending />
      <ProductSpotlight />
      <WhyVelora />
      <About />
      <Testimonials />
      <Contact />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
