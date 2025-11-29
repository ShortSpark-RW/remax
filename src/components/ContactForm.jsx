/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field } from 'formik';
import { MapPin, Building, DollarSign, ChevronDown } from 'lucide-react';


const ContactForm = ({ title = "Find the Property of your choice", className = '' }) => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Contact form submitted:', values);
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
      alert('Thank you for your submission! We will contact you soon.');
    }, 1000);
  };

  return (
    <motion.div
      className={`bg-white rounded-2xl sm:rounded-[22px] shadow-lg p-4 sm:p-6 ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center my-2 sm:my-3 font-serif">{title}</h3>
      
      <Formik
        initialValues={{
          location: '',
          propertyType: '',
          maxPrice: ''
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-3 sm:space-y-4">
            {/* Location Field */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 pointer-events-none" />
                <Field
                  as="select"
                  name="location"
                  className="w-full pl-9 sm:pl-10 pr-9 sm:pr-10 py-2 sm:py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-hot-deal-maroon-800 focus:border-hot-deal-maroon-800 appearance-none bg-white text-sm sm:text-base"
                >
                <option value="">Al Reem Island, Shams Abu Dhabi</option>
                <option value="al-reem-island">Al Reem Island</option>
                <option value="shams-abu-dhabi">Shams Abu Dhabi</option>
                <option value="saadiyat-island">Saadiyat Island</option>
                <option value="yas-island">Yas Island</option>
                <option value="al-raha-beach">Al Raha Beach</option>
                <option value="masdar-city">Masdar City</option>
                <option value="al-reef">Al Reef</option>
                </Field>
              </div>
            </div>

            {/* Property Type Field */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Property type</label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 pointer-events-none" />
                <Field
                  as="select"
                  name="propertyType"
                  className="w-full pl-9 sm:pl-10 pr-9 sm:pr-10 py-2 sm:py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-hot-deal-maroon-800 focus:border-hot-deal-maroon-800 appearance-none bg-white text-sm sm:text-base"
                >
                <option value="">Apartment</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="townhouse">Townhouse</option>
                <option value="penthouse">Penthouse</option>
                <option value="studio">Studio</option>
                </Field>
              </div>
            </div>

            {/* Max Price Field */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Max Price</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 pointer-events-none" />
                <Field
                  as="select"
                  name="maxPrice"
                  className="w-full pl-9 sm:pl-10 pr-9 sm:pr-10 py-2 sm:py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-hot-deal-maroon-800 focus:border-hot-deal-maroon-800 appearance-none bg-white text-sm sm:text-base"
                >
                <option value="">AED 25,000,000</option>
                <option value="1000000">AED 1,000,000</option>
                <option value="5000000">AED 5,000,000</option>
                <option value="10000000">AED 10,000,000</option>
                <option value="25000000">AED 25,000,000</option>
                <option value="50000000">AED 50,000,000</option>
                </Field>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-hot-deal-maroon-800 hover:bg-hot-deal-maroon-900 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-colors duration-200 text-sm sm:text-base"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Searching...' : 'Search'}
            </motion.button>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default ContactForm;
