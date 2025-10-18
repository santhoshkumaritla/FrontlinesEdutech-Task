import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-200 dark:border-slate-800 border-t-primary-500 rounded-full animate-spin shadow-lg shadow-primary-500/30"></div>
        <p className="mt-4 text-gray-600 dark:text-slate-300 text-center font-medium animate-pulse">Loading companies...</p>
      </div>
    </div>
  );
};

export default Loader;
