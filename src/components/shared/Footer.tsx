import React from 'react';

const Footer = () => {
  return (
    <footer 
      className="flex items-center justify-center h-16 px-4" 
      style={{
        backgroundImage: 'linear-gradient(to right,#8a3aee, #240046)', 
        color: 'white',
      }}
    >
      {/* <div className="space-x-4 text-center">
        <a href="#" className="hover:text-red-600">Terms of Service</a>
        <a href="#" className="hover:text-red-600">Privacy Policy</a>
        <a href="#" className="hover:text-red-600">Cookie Policy</a>
      </div> */}
    </footer>
  );
};

export default Footer;
