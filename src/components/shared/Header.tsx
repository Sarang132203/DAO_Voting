'use client';

import React from 'react';
import ConnectButton from './ConnectButton';

const Header = () => {
  return (
    <div 
      className="flex items-center justify-between h-16 px-4" 
      style={{
        backgroundImage: 'linear-gradient(to right,#8a3aee, #240046)',
        color: 'white',
      }}
    >
      
      <div className="flex items-center space-x-4">
        
        <img 
          src="/images/logo.webp" 
          alt="Logo"
          className="h-8 w-auto" 
        />
        
        <div className="text-4xl font-bold">DAO</div>
      </div>

      
      <div>
        <ConnectButton />
      </div>
    </div>
  );
};

export default Header;
