/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, User, Search } from 'lucide-react';
import logo from '../assets/screen.png';
import logoDark from '../assets/logo-dark.svg';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const dropdownData = {
    communities: [
      { title: t('Downtown'), href: '/communities/downtown', description: t('Luxury urban living in the heart of the city') },
      { title: t('Beachfront'), href: '/communities/beachfront', description: t('Exclusive waterfront properties and developments') },
      { title: t('Suburban'), href: '/communities/suburban', description: t('Family-friendly neighborhoods with great schools') },
      { title: t('Golf Estates'), href: '/communities/golf-estates', description: t('Premium properties near world-class golf courses') }
    ],
    developers: [
      { title: t('Featured Developers'), href: '/developers/featured', description: t('Top-rated property developers in our network') },
      { title: t('Upcoming Projects'), href: '/developers/upcoming', description: t('Pre-launch and under-construction properties') },
      { title: t('Luxury Developers'), href: '/developers/luxury', description: t('Premium developments and exclusive properties') },
      { title: t('Green Builders'), href: '/developers/green', description: t('Sustainable and eco-friendly developments') }
    ],
    careers: [
      { title: t('Real Estate Agents'), href: '/careers/agents', description: t('Join our team of professional agents') },
      { title: t('Corporate Positions'), href: '/careers/corporate', description: t('Opportunities in management and operations') },
      { title: t('Internships'), href: '/careers/internships', description: t('Start your career in real estate') },
      { title: t('Training Programs'), href: '/careers/training', description: t('Professional development and certifications') }
    ]
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
    { key: 'nav.communities', href: '/properties', hasDropdown: 'communities' },
    { key: 'nav.developers', href: '/properties', hasDropdown: 'developers' },
    { key: 'nav.featuredProjects', href: '/properties' },
    { key: 'nav.more', href: '/properties' },
    { key: 'nav.aboutUs', href: '/properties' },
    { key: 'nav.careers', href: '/properties', hasDropdown: 'careers' },
    { key: 'nav.contactUs', href: '/properties' }
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
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 inline-flex items-center ${
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
                    {t(item.key)}
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
                      className="absolute left-0 mt-2 w-80 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                    >
                      <div className="p-4 grid gap-4">
                        {dropdownData[item.hasDropdown].map((dropdownItem, idx) => (
                          <motion.a
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="group flex flex-col p-4 hover:bg-gray-50 transition-colors duration-200"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className="font-medium text-gray-900 group-hover:text-orange-500">
                              {dropdownItem.title}
                            </span>
                            <span className="mt-1 text-sm text-gray-500">
                              {dropdownItem.description}
                            </span>
                          </motion.a>
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
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">1-800-555-1234</span>
            </div>
            
            <motion.button
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-medium transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>

            <User className="h-5 w-5 cursor-pointer hover:text-orange-500 transition-colors duration-200" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
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
                      {t(item.key)}
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
                        {dropdownData[item.hasDropdown].map((dropdownItem, idx) => (
                          <motion.a
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="block py-3 border-b border-gray-700 last:border-0"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className="block font-medium text-white">
                              {dropdownItem.title}
                            </span>
                            <span className="mt-1 text-sm text-gray-400">
                              {dropdownItem.description}
                            </span>
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              })}
              <div className="flex items-center space-x-4 pt-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">1-800-555-1234</span>
                </div>
                <User className="h-5 w-5" />
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
