/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, Plus } from 'lucide-react';
import { Formik, Form, Field } from 'formik';
import { searchFormSchema } from '../utils/validationSchemas';

const HeroSearchBar = ({ className = '' }) => {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const locations = [
    'All Locations',
    'Miami, FL',
    'New York, NY',
    'Los Angeles, CA',
    'Chicago, IL',
    'Houston, TX',
    'Phoenix, AZ',
    'Philadelphia, PA'
  ];

  const propertyTypes = [
    'All Types',
    'Single Family',
    'Apartment',
    'Condominium',
    'Townhouse',
    'Villa',
    'Commercial',
    'Office',
    'Land'
  ];

  const propertyStatus = [
    'Any',
    'For Sale',
    'For Rent',
    'Sold',
    'Pending'
  ];

  const priceRanges = [
    'Any',
    '$0 - $100,000',
    '$100,000 - $200,000',
    '$200,000 - $300,000',
    '$300,000 - $500,000',
    '$500,000 - $1,000,000',
    '$1,000,000+'
  ];

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Search values:', values);
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  return (
    <motion.div
      className={`bg-white rounded-xl shadow-2xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Formik
        initialValues={{
          location: '',
          propertyType: '',
          status: '',
          priceRange: ''
        }}
        validationSchema={searchFormSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="p-6 md:p-8">
            {/* Main Search Fields */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <div className="relative">
                  <Field
                    as="select"
                    name="location"
                    className="select-field pr-8"
                  >
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </Field>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
                {errors.location && touched.location && (
                  <p className="text-red-500 text-sm mt-1">{errors.location}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <div className="relative">
                  <Field
                    as="select"
                    name="propertyType"
                    className="select-field pr-8"
                  >
                    {propertyTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </Field>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
                {errors.propertyType && touched.propertyType && (
                  <p className="text-red-500 text-sm mt-1">{errors.propertyType}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <div className="relative">
                  <Field
                    as="select"
                    name="status"
                    className="select-field pr-8"
                  >
                    {propertyStatus.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </Field>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
                {errors.status && touched.status && (
                  <p className="text-red-500 text-sm mt-1">{errors.status}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <div className="relative">
                  <Field
                    as="select"
                    name="priceRange"
                    className="select-field pr-8"
                  >
                    {priceRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </Field>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
                {errors.priceRange && touched.priceRange && (
                  <p className="text-red-500 text-sm mt-1">{errors.priceRange}</p>
                )}
              </div>
            </div>

            {/* Search Button and Advanced Filters */}
            <div className="flex items-center justify-between">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-8 py-3 rounded-md flex items-center space-x-3 text-lg shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Search className="h-5 w-5" />
                <span>{isSubmitting ? 'Searching...' : 'Search Properties'}</span>
              </motion.button>

              <motion.button
                type="button"
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 font-medium py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus className="h-4 w-4" />
                <span>More Filters</span>
              </motion.button>
            </div>

            {/* Advanced Filters */}
            {showAdvancedFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 pt-6 border-t border-gray-200"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Min Beds
                    </label>
                    <select className="select-field">
                      <option>Any</option>
                      <option>1+</option>
                      <option>2+</option>
                      <option>3+</option>
                      <option>4+</option>
                      <option>5+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Min Baths
                    </label>
                    <select className="select-field">
                      <option>Any</option>
                      <option>1+</option>
                      <option>2+</option>
                      <option>3+</option>
                      <option>4+</option>
                      <option>5+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Min Area (sq ft)
                    </label>
                    <select className="select-field">
                      <option>Any</option>
                      <option>500+</option>
                      <option>1000+</option>
                      <option>1500+</option>
                      <option>2000+</option>
                      <option>3000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Garage
                    </label>
                    <select className="select-field">
                      <option>Any</option>
                      <option>1+</option>
                      <option>2+</option>
                      <option>3+</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default HeroSearchBar;
