import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Bed, Bath, Square, Heart, Share2, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property, index = 0 }) => {
  const {
    id,
    image,
    title,
    location,
    rating,
    reviews,
    description,
    bedrooms,
    bathrooms,
    area,
    price,
    originalPrice,
    status,
    agent,
    badges = [],
    featured = false
  } = property;

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'for sale':
        return 'bg-green-500';
      case 'for rent':
        return 'bg-hot-deal-maroon-800';
      case 'sold':
        return 'bg-red-500';
      default:
        return 'bg-hot-deal-maroon-800';
    }
  };

  const getBadgeColor = (badge) => {
    switch (badge?.toLowerCase()) {
      case 'featured':
        return 'bg-hot-deal-maroon-800';
      case 'hot':
        return 'bg-red-500';
      case 'trendy':
        return 'bg-hot-deal-maroon-800';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <motion.div
      className="card overflow-hidden rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Image Container */}
      <div className="relative">
        <Link to={`/property/${id}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-40 sm:h-48 md:h-52 lg:h-48 xl:h-52 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </Link>
        
        {/* Status Badge */}
        {status && (
          <div className={`absolute top-2 sm:top-4 left-2 sm:left-4 ${getStatusColor(status)} text-white px-2 py-1 text-xs font-medium rounded`}>
            {status}
          </div>
        )}

        {/* Property Badges */}
        {badges.map((badge, badgeIndex) => (
          <div
            key={badgeIndex}
            className={`absolute top-2 sm:top-4 right-2 sm:right-4 ${getBadgeColor(badge)} text-white px-2 py-1 text-xs font-medium rounded`}
          >
            {badge}
          </div>
        ))}

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-hot-deal-maroon-800 text-white px-2 py-1 text-xs font-medium rounded">
            Featured
          </div>
        )}

        {/* Agent Profile Overlay */}
        {agent && (
          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 flex items-center space-x-2 bg-white/90 backdrop-blur-sm p-1.5 sm:p-2 rounded-md">
            <img
              src={agent.avatar}
              alt={agent.name}
              className="w-6 h-6 sm:w-8 sm:h-8 object-cover rounded-full"
            />
            <div className="hidden sm:block">
              <p className="text-xs sm:text-sm font-medium text-gray-900">{agent.name}</p>
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-600">Verified</span>
              </div>
            </div>
          </div>
        )}

        {/* Action Icons */}
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex flex-col space-y-1 sm:space-y-2">
          <motion.button
            className="p-1.5 sm:p-2 bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-200 rounded-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" />
          </motion.button>
          <motion.button
            className="p-1.5 sm:p-2 bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-200 rounded-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Share2 className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" />
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4">
        {/* Title and Rating */}
        <div className="mb-3">
          <Link to={`/property/${id}`}>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 hover:text-teal-600 transition-colors duration-200 cursor-pointer line-clamp-2">{title}</h3>
          </Link>
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 mb-2">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
            <span className="truncate">{location}</span>
          </div>
          {rating && (
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 sm:h-4 sm:w-4 ${
                    i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="text-xs sm:text-sm text-gray-600 ml-1">
                {rating} ({reviews} reviews)
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">{description}</p>
        )}

        {/* Property Details */}
        <div className="mb-4">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Bed className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="truncate">{bedrooms} Bed</span>
            </div>
            <div className="flex items-center space-x-1">
              <Bath className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="truncate">{bathrooms} Bath</span>
            </div>
            <div className="flex items-center space-x-1">
              <Square className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="truncate">{area} Sq Ft</span>
            </div>
          </div>
        </div>

        {/* Price and Agent */}
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {originalPrice && (
              <span className="text-xs sm:text-sm text-gray-500 line-through mr-2">
                ${originalPrice.toLocaleString()}
              </span>
            )}
            <div className="flex items-baseline space-x-1">
              <span className="text-lg sm:text-xl font-bold text-teal-600">
                ${price.toLocaleString()}
              </span>
              {status?.toLowerCase() === 'for rent' && (
                <span className="text-xs sm:text-sm text-gray-600">/month</span>
              )}
            </div>
          </div>
          {agent && (
            <div className="text-xs sm:text-sm text-gray-600 text-right">
              By {agent.name}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
