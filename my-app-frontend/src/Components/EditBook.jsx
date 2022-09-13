import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function EditBook({ pickedBook, toggleBook, setToggleBook, setEditing }) {
    const [titleData, setTitleData] = useState(pickedBook.title)
    const [authorData, setAuthorData] = useState(pickedBook.author.name)
    const [descriptionData, setDescriptionData] = useState(pickedBook.description)
    const [reviewData, setreviewData] = useState(pickedBook.review)
    const [pagesData, setPagesData] = useState(pickedBook.pages)

    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault()
    
        
        const updatedBookData = {
          title: titleData, 
          author_name: authorData, 
          description: descriptionData, 
          review: reviewData, 
          pages: pagesData
        };
        console.log("updatedbookData", updatedBookData)
    
        fetch(`http://localhost:9292/books/${pickedBook.id}`, {
            method: "PATCH", 
            headers: {
              "Content-Type": "application/json"
            }, 
            body: JSON.stringify(updatedBookData), 
          })
          .then((resp) => resp.json())
          .then(() => {
            setToggleBook(!toggleBook)
          })
          .then(setEditing(false))
          .then(history.push("/books"))
          .catch((error) => alert(error));
    }

  return (
    <div>
        <h1 className='fontcolor' style={{textAlign:"center"}}>Edit book</h1>

        <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", width:"400px", margin:"auto"}}>
        <label className='fontcolor'>Title</label>
        <input 
        className='formLook'
        value={titleData}
        type="text" 
        name="title"
        onChange={(e) => setTitleData(e.target.value)}
        /><br/>
        <label className='fontcolor'>Author</label>
        <input 
        className='formLook'
        value={authorData}
        type="text" 
        name="author_name"
        onChange={(e) => setAuthorData(e.target.value)}
        /><br/>
        <label className='fontcolor'>Description</label>
        <input 
        className='formLook'
        value={descriptionData}
        type="text" 
        name="description"
        onChange={(e) => setDescriptionData(e.target.value)}
        /><br/>
        <label className='fontcolor'>Review</label>
        <input 
        className='formLook'
        value={reviewData}
        type="text" 
        name="review"
        onChange={(e) => setreviewData(e.target.value)}
        /><br/>
        <label className='fontcolor'>Pages</label>
        <input 
        className='formLook'
        value={pagesData}
        type="text" 
        name="pages"
        onChange={(e) => setPagesData(e.target.value)}
        /><br/>
        <input type="submit"></input>
        </form>
    </div>
  )
}

export default EditBook;