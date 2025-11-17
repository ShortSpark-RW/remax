/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, User, Search } from 'lucide-react';
import logo from '../assets/logo_black.png';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const dropdownData = {
    communities: {
      sections: [
        {
          title: t('Abu Dhabi'),
          items: [
            { title: t('Al Reem Island'), href: '/communities/al-reem-island' },
            { title: t('Yas Island'), href: '/communities/yas-island' },
            { title: t('Saadiyat Island'), href: '/communities/saadiyat-island' },
            { title: t('Al Raha Beach'), href: '/communities/al-raha-beach' },
            { title: t('View More'), href: '/communities/abu-dhabi-view-more' }
          ]
        },
        {
          title: t('Dubai'),
          items: [
            { title: t('Dubai Marina'), href: '/communities/dubai-marina' },
            { title: t('Downtown Dubai'), href: '/communities/downtown-dubai' },
            { title: t('Palm Jumeirah'), href: '/communities/palm-jumeirah' },
            { title: t('Business Bay'), href: '/communities/business-bay' },
            { title: t('View More'), href: '/communities/dubai-view-more' }
          ]
        }
      ]
    },
    developers: {
      sections: [
        {
          title: t('Construction Partners'),
          items: [
            { title: t('Featured Developers'), href: '/developers/featured', description: t('Top-rated property developers in our network') },
            { title: t('Green Builders'), href: '/developers/green', description: t('Sustainable and eco-friendly developments') }
          ]
        },
        {
          title: t('Luxury Development'),
          items: [
            { title: t('Luxury Developers'), href: '/developers/luxury', description: t('Premium developments and exclusive properties') },
            { title: t('Upcoming Projects'), href: '/developers/upcoming', description: t('Pre-launch and under-construction properties') }
          ]
        }
      ]
    }
  };

  const handleDropdownEnter = (key) => {
    setActiveDropdown(key);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const navItems = [
    { key: 'nav.home', href: '/' },
    // { key: 'nav.buy', href: '/buy' },
    // { key: 'nav.sale', href: '/sale' },
    // { key: 'nav.rent', href: '/rent' },
    // { key: 'nav.propertyManagement', href: '/property-management' },
    // { key: 'nav.propertyEvaluation', href: '/property-evaluation' },
    { key: 'Properties', href: '/properties', hasDropdown: 'developers' },
    { key: 'Featured Projects', href: '/properties' },
    { key: 'Communities', href: '/properties', hasDropdown: 'communities' },
    { key: 'About Us', href: '/properties' },
    { key: 'Contact Us', href: '/properties' }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white-800 text-black"
    >
      {/* Top Header Bar */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {/* choose logo variant based on current page (home uses white logo on dark bg) */}
            <img src={location.pathname === '/' ? logo : logo} alt="EMAX Technologies" className="h-16 w-auto" />
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const hasDropdown = item.hasDropdown && dropdownData[item.hasDropdown];
              const isActive = location.pathname === item.href || location.pathname.startsWith(item.href + '/');
              return (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => hasDropdown && handleDropdownEnter(item.hasDropdown)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <motion.a
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium font-sans transition-colors duration-200 inline-flex items-center ${
                      isActive || activeDropdown === item.hasDropdown
                        ? 'bg-orange-500 text-white'
                        : 'text-black-300 hover:text-white hover:bg-gray-700'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.key}
                    {hasDropdown && (
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.hasDropdown ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </motion.a>

                  {/* Dropdown Menu */}
                  {hasDropdown && activeDropdown === item.hasDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full w-96 bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50 rounded-lg overflow-hidden"
                    >
                      <div className="p-6 grid grid-cols-2 gap-6">
                        {dropdownData[item.hasDropdown].sections.map((section, sectionIdx) => (
                          <div key={section.title} className="space-y-3">
                            <h3 className="text-sm font-semibold text-orange-600 uppercase tracking-wide border-b border-orange-100 pb-2">
                              {section.title}
                            </h3>
                            <div className="space-y-2">
                              {section.items.map((dropdownItem, idx) => (
                                <motion.a
                                  key={dropdownItem.href}
                                  href={dropdownItem.href}
                                  className="group flex flex-col p-3 hover:bg-gradient-to-r hover:from-orange-50 hover:to-teal-50 rounded-md transition-all duration-200"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: (sectionIdx * 2 + idx) * 0.1 }}
                                >
                                  <span className="font-medium text-gray-900 group-hover:text-orange-600 text-sm">
                                    {dropdownItem.title}
                                  </span>
                                </motion.a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Contact Info & Actions */}
          <div className="hidden md:flex items-center space-x-6">
            {/* <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">1-800-555-1234</span>
            </div> */}
            
            <motion.button
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm rounded-md font-medium transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </motion.button>

            {/* <User className="h-5 w-5 cursor-pointer hover:text-orange-500 transition-colors duration-200" /> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => {
                const hasDropdown = item.hasDropdown && dropdownData[item.hasDropdown];
                return (
                  <div key={item.key}>
                    <motion.button
                      onClick={() => hasDropdown && handleDropdownEnter(activeDropdown === item.hasDropdown ? null : item.hasDropdown)}
                      className={`w-full px-3 py-2 text-sm font-medium transition-colors duration-200 flex justify-between items-center ${
                        activeDropdown === item.hasDropdown
                          ? 'bg-orange-500 text-white'
                          : 'text-gray-300 hover:text-white hover:bg-gray-700'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.key}
                      {hasDropdown && (
                        <svg
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === item.hasDropdown ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </motion.button>
                    
                    {/* Mobile Dropdown Content */}
                    {hasDropdown && activeDropdown === item.hasDropdown && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-gray-800 px-4"
                      >
                        {dropdownData[item.hasDropdown].sections.map((section, sectionIdx) => (
                          <div key={section.title} className="mb-4">
                            <h4 className="text-xs font-semibold text-orange-400 uppercase tracking-wide mb-2">
                              {section.title}
                            </h4>
                            {section.items.map((dropdownItem, idx) => (
                              <motion.a
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                className="block py-3 border-b border-gray-700 last:border-0"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: (sectionIdx * 2 + idx) * 0.1 }}
                              >
                                <span className="block font-medium text-white">
                                  {dropdownItem.title}
                                </span>
                              </motion.a>
                            ))}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              })}
              {/* <div className="flex items-center space-x-4 pt-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">1-800-555-1234</span>
                </div>
                <User className="h-5 w-5" />
              </div> */}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
