import React from "react";
import "./contactSection.css";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function ContactSection() {
  const socials = [
    { icon: <Github size={22} />, href: "https://github.com/yourusername" },
    {
      icon: <Linkedin size={22} />,
      href: "https://linkedin.com/in/yourusername",
    },
    { icon: <Twitter size={22} />, href: "https://twitter.com/yourusername" },
    { icon: <Mail size={22} />, href: "mailto:your@email.com" },
  ];

  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2 className="contact-title">Let’s Connect</h2>
        <p className="contact-subtitle">
          Reach out via email or connect with me on social platforms.
        </p>

        <div className="social-icons">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
