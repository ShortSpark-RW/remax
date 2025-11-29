/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Grid, List, Map, Satellite } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import AgentCard from '../components/AgentCard';
import { properties, agents, propertyTypes } from '../data/sampleData';

const ListLayout = () => {
  const [sortBy, setSortBy] = useState('Date - New to Old');
  const [viewMode, setViewMode] = useState('grid');

  const locations = [
    'All Locations',
    'Miami, FL',
    'New York, NY',
    'Los Angeles, CA',
    'Chicago, IL',
    'Houston, TX'
  ];

  const propertyTypes = [
    'All Types',
    'Single Family',
    'Apartment',
    'Condominium',
    'Townhouse',
    'Villa',
    'Commercial',
    'Office'
  ];

  const propertyStatus = [
    'Any',
    'For Sale',
    'For Rent',
    'Sold'
  ];

  const sortOptions = [
    'Date - New to Old',
    'Date - Old to New',
    'Price - Low to High',
    'Price - High to Low',
    'Area - Small to Large',
    'Area - Large to Small'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-slate-800 to-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop)'
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">List Layout</h1>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-6 sm:py-8 bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-4 sm:p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <select className="select-field text-sm">
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Property Status
                </label>
                <select className="select-field text-sm">
                  {propertyStatus.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2 lg:col-span-1">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <select className="select-field text-sm">
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <motion.button
                className="btn-primary flex items-center space-x-2 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Search</span>
              </motion.button>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2">
                <span className="text-xs sm:text-sm text-gray-600">View:</span>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 sm:p-2 rounded ${viewMode === 'grid' ? 'bg-hot-deal-maroon-900 text-white' : 'bg-gray-200 text-gray-600'}`}
                >
                  <Grid className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 sm:p-2 rounded ${viewMode === 'list' ? 'bg-hot-deal-maroon-900 text-white' : 'bg-gray-200 text-gray-600'}`}
                >
                  <List className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-6 sm:py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gray-200 rounded-lg h-64 sm:h-80 lg:h-96 flex items-center justify-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Mock Map */}
            <div className="text-center">
              <Map className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-sm sm:text-base text-gray-600">Interactive Google Map</p>
              <p className="text-xs sm:text-sm text-gray-500">Miami, Florida Area</p>
            </div>

            {/* Map Controls */}
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 flex space-x-2">
              <button className="bg-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium hover:bg-gray-100">
                Map
              </button>
              <button className="bg-gray-200 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium hover:bg-gray-300">
                Satellite
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8">
            {/* Left Column - Properties */}
            <div className="xl:col-span-3">
              {/* Results Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <p className="text-sm sm:text-base text-gray-600">1 to 6 out of 13 properties</p>
                <div className="flex items-center space-x-2">
                  <span className="text-xs sm:text-sm text-gray-600">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="select-field max-w-xs text-xs sm:text-sm"
                  >
                    {sortOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Properties Grid/List */}
              <div className={`grid gap-4 sm:gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2' : 'grid-cols-1'}`}>
                {properties.slice(0, 6).map((property, index) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <PropertyCard property={property} />
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8 sm:mt-12">
                <div className="flex space-x-1 sm:space-x-2">
                  {[1, 2, 3].map((page) => (
                    <motion.button
                      key={page}
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full font-medium transition-colors duration-200 text-sm sm:text-base ${
                        page === 1
                          ? 'bg-hot-deal-maroon-900 text-white'
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {page}
                    </motion.button>
                  ))}
                  <motion.button
                    className="px-3 sm:px-4 h-8 sm:h-10 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-xs sm:text-sm">Next</span>
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="xl:col-span-1 order-first xl:order-last">
              {/* Agents Section */}
              <motion.div
                className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 sm:mb-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Agents</h3>
                <div className="space-y-3 sm:space-y-4">
                  {agents.map((agent) => (
                    <div key={agent.id} className="flex items-center space-x-3">
                      <img
                        src={agent.avatar}
                        alt={agent.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-gray-900 text-sm sm:text-base truncate">{agent.name}</p>
                        <p className="text-xs sm:text-sm text-gray-600 truncate">{agent.email}</p>
                        <p className="text-xs sm:text-sm text-gray-600">{agent.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Property Types Section */}
              <motion.div
                className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 sm:mb-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Property Types</h3>
                <div className="space-y-2">
                  {propertyTypes.map((type, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm sm:text-base text-gray-600">{type.name}</span>
                      <span className="text-xs sm:text-sm text-gray-400">({type.count})</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Featured Properties Section */}
              <motion.div
                className="bg-white rounded-lg shadow-md p-4 sm:p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Featured Properties</h3>
                <div className="space-y-3 sm:space-y-4">
                  {properties.filter(p => p.badges?.includes('Featured')).slice(0, 2).map((property) => (
                    <div key={property.id} className="flex space-x-3">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded object-cover flex-shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <h4 className="font-medium text-gray-900 text-xs sm:text-sm truncate">{property.title}</h4>
                        <p className="text-xs sm:text-sm text-gray-600">{property.bedrooms} bed, {property.bathrooms} bath</p>
                        <p className="text-xs sm:text-sm text-gray-600">{property.area} sq ft</p>
                        <p className="font-semibold text-teal-600 text-sm sm:text-base">${property.price.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListLayout;
