import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkToggle from "../Components/DarkMode";
import LoginPage from "../pages/LoginPage"; // Import LoginPage

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [search, setSearch] = useState("");
  const [showLogin, setShowLogin] = useState(false); // Move showLogin to Layout

  return (
    <div className="min-h-screen bg-green-50 dark:bg-emerald-950">
      {/* Header - Fixed at the top */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center p-8 dark:bg-zinc-950">
        {/* Clickable Logo */}
        <Link to="/" className="text-4xl font-bold text-green-700 mr-10 hover:text-green-800 dark:text-white transition">
          Tee BOX
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-2">
            <li>
              <Link to="/golf-courses" className="text-2xl text-gray-700 hover:text-green-600 dark:text-slate-300 dark:hover:text-emerald-800">
                Golf Courses
              </Link>
            </li>
            <span className="text-2xl dark:text-white">|</span>
            <li>
              <Link to="/hotels" className="text-2xl text-gray-700 hover:text-green-600 dark:text-slate-300 dark:hover:text-emerald-800">
                Hotel
              </Link>
            </li>
            <span className="text-2xl dark:text-white">|</span>
            <li>
              <Link to="/flights" className="text-2xl text-gray-700 hover:text-green-600 dark:text-slate-300 dark:hover:text-emerald-800">
                Flights
              </Link>
            </li>
          </ul>
          <DarkToggle /> {/* Dark Mode Toggle Button */}
        </nav>

        {/* Login Button with hover border */}
        <button 
          onClick={() => setShowLogin(true)}
          className="ml-auto px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 dark:bg-emerald-800 dark:hover:bg-emerald-900 hover:border-2 hover:border-black"
        >
          Login
        </button>

        {/* Search Bar with hover border */}
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="ml-4 px-4 py-2 border-2 border-transparent rounded-md focus:outline-none focus:ring focus:border-green-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white hover:border-2 hover:border-black"
        />
      </header>

      {/* Page Content - Padding to prevent overlap with fixed header */}
      <div className="pt-24">{children}</div>

      {/* Show Login Page When Login is Clicked */}
      {showLogin && <LoginPage onClose={() => setShowLogin(false)} />}
    </div>
  );
};

export default Layout;
