/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import background from '../../assets/background1.png';

const ContactUsSection = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required')
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Form submitted:', values);
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
      alert('Thank you! We will contact you soon.');
    }, 1000);
  };

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={background}
          alt="Contact Us Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image/Empty Space */}
          <div className="hidden lg:block" />

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/25 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-lg ml-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              List Your Property
            </h2>

            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                countryCode: '+250',
                phoneNumber: ''
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="space-y-6">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Field
                        type="text"
                        name="firstName"
                        className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                      />
                      {errors.firstName && touched.firstName && (
                        <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Field
                        type="text"
                        name="lastName"
                        className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                      />
                      {errors.lastName && touched.lastName && (
                        <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="flex gap-2">
                      <Field
                        as="select"
                        name="countryCode"
                        className="w-24 px-3 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                      >
                        <option value="+250">+250</option>
                        <option value="+971">+971</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                      </Field>
                      <Field
                        type="tel"
                        name="phoneNumber"
                        className="flex-1 px-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                      />
                    </div>
                    {errors.phoneNumber && touched.phoneNumber && (
                      <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-lg transition-colors duration-200 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Next'}
                  </motion.button>

                  {/* Terms & Conditions */}
                  <p className="text-xs text-gray-600 text-center">
                    By clicking Submit, you agree to our{' '}
                    <a href="#" className="text-gray-900 underline font-medium">
                      Terms & Conditions
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-gray-900 underline font-medium">
                      Privacy Policy
                    </a>
                  </p>
                </Form>
              )}
            </Formik>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
