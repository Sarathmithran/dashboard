'use client';
import React from 'react'
import { motion } from 'framer-motion';

const LoadingAnimation = () => {
  return (
    <>
        <motion.div 
          className="fixed bottom-8 right-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-full shadow-lg">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
            />
            <span className="text-sm font-medium">Loading...</span>
          </div>
        </motion.div>
    </>
  )
}

export default LoadingAnimation