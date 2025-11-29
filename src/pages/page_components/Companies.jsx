/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import bayut from '../../assets/bayut.png'
import dizzle from '../../assets/dubizzle.png'
import propertyFinder from '../../assets/property-finder.png'
import logoBlack from '../../assets/logo-black.png'

const Companies = () => {
  const avatars = [
    'https://i.pravatar.cc/150?img=1',
    'https://i.pravatar.cc/150?img=2',
    'https://i.pravatar.cc/150?img=3',
    'https://i.pravatar.cc/150?img=4'
  ];

  const companies = [
    { name: 'Bayut', logo: bayut, color: 'text-green-500' },
    { name: 'Dubizzle', logo: dizzle, color: 'text-red-500' },
    { name: 'Property Finder', logo: propertyFinder, color: 'text-hot-deal-maroon-800' },
    { name: 'Aldar', logo: logoBlack, color: 'text-black' }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
              1250+ Companies<br />trust by us
            </h2>

            {/* Avatars and Rating */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex -space-x-2 sm:-space-x-3">
                {avatars.map((avatar, index) => (
                  <motion.img
                    key={index}
                    src={avatar}
                    alt={`User ${index + 1}`}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-3 sm:border-4 border-white shadow-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                  />
                ))}
              </div>
              <div className="text-xs sm:text-sm font-medium text-gray-900">
                <span className="underline">3k ratings</span> (4.7)
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Your leading realestate advocate, transforming houses into dreams.
              trust us ro expertly guide you home. 4000 apartments & home for
              sell,rent & mortgage.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <motion.button
                className="bg-black text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                more Listing
              </motion.button>
              
              <motion.button
                className="flex items-center gap-2 text-gray-900 font-medium hover:gap-4 transition-all text-sm sm:text-base"
                whileHover={{ x: 5 }}
              >
                request a call back
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-gray-200"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-8 sm:h-10 lg:h-12 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Companies;
