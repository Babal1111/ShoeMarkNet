// src/components/common/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-gray-600">
          © 2024 SneakerHub. All Rights Reserved.
        </p>
        <div className="mt-4 space-x-4">
          <a href="/terms" className="text-gray-500 hover:text-gray-700">
            Terms of Service
          </a>
          <a href="/privacy" className="text-gray-500 hover:text-gray-700">
            Privacy Policy
          </a>
          <a href="/contact" className="text-gray-500 hover:text-gray-700">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;