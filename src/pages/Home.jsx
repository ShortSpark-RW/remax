/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import AgentCard from '../components/AgentCard';
import ContactForm from '../components/ContactForm';
import HeroSearchBar from '../components/HeroSearchBar';
import background from '../assets/background-main.png';
import background2 from '../assets/background2.jpeg';
import background3 from '../assets/abuadhabi.png';
import bgvid1 from '../assets/bgvid1.mp4';
import { useTranslation } from 'react-i18next'; 
import TabsSection from './page_components/TabsSection';
import ContactUsSection from './page_components/ContactUsSection';
import Companies from './page_components/Companies';
import ListPropertySection from './page_components/ListPropertySection';
import Testimonials from './page_components/Testimonials';
import Agents from './page_components/Agents';
import MortgageCalculator from '../components/MortgageCalculator';

const Home = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={background}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 lg:gap-12 h-full min-h-screen py-8 sm:py-12 lg:py-16">
            {/* Left: Hero text */}
            <div className="xl:col-span-3 flex flex-col justify-center items-start text-white">
              <div className="w-full max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-4 sm:space-y-6 lg:space-y-8"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-left font-serif text-shadow-lg">
                    {t('common.hero.title1')}
                  </h1>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-left font-serif text-shadow-lg">
                    {t('common.hero.title2')}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white text-shadow-xl max-w-3xl">
                    {t('common.hero.description')}
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white text-shadow-xl max-w-4xl">
                    {t('common.hero.subtitle')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.button 
                      className="bg-hot-deal-maroon-900 hover:bg-hot-deal-maroon-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-medium transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {t('common.hero.button1')}
                    </motion.button>
                    <motion.button 
                      className="bg-gray-300/25 hover:bg-gray-300/35 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-medium transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-white">{t('common.hero.button2')}</span>
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="xl:col-span-2 flex items-center justify-center">
              <div className="w-full max-w-lg">
                <ContactForm title={t('common.hero.form')} />
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Properties Section */}
      <TabsSection />
      <MortgageCalculator />
      <ContactUsSection />
      <Companies />
      <ListPropertySection />
      <Testimonials />
      <Agents />

      
    </div>
  );
};

export default Home;
