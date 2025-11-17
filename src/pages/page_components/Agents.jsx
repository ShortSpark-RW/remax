import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Phone, Instagram } from 'lucide-react';
import staff1 from '../../assets/staff1.png'
import staff2 from '../../assets/staff2.png'

const AgentCard = ({ agent, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
    >
      {/* Agent Image */}
      <div className="relative h-48 sm:h-64 lg:h-80 bg-gray-100 overflow-hidden">
        <motion.img
          src={agent.image}
          alt={agent.name}
          className="w-full h-full object-cover object-top"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Agent Info */}
      <div className="p-3 sm:p-4 lg:p-5">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 truncate">{agent.name}</h3>
            <p className="text-xs sm:text-sm text-gray-500">{agent.title}</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-1 sm:gap-2 ml-2">
            <motion.a
              href={agent.phone}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
            </motion.a>
            <motion.a
              href={agent.instagram}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Agents = () => {
  const agents = [
    {
      id: 1,
      name: 'Devone Lane',
      title: 'Real Estate Agents',
      image: staff1,
      phone: 'tel:+1234567890',
      instagram: 'https://instagram.com'
    },
    {
      id: 2,
      name: 'Devone Lane',
      title: 'Real Estate Agents',
      image: staff2,
      phone: 'tel:+1234567890',
      instagram: 'https://instagram.com'
    },
    {
      id: 3,
      name: 'Devone Lane',
      title: 'Real Estate Agents',
      image: staff1,
      phone: 'tel:+1234567890',
      instagram: 'https://instagram.com'
    },
    {
      id: 4,
      name: 'Devone Lane',
      title: 'Real Estate Agents',
      image: staff2,
      phone: 'tel:+1234567890',
      instagram: 'https://instagram.com'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Agents</h2>
        </motion.div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {agents.map((agent, index) => (
            <AgentCard key={agent.id} agent={agent} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agents;
