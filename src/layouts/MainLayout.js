import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const MainLayout = ({ children }) => {
  return (
    <div className="bg-mesh text-gray-300 font-display overflow-hidden selection:bg-primary/30 selection:text-white">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
        <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 900">
          <path d="M-100 600 C 200 600, 400 200, 700 400 S 1100 800, 1500 500" fill="none" stroke="url(#grad1)" strokeDasharray="10 10" strokeWidth="2"></path>
          <path d="M-100 650 C 200 650, 450 250, 750 450 S 1150 850, 1550 550" fill="none" opacity="0.5" stroke="url(#grad2)" strokeWidth="1"></path>
          <defs>
            <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#6366f1"></stop>
              <stop offset="100%" stopColor="#ec4899"></stop>
            </linearGradient>
            <linearGradient id="grad2" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4"></stop>
              <stop offset="100%" stopColor="#a855f7"></stop>
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent-pink/10 rounded-full blur-[80px] animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>
      <div className="flex h-screen w-full relative z-10">
        <Sidebar />
        <main className="flex flex-col flex-1 min-w-0 overflow-hidden relative">
          <Header />
          <div className="flex-1 overflow-y-auto px-8 pb-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
