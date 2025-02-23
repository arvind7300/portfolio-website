import React from "react";
import "../styles/Contact.css";
import { FaWhatsapp, FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        {/* Left Side - Social Media Links */}
        <div className="contact-left">
          <h3>Connect with me:</h3>
          <div className="social-icons">
            <a href="https://wa.me/7300516296" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/in/arvind-kashyap-781b06212" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
              <FaLinkedin />
            </a>
            <a href="https://github.com/arvind7300" target="_blank" rel="noopener noreferrer" className="social-icon github">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/arvind_13_" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
              <FaInstagram />
            </a>
            <a href="mailto:123arvindkashyap@gmail.com" className="social-icon email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-right">
          <h3>Send me a message:</h3>
          <form>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="tel" name="phone" placeholder="Phone Number" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
