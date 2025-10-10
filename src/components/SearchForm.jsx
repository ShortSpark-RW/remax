import React from 'react';
import { motion } from 'framer-motion';
import { Search, Plus } from 'lucide-react';
import { Formik, Form, Field } from 'formik';
import { searchFormSchema } from '../utils/validationSchemas';

const SearchForm = ({ onSearch, className = '' }) => {
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
    if (onSearch) {
      onSearch(values);
    }
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  return (
    <motion.div
      className={`bg-white rounded-lg shadow-lg p-6 ${className}`}
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
          <Form>
            {/* Basic Search Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <Field
                  as="select"
                  name="location"
                  className="select-field"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </Field>
                {errors.location && touched.location && (
                  <p className="text-red-500 text-sm mt-1">{errors.location}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <Field
                  as="select"
                  name="propertyType"
                  className="select-field"
                >
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </Field>
                {errors.propertyType && touched.propertyType && (
                  <p className="text-red-500 text-sm mt-1">{errors.propertyType}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <Field
                  as="select"
                  name="status"
                  className="select-field"
                >
                  {propertyStatus.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </Field>
                {errors.status && touched.status && (
                  <p className="text-red-500 text-sm mt-1">{errors.status}</p>
                )}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <Field
                as="select"
                name="priceRange"
                className="select-field max-w-xs"
              >
                {priceRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </Field>
              {errors.priceRange && touched.priceRange && (
                <p className="text-red-500 text-sm mt-1">{errors.priceRange}</p>
              )}
            </div>

            {/* Search Button */}
            <div className="flex items-center justify-between">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Search className="h-4 w-4" />
                <span>{isSubmitting ? 'Searching...' : 'Search'}</span>
              </motion.button>

              <motion.button
                type="button"
                className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus className="h-4 w-4" />
                <span>Looking for certain features</span>
              </motion.button>
            </div>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default SearchForm;
