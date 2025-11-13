import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <p className="text-gray-700 text-sm leading-relaxed mb-6">
        {testimonial.text}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-medium text-gray-900">{testimonial.name}</span>
        </div>

        <div className="flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Amira K.',
      text: 'Finding our dream home in Abu Dhabi was effortless with this team. They guided us through every step with professionalism and care.',
      avatar: 'https://i.pravatar.cc/150?img=5',
      rating: 4
    },
    {
      id: 2,
      name: 'James W.',
      text: 'Finding our dream home in Abu Dhabi was effortless with this team. They guided us through every step with professionalism and care.',
      avatar: 'https://i.pravatar.cc/150?img=12',
      rating: 5
    },
    {
      id: 3,
      name: 'Michael D.',
      text: 'Finding our dream home in Abu Dhabi was effortless with this team. They guided us through every step with professionalism and care.',
      avatar: 'https://i.pravatar.cc/150?img=8',
      rating: 5
    },
    {
      id: 4,
      name: 'Sarah L.',
      text: 'Finding our dream home in Abu Dhabi was effortless with this team. They guided us through every step with professionalism and care.',
      avatar: 'https://i.pravatar.cc/150?img=9',
      rating: 5
    },
    {
      id: 5,
      name: 'David M.',
      text: 'Finding our dream home in Abu Dhabi was effortless with this team. They guided us through every step with professionalism and care.',
      avatar: 'https://i.pravatar.cc/150?img=13',
      rating: 4
    },
    {
      id: 6,
      name: 'Emma R.',
      text: 'Finding our dream home in Abu Dhabi was effortless with this team. They guided us through every step with professionalism and care.',
      avatar: 'https://i.pravatar.cc/150?img=10',
      rating: 5
    }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-500 mb-2">Testimonials</p>
          <h2 className="text-4xl font-bold text-gray-900">Waht our clients are saying</h2>
        </motion.div>

        {/* Testimonials Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          >
            {currentTestimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4">
          <motion.button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
