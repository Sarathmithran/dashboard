'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import { useTheme } from '@/app/contexts/ThemeContext';

const HeaderSkeleton = () => {

  const { darkMode } = useTheme();

  return (
    <>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <Skeleton 
              height={32} 
              width={200} 
              baseColor={darkMode ? '#374151' : '#E5E7EB'}
              highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
            />
            <Skeleton 
              height={20} 
              width={150} 
              baseColor={darkMode ? '#374151' : '#E5E7EB'}
              highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
              style={{ marginTop: '8px' }}
            />
          </div>
          <Skeleton 
            height={48} 
            width={48} 
            circle 
            baseColor={darkMode ? '#374151' : '#E5E7EB'}
            highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
          />
        </motion.div>
    </>
  )
}

export default HeaderSkeleton