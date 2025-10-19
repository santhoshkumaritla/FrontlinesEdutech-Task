import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[250px] sm:min-h-[350px] md:min-h-[400px] px-4">
      <div className="relative">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-4 border-gray-200 dark:border-slate-800 border-t-blue-500 rounded-full animate-spin shadow-lg shadow-blue-500/30"></div>
        <p className="mt-3 md:mt-4 text-sm sm:text-base text-gray-600 dark:text-slate-300 text-center font-medium animate-pulse">
        </p>
      </div>
    </div>
  );
};

export default Loader;
