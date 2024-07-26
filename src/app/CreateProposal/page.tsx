"use client";

import React from 'react';
import { useRouter } from 'next/navigation';


const CreateProposal = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1 p-8 bg-slate-100">
        {/* Content for creating a proposal goes here */}
        <h1 className="text-3xl font-bold mb-6">Create Proposal</h1>
        <p className="mb-4">
          Here you can submit a new proposal for the DAO. Please fill in the necessary details below.
        </p>
        {/* Form or any other content for creating proposals */}
      </main>
      
    </div>
  );
};

export default CreateProposal;
