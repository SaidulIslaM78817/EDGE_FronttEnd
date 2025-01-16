import React from 'react';

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
      <footer className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Tagline */}
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold tracking-wide hover:text-gray-300 transition">
              BrandName
            </a>
            <p className="text-sm mt-1 text-gray-400">Innovating your digital experience.</p>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <li>
              <a href="#" className="hover:text-gray-300 transition">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <span>
            &copy; 2023 <a href="#" className="text-white hover:underline">BrandName</a>. All rights reserved.
          </span>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
