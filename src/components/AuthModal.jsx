/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import backgroundImage from '../assets/background2.jpeg';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too short').required('Required'),
});

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const AuthModal = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [view, setView] = useState('intro'); // intro | signup | login

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="relative bg-white w-full max-w-xl rounded-xl shadow-2xl overflow-hidden mx-4"
        role="dialog"
        aria-modal="true"
      >
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          onClick={() => setOpen(false)}
          aria-label="Close dialog"
        >
          <X />
        </button>

        {view === 'intro' && (
          <div>
            <img
              src={backgroundImage}
              alt="signup"
              className="w-full h-44 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">{t('Welcome to HD')}</h3>
              <p className="text-gray-700 mb-4 text-sm md:text-base">{t('Discover curated listings, get personalised recommendations, and save your favourites — join HD for a smarter property search.')}</p>
              <ul className="text-left text-sm text-gray-600 mb-6 list-disc list-inside max-w-md mx-auto">
                <li>{t('Access exclusive listings')}</li>
                <li>{t('Receive alerts for new properties')}</li>
                <li>{t('Save and compare your favourites')}</li>
              </ul>
              <div className="flex items-center justify-center space-x-4">
                <button
                  className="px-6 py-2 bg-hot-deal-maroon-800 text-white rounded-md shadow"
                  onClick={() => setView('signup')}
                >
                  {t('Create Account')}
                </button>
                <button
                  className="px-6 py-2 bg-white border border-gray-200 rounded-md"
                  onClick={() => setView('login')}
                >
                  {t('Sign In')}
                </button>
              </div>
            </div>
          </div>
        )}

        {view === 'signup' && (
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{t('Create an account')}</h3>
            <p className="text-sm text-gray-600 mb-4">{t('Create a free HD account to shortlist properties, contact agents, and get personalised alerts.')}</p>
            <Formik
              initialValues={{ name: '', email: '', password: '' }}
              validationSchema={SignupSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                  setOpen(false);
                }, 500);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-700">{t('Name')}</label>
                    <Field name="name" className="w-full border rounded-md p-2 mt-1" />
                    <div className="text-red-500 text-sm"><ErrorMessage name="name" /></div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700">{t('Email')}</label>
                    <Field name="email" type="email" className="w-full border rounded-md p-2 mt-1" />
                    <div className="text-red-500 text-sm"><ErrorMessage name="email" /></div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700">{t('Password')}</label>
                    <Field name="password" type="password" className="w-full border rounded-md p-2 mt-1" />
                    <div className="text-red-500 text-sm"><ErrorMessage name="password" /></div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-4 py-2 bg-hot-deal-maroon-800 text-white rounded-md">
                      {t('Create Account')}
                    </button>
                    <button type="button" className="text-sm text-gray-600 underline" onClick={() => setView('login')}>
                      {t('Already have an account? Sign In')}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}

        {view === 'login' && (
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{t('Welcome back')}</h3>
            <p className="text-sm text-gray-600 mb-4">{t('Sign in to access your saved properties, messages with agents, and tailored recommendations.')}</p>
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={LoginSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                  setOpen(false);
                }, 500);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-700">{t('Email')}</label>
                    <Field name="email" type="email" className="w-full border rounded-md p-2 mt-1" />
                    <div className="text-red-500 text-sm"><ErrorMessage name="email" /></div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700">{t('Password')}</label>
                    <Field name="password" type="password" className="w-full border rounded-md p-2 mt-1" />
                    <div className="text-red-500 text-sm"><ErrorMessage name="password" /></div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-4 py-2 bg-hot-deal-maroon-800 text-white rounded-md">
                      {t('Sign In')}
                    </button>
                    <button type="button" className="text-sm text-gray-600 underline" onClick={() => setView('signup')}>
                      {t('Create Account')}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AuthModal;
