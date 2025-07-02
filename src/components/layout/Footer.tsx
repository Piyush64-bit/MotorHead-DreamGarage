import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Piyush64-bit', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/piyush64bit', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/pii.yush', label: 'Instagram' },
  ];

  return (
    <footer className="bg-carbon-dark border-t border-neon-blue/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="racing-font text-xl neon-text">MOTORHEAD DREAM GARAGE</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              "It's not just a machine. It's an emotion."
              <br />
              A digital showroom for automotive passion by P I Y U $ H.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-orbitron font-bold text-white">Quick Links</h4>
            <div className="space-y-2">
              <a href="/garage" className="block text-gray-400 hover:text-neon-green transition-colors">
                My Garage
              </a>
              <a href="/history" className="block text-gray-400 hover:text-neon-green transition-colors">
                History of Speed
              </a>
              <a href="/blog" className="block text-gray-400 hover:text-neon-green transition-colors">
                Car Journal
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-orbitron font-bold text-white">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-carbon-light hover:bg-neon-blue/20 border border-neon-blue/30 hover:border-neon-blue transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-neon-blue" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Motorhead Dream Garage. Built with passion by P I Y U $ H.
            </p>
            <p className="text-gray-400 text-sm flex items-center mt-2 md:mt-0">
              Fueled by nitro
              <Heart className="w-4 h-4 ml-1 text-red-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;