import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ value, onChange }) => (
  <TextField
    label="Search Books"
    variant="outlined"
    fullWidth
    value={value}
    onChange={onChange}
  />
);

export default SearchBar;
