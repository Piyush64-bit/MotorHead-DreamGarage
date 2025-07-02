import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Zap, Trophy, Cog } from 'lucide-react';

const History = () => {
  const timelineEvents = [
    {
      year: '1886',
      title: 'The Birth of the Automobile',
      description: 'Karl Benz creates the first true automobile with the Benz Patent-Motorwagen, marking the beginning of automotive history.',
      icon: Cog,
      category: 'Innovation',
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      year: '1908',
      title: 'Mass Production Revolution',
      description: 'Henry Ford introduces the Model T and assembly line production, making cars accessible to the masses.',
      icon: Cog,
      category: 'Production',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      year: '1950',
      title: 'Formula 1 Era Begins',
      description: 'The first Formula 1 World Championship takes place, establishing the pinnacle of motorsport competition.',
      icon: Trophy,
      category: 'Racing',
      image: 'https://images.pexels.com/photos/12789/pexels-photo-12789.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      year: '1963',
      title: 'The Supercar Is Born',
      description: 'Lamborghini 350 GT debuts, followed by the Miura in 1966, defining the modern supercar template.',
      icon: Zap,
      category: 'Supercar',
      image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      year: '1970s',
      title: 'JDM Culture Emerges',
      description: 'Japanese manufacturers like Toyota, Nissan, and Honda begin creating performance icons that would define JDM culture.',
      icon: Zap,
      category: 'JDM',
      image: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      year: '1987',
      title: 'Ferrari F40: Pure Performance',
      description: 'Ferrari releases the F40, the last car personally approved by Enzo Ferrari, becoming an instant legend.',
      icon: Trophy,
      category: 'Legend',
      image: 'https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      year: '1993',
      title: 'McLaren F1 Redefines Speed',
      description: 'The McLaren F1 debuts with its central driving position and naturally aspirated V12, setting new standards for hypercars.',
      icon: Zap,
      category: 'Hypercar',
      image: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      year: '2005',
      title: 'Bugatti Veyron: Engineering Marvel',
      description: 'The Veyron pushes the boundaries of what\'s possible, achieving over 1000hp and 400+ km/h top speed.',
      icon: Cog,
      category: 'Engineering',
      image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      year: '2013',
      title: 'The Holy Trinity',
      description: 'McLaren P1, Ferrari LaFerrari, and Porsche 918 Spyder debut, ushering in the hybrid hypercar era.',
      icon: Zap,
      category: 'Hybrid',
      image: 'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      year: '2020s',
      title: 'Electric Revolution',
      description: 'Electric hypercars like the Rimac Nevera and Pininfarina Battista redefine performance benchmarks.',
      icon: Zap,
      category: 'Electric',
      image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
  ];

  const categoryColors = {
    Innovation: 'from-blue-500 to-cyan-500',
    Production: 'from-green-500 to-emerald-500',
    Racing: 'from-red-500 to-rose-500',
    Supercar: 'from-purple-500 to-violet-500',
    JDM: 'from-orange-500 to-amber-500',
    Legend: 'from-yellow-500 to-orange-500',
    Hypercar: 'from-pink-500 to-purple-500',
    Engineering: 'from-indigo-500 to-blue-500',
    Hybrid: 'from-teal-500 to-cyan-500',
    Electric: 'from-lime-500 to-green-500',
  };

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
            HISTORY OF SPEED
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From the first horseless carriage to electric hypercars, explore the evolution of automotive excellence and the machines that shaped our passion for speed.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-blue via-neon-green to-neon-purple opacity-30" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card rounded-xl overflow-hidden hover-glow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${categoryColors[event.category]}`}>
                      {event.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <event.icon className="w-5 h-5 text-neon-blue" />
                      <h3 className="font-orbitron text-lg font-bold text-white">
                        {event.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue to-neon-green flex items-center justify-center border-4 border-carbon-dark"
                >
                  <Calendar className="w-6 h-6 text-black" />
                </motion.div>
              </div>

              {/* Year Badge */}
              <div className={`w-5/12 flex ${index % 2 === 0 ? 'justify-start pl-8' : 'justify-end pr-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="racing-font text-4xl font-bold neon-text bg-carbon-dark px-6 py-3 rounded-lg border border-neon-blue/30"
                >
                  {event.year}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Era Summary */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="font-orbitron text-3xl font-bold chrome-text mb-4">
              Automotive Eras
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Each era brought revolutionary changes that shaped the automotive landscape we know today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                era: 'Classic Era',
                period: '1886-1950',
                description: 'Foundation of automotive engineering and mass production',
                color: 'from-amber-500 to-orange-500',
              },
              {
                era: 'Golden Age',
                period: '1950-1990',
                description: 'Birth of supercars and racing legends',
                color: 'from-red-500 to-pink-500',
              },
              {
                era: 'Modern Era',
                period: '1990-Present',
                description: 'Hypercars, hybrid technology, and electric revolution',
                color: 'from-blue-500 to-purple-500',
              },
            ].map((era) => (
              <motion.div
                key={era.era}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-xl text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${era.color} flex items-center justify-center`}>
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-orbitron text-xl font-bold text-white mb-2">
                  {era.era}
                </h3>
                <p className="text-neon-blue font-medium mb-3">{era.period}</p>
                <p className="text-gray-400 text-sm">{era.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default History;