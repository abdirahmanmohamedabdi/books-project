import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBar from './Navbar';
import HomePage from './HomePage';
import AddBook from './AddBooks';
import BookDetail from './BookDetail';
import BookLister from './BookLister';
import AuthorLister from './AuthorLister';
import AuthorDetail from './AuthorDetail';


function App() {
  const [books, setBooks] = useState([])
  const [authors, setAuthors] = useState([])
  // This state is used to make the fetch in the useEffect run again 
  // to listen for changes. When we make a change, we need the fetch to rerender
  const [toggleBook, setToggleBook] = useState(false)
  const [toggleAuthor, setTogglAuthor] = useState(false)

  useEffect(() => {
    fetch("http://localhost:9292/authors")
    .then((resp) => resp.json())
    .then((authors) => {
      setAuthors(authors)
    })
    .catch((error) => alert(error)) 
    
    fetch("http://localhost:9292/books")
    .then((resp) => resp.json())
    .then((books) => {
      setBooks(books)
    })
    .catch((error) => alert(error)) 
  }, [toggleBook, toggleAuthor])


  function onDeleteBook(id) {
    const updatedBookArray = books.filter(book => book.id != parseInt(id))
    setBooks(updatedBookArray)
  }

  return (
    <div className="bg">
      <NavBar />
      <Switch>

      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/books"> 
        <BookLister books={books} />
      </Route> 

      <Route exact path="/books/new">  
        <AddBook setBooks={setBooks} books={books} toggleBook={toggleBook} setToggleBook={setToggleBook}/>
      </Route>

      <Route path="/books/:id"> 
        <BookDetail books={books} onDeleteBook={onDeleteBook} toggleBook={toggleBook} setToggleBook={setToggleBook} toggleAuthor={toggleAuthor} setToggleAuthor={setTogglAuthor}/>
      </Route>

      <Route exact path="/authors"> 
        <AuthorLister authors={authors}/>
      </Route>    

      <Route path="/authors/:id"> 
        <AuthorDetail authors={authors}/>
      </Route>  

      

      </Switch>
    </div>
  );
}

export default App;