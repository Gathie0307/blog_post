import Header from './Header';
import Nav from './Nav';
import Home from './Home'
import Footer from './Footer';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { BrowserRouter as Router, Routes, Route , useHistory } from 'react-router-dom';
import {useState, useEffect} from 'react';


function App() {
  return (
    <div className="App">
      <Header title="React JS Blog"/>
      <Nav />
      <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/post" element={<NewPost/>} />
        <Route path="/post/:id" element={<PostPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Missing/>} />
      </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
