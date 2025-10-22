import React from 'react';
import DarkModeToggle from './DarkModeToggle.jsx';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-3 sm:mb-4 lg:mb-6">
      <div className="text-center sm:text-left">
        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white">
          TaskFlow
        </h1>
        <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400">
          Streamline your productivity
        </p>
      </div>
      <div className="flex justify-center sm:justify-end">
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
};

export default Header;
