import { useState } from 'react'
import './App.css'
import SearchAppBar from './search'
import CheckboxListSecondary from './list'
import { gql, useQuery } from '@apollo/client'
import BookList from './bookList'
import SearchBar from './searchBar'
import ReadingList from './readingList'
// import SearchAppBar from './searchBar'

const GET_BOOKS = gql`
  query Books{
    books {
    author,
    title,
    readingLevel,
    coverPhotoURL
  }
  }
`

function App() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [bookList, setBookList] = useState('');
  const [search, setSearch] = useState('')
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error:{error.message}</p>
  const books = data.books.filter(book => 
    book.title.toLowerCase().includes(search.toLowerCase())
  );
  const addBook = book => {
    setBookList([...bookList, book])
  }
  const removeBook = book => {
    setBookList(bookList.filter(b => b.title !== book.title))
  }
  return (
    <div>
      <SearchBar value={search} onChange={e => setSearch(e.target.value)} />
      <BookList books={books} onAdd={addBook} />
      <ReadingList books={bookList} onRemove={removeBook} />
    </div>
  )
}

export default App
