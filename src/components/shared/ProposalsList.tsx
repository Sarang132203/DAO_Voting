"use client";

import React from 'react';
import { TextField, Box, Grid, InputAdornment, IconButton } from '@mui/material';
import { FaSearch } from 'react-icons/fa';

const ProposalCard = ({ title, description, date, votes, time }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between h-full">
    <div className="mb-4">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
    </div>
    <div className="text-sm text-gray-500 mt-auto">
      <p>Created on: {date}</p>
      <p>Active votes: {votes}</p>
      <p>Pending time: {time}</p>
    </div>
  </div>
);

const ProposalsList = ({ proposals, searchQuery, setSearchQuery }) => {
  const filteredProposals = proposals.filter(proposal =>
    proposal.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="p-8">
      <h2 className="text-3xl md:text-5xl text-black font-bold mb-4">
        Active Proposals
      </h2>
      <Box className="mb-8">
        <TextField
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by Title"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <FaSearch />
                </IconButton>
              </InputAdornment>
            ),
            style: { borderRadius: 20, height: '40px' }
          }}
          sx={{ width: { xs: '100%', sm: 'auto' } }}
        />
      </Box>
      <Grid container spacing={4}>
        {filteredProposals.map((proposal, index) => (
          <Grid item xs={12} md={4} key={index}>
            <ProposalCard {...proposal} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default ProposalsList;
