import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import Login from "./components/Login/Login";

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
  const [session, setSession] = useState(null);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    const getInitialSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setSession(session);
      setCheckingSession(false);
    };

    getInitialSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (checkingSession) {
    return (
      <div className="velora-loading">
        <span>VELORA.</span>
      </div>
    );
  }

  if (!session) {
    return <Login />;
  }

  return (
    <>
      <Navbar />

      <main>
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
      </main>

      <Footer />
    </>
  );
}

export default App;
