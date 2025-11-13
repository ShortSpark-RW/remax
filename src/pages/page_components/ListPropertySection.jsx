import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Bath, Bed, Maximize, ArrowRight } from 'lucide-react';
import propertyImage from '../../assets/property.png'

const PropertyCard = ({ property, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-92 overflow-hidden">
        <motion.img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-2xl font-bold text-gray-900">${property.price}</span>
          <span className="text-sm text-gray-500">/month</span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-1">{property.name}</h3>
        <p className="text-sm text-gray-500 mb-4">{property.location}</p>

        {/* Features */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{property.baths} baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{property.beds} beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="h-4 w-4" />
            <span>Area {property.area}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ListPropertySection = () => {
  const properties = [
    {
      id: 1,
      name: 'Canal residence',
      location: 'Villa 32, Al Raha Gardens',
      price: '2500',
      baths: 4,
      beds: 4,
      area: '8×6m',
      image: propertyImage
    },
    {
      id: 2,
      name: 'Canal residence',
      location: 'Villa 32, Al Raha Gardens',
      price: '2500',
      baths: 4,
      beds: 4,
      area: '8×6m',
      image: propertyImage
    },
    {
      id: 3,
      name: 'Canal residence',
      location: 'Villa 32, Al Raha Gardens',
      price: '2500',
      baths: 4,
      beds: 4,
      area: '8×6m',
      image: propertyImage
    },
    {
      id: 4,
      name: 'Canal residence',
      location: 'Villa 32, Al Raha Gardens',
      price: '2500',
      baths: 4,
      beds: 4,
      area: '8×6m',
      image: propertyImage
    },
    {
      id: 5,
      name: 'Canal residence',
      location: 'Villa 32, Al Raha Gardens',
      price: '2500',
      baths: 4,
      beds: 4,
      area: '8×6m',
      image: propertyImage
    },
    {
      id: 6,
      name: 'Canal residence',
      location: 'Villa 32, Al Raha Gardens',
      price: '2500',
      baths: 4,
      beds: 4,
      area: '8×6m',
      image: propertyImage
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Popular Listings</h2>
            <p className="text-gray-600">Explore latest and featured properties for sell, rent & mortgage</p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-full hover:border-gray-900 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListPropertySection;
