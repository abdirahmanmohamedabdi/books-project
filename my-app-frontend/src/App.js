import React from "react";
import Nav from "./Navbar";
import Books from "./Components/Books";
import Home from "./Components/Home";
import "./styles.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    
    <Router>
      <div className="App">
        <Nav />
        
        <Routes>
        <Route path="/" exact element={<Main />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/books" exact element={<Books />} />
        </Routes>
      </div>
      <Route exact path="/books"> 
        <BookLister books={books} />
      </Route> 
    </Router>
    
  
  );
}
function Main() {
  return(
    <div className="Welcome">
      <h2>This is kenyan-books, a site where you can see  a list of kenyan books .Click on Books to see a list of all the books</h2>
    </div>
  )
  
}
export default App;
