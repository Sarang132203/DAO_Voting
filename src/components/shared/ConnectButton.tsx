"use client";

import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAccount } from 'wagmi';

const ConnectButton = () => {
  const router = useRouter();
  const pathname = usePathname()
  const { isConnected } = useAccount();

  useEffect(() => {
    if (!isConnected) {
      router.push('/');
    } else if (pathname === '/') {
      router.push('/memberDashboard');
    }
  }, [isConnected, router]);

  return (
    <div>
      <w3m-button />
    </div>
  );
};

export default ConnectButton;
