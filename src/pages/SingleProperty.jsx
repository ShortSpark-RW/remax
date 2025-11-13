import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Star, 
  Bed, 
  Bath, 
  Square, 
  Car, 
  Heart, 
  Share2, 
  Download,
  Calendar,
  User,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Play,
  Camera
} from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import ContactForm from '../components/ContactForm';
import { properties, agents } from '../data/sampleData';

const SingleProperty = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Get the first property as an example
  const property = properties[0];
  const agent = agents[0];

  const propertyImages = [
    property.image,
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop'
  ];

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % propertyImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length);
  };

  const relatedProperties = properties.slice(1, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Property Header */}
      <section className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{property.location}</span>
                </div>
                {property.rating && (
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{property.rating} ({property.reviews} reviews)</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <motion.button
                className="p-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Heart className="h-5 w-5 text-gray-600" />
              </motion.button>
              <motion.button
                className="p-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Share2 className="h-5 w-5 text-gray-600" />
              </motion.button>
              <motion.button
                className="p-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Download className="h-5 w-5 text-gray-600" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Property Images */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Image */}
            <div className="lg:col-span-2 relative">
              <div className="relative aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={propertyImages[activeImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Image Navigation */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 transition-colors duration-200"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 transition-colors duration-200"
                >
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 text-sm">
                  {activeImageIndex + 1} / {propertyImages.length}
                </div>

                {/* Video Button */}
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="absolute bottom-4 right-4 bg-white/90 hover:bg-white p-3 transition-colors duration-200 flex items-center space-x-2"
                >
                  <Play className="h-5 w-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-600">Virtual Tour</span>
                </button>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-5 gap-2 mt-4">
                {propertyImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`aspect-video overflow-hidden ${
                      index === activeImageIndex ? 'ring-2 ring-teal-500' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${property.title} ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Details Sidebar */}
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-8">
                {/* Price */}
                <div className="mb-6">
                  <div className="text-3xl font-bold text-teal-600 mb-2">
                    ${property.price.toLocaleString()}
                    {property.status?.toLowerCase() === 'for rent' && (
                      <span className="text-lg text-gray-600 font-normal">/month</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600">
                    {property.status}
                  </div>
                </div>

                {/* Property Features */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Bed className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{property.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{property.bathrooms} Bathrooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Square className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{property.area} Sq Ft</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">2 Garage</span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {property.description} This beautiful property offers modern amenities and stunning views. 
                    Perfect for families looking for comfort and luxury in a prime location.
                  </p>
                </div>

                {/* Contact Agent */}
                <ContactForm title="Contact Agent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Property Features */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500"></div>
                    <span>Central Air Conditioning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500"></div>
                    <span>Hardwood Floors</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500"></div>
                    <span>Updated Kitchen</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500"></div>
                    <span>Master Suite</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500"></div>
                    <span>Walk-in Closets</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500"></div>
                    <span>Private Balcony</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500"></div>
                    <span>High Ceilings</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500"></div>
                    <span>Energy Efficient</span>
                  </div>
                </div>
              </div>

              {/* Property Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Basic Information</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Property Type:</span>
                        <span className="font-medium">Single Family</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Year Built:</span>
                        <span className="font-medium">2018</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lot Size:</span>
                        <span className="font-medium">0.25 Acres</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Stories:</span>
                        <span className="font-medium">2</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Financial Information</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price per Sq Ft:</span>
                        <span className="font-medium">$125</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">HOA Fees:</span>
                        <span className="font-medium">$200/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Property Tax:</span>
                        <span className="font-medium">$8,500/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Insurance:</span>
                        <span className="font-medium">$1,200/year</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Map */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Location</h2>
                <div className="bg-gray-200 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">{property.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Agent Information */}
            <div className="lg:col-span-1">
              <div className="card p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Listed By</h2>
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={agent.avatar}
                    alt={agent.name}
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{agent.name}</h3>
                    <p className="text-gray-600 text-sm">{agent.title}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <div className="w-2 h-2 bg-green-500"></div>
                      <span className="text-xs text-gray-500">Verified Agent</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{agent.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{agent.email}</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <motion.button
                    className="flex-1 btn-primary flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call Now</span>
                  </motion.button>
                  <motion.button
                    className="flex-1 btn-outline flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Properties */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Similar Properties</h2>
            <p className="text-gray-600">You might also be interested in these properties</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsVideoModalOpen(false)}
        >
          <motion.div
            className="bg-white p-6 max-w-4xl w-full max-h-[80vh] overflow-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">Virtual Property Tour</h3>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <Play className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Virtual tour video would be embedded here</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default SingleProperty;
