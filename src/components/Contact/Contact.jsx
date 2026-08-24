import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-header > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-header",
          start: "top 85%",
        },
      });

      gsap.from(".contact-copy", {
        x: -50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-layout",
          start: "top 80%",
        },
      });

      gsap.from(".contact-form", {
        x: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-layout",
          start: "top 80%",
        },
      });

      gsap.from(".contact-info-item", {
        y: 25,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-info",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="contact-section" id="contact">
      <div className="contact-grid"></div>

      <div className="contact-glow"></div>

      <div className="contact-header">
        <span>/ 08 — CONTACT</span>

        <span>LET'S START SOMETHING</span>
      </div>

      <div className="contact-layout">
        <div className="contact-copy">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h2>
            LET'S
            <br />
            <span>TALK.</span>
          </h2>

          <p>
            Have a question, an idea or simply want to say hello? We'd love to
            hear from you.
          </p>

          <div className="contact-info">
            <div className="contact-info-item">
              <span className="contact-info-number">01</span>

              <div>
                <small>EMAIL</small>

                <strong>hello@velora.com</strong>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-number">02</span>

              <div>
                <small>LOCATION</small>

                <strong>London / New York / Worldwide</strong>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-number">03</span>

              <div>
                <small>RESPONSE TIME</small>

                <strong>Usually within 24 hours</strong>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading">
            <span>SEND A MESSAGE</span>

            <span>VLR / 010</span>
          </div>

          <div className="form-group">
            <label htmlFor="name">01 / YOUR NAME</label>

            <input id="name" type="text" placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">02 / EMAIL ADDRESS</label>

            <input id="email" type="email" placeholder="you@example.com" />
          </div>

          <div className="form-group">
            <label htmlFor="subject">03 / SUBJECT</label>

            <input
              id="subject"
              type="text"
              placeholder="What can we help with?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">04 / MESSAGE</label>

            <textarea
              id="message"
              rows="5"
              placeholder="Tell us what's on your mind..."
            ></textarea>
          </div>

          <button type="submit" className="contact-submit">
            <span>SEND MESSAGE</span>

            <span>↗</span>
          </button>

          <p className="form-note">
            By sending this message, you agree to our communication policy.
          </p>
        </form>
      </div>

      <div className="contact-bottom">
        <span>VELORA / CUSTOMER CARE</span>

        <div>
          AVAILABLE
          <span></span>
        </div>

        <span>/ 2026</span>
      </div>
    </section>
  );
}

export default Contact;
