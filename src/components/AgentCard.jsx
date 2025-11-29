import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const AgentCard = ({ agent, index = 0 }) => {
  const {
    id,
    name,
    avatar,
    title,
    phone,
    email,
    socialLinks = {},
    verified = true,
    properties = 0
  } = agent;

  const socialIcons = {
    facebook: Facebook,
    twitter: Twitter,
    linkedin: Linkedin,
    instagram: Instagram
  };

  return (
    <motion.div
      className="card p-4 sm:p-6 text-center rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Avatar */}
      <div className="relative mb-3 sm:mb-4">
        <motion.img
          src={avatar}
          alt={name}
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto object-cover rounded-full border-4 border-white shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
        {verified && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>

      {/* Name and Title */}
      <div className="mb-3 sm:mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-xs sm:text-sm text-gray-600">{title}</p>
        {properties > 0 && (
          <p className="text-xs text-teal-600 font-medium mt-1">{properties} Properties</p>
        )}
      </div>

      {/* Contact Info */}
      <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
        {phone && (
          <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-600">
            <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>{phone}</span>
          </div>
        )}
        {email && (
          <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-600">
            <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="truncate">{email}</span>
          </div>
        )}
      </div>

      {/* Social Links */}
      {Object.keys(socialLinks).length > 0 && (
        <div className="flex justify-center space-x-2 sm:space-x-3">
          {Object.entries(socialLinks).map(([platform, url]) => {
            const IconComponent = socialIcons[platform];
            if (!IconComponent) return null;
            
            return (
              <motion.a
                key={platform}
                href={url}
                className="p-1.5 sm:p-2 bg-gray-100 hover:bg-hot-deal-maroon-900 hover:text-white transition-colors duration-200 rounded-md"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="h-3 w-3 sm:h-4 sm:w-4" />
              </motion.a>
            );
          })}
        </div>
      )}
    </motion.div>
  );
};

export default AgentCard;
