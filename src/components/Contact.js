import React, { useState } from "react";
import "../styles/Contact.css";
import { FaWhatsapp, FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  // Handle Phone Input Change
  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
    validateField("phone", value);
  };

  // Validation Function
  const validateField = (name, value) => {
    let errorMsg = "";
    
    if (name === "name") {
      const words = value.trim().split(/\s+/).length;
      if (words > 10) errorMsg = "Maximum 10 words allowed";
    }
    
    if (name === "phone") {
      const digitCount = value.replace(/\D/g, "").length;
      if (digitCount < 10 || digitCount > 15) {
        errorMsg = "Enter a valid phone number";
      }
    }
    
    
    if (name === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(value)) errorMsg = "Enter a valid email (e.g., example@gmail.com)";
    }
    
    if (name === "message") {
      if (value.trim().split(/\s+/).length > 1000) errorMsg = "Message must be under 1000 words";
    }

    setErrors({ ...errors, [name]: errorMsg });
  };

  // Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check if all fields are valid
    let hasError = false;
    Object.keys(formData).forEach((key) => {
      if (!formData[key] || errors[key]) {
        validateField(key, formData[key]);
        hasError = true;
      }
    });

    if (hasError) {
      setIsSubmitting(false);
      return;
    }

    // Email Sending Logic (FormSubmit API)
    const formURL = "https://formsubmit.co/123arvindkashyap@gmail.com"; // Replace with your email
    try {
      await fetch(formURL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      alert("Message sent successfully!");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      alert("Error sending message. Try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        {/* Left Side - Social Media Links */}
        <div className="contact-left">
          <h3>Connect with me:</h3>
          <div className="social-icons">
            <a href="https://wa.me/730516296" target="_blank" className="social-icon whatsapp">
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/in/arvind-kashyap-781b06212" target="_blank" className="social-icon linkedin">
              <FaLinkedin />
            </a>
            <a href="https://github.com/arvind7300" target="_blank" className="social-icon github">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/arvind_13_" target="_blank" className="social-icon instagram">
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
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            {errors.name && <span className="error">{errors.name}</span>}

            <PhoneInput country={"in"} value={formData.phone} onChange={handlePhoneChange} inputStyle={{ color: "black" }} />
            {errors.phone && <span className="error">{errors.phone}</span>}

            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            {errors.email && <span className="error">{errors.email}</span>}

            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
            {errors.message && <span className="error">{errors.message}</span>}

            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
