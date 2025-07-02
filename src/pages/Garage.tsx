import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Gauge, Trophy, Heart, ExternalLink } from 'lucide-react';
import { PageLoader } from '../components/ui';

const Garage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(false);

  const categories = ['All', 'Supercar', 'Hypercar', 'JDM', 'American', 'German'];

  const cars = [
    {
      id: 1,
      name: 'McLaren P1',
      brand: 'McLaren',
      year: '2015',
      category: 'Hypercar',
      engine: 'V8 Hybrid',
      power: '903 HP',
      topSpeed: '350 km/h',
      acceleration: '2.8s',
      image: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      personalNote: 'The ultimate expression of McLaren\'s racing DNA. This hybrid hypercar represents the pinnacle of automotive engineering.',
      favorite: true,
    },
    {
      id: 2,
      name: 'Lamborghini Huracán',
      brand: 'Lamborghini',
      year: '2023',
      category: 'Supercar',
      engine: 'V10',
      power: '630 HP',
      topSpeed: '325 km/h',
      acceleration: '3.2s',
      image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      personalNote: 'Raw Italian passion meets precision engineering. Every drive is an emotional experience.',
      favorite: true,
    },
    {
      id: 3,
      name: 'Nissan GT-R',
      brand: 'Nissan',
      year: '2022',
      category: 'JDM',
      engine: 'V6 Twin-Turbo',
      power: '565 HP',
      topSpeed: '315 km/h',
      acceleration: '2.9s',
      image: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      personalNote: 'Godzilla. The ultimate JDM legend that redefined what Japanese engineering could achieve.',
      favorite: false,
    },
    {
      id: 4,
      name: 'Porsche 911 Turbo S',
      brand: 'Porsche',
      year: '2023',
      category: 'German',
      engine: 'Flat-6 Twin-Turbo',
      power: '640 HP',
      topSpeed: '330 km/h',
      acceleration: '2.6s',
      image: 'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      personalNote: 'German precision at its finest. The perfect daily supercar that never compromises on performance.',
      favorite: true,
    },
    {
      id: 5,
      name: 'Ford Mustang Shelby GT500',
      brand: 'Ford',
      year: '2023',
      category: 'American',
      engine: 'V8 Supercharged',
      power: '760 HP',
      topSpeed: '290 km/h',
      acceleration: '3.3s',
      image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      personalNote: 'American muscle at its most refined. The roar of that supercharged V8 is pure automotive poetry.',
      favorite: false,
    },
    {
      id: 6,
      name: 'Ferrari SF90 Stradale',
      brand: 'Ferrari',
      year: '2023',
      category: 'Hypercar',
      engine: 'V8 Hybrid',
      power: '986 HP',
      topSpeed: '340 km/h',
      acceleration: '2.5s',
      image: 'https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      personalNote: 'The future of Ferrari. This hybrid masterpiece proves that electrification can enhance the soul of a supercar.',
      favorite: true,
    },
  ];

  const filteredCars = selectedCategory === 'All' 
    ? cars 
    : cars.filter(car => car.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    setIsLoading(true);
    setSelectedCategory(category);
    
    // Simulate loading time for category change
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
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
            MY GARAGE
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Welcome to my personal collection of automotive dreams. Each machine tells a story of passion, engineering excellence, and pure adrenaline. — P I Y U $ H
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-neon-blue text-black border-2 border-neon-blue'
                  : 'bg-carbon-light text-gray-300 border-2 border-transparent hover:border-neon-green hover:text-neon-green'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Loading State */}
        {isLoading ? (
          <PageLoader text="LOADING CARS" />
        ) : (
          /* Cars Grid */
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-xl overflow-hidden hover-glow group cursor-pointer"
              >
                {/* Car Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Favorite Badge */}
                  {car.favorite && (
                    <div className="absolute top-4 right-4 p-2 bg-red-500/80 rounded-full backdrop-blur-sm">
                      <Heart className="w-4 h-4 text-white fill-current" />
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-neon-blue/80 rounded-full backdrop-blur-sm">
                    <span className="text-xs font-bold text-black">{car.category}</span>
                  </div>
                </div>

                {/* Car Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-orbitron text-xl font-bold text-white mb-1">
                      {car.name}
                    </h3>
                    <p className="text-neon-blue font-medium">{car.brand} • {car.year}</p>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-neon-green" />
                      <span className="text-gray-400">{car.power}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Gauge className="w-4 h-4 text-neon-purple" />
                      <span className="text-gray-400">{car.topSpeed}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Trophy className="w-4 h-4 text-neon-blue" />
                      <span className="text-gray-400">0-100: {car.acceleration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ExternalLink className="w-4 h-4 text-neon-green" />
                      <span className="text-gray-400">{car.engine}</span>
                    </div>
                  </div>

                  {/* Personal Note */}
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-gray-400 text-sm italic">
                      "{car.personalNote}"
                    </p>
                  </div>

                  {/* Hover Action */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-4 py-2 bg-gradient-to-r from-neon-blue to-neon-green text-black font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                    onClick={() => {
                      // Play rev sound effect (placeholder)
                      console.log(`Rev sound for ${car.name}`);
                    }}
                  >
                    Rev Engine 🏎️
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Stats Summary */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 glass-card rounded-xl p-8"
        >
          <h2 className="font-orbitron text-2xl font-bold text-center mb-8 neon-text">
            Garage Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold chrome-text">{cars.length}</div>
              <div className="text-gray-400">Total Cars</div>
            </div>
            <div>
              <div className="text-3xl font-bold chrome-text">
                {Math.max(...cars.map(car => parseInt(car.power)))}
              </div>
              <div className="text-gray-400">Max HP</div>
            </div>
            <div>
              <div className="text-3xl font-bold chrome-text">
                {Math.max(...cars.map(car => parseInt(car.topSpeed)))}
              </div>
              <div className="text-gray-400">Top Speed (km/h)</div>
            </div>
            <div>
              <div className="text-3xl font-bold chrome-text">
                {cars.filter(car => car.favorite).length}
              </div>
              <div className="text-gray-400">Favorites</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Garage;