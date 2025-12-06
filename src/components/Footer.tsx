import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const CredlyIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.2 5.9l-6.2-3.4c-.8-.4-1.7-.4-2.5 0L5.3 5.9c-.8.4-1.3 1.3-1.3 2.2v7.8c0 .9.5 1.7 1.3 2.2l6.2 3.4c.8.4 1.7.4 2.5 0l6.2-3.4c.8-.4 1.3-1.3 1.3-2.2V8.1c0-.9-.5-1.7-1.3-2.2zm-8.2 11.6c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"/>
  </svg>
);

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/iamamrizejk',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/amrize-jk/',
  },
  {
    name: 'Credly',
    icon: CredlyIcon,
    url: 'https://www.credly.com/users/amrize-jk',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/being_reverie_07',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:iamamrizejk@gmail.com',
  }
];

const movieQuotes = [
  { text: "Don't ever let somebody tell you you can't do something", movie: "The Pursuit of Happyness" },
  { text: "Great men are not born great, they grow great.", movie: "The Godfather" },
  { text: "We used to look up at the sky and wonder at our place in the stars", movie: "Interstellar" },
  { text: "Our lives are defined by opportunities, even the ones we miss.", movie: "The Curious Case of Benjamin Button" },
  { text: "It’s what you do right now that makes a difference.", movie: "Black Hawk Down" },
  { text: "Man is defined by his choices.", movie: "The Matrix Reloaded"},
  { text: "Don’t let anyone ever make you feel like you don’t deserve what you want.", movie: "10 Things I Hate About You"},
  { text: "Why do we fall? So that we can learn to pick ourselves up.", movie: "Batman Begins"},
  { text: "You’re much stronger than you think you are. Trust me.", movie: "Man of Steel"},
  { text: "With great power comes great responsibility.", movie: "Spider-Man"},
  { text: "It’s not about how much we lost, it’s about how much we have left.", movie: "Avengers: Endgame"}
];

export const Footer = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % movieQuotes.length);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contact" className="relative border-t border-border py-12 px-4">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 mb-8">
          {/* Left side - Copyright & Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-sm text-muted-foreground mb-1">
              © {new Date().getFullYear()} Amrize
            </p>
            <p className="text-xs text-muted-foreground/70">
              Crafting digital experiences with passion
            </p>
          </motion.div>

          {/* Center - Rotating Movie Quotes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center min-h-[80px] flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuoteIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="px-4"
              >
                <p className="text-sm text-muted-foreground italic mb-2">
                  "{movieQuotes[currentQuoteIndex].text}"
                </p>
                <p className="text-xs text-muted-foreground/60">
                  — {movieQuotes[currentQuoteIndex].movie}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right side - Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-4 justify-center md:justify-end"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-border mb-6"
        />

        {/* Bottom - Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm gradient-text font-heading font-medium">
            Designed & Built by Amrize
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
