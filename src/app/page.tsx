"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PlatformInfo from '@/components/shared/PlatformInfo';
import ProposalsList from '@/components/shared/ProposalsList';
import { Box } from '@mui/material';
import { useAccount } from 'wagmi';

const Home = () => {
  const { isConnected } = useAccount();

  const router = useRouter();
  const proposalsRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');


  
  useEffect(() => {
    if (isConnected) {
      router.push('/memberDashboard')
    } else {
      router.push('/');
    }
  });

  
  const handleProposalsClick = () => {
    proposalsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const proposals = [
    {
      title: "Proposal 1",
      description: "Improve community outreach",
      date: "2023-07-01",
      votes: "120",
      time: "5 days remaining"
    },
    {
      title: "Proposal 2",
      description: "Fund new development projects",
      date: "2023-07-10",
      votes: "85",
      time: "3 days remaining"
    },
    {
      title: "Proposal 3",
      description: "Implement new voting mechanisms",
      date: "2023-07-15",
      votes: "50",
      time: "7 days remaining"
    },
    {
      title: "Proposal 4",
      description: "Improve community outreach",
      date: "2023-07-01",
      votes: "120",
      time: "5 days remaining"
    },
    {
      title: "Proposal 5",
      description: "Fund new development projects",
      date: "2023-07-10",
      votes: "85",
      time: "3 days remaining"
    },
    {
      title: "Proposal 6",
      description: "Implement new voting mechanisms",
      date: "2023-07-15",
      votes: "50",
      time: "7 days remaining"
    }
  ];

  return (
    <>
      
      <main className="flex flex-col items-center bg-cover bg-center">
        <PlatformInfo onProposalsClick={handleProposalsClick} />
        <Box ref={proposalsRef} className="w-full p-8">
          <ProposalsList proposals={proposals} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </Box>
      </main>
      
    </>
  );
};

export default Home;
