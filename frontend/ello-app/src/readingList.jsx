import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const ReadingList = ({ books, onRemove }) => (
  <List>
    {books.map((book, index) => (
      <ListItem key={index} divider>
        <ListItemText primary={book.title} secondary={book.author} />
        <Button variant="contained" color="secondary" onClick={() => onRemove(book)}>
          Remove
        </Button>
      </ListItem>
    ))}
  </List>
);

export default ReadingList;
