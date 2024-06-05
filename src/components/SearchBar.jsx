import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <Box mb={2}>
      <TextField
        label="Search Posts"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleChange}
      />
    </Box>
  );
};

export default SearchBar;
