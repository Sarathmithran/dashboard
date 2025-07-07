'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/app/contexts/ThemeContext';

const DarkModeToggle = () => {

  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <motion.button
      onClick={toggleDarkMode}
      className={`cursor-pointer relative p-3 rounded-full transition-all duration-300 ${
        darkMode 
          ? 'bg-gray-800 text-yellow-400 shadow-lg' 
          : 'bg-white text-gray-700 shadow-lg'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ rotate: 0 }}
      animate={{ rotate: darkMode ? 180 : 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
    >
      <motion.div
        key={darkMode ? 'dark' : 'light'}
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: 180 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? (
          <Sun className="w-6 h-6" />
        ) : (
          <Moon className="w-6 h-6" />
        )}
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-full ${
          darkMode ? 'bg-yellow-400' : 'bg-gray-400'
        } opacity-20`}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.button>
  );
};

export default DarkModeToggle;