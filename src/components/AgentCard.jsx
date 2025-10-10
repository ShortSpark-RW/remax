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
      className="card p-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Avatar */}
      <div className="relative mb-4">
        <motion.img
          src={avatar}
          alt={name}
          className="w-20 h-20 mx-auto object-cover border-4 border-white shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
        {verified && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>

      {/* Name and Title */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-600">{title}</p>
        {properties > 0 && (
          <p className="text-xs text-teal-600 font-medium">{properties} Properties</p>
        )}
      </div>

      {/* Contact Info */}
      <div className="space-y-2 mb-4">
        {phone && (
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <Phone className="h-4 w-4" />
            <span>{phone}</span>
          </div>
        )}
        {email && (
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <Mail className="h-4 w-4" />
            <span className="truncate">{email}</span>
          </div>
        )}
      </div>

      {/* Social Links */}
      {Object.keys(socialLinks).length > 0 && (
        <div className="flex justify-center space-x-3">
          {Object.entries(socialLinks).map(([platform, url]) => {
            const IconComponent = socialIcons[platform];
            if (!IconComponent) return null;
            
            return (
              <motion.a
                key={platform}
                href={url}
                className="p-2 bg-gray-100 hover:bg-teal-600 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="h-4 w-4" />
              </motion.a>
            );
          })}
        </div>
      )}
    </motion.div>
  );
};

export default AgentCard;
