import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white shadow-md">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Brand Logo"
            />
            <span className="text-2xl font-bold">BrandName</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden flex items-center p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            aria-controls="navbar-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Pricing</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>

        {/* Dropdown Menu */}
        <div
          id="navbar-menu"
          className="hidden bg-white text-gray-800 md:hidden"
        >
          <ul className="space-y-2 p-4">
            <li>
              <a href="#" className="block py-2 hover:text-purple-600">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-purple-600">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-purple-600">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-purple-600">Pricing</a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-purple-600">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
