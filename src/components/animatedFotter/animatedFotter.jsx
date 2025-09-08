import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import "./animatedFotters.css";

export default function AnimatedFooter() {
  const links = [
    { icon: <Github />, href: "https://github.com/yourusername" },
    { icon: <Linkedin />, href: "https://linkedin.com/in/yourusername" },
    { icon: <Twitter />, href: "https://twitter.com/yourusername" },
    { icon: <Mail />, href: "mailto:youremail@example.com" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Animated heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          Let’s Connect
        </motion.h2>

        {/* Social icons with stagger animation */}
        <motion.div
          className="social-links"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: false }}
        >
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
