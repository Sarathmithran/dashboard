'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { 
  Trophy, 
  Sparkles, 
  TrendingUp, 
  Gift,
  Star,
  Zap
} from 'lucide-react';
import { useTheme } from '@/app/contexts/ThemeContext';

const RewardPointsProgress = () => {

  const { darkMode } = useTheme();
  const [rewardPoints, setRewardPoints] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const targetPoints = 1250;
  const maxPoints = 2000;
  const rewardPercentage = (rewardPoints / maxPoints) * 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      const pointsTimer = setInterval(() => {
        setRewardPoints(prev => {
          if (prev < targetPoints) {
            return prev + 25;
          }
          clearInterval(pointsTimer);
          setIsAnimating(false);
          setShowCelebration(true);
          setTimeout(() => setShowCelebration(false), 2000);
          return targetPoints;
        });
      }, 40);
    }, 1000);

    return () => clearTimeout(timer);
  }, [targetPoints]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const milestones = [
    { points: 500, label: "Bronze", color: "text-amber-600", achieved: rewardPoints >= 500 },
    { points: 1000, label: "Silver", color: "text-gray-500", achieved: rewardPoints >= 1000 },
    { points: 1500, label: "Gold", color: "text-yellow-500", achieved: rewardPoints >= 1500 },
    { points: 2000, label: "Platinum", color: "text-purple-500", achieved: rewardPoints >= 2000 }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl relative overflow-hidden dark:bg-gray-800 bg-white shadow-xl"
      whileHover={{ scale: 1.01 }}
    >
      {/* Celebration Animation */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            className="absolute inset-0 pointer-events-none z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                initial={{ 
                  x: "50%", 
                  y: "50%",
                  scale: 0
                }}
                animate={{
                  x: `${50 + (Math.random() - 0.5) * 100}%`,
                  y: `${50 + (Math.random() - 0.5) * 100}%`,
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.div 
        variants={childVariants}
        className="flex items-center justify-between mb-6"
      >
        <div className="flex items-center space-x-4">
          <motion.div 
            className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center cursor-pointer"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            <Trophy className="w-7 h-7 text-white" />
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold dark:text-white text-gray-900">
              Reward Points
            </h3>
            <p className="text-base dark:text-gray-300 text-gray-600">
              Redeem for exclusive rewards
            </p>
          </div>
        </div>

        <div className="text-right">
          <motion.div 
            className="text-3xl font-bold dark:text-white text-gray-900"
            key={rewardPoints}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {rewardPoints.toLocaleString()}
          </motion.div>
          <div className="text-sm dark:text-gray-300 text-gray-600">
            Available Points
          </div>
        </div>
      </motion.div>

      {/* Progress Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Circular Progress */}
        <motion.div 
          variants={childVariants}
          className="flex flex-col items-center space-y-4"
        >
          <div className="w-24 h-24">
            <CircularProgressbar
              value={rewardPercentage}
              text={`${Math.round(rewardPercentage)}%`}
              styles={buildStyles({
                textSize: '16px',
                pathColor: darkMode ? '#F59E0B' : '#D97706',
                textColor: darkMode ? '#FFFFFF' : '#1F2937',
                trailColor: darkMode ? '#374151' : '#E5E7EB',
                backgroundColor: 'transparent',
                pathTransitionDuration: 2,
              })}
            />
          </div>
          <div className="text-sm font-medium dark:text-gray-300 text-gray-700">
            Tier Progress
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          variants={childVariants}
          className="space-y-4"
        >
          <div className="p-4 rounded-xl dark:bg-gray-700 bg-gray-50">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium dark:text-gray-300 text-gray-700">
                This Month
              </span>
            </div>
            <div className="text-xl font-bold dark:text-white text-gray-900">
              +{Math.floor(rewardPoints * 0.3)}
            </div>
          </div>
          
          <div className="p-4 rounded-xl dark:bg-gray-700 bg-gray-50">
            <div className="flex items-center space-x-2 mb-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium dark:text-gray-300 text-gray-700">
                Streak Bonus
              </span>
            </div>
            <div className="text-xl font-bold dark:text-white text-gray-900">
              2.5x
            </div>
          </div>
        </motion.div>

        {/* Milestones */}
        <motion.div 
          variants={childVariants}
          className="space-y-3"
        >
          <h4 className="text-sm font-medium dark:text-gray-300 text-gray-700">
            Milestones
          </h4>
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.points}
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <motion.div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  milestone.achieved 
                    ? 'bg-green-500 border-green-500' 
                    : darkMode ? 'border-gray-600' : 'border-gray-300'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {milestone.achieved && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    <Star className="w-3 h-3 text-white fill-current" />
                  </motion.div>
                )}
              </motion.div>
              <div className="flex-1">
                <div className={`text-sm font-medium ${milestone.color}`}>
                  {milestone.label}
                </div>
                <div className="text-xs dark:text-gray-400 text-gray-500">
                  {milestone.points} points
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Rewards Section */}
      <motion.div 
        variants={childVariants}
        className="border-t pt-6"
        style={{ borderColor: darkMode ? '#374151' : '#E5E7EB' }}
      >
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold dark:text-white text-gray-900">
            Available Rewards
          </h4>
          <motion.button
            className="cursor-pointer flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-lg font-medium hover:from-amber-500 hover:to-orange-600 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Gift className="w-4 h-4" />
            <span>View All</span>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "Coffee Voucher", points: 200, available: rewardPoints >= 200 },
            { name: "Premium Subscription", points: 800, available: rewardPoints >= 800 },
            { name: "Exclusive Merchandise", points: 1200, available: rewardPoints >= 1200 },
            { name: "VIP Access Pass", points: 2000, available: rewardPoints >= 2000 }
          ].map((reward, index) => (
            <motion.div
              key={reward.name}
              className={`p-4 rounded-xl border-2 transition-all ${
                reward.available 
                  ? darkMode 
                    ? 'border-amber-500 bg-amber-500/10' 
                    : 'border-amber-400 bg-amber-50'
                  : darkMode 
                    ? 'border-gray-600 bg-gray-700' 
                    : 'border-gray-200 bg-gray-50'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.1 }}
              whileHover={{ scale: reward.available ? 1.02 : 1 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h5 className={`font-medium ${
                    reward.available 
                      ? darkMode ? 'text-amber-200' : 'text-amber-700'
                      : darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {reward.name}
                  </h5>
                  <p className={`text-sm ${
                    reward.available 
                      ? darkMode ? 'text-amber-300' : 'text-amber-600'
                      : darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {reward.points} points
                  </p>
                </div>
                
                {reward.available && (
                  <motion.div
                    className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.7 + index * 0.1 }}
                  >
                    <Sparkles className="w-4 h-4 text-white" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Next Tier Progress */}
      <motion.div 
        variants={childVariants}
        className="mt-6 pt-6 border-t"
        style={{ borderColor: darkMode ? '#374151' : '#E5E7EB' }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium dark:text-gray-300 text-gray-700">
            Next Tier: Gold
          </span>
          <span className="text-sm dark:text-gray-400 text-gray-500">
            {1500 - rewardPoints} points to go
          </span>
        </div>
        
        <div className="w-full h-2 rounded-full dark:bg-gray-700 bg-gray-200">
          <motion.div
            className="h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min((rewardPoints / 1500) * 100, 100)}%` }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RewardPointsProgress;