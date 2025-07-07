'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Crown, 
  Gift, 
  ChevronRight, 
  Sparkles,
  Plane
} from 'lucide-react';
import { useTheme } from '@/app/contexts/ThemeContext';

const BenefitsSection = () => {

  const { darkMode } = useTheme();

  const benefits = [
    {
      id: 1,
      title: "Cashback Boost",
      description: "Get up to 5% cashback on all purchases this month",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
      cta: "Claim Now",
      badge: "Hot",
      badgeColor: "bg-red-500"
    },
    {
      id: 2,
      title: "Premium Rewards",
      description: "Unlock exclusive premium tier benefits and perks",
      icon: <Crown className="w-6 h-6" />,
      color: "from-purple-500 to-violet-600",
      cta: "Upgrade",
      badge: "Premium",
      badgeColor: "bg-purple-500"
    },
    {
      id: 3,
      title: "Travel Vouchers",
      description: "Redeem points for amazing travel experiences",
      icon: <Plane className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-600",
      cta: "View Deals",
      badge: "New",
      badgeColor: "bg-blue-500"
    },
    {
      id: 4,
      title: "Dining Rewards",
      description: "Special offers at 500+ partner restaurants",
      icon: <Gift className="w-6 h-6" />,
      color: "from-orange-500 to-red-600",
      cta: "Explore",
      badge: "Popular",
      badgeColor: "bg-orange-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mb-8"
    >
      <motion.h3 
        className="text-2xl font-bold mb-6 dark:text-white text-gray-900"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        Your Benefits
      </motion.h3>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {benefits.map((benefit) => (
          <motion.div
            key={benefit.id}
            variants={cardVariants}
            className="rounded-xl p-6 transition-all duration-300 cursor-pointer relative overflow-hidden dark:bg-gray-800 bg-white
            shadow-lg group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: darkMode 
                ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)" 
                : "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Badge */}
            <motion.div 
              className={`absolute top-4 right-4 ${benefit.badgeColor} text-white text-xs px-2 py-1 rounded-full font-medium`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            >
              {benefit.badge}
            </motion.div>

            {/* Background decoration */}
            <motion.div 
              className="absolute inset-0 opacity-5"
              initial={{ scale: 0, rotate: 45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className={`w-full h-full bg-gradient-to-br ${benefit.color}`} />
            </motion.div>

            {/* Icon */}
            <motion.div 
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
              className={`w-12 h-12 rounded-lg bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-4 text-white relative z-10`}
            >
              {benefit.icon}
              <motion.div
                className="absolute inset-0 rounded-lg bg-white opacity-20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, duration: 0.3 }}
              />
            </motion.div>

            {/* Content */}
            <motion.h4 
              className="text-lg font-semibold mb-2 dark:text-white text-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {benefit.title}
            </motion.h4>
            
            <motion.p 
              className="text-sm mb-4 dark:text-gray-300 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              {benefit.description}
            </motion.p>

            {/* CTA Button */}
            <motion.button 
              className="w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-md
              dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 bg-gray-100 text-gray-700 hover:bg-gray-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <span>{benefit.cta}</span>
              <motion.div
                animate={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.div>
            </motion.button>

            {/* Sparkle animation on hover */}
            <motion.div
              className="absolute top-4 left-4 text-yellow-400 opacity-0 group-hover:opacity-100"
              initial={{ rotate: 0, scale: 0 }}
              whileHover={{ rotate: 180, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BenefitsSection;