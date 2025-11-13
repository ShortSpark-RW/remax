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
        return 'bg-orange-500';
      case 'sold':
        return 'bg-red-500';
      default:
        return 'bg-orange-500';
    }
  };

  const getBadgeColor = (badge) => {
    switch (badge?.toLowerCase()) {
      case 'featured':
        return 'bg-orange-500';
      case 'hot':
        return 'bg-red-500';
      case 'trendy':
        return 'bg-orange-500';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <motion.div
      className="card overflow-hidden"
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
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </Link>
        
        {/* Status Badge */}
        {status && (
          <div className={`absolute top-4 left-4 ${getStatusColor(status)} text-white px-2 py-1 text-xs font-medium`}>
            {status}
          </div>
        )}

        {/* Property Badges */}
        {badges.map((badge, badgeIndex) => (
          <div
            key={badgeIndex}
            className={`absolute top-4 right-4 ${getBadgeColor(badge)} text-white px-2 py-1 text-xs font-medium`}
          >
            {badge}
          </div>
        ))}

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4 bg-orange-500 text-white px-2 py-1 text-xs font-medium">
            Featured
          </div>
        )}

        {/* Agent Profile Overlay */}
        {agent && (
          <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-white/90 backdrop-blur-sm p-2">
            <img
              src={agent.avatar}
              alt={agent.name}
              className="w-8 h-8 object-cover"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">{agent.name}</p>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500"></div>
                <span className="text-xs text-gray-600">Verified</span>
              </div>
            </div>
          </div>
        )}

        {/* Action Icons */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <motion.button
            className="p-2 bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart className="h-4 w-4 text-gray-600" />
          </motion.button>
          <motion.button
            className="p-2 bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Share2 className="h-4 w-4 text-gray-600" />
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Rating */}
        <div className="mb-3">
          <Link to={`/property/${id}`}>
            <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-teal-600 transition-colors duration-200 cursor-pointer">{title}</h3>
          </Link>
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          {rating && (
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="text-sm text-gray-600 ml-1">
                {rating} ({reviews} reviews)
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        )}

        {/* Property Details */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Bed className="h-4 w-4" />
              <span>{bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center space-x-1">
              <Bath className="h-4 w-4" />
              <span>{bathrooms} Bathrooms</span>
            </div>
            <div className="flex items-center space-x-1">
              <Square className="h-4 w-4" />
              <span>{area} Sq Ft</span>
            </div>
          </div>
        </div>

        {/* Price and Agent */}
        <div className="flex items-center justify-between">
          <div>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through mr-2">
                ${originalPrice.toLocaleString()}
              </span>
            )}
            <span className="text-xl font-bold text-teal-600">
              ${price.toLocaleString()}
            </span>
            {status?.toLowerCase() === 'for rent' && (
              <span className="text-sm text-gray-600">/month</span>
            )}
          </div>
          {agent && (
            <div className="text-sm text-gray-600">
              By {agent.name}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
