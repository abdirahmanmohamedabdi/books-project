import React, { useState, useEffect  } from "react"
import {useParams, useHistory} from "react-router-dom"

import EditBook from "./EditBook"

function BookDetail({ books, onDeleteBook, toggleBook, setToggleBook, toggleAuthor, setToggleAuthor }) {
  const [pickedBook, setPickedBook] = useState({
    title: "", 
    description: "", 
    author: {name: ""},
    review: "",
    pages: 0
  })
  const [editing, setEditing] = useState(false)
  
 
  const history = useHistory();
  let {id} = useParams()

  useEffect(() => {
    const book = books.find((b => b.id == id))
    if (book) {
      setPickedBook(book)
    } else {
      setPickedBook({
        title: "", 
        description: "", 
        author: {name: ""},
        review: "", 
        pages: 0
      })
    }
    
  }, [toggleBook, books])

  // fetch for deleting an object
  function handleDelete() {
    fetch(`http://localhost:9292/books/${id}`, {
      method: "DELETE"
    })
    .then((resp) => resp.json())
    .then(() => {
      onDeleteBook(id)
      setToggleAuthor(!toggleAuthor)
      history.push("/books")
    })
    .catch((error) => alert(error));
  }


  if (editing) {
    return <EditBook pickedBook={pickedBook} toggleBook={toggleBook} setToggleBook={setToggleBook} setEditing={setEditing}/>
  } else {
    return (
      <div className='listerPosition fontcolor'>
        <h1>BookDetail</h1>
        <li>Title: {pickedBook.title}</li>
        <li>Author: {pickedBook.author.name}</li>
        <li>Description: {pickedBook.description}</li>
        <li>Review: {pickedBook.review}</li>
        <li>Pages: {pickedBook.pages}</li>
        <br></br>
        <button
          className="backButton"
          onClick={() => history.push("/books")}>
          Back
        </button>
        <button className="editButton" onClick={() => setEditing(true)}>
          Edit
        </button>
        <button className="deleteButton" onClick={handleDelete}>
          Delete
        </button>
      </div>
    )
  }
}

export default BookDetail;