import "../styles/Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,   // 🔴 YOUR SERVICE ID 
       import.meta.env.VITE_EMAILJS_TEMPLATE_ID,    // 🔴 YOUR TEMPLATE ID
      formRef.current,
       import.meta.env.VITE_EMAILJS_PUBLIC_KEY     // 🔴 YOUR PUBLIC KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact-page">
      {/* TOP HEADER */}
      <div className="contact-hero">
        <h1>
          Get In <span>Touch</span>
        </h1>
        <p>
          Have a project in mind or want to collaborate? I'd love to hear from
          you. Let's create something amazing together!
        </p>
      </div>

      <div className="contact-container">
        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>Let's Start a Conversation</h2>
          <p>
            I'm always interested in new opportunities, interesting projects,
            and meeting new people. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>

          <div className="info-item">
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <div className="info-text">
              <span>Email</span>
              <a href="mailto:smadeshiya12345@gmail.com">
                smadeshiya12345@gmail.com
              </a>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FaPhoneAlt />
            </div>
            <div className="info-text">
              <span>Phone</span>
              <a href="tel:+917017225589">+91 8765614038</a>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="info-text">
              <span>Location</span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kadubesanhalli,+Bangalore"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bangalore, India
              </a>
            </div>
          </div>

          <div className="follow">
            <span>Follow me on</span>
            <div className="socials">
              <a href="https://github.com/shreya-mad" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/shreya-madeshiya-5064091b0/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/smadeshiya598"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <h3>Send me a message</h3>

          {/* 🔥 IMPORTANT: formRef + onSubmit */}
          <form ref={formRef} onSubmit={sendEmail}>
            <label>Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
            />

            <label>Email *</label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              required
            />

            <label>Subject *</label>
            <input
              type="text"
              name="subject"
              placeholder="What's this about?"
              required
            />

            <label>Message *</label>
            <textarea
              name="message"
              placeholder="Tell me about your project or just say hello..."
              required
            />

            <button type="submit">
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
