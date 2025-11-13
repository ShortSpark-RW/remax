/* eslint-disable no-unused-vars */
import { properties, agents, testimonials, newsArticles, features } from '../../data/sampleData';
import { useState } from 'react';

const PropertiesSection = () => {
  const [activeTab, setActiveTab] = useState('Proposed');
  
    const tabs = ['Proposed', 'Featured', 'Recent'];
  return (
    <section className="py-20 relative bg-white">
        {/* Updated diagonal separators */}
        <div className="absolute top-0 left-0 w-full h-24 bg-white transform -skew-y-2 origin-top-left z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gray-50 transform skew-y-2 origin-bottom-left z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Properties</h2>
            <p className="text-xl text-gray-600">Browse through our properties</p>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-1 shadow-md">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-md font-medium transition-colors duration-200 ${
                    activeTab === tab
                      ? 'bg-orange-600 text-white'
                      : 'text-gray-600 hover:text-teal-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Properties Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {properties.slice(0, 6).map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </motion.div>

          {/* Pagination */}
          <div className="flex justify-center">
            <div className="flex space-x-2">
              {[1, 2, 3].map((page) => (
                <motion.button
                  key={page}
                  className={`w-10 h-10 font-medium transition-colors duration-200 ${
                    page === 1
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {page}
                </motion.button>
              ))}
              <motion.button
                className="w-10 h-10 bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowRight className="h-4 w-4 mx-auto" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default PropertiesSection