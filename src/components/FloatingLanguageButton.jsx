/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸', dir: 'ltr' },
  { code: 'ar', name: 'العربية', flag: '🇦🇪', dir: 'rtl' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳', dir: 'ltr' },
  {  code: 'ru', name: 'Русский', flag: '🇷🇺', dir: 'ltr'  },
];

const FloatingLanguageButton = ({ className = '' }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const current = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    document.documentElement.dir = LANGUAGES.find(l => l.code === code)?.dir || 'ltr';
    setIsOpen(false);
  };

  return (
    <div className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-50 ${className}`}>
      <div className="flex items-center">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="bg-white/70 backdrop-blur-md rounded-l-lg pr-3 py-3 flex flex-col items-start border border-teal-50 shadow-2xl"
            >
              <div className="flex items-center space-x-2 px-3 pb-2 border-b border-teal-100 w-full">
                <div className="w-8 h-8 bg-hot-deal-maroon-100 text-teal-600 rounded-full flex items-center justify-center">
                  <Globe className="h-4 w-4" />
                </div>
                <div className="text-sm font-semibold text-gray-700">Language</div>
              </div>
              <div className="flex flex-col px-1 pt-2 space-y-2">
                {LANGUAGES.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-white/60 focus:outline-none transition-all duration-150 ${lang.code === current.code ? 'bg-hot-deal-maroon-900 text-white shadow-md' : 'text-gray-700'}`}
                  >
                    <span className={`text-xl ${lang.code === current.code ? '' : ''}`}>{lang.flag}</span>
                    <span className="text-sm font-medium">{lang.name}</span>
                    {lang.code === current.code && (
                      <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">Current</span>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full bg-hot-deal-maroon-900 hover:bg-hot-deal-maroon-700 text-white shadow-lg flex items-center justify-center text-xl ml-2"
          aria-label="Language switcher"
          title={`Language: ${current.name}`}
        >
          <span>{current.flag}</span>
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingLanguageButton;
