import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-wide">BrandName</a>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow bg-gray-100">
        <section className="bg-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to BrandName
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Innovating your digital experience with modern solutions.
            </p>
            <a
              href="#"
              className="bg-indigo-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-600 transition"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <i className="fas fa-code text-indigo-500 text-4xl mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Feature 1</h3>
              <p className="text-gray-600">
                Build modern, scalable applications with ease.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <i className="fas fa-mobile-alt text-indigo-500 text-4xl mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Feature 2</h3>
              <p className="text-gray-600">
                Responsive design for any device.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-lg">
              <i className="fas fa-lock text-indigo-500 text-4xl mb-4"></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Feature 3</h3>
              <p className="text-gray-600">
                Advanced security to protect your data.
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-indigo-500 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to start your journey?</h2>
            <p className="text-lg mb-6">
              Contact us today and see how we can help transform your ideas.
            </p>
            <a
              href="#"
              className="bg-white text-indigo-500 py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}