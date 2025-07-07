'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import { useTheme } from '@/app/contexts/ThemeContext';

const ProfileSkeleton = () => {

  const { darkMode } = useTheme();

  return (
    <>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl p-6 mb-8 dark:bg-gray-800 bg-white shadow-xl">
          <div className="flex items-center space-x-6 mb-6">
            <div className="relative">
              <Skeleton 
                height={80} 
                width={80} 
                circle 
                baseColor={darkMode ? '#374151' : '#E5E7EB'}
                highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
              />
              <div className="absolute -bottom-2 -right-2">
                <Skeleton 
                  height={24} 
                  width={40} 
                  baseColor={darkMode ? '#374151' : '#E5E7EB'}
                  highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
                />
              </div>
            </div>
            <div className="flex-1">
              <Skeleton 
                height={28} 
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
              <div className="flex items-center space-x-2 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Skeleton 
                    key={i}
                    height={16} 
                    width={16} 
                    circle 
                    baseColor={darkMode ? '#374151' : '#E5E7EB'}
                    highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
                  />
                ))}
              </div>
            </div>
            <div className="hidden sm:block">
              <Skeleton 
                height={96} 
                width={96} 
                circle 
                baseColor={darkMode ? '#374151' : '#E5E7EB'}
                highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
              />
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between items-center mb-3">
              <Skeleton 
                height={16} 
                width={120} 
                baseColor={darkMode ? '#374151' : '#E5E7EB'}
                highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
              />
              <Skeleton 
                height={16} 
                width={100} 
                baseColor={darkMode ? '#374151' : '#E5E7EB'}
                highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
              />
            </div>
            <Skeleton 
              height={16} 
              width="100%" 
              baseColor={darkMode ? '#374151' : '#E5E7EB'}
              highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <Skeleton 
              height={16} 
              width={150} 
              baseColor={darkMode ? '#374151' : '#E5E7EB'}
              highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
            />
            <Skeleton 
              height={16} 
              width={120} 
              baseColor={darkMode ? '#374151' : '#E5E7EB'}
              highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
            />
          </div>
        </motion.div>
    </>
  )
}

export default ProfileSkeleton