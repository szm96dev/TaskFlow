import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`p-3 rounded-lg border transition-all duration-300 ease-in-out ${
        darkMode 
          ? 'bg-yellow-100 hover:bg-yellow-200 text-yellow-800 border-yellow-300' 
          : 'bg-gray-800 hover:bg-gray-700 text-gray-200 border-gray-600'
      }`}
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="flex items-center gap-2">
        {darkMode ? (
          <>
            <SunIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Light</span>
          </>
        ) : (
          <>
            <MoonIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Dark</span>
          </>
        )}
      </div>
    </button>
  );
};

export default DarkModeToggle;