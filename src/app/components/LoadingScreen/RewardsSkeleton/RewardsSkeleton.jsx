'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import { useTheme } from '@/app/contexts/ThemeContext';

const RewardsSkeleton = () => {

  const { darkMode } = useTheme();

  return (
    <>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl p-6 dark:bg-gray-800 bg-white shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Skeleton 
                height={56} 
                width={56} 
                circle 
                baseColor={darkMode ? '#374151' : '#E5E7EB'}
                highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
              />
              <div>
                <Skeleton 
                  height={24} 
                  width={150} 
                  baseColor={darkMode ? '#374151' : '#E5E7EB'}
                  highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
                />
                <Skeleton 
                  height={16} 
                  width={200} 
                  baseColor={darkMode ? '#374151' : '#E5E7EB'}
                  highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
                  style={{ marginTop: '8px' }}
                />
              </div>
            </div>
            <div className="text-right">
              <Skeleton 
                height={32} 
                width={80} 
                baseColor={darkMode ? '#374151' : '#E5E7EB'}
                highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
              />
              <Skeleton 
                height={16} 
                width={100} 
                baseColor={darkMode ? '#374151' : '#E5E7EB'}
                highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
                style={{ marginTop: '8px' }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col items-center space-y-4">
              <Skeleton 
                height={96} 
                width={96} 
                circle 
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
            
            <div className="space-y-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="p-4 rounded-xl dark:bg-gray-700 bg-gray-50">
                  <Skeleton 
                    height={16} 
                    width={80} 
                    baseColor={darkMode ? '#374151' : '#E5E7EB'}
                    highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
                    style={{ marginBottom: '8px' }}
                  />
                  <Skeleton 
                    height={24} 
                    width={60} 
                    baseColor={darkMode ? '#374151' : '#E5E7EB'}
                    highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
                  />
                </div>
              ))}
            </div>
            
            <div className="space-y-3">
              <Skeleton 
                height={16} 
                width={80} 
                baseColor={darkMode ? '#374151' : '#E5E7EB'}
                highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
              />
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <Skeleton 
                    height={24} 
                    width={24} 
                    circle 
                    baseColor={darkMode ? '#374151' : '#E5E7EB'}
                    highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
                  />
                  <div className="flex-1">
                    <Skeleton 
                      height={16} 
                      width={60} 
                      baseColor={darkMode ? '#374151' : '#E5E7EB'}
                      highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
                    />
                    <Skeleton 
                      height={12} 
                      width={80} 
                      baseColor={darkMode ? '#374151' : '#E5E7EB'}
                      highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
                      style={{ marginTop: '4px' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <Skeleton 
                height={16} 
                width={150} 
                baseColor={darkMode ? '#374151' : '#E5E7EB'}
                highlightColor={darkMode ? '#4B5563' : '#F3F4F6'}
              />
              <Skeleton 
                height={16} 
                width={50} 
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

export default RewardsSkeleton