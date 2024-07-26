"use client";

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ConnectButton from './ConnectButton';
import { useAccount } from 'wagmi';

const Header = () => {
  const { isConnected } = useAccount();
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="p-8 bg-zinc-50 flex items-center h-20 border-b border-black">
      <div className="text-4xl font-bold text-black ml-4">DAO</div>
      <div className="ml-auto mr-4">
        <ConnectButton />
      </div>
    </div>
  );
};

export default Header;
