import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Footer.css";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-top > *", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-top",
          start: "top 85%",
        },
      });

      gsap.from(".footer-brand", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".footer-brand",
          start: "top 90%",
        },
      });

      gsap.from(".footer-column", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-links",
          start: "top 85%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-top">
        <div className="footer-index">
          <span>/ 10</span>
          <span>END OF THE LINE</span>
        </div>

        <div className="footer-top-message">
          <span>DESIGNED FOR</span>

          <strong>WHAT'S NEXT.</strong>
        </div>

        <button className="footer-top-button" onClick={scrollToTop}>
          BACK TO TOP
          <span>↑</span>
        </button>
      </div>

      <div className="footer-brand">VELORA</div>

      <div className="footer-links">
        <div className="footer-column">
          <span className="footer-column-title">EXPLORE</span>

          <a href="#home">Home</a>

          <a href="#collections">Collection</a>

          <a href="#trending">Trending</a>

          <a href="#about">About Velora</a>
        </div>

        <div className="footer-column">
          <span className="footer-column-title">SHOP</span>

          <a href="#products">Men</a>

          <a href="#products">Women</a>

          <a href="#products">Footwear</a>

          <a href="#products">Accessories</a>
        </div>

        <div className="footer-column">
          <span className="footer-column-title">CONNECT</span>

          <a href="#instagram">Instagram ↗</a>

          <a href="#facebook">Facebook ↗</a>

          <a href="#pinterest">Pinterest ↗</a>

          <a href="#tiktok">TikTok ↗</a>
        </div>

        <div className="footer-column footer-contact">
          <span className="footer-column-title">SAY HELLO</span>

          <a href="mailto:hello@velora.com">hello@velora.com</a>

          <p>
            Karachi
            <br />
            Pakistan
          </p>

          <span className="footer-status">● ONLINE / 24—7</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 VELORA®</span>

        <span>ALL RIGHTS RESERVED</span>

        <div className="footer-legal">
          <a href="#privacy">Privacy</a>

          <a href="#terms">Terms</a>
        </div>

        <span>VLR / 08</span>
      </div>
    </footer>
  );
}

export default Footer;
