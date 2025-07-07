'use client';
import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import HeaderSkeleton from './HeaderSkeleton/HeaderSkeleton';
import LoadingAnimation from './LoadingAnimation/LoadingAnimation';
import ProfileSkeleton from './ProfileSkeleton/ProfileSkeleton';
import BenefitsSkeleton from './BenefitsSkeleton/BenefitsSkeleton';
import RewardsSkeleton from './RewardsSkeleton/RewardsSkeleton';

const LoadingScreen = () => {
  return (
    <div className="min-h-screen transition-all duration-300 dark:bg-gray-900 bg-gray-50" style={{width: '100%'}}>
      <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 py-8">

        <HeaderSkeleton />

        <ProfileSkeleton />

        <BenefitsSkeleton />

        <RewardsSkeleton />

        <LoadingAnimation />
        
      </div>
    </div>
  );
};

export default LoadingScreen;