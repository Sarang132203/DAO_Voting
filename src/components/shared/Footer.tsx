import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-50 p-4 flex items-center size-full h-16 border-t border-black">
      <div className="container mx-auto text-center">
        <div className="space-x-4">
          <a href="#" className="text-gray-900 hover:text-red-600">Terms of Service</a>
          <a href="#" className="text-gray-900 hover:text-red-600">Privacy Policy</a>
          <a href="#" className="text-gray-900 hover:text-red-600">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
