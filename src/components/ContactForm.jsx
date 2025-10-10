import React from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field } from 'formik';
import { contactFormSchema } from '../utils/validationSchemas';

const ContactForm = ({ title = "Let Us Call You!", className = '' }) => {
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
      className={`bg-white rounded-lg shadow-lg p-6 ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold text-gray-900 mb-6">{title}</h3>
      
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          agreeToTerms: false
        }}
        validationSchema={contactFormSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="space-y-4">
            {/* Name Field */}
            <div>
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className="input-field"
              />
              {errors.name && touched.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="input-field"
              />
              {errors.email && touched.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <Field
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="input-field"
              />
              {errors.phone && touched.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start space-x-2">
              <Field
                type="checkbox"
                name="agreeToTerms"
                id="agreeToTerms"
                className="mt-1"
              />
              <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                I agree to the{' '}
                <a href="#" className="text-teal-600 hover:text-teal-700">
                  terms & conditions
                </a>
              </label>
            </div>
            {errors.agreeToTerms && touched.agreeToTerms && (
              <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </motion.button>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default ContactForm;
