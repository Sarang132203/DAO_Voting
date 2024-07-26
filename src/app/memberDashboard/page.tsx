"use client";

import React, {  } from 'react';
import { useRouter } from 'next/navigation';
import ConnectButton from '@/components/shared/ConnectButton';
import ProposalsList from '@/components/shared/ProposalsList';

const MemberDashboard = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const { isConnected } = useAccount();
  const router = useRouter();

  // useEffect(() => {
  //   if (isConnected) {
  //     setIsAuthenticated(true);
  //   } else {
  //     router.push('/');
  //   }
  // }, [isConnected, router]);

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
  ];

  // if (!isAuthenticated) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="flex flex-col min-h-screen w-screen bg-white text-black">
      
      <section className="flex flex-col md:flex-row justify-between items-center p-8 w-full bg-slate-100">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-5xl  font-bold text-black mb-6">Empower Your Governance with DAO</h1>
          <p className="text-lg md:text-2xl text-black mb-8">
            Join a new era of decentralized decision-making. Your vote, your voice.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => router.push('/CreateProposal')}
              className="bg-blue-500 text-white px-6 py-4 rounded-lg font-bold w-48 h-16 text-lg"
            >
              Create Proposal
            </button>
            <button
              onClick={() => router.push('/Vote')}
              className="bg-blue-500 text-white px-6 py-4 rounded-lg font-bold w-48 h-16 text-lg"
            >
              Vote
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center items-center">
          <div className="bg-blue-500 p-6 rounded-lg shadow-lg w-3/4 h-64 flex flex-col justify-center items-center">
            <p className="text-xl font-semibold text-white">Available Balance</p>
            <ConnectButton />
          </div>
        </div>
      </section>
      <div className="w-full">
        <ProposalsList proposals={proposals} searchQuery="" setSearchQuery={() => {}} />
      </div>
      
    </div>
  );
};

export default MemberDashboard;
