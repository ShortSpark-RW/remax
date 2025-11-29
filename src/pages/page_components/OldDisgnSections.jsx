 
import {useState} from 'react'
import { properties, agents, testimonials, newsArticles, features } from '../../data/sampleData';

function OldDisgnSections() {
  const [featuredIndex, setFeaturedIndex] = useState(0);;
  
  const forSaleProperties = properties.filter(p => p.status === 'For Sale');
  const forRentProperties = properties.filter(p => p.status === 'For Rent');

  const nextFeatured = () => {
    setFeaturedIndex((prev) => (prev + 1) % forSaleProperties.length);
  };

  const prevFeatured = () => {
    setFeaturedIndex((prev) => (prev - 1 + forSaleProperties.length) % forSaleProperties.length);
  };
  return (
    <div>
      {/* Featured Properties Section */}
      <section className="py-20 bg-white relative">
        {/* Updated diagonal separators */}
        {/* <div className="absolute top-0 left-0 w-full h-24 bg-gray-50 transform skew-y-2 origin-top-left z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-white transform -skew-y-2 origin-bottom-left z-10"></div> */}
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-xl text-gray-600">Our handpicked properties</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={featuredIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <PropertyCard property={forSaleProperties[featuredIndex]} />
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={prevFeatured}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextFeatured}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* For Sale Section */}
      <section className="py-20 relative bg-white">
        {/* Updated diagonal separators */}
        {/* <div className="absolute top-0 left-0 w-full h-24 bg-white transform -skew-y-2 origin-top-left z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gray-50 transform skew-y-2 origin-bottom-left z-10"></div> */}
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">For Sale</h2>
            <p className="text-xl text-gray-600">Browse through our properties for sale</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {forSaleProperties.slice(0, 3).map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Rent Section */}
      <section className="py-20 bg-white relative">
        {/* Updated diagonal separators */}
        {/* <div className="absolute top-0 left-0 w-full h-24 bg-gray-50 transform skew-y-2 origin-top-left z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-white transform -skew-y-2 origin-bottom-left z-10"></div> */}
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">For Rent</h2>
            <p className="text-xl text-gray-600">Browse through our properties for rent</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {forRentProperties.slice(0, 3).map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 relative overflow-hidden">
        {/* Updated diagonal separators */}
        {/* <div className="absolute top-0 left-0 w-full h-24 bg-white transform -skew-y-2 origin-top-left z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-white transform skew-y-2 origin-bottom-left z-10"></div> */}
        
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop)'
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Looking to Buy a new property or Sell an existing one? RealHomes provides an awesome solution.
            </h2>
            <div className="flex justify-center space-x-4">
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Buy Property
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sell Property
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agents Section */}
      <section className="py-20 relative">
        {/* Diagonal separator */}
        {/* <div className="absolute top-0 left-0 w-full h-16 bg-white transform -skew-y-1 origin-top-left"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gray-50 transform skew-y-1 origin-bottom-left"></div> */}
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Agents</h2>
            <p className="text-xl text-gray-600">Meet our professional agents</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AgentCard agent={agent} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-hot-deal-maroon-900 relative">
        {/* Diagonal separators */}
        {/* <div className="absolute top-0 left-0 w-full h-16 bg-gray-50 transform skew-y-1 origin-top-left"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white transform -skew-y-1 origin-bottom-left"></div> */}
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center relative">
            {/* Decorative quotation marks */}
            <div className="absolute -top-8 -left-8 text-8xl text-white/20 font-serif">"</div>
            <div className="absolute -bottom-8 -right-8 text-8xl text-white/20 font-serif transform rotate-180">"</div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-xl text-white mb-8 leading-relaxed relative z-10">
                {testimonials[0].text}
              </blockquote>
              <div className="text-white">
                <p className="font-semibold text-lg">{testimonials[0].author}</p>
                <p className="text-teal-200">{testimonials[0].title}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="py-20 bg-white relative">
        {/* Diagonal separator */}
        {/* <div className="absolute top-0 left-0 w-full h-16 bg-white transform -skew-y-1 origin-top-left"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gray-50 transform skew-y-1 origin-bottom-left"></div> */}
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">News & Updates</h2>
            <p className="text-xl text-gray-600">Our latest news and updates</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <motion.article
                key={article.id}
                className="card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  <a
                    href={article.readMore}
                    className="text-teal-600 hover:text-teal-700 font-medium flex items-center space-x-1"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        {/* Diagonal separator */}
        {/* <div className="absolute top-0 left-0 w-full h-16 bg-gray-50 transform -skew-y-1 origin-top-left"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white transform skew-y-1 origin-bottom-left"></div> */}
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Features</h2>
            <p className="text-xl text-gray-600">Our awesome features</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Call to Action */}
      <section className="py-20 bg-hot-deal-maroon-900 relative overflow-hidden">
        {/* Diagonal separators */}
        {/* <div className="absolute top-0 left-0 w-full h-16 bg-white transform -skew-y-1 origin-top-left"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white transform skew-y-1 origin-bottom-left"></div> */}
        
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop)'
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Talk to our experts or browse through more properties.
            </h2>
            <div className="flex justify-center space-x-4">
              <motion.button
                className="bg-white text-teal-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
              <motion.button
                className="bg-white text-teal-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Properties
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white relative">
        {/* Diagonal separator */}
        {/* <div className="absolute top-0 left-0 w-full h-16 bg-hot-deal-maroon-900 transform -skew-y-1 origin-top-left"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gray-800 transform skew-y-1 origin-bottom-left"></div> */}
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600">Trusted by leading companies in the real estate industry</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
            {[
              { name: 'Partner 1', logo: '🏢' },
              { name: 'Partner 2', logo: '🏘️' },
              { name: 'Partner 3', logo: '🏗️' },
              { name: 'Partner 4', logo: '🏪' },
              { name: 'Partner 5', logo: '🏛️' }
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, opacity: 1 }}
              >
                <div className="text-4xl mb-2">{partner.logo}</div>
                <p className="text-sm text-gray-600">{partner.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default OldDisgnSections