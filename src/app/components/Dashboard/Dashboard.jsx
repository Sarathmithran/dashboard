'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProfileSummary from '../ProfileSummary/ProfileSummary';
import BenefitsSection from '../BenefitsSection/BenefitsSection';
import RewardPointsProgress from '../RewardPointsProgress/RewardPointsProgress';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

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
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Your dashboard
            </p>
          </div>
          <DarkModeToggle />
        </motion.div>

        <ProfileSummary />
        <BenefitsSection />
        <RewardPointsProgress />
      </div>
    </motion.div>
  );
};

export default Dashboard;