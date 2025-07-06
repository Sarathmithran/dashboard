'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProfileSummary from '../ProfileSummary/ProfileSummary';
import BenefitsSection from '../BenefitsSection/BenefitsSection';
import RewardPointsProgress from '../RewardPointsProgress/RewardPointsProgress';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const isDark = storedTheme === 'dark';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen transition-all duration-300 bg-gray-50 dark:bg-gray-900"
    >
      <div className="flex flex-col w-full h-full px-6 py-8">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              CRED 
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Your dashboard
            </p>
          </div>
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </motion.div>

        <ProfileSummary darkMode={darkMode} />
        <BenefitsSection darkMode={darkMode} />
        <RewardPointsProgress darkMode={darkMode} />
      </div>
    </motion.div>
  );
};

export default Dashboard;