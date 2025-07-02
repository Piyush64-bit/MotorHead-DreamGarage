import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Gauge, Trophy } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: 'Pure Performance',
      description: 'Exploring the fastest, most powerful machines on earth',
    },
    {
      icon: Gauge,
      title: 'Technical Excellence',
      description: 'Deep dive into specs, engineering, and innovation',
    },
    {
      icon: Trophy,
      title: 'Racing Heritage',
      description: 'Celebrating the legends and icons of motorsport',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-carbon-dark/50 to-carbon-dark">
          <div 
            className="w-full h-full bg-cover bg-center opacity-20"
            style={{ 
              backgroundImage: `url('https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')` 
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Main Tagline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="racing-font text-5xl md:text-7xl lg:text-8xl chrome-text"
              >
                FUELED BY NITRO
              </motion.h1>
              
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="font-orbitron text-2xl md:text-4xl lg:text-5xl neon-text"
              >
                DRIVEN BY SPEED
              </motion.h2>
              
              <motion.p
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light"
              >
                A journey through horsepower and heart by P I Y U $ H
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/garage">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-green text-black font-bold rounded-lg hover-glow flex items-center space-x-2 text-lg group"
                >
                  <span>Explore My Garage</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              
              <Link to="/blog">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-neon-purple text-neon-purple font-bold rounded-lg hover:bg-neon-purple hover:text-black transition-all duration-300 text-lg"
                >
                  Read My Car Journal
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-1 h-3 bg-neon-blue rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold chrome-text mb-4">
              The Ultimate Experience
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Dive deep into the world of automotive excellence, from cutting-edge supercars to timeless classics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card p-8 rounded-xl hover-glow group"
              >
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-green rounded-full flex items-center justify-center group-hover:animate-float">
                    <feature.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="font-orbitron text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-carbon-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Dream Cars' },
              { number: '15+', label: 'Brands Featured' },
              { number: '1000+', label: 'Horsepower Dreams' },
              { number: '5', label: 'Years Obsessed' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-orbitron text-3xl md:text-4xl font-bold neon-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;