import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';

const DarkToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Apply the saved class on page load
    const savedClasses = localStorage.getItem('htmlElementClasses');
    if (savedClasses) {
      document.documentElement.className = savedClasses;
      setIsDarkMode(savedClasses.includes('dark'));
    }
  }, []);

  const toggleClassAndStore = () => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('dark');
    const currentClasses = htmlElement.className;
    localStorage.setItem('htmlElementClasses', currentClasses);
    setIsDarkMode(currentClasses.includes('dark'));
  };

  return (
    <button onClick={toggleClassAndStore} id="toggleButton">
      {isDarkMode ? <SunIcon className="size-6 dark:text-slate-300 dark:hover:text-emerald-800" /> : <MoonIcon className="size-6 hover:text-green-600" />}
    </button>
  );
};

export default DarkToggle;