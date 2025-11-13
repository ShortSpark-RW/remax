/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import logo from '../assets/screen.png';
import { Formik, Form, Field } from 'formik';
import { newsletterSchema } from '../utils/validationSchemas';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'List Layout', href: '/list-layout' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const handleNewsletterSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Newsletter subscription:', values);
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
      alert('Thank you for subscribing to our newsletter!');
    }, 1000);
  };

  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Logo and Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <img src={logo} alt="EMAX Technologies" className="h-32 w-auto mr-3" />
              {/* <div>
                <h3 className="text-lg font-bold">REAL HOMES</h3>
                <p className="text-sm text-gray-400">/ Simply #1 Real Estate Theme</p>
              </div> */}
            </div>
            
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Middle Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-500 mt-0.5" />
                <span className="text-gray-300">
                  3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-500" />
                <span className="text-gray-300">+123-456-789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-500" />
                <span className="text-gray-300">sales@example.com</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Remain Updated</h4>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-gray-700 hover:bg-orange-600 transition-colors duration-200"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>

            {/* Newsletter Form */}
            <Formik
              initialValues={{ email: '' }}
              validationSchema={newsletterSchema}
              onSubmit={handleNewsletterSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="space-y-3">
                  <div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Your email address"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 transition-colors duration-200 disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? 'Signing up...' : 'Sign up'}
                  </motion.button>
                </Form>
              )}
            </Formik>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">© 2025. All rights reserved.</p>
          <p className="text-gray-400 text-sm">Designed by SHORTSPARK Ltd.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
