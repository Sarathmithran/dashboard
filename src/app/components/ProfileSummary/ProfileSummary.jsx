'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Star, Zap, Crown } from 'lucide-react';

const ProfileSummary = ({ darkMode }) => {
  const [currentXP, setCurrentXP] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const user = {
    name: "Sarath TV",
    level: 24,
    maxXP: 3000,
    targetXP: 2847,
    avatar: "/assets/img/user.png"
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      const xpTimer = setInterval(() => {
        setCurrentXP(prev => {
          if (prev < user.targetXP) {
            return prev + 47;
          }
          clearInterval(xpTimer);
          setIsAnimating(false);
          return user.targetXP;
        });
      }, 30);
    }, 500);

    return () => clearTimeout(timer);
  }, [user.targetXP]);

  const xpPercentage = (currentXP / user.maxXP) * 100;

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="rounded-2xl p-6 mb-8 transition-all duration-300 hover:shadow-2xl dark:bg-gray-800 bg-white shadow-xl"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center space-x-6 mb-6">
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.img
            src={user.avatar}
            alt={user.name}
            className="w-20 h-20 rounded-full border-4 border-transparent bg-gradient-to-r from-purple-400 to-pink-400 p-0.5 cursor-pointer object-cover"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
          />
          <motion.div 
            className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full flex items-center space-x-1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
          >
            <Crown className="w-3 h-3" />
            <span>{user.level}</span>
          </motion.div>
        </motion.div>

        <div className="flex-1">
          <motion.h2 
            variants={childVariants}
            className="text-2xl font-bold dark:text-white text-gray-900"
          >
            {user.name}
          </motion.h2>
          <motion.p 
            variants={childVariants}
            className="text-lg dark:text-gray-300 text-gray-600"
          >
            Level {user.level} • Premium Member
          </motion.p>
          <motion.div 
            variants={childVariants}
            className="flex items-center space-x-2 mt-2"
          >
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </motion.div>
              ))}
            </div>
            <span className="text-sm dark:text-gray-400 text-gray-500">
              Elite Member
            </span>
          </motion.div>
        </div>

        <div className="w-24 h-24">
          <CircularProgressbar
            value={xpPercentage}
            text={`${Math.round(xpPercentage)}%`}
            styles={buildStyles({
              textSize: '16px',
              pathColor: darkMode ? '#8B5CF6' : '#6366F1',
              textColor: darkMode ? '#FFFFFF' : '#1F2937',
              trailColor: darkMode ? '#374151' : '#E5E7EB',
              backgroundColor: 'transparent',
              pathTransitionDuration: 1.5,
            })}
          />
        </div>
      </div>

      {/* XP Progress */}
      <motion.div 
        variants={childVariants}
        className="mb-4"
      >
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium dark:text-gray-300 text-gray-700">
            Experience Points
          </span>
          <motion.span 
            className="text-sm font-bold dark:text-white text-gray-900"
            key={currentXP}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {currentXP.toLocaleString()} / {user.maxXP.toLocaleString()}
          </motion.span>
        </div>
        
        <div className="w-full h-4 rounded-full overflow-hidden dark:bg-gray-700 bg-gray-200">
          <motion.div 
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 relative"
            initial={{ width: 0 }}
            animate={{ width: `${xpPercentage}%` }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          >
            <AnimatePresence>
              {isAnimating && (
                <motion.div
                  className="absolute inset-0 bg-white opacity-30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        variants={childVariants}
        className="flex items-center justify-between"
      >
        <div className="flex items-center space-x-2 text-sm">
          <Zap className="w-4 h-4 text-yellow-500" />
          <span className="dark:text-gray-300 text-gray-600">
            {user.maxXP - currentXP} XP to next level
          </span>
        </div>
        <motion.div 
          className="flex items-center space-x-1 text-sm"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="font-medium dark:text-green-400 text-green-600">
            Active Streak: 47 days
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProfileSummary;