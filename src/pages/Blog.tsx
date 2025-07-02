import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowRight, Search } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Reviews', 'News', 'Experience', 'Tech'];

  const blogPosts = [
    {
      id: 1,
      title: 'Track Day Chronicles: My First Experience with the McLaren P1',
      excerpt: 'Nothing could have prepared me for the raw power and precision of McLaren\'s hybrid masterpiece. Here\'s what happened when I finally got behind the wheel.',
      category: 'Experience',
      date: '2025-01-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      tags: ['McLaren', 'Track Day', 'Hypercar'],
      featured: true,
    },
    {
      id: 2,
      title: 'The Evolution of JDM: From Tuner Culture to Mainstream',
      excerpt: 'Exploring how Japanese Domestic Market cars transformed from underground tuner favorites to globally recognized performance icons.',
      category: 'Tech',
      date: '2025-01-10',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      tags: ['JDM', 'Culture', 'History'],
      featured: false,
    },
    {
      id: 3,
      title: 'Lamborghini Huracán STO Review: Track-Bred Beast',
      excerpt: 'Is the Super Trofeo Omologata the perfect bridge between road and track? My week with this Italian masterpiece reveals all.',
      category: 'Reviews',
      date: '2025-01-05',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      tags: ['Lamborghini', 'Review', 'Supercar'],
      featured: true,
    },
    {
      id: 4,
      title: 'Electric vs. ICE: The Future of Performance Cars',
      excerpt: 'As electric hypercars like the Rimac Nevera dominate performance charts, what does this mean for traditional combustion engines?',
      category: 'News',
      date: '2024-12-28',
      readTime: '15 min read',
      image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      tags: ['Electric', 'Future', 'Performance'],
      featured: false,
    },
    {
      id: 5,
      title: 'Porsche 911 Turbo S: Daily Supercar Perfection',
      excerpt: 'Can the 911 Turbo S really be your everyday supercar? After 6 months of ownership, here\'s my honest take.',
      category: 'Experience',
      date: '2024-12-20',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      tags: ['Porsche', 'Daily Driver', 'Ownership'],
      featured: false,
    },
    {
      id: 6,
      title: 'Car Meet Spotlight: Underground Tokyo Drift Scene',
      excerpt: 'Deep dive into Tokyo\'s underground car culture, where JDM legends meet modern tuning technology in spectacular fashion.',
      category: 'Experience',
      date: '2024-12-15',
      readTime: '11 min read',
      image: 'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      tags: ['Tokyo', 'Drift', 'Culture'],
      featured: false,
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
            CAR JOURNAL
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Personal experiences, in-depth reviews, and insights from the world of high-performance automobiles. Every story is fueled by genuine passion.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-carbon-light border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue transition-all duration-300"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-neon-green text-black border-2 border-neon-green'
                    : 'bg-carbon-light text-gray-300 border-2 border-transparent hover:border-neon-purple hover:text-neon-purple'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="font-orbitron text-2xl font-bold mb-8 text-center neon-text">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-xl overflow-hidden hover-glow group cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-neon-blue/80 rounded-full backdrop-blur-sm">
                      <span className="text-xs font-bold text-black">{post.category}</span>
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-red-500/80 rounded-full backdrop-blur-sm">
                      <span className="text-xs font-bold text-white">Featured</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-3 space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-orbitron text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 bg-neon-purple/20 text-neon-purple text-xs rounded-full"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center text-neon-green font-medium text-sm group-hover:text-neon-blue transition-colors"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>
        )}

        {/* Regular Posts */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {regularPosts.length > 0 && (
            <>
              <h2 className="font-orbitron text-2xl font-bold mb-8 text-center chrome-text">
                Latest Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-card rounded-xl overflow-hidden hover-glow group cursor-pointer"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-neon-green/80 rounded-full backdrop-blur-sm">
                        <span className="text-xs font-bold text-black">{post.category}</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-xs text-gray-400 mb-3 space-x-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="font-orbitron text-lg font-bold text-white mb-3 group-hover:text-neon-green transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2 py-1 bg-neon-blue/20 text-neon-blue text-xs rounded-full"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <motion.button
                        whileHover={{ x: 3 }}
                        className="flex items-center text-neon-purple font-medium text-sm group-hover:text-neon-green transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </motion.button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </>
          )}
        </motion.section>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-carbon-light flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="font-orbitron text-xl font-bold text-white mb-2">
              No Articles Found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search terms or category filter.
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Blog;