import React, { useState, useEffect  } from "react"
import {useParams, useHistory} from "react-router-dom"

function AuthorDetail({ authors }) {
  const [pickedAuthor, setPickedAuthor] = useState({
    name: "", 
    books: []
  })


  const history = useHistory();
  let {id} = useParams()

  useEffect(() => {
    const author = authors.find((foundAuthor => foundAuthor.id == id))
    if (author) {
      setPickedAuthor(author)
    } else {
      setPickedAuthor({
        name: "", 
        books: []
      })
    }
  }, [authors])

  const displayedAuthorsBooks = pickedAuthor.books.map((book) => {
    return <li className='fontcolor, bookListPosition' key={book.
    id}>{book.title}</li>
  })


  return (
    <div className='listerPosition fontcolor'>
        <h2 className='fontcolor fixedPosition underline'>Author Info</h2>
        <li>Author name: {pickedAuthor.name}</li>
        <br></br>
        <h2 className="underline">Authors books in your list</h2>
        {displayedAuthorsBooks}
        <button
        className="backToAuthorButton"
          onClick={() => history.push("/authors")}>
          Back to Authors
        </button>
    </div>
  )
}

export default AuthorDetail;