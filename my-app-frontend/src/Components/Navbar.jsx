import React from 'react'
import {NavLink} from "react-router-dom";

function NavBar() {

  return (
    <nav>

      <NavLink to="/" exact>
        <button className='button1'>Kenyan-Books</button>
      </NavLink>

      <NavLink to="/books/new" exact> 
        <button className='button2'>Add Book</button>
      </NavLink>

      <NavLink to="/books" exact> 
        <button className='button3'>Book List</button>
      </NavLink>

    </nav>
  )
}

export default NavBar;