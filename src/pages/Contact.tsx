import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, User, Send, Github, Linkedin, Instagram, MapPin } from 'lucide-react';
import { Loader } from '../components/ui';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Piyush64-bit',
      color: 'from-gray-600 to-gray-800',
      hoverColor: 'hover:from-gray-500 hover:to-gray-700',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:from-blue-500 hover:to-blue-700',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: '#',
      color: 'from-pink-600 to-purple-600',
      hoverColor: 'hover:from-pink-500 hover:to-purple-500',
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'piyush@motorheadgarage.com',
      color: 'text-neon-blue',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      color: 'text-neon-green',
    },
    {
      icon: MessageCircle,
      label: 'Response Time',
      value: 'Within 24 hours',
      color: 'text-neon-purple',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="racing-font text-5xl md:text-6xl chrome-text mb-4">
            LET'S CONNECT
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a car story to share? Want to discuss the latest automotive tech? Or just want to talk about horsepower and heart? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-orbitron text-2xl font-bold mb-4 neon-text">
                Send Me a Message
              </h2>
              <p className="text-gray-400 mb-8">
                Whether you're a fellow motorhead, industry professional, or just curious about cars, I'm always excited to connect with passionate people.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-carbon-light border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue transition-all duration-300"
                  />
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-carbon-light border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue transition-all duration-300"
                  />
                </div>
              </div>

              <div className="relative">
                <MessageCircle className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-carbon-light border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue transition-all duration-300"
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your favorite car, a track day experience, or anything automotive..."
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-carbon-light border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-neon-blue to-neon-green text-black hover-glow'
                }`}
              >
                {isSubmitting ? (
                  <Loader size="sm" text="" className="!space-y-0" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="glass-card p-8 rounded-xl">
              <h3 className="font-orbitron text-xl font-bold mb-6 chrome-text">
                Get In Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start space-x-4">
                    <div className="p-3 bg-carbon-light rounded-lg">
                      <info.icon className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">{info.label}</h4>
                      <p className="text-gray-400">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-xl">
              <h3 className="font-orbitron text-xl font-bold mb-6 chrome-text">
                Follow the Journey
              </h3>
              <p className="text-gray-400 mb-6">
                Connect with me on social media for daily automotive content, behind-the-scenes moments, and car culture insights.
              </p>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r ${social.color} ${social.hoverColor} transition-all duration-300 group`}
                  >
                    <social.icon className="w-6 h-6 text-white" />
                    <div>
                      <div className="font-medium text-white">{social.label}</div>
                      <div className="text-sm text-gray-200">
                        {social.label === 'GitHub' ? '@Piyush64-bit' : 'Follow me'}
                      </div>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 rounded-xl text-center border border-neon-blue/30"
            >
              <blockquote className="text-lg font-medium text-gray-300 mb-4 italic">
                "Fueled by nitro, driven by passion."
              </blockquote>
              <cite className="text-neon-blue font-medium">
                — P I Y U $ H, The Motorhead Manifesto
              </cite>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;