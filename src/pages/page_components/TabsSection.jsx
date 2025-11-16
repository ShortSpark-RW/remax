/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('Abu dhabi');

  const tabs = ['Abu dhabi', 'Dubai', 'Sharjh', 'Al Ain', 'Ras Al Khaimah'];

  const locations = {
    'Abu dhabi': [
      {
        id: 1,
        name: 'Saadiyat Island',
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=500&fit=crop',
        types: ['APT', 'VI', 'TH', 'PH']
      },
      {
        id: 2,
        name: 'Al Raha Beach',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=500&fit=crop',
        types: ['APT', 'VI', 'TH', 'PH']
      },
      {
        id: 3,
        name: 'Yas Island',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=500&fit=crop',
        types: ['APT', 'VI', 'TH', 'PH']
      },
      {
        id: 4,
        name: 'Nurai Island',
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=500&fit=crop',
        types: ['APT', 'VI', 'TH', 'PH']
      }
    ],
    'Dubai': [
      {
        id: 5,
        name: 'Dubai Marina',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=500&fit=crop',
        types: ['APT', 'VI', 'TH', 'PH']
      },
      {
        id: 6,
        name: 'Downtown Dubai',
        image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=400&h=500&fit=crop',
        types: ['APT', 'VI', 'TH', 'PH']
      },
      {
        id: 7,
        name: 'Palm Jumeirah',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=500&fit=crop',
        types: ['APT', 'VI', 'TH', 'PH']
      },
      {
        id: 8,
        name: 'Business Bay',
        image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=400&h=500&fit=crop',
        types: ['APT', 'VI', 'TH', 'PH']
      }
    ],
    'Sharjah': [
      {
        id: 9,
        name: 'Al Majaz',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=500&fit=crop',
        types: ['APT', 'VI', 'TH', 'PH']
      },
      {
        id: 10,
        name: 'Al Khan',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=500&fit=crop',
        types: ['APT', 'VI', 'TH', 'PH']
      },
      {
        id: 11,
        name: 'Al Nahda',
        image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=500&fit=crop',
        types: ['APT', 'VI', 'TH', 'PH']
      },
      {
        id: 12,
        name: 'Muwaileh',
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=500&fit=crop',
        types: ['APT', 'VI', 'TH', 'PH']
      }
    ],
    'Al Ain': [
      {
        id: 13,
        name: 'Al Jimi',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=500&fit=crop',
        types: ['APT', 'VI', 'TH', 'PH']
      },
      {
        id: 14,
        name: 'Al Towayya',
        image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=400&h=500&fit=crop',
        types: ['APT', 'VI', 'TH', 'PH']
      },
      {
        id: 15,
        name: 'Al Mutawaa',
        image: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=400&h=500&fit=crop',
        types: ['APT', 'VI', 'TH', 'PH']
      },
      {
        id: 16,
        name: 'Al Khabisi',
        image: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=400&h=500&fit=crop',
        types: ['APT', 'VI', 'TH', 'PH']
      }
    ],
    'Ras Al Khaimah': [
      {
        id: 17,
        name: 'Al Hamra Village',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=500&fit=crop',
        types: ['APT', 'VI', 'TH', 'PH']
      },
      {
        id: 18,
        name: 'Mina Al Arab',
        image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=500&fit=crop',
        types: ['APT', 'VI', 'TH', 'PH']
      },
      {
        id: 19,
        name: 'Al Marjan Island',
        image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=500&fit=crop',
        types: ['APT', 'VI', 'TH', 'PH']
      },
      {
        id: 20,
        name: 'Julfar',
        image: 'https://images.unsplash.com/photo-1600566752229-250ed79470e6?w=400&h=500&fit=crop',
        types: ['APT', 'VI', 'TH', 'PH']
      }
    ]
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-start border-b border-gray-200 mb-12 overflow-x-auto">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 font-medium text-lg whitespace-nowrap relative ${
                activeTab === tab ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500"
                  layoutId="activeTab"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Location Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {locations[activeTab].map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group h-[400px]"
              >
                {/* Image */}
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <motion.h3
                    className="text-2xl font-serif font-bold mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {location.name}
                  </motion.h3>
                  
                  <motion.div
                    className="flex gap-2 flex-wrap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {location.types.map((type, idx) => (
                      <span
                        key={idx}
                        className="text-sm font-medium"
                      >
                        {type}{idx < location.types.length - 1 && ' | '}
                      </span>
                    ))}
                  </motion.div>
                </div>

                {/* Hover Effect Border */}
                <motion.div
                  className="absolute inset-0 border-4 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TabsSection;
