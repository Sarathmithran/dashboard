'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';

const BenefitsSkeleton = ({ darkMode }) => {
  return (
    <>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Skeleton 
            height={28} 
            width={200} 
            baseColor={darkMode ? '#374151' : '#E5E7EB'}
            highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
            style={{ marginBottom: '24px' }}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="rounded-xl p-6 dark:bg-gray-800 bg-white shadow-lg">
                <Skeleton 
                  height={48} 
                  width={48} 
                  baseColor={darkMode ? '#374151' : '#E5E7EB'}
                  highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
                  style={{ marginBottom: '16px' }}
                />
                <Skeleton 
                  height={20} 
                  width="80%" 
                  baseColor={darkMode ? '#374151' : '#E5E7EB'}
                  highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
                  style={{ marginBottom: '8px' }}
                />
                <Skeleton 
                  height={16} 
                  width="100%" 
                  baseColor={darkMode ? '#374151' : '#E5E7EB'}
                  highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
                  style={{ marginBottom: '16px' }}
                />
                <Skeleton 
                  height={36} 
                  width="100%" 
                  baseColor={darkMode ? '#374151' : '#E5E7EB'}
                  highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
    </>
  )
}

export default BenefitsSkeleton