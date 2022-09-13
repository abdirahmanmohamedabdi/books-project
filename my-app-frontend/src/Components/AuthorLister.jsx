import React, { useState, useEffect } from 'react'
import {useHistory} from "react-router-dom"
import {Link} from "react-router-dom"

function AuthorLister({ authors }) {

    const history = useHistory();


    const displayedAuthors = authors.map((author) => {
      // console.log(author)
      // debugger
      if (author.books.length > 0) {
      return <Link to={`/authors/${author.id}`}> <li  className='fontcolor, authorListPosition' key="{author.id}">{author.name}</li> </Link>
      } 
    })

  return (
    <div className=' listerPosition'>
      <h2>Authors</h2>
        {displayedAuthors}
        <br></br>
        <button 
        className='backToAuthorButton'
          onClick={() => history.push("/books")}>
          Back to Books
        </button>
    </div>
  )
}


export default AuthorLister;