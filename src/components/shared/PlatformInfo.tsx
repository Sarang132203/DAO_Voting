import React from 'react';

const PlatformInfo = ({ onProposalsClick }) => (
  <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-slate-100">
    <div className="md:w-1/2 mb-8 md:mb-0">
      <h2 className="text-3xl md:text-5xl text-black font-bold mb-4">
        About Our DAO Voting Platform
      </h2>
      <p className="text-lg md:text-2xl text-black mb-8">
        Our decentralized governance platform empowers every member to participate in shaping the future. Learn more about how you can contribute and make your vote count.
      </p>
      <button
        onClick={onProposalsClick}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold w-full md:w-auto h-16 text-xl"
      >
        Proposals
      </button>
    </div>
    <div className="md:w-1/2">
      <img src="/images/image.jpeg" alt="Platform Info Image" className="w-full h-auto" />
    </div>
  </section>
);

export default PlatformInfo;
