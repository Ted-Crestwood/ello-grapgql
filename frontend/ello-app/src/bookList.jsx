import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const BookList = ({ books, onAdd }) => (
  <List>
    {books.map((book, index) => (
      <ListItem key={index} divider>
        <ListItemText primary={book.title} secondary={book.author} />
        <Button variant="contained" color="primary" onClick={() => onAdd(book)}>
          Add
        </Button>
      </ListItem>
    ))}
  </List>
);

export default BookList;
