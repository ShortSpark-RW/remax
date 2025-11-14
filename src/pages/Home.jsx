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

const Home = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* <video
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          src={bgvid1}
          autoPlay
          loop
          muted
          playsInline
        /> */}
        <img
          src={background}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 container mx-auto px-4 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
            {/* Left: Hero text (left-aligned on large) */}
            <div className="lg:col-span-3 flex flex-col justify-center items-start text-white py-5">
              <div className="w-full lg:max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-[60px] text-left font-serif text-shadow-lg">
                    {t('common.hero.title1')}
                  </h1>
                  <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-[60px] text-left font-serif text-shadow-lg">
                    {t('common.hero.title2')}
                  </h1>
                  <p className="text-lg md:text-3xl mb-8 text-white text-shadow-xl max-w-2xl">
                    {t('common.hero.description')}
                  </p>
                  <p className='text-xl md:text-4xl my-10 text-white text-shadow-xl max-w-3xl'>{t('common.hero.subtitle')}</p>
                  <div className="flex space-x-4 justify-start">
                    <motion.button className='bg-orange-600 px-6 py-3 rounded-lg'>{t('common.hero.button1')}</motion.button>
                    <motion.button className='bg-gray-300/25 px-6 py-3 rounded-lg'><span className='text-white'>{t('common.hero.button2')}</span></motion.button>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right: Contact form (sticky on large screens) */}
            <div className="hidden lg:flex lg:col-span-2 items-start justify-center py-10">
              <div className="w-full max-w-lg sticky top-8">
                <ContactForm title={t('common.hero.form')} />
              </div>
            </div>
          </div>

          {/* Search Bar - fixed to bottom center of hero, with right padding on large to avoid contact form */}
          {/* <div className="absolute left-0 right-0 bottom-07 flex justify-center px-4 lg:px-24">
            <div className="w-full max-w-7xl lg:pr-72">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <HeroSearchBar />
              </motion.div>
            </div>
          </div> */}

          {/* Mobile: contact form displayed under content (so it doesn't overlap search) */}
          {/* <div className="lg:hidden mt-6">
            <div className="w-full max-w-sm mx-auto">
              <ContactForm title="Let Us Call You!" />
            </div>
          </div> */}
        </div>
      </section>

      {/* Properties Section */}
      <TabsSection />
      <ContactUsSection />
      <Companies />
      <ListPropertySection />
      <Testimonials />
      <Agents />

      
    </div>
  );
};

export default Home;
