import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="w-full  shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-2">
          <div className="bg-blue-700 text-white w-8 h-8 flex items-center justify-center rounded text-lg font-bold">
            F
          </div>
          <div className="leading-tight">
            <span className="block text-sm font-semibold text-blue-700">FUTURE</span>
            <span className="block text-sm font-semibold text-gray-800">DATA INSIGHTS</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 items-center font-medium text-sm">
          <Link to="/" className="text-black
           font-semibold">Home</Link>
          <div className="relative group">
            <button className="flex items-center gap-1 text-black hover:text-blue-600">
              Industries <ChevronDown size={14} />
            </button>
            {/* Dropdown goes here if needed */}
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1 text-black hover:text-blue-600">
              Media <ChevronDown size={14} />
            </button>
            {/* Dropdown goes here if needed */}
          </div>
          <Link to="/contact" className=" text-black hover:text-blue-600">Contact</Link>
          <Link to="/about" className=" text-black
          hover:text-blue-600">About Us</Link>
        </nav>

        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search for reports"
            className="rounded-full border px-4 py-1.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
