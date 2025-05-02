import Header from './Header';
import Nav from './Nav';
import Home from './Home'
import Footer from './Footer';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import {Route, Routes, useHistory, BrowserRouter} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <div className="App">
      <Header title="React JS Blog"/>
      <Nav />
      <Switch>
        <Route exact path="/">
         <Home />
        </Route>
        <Route exact path="/post">
          <NewPost />
        </Route>
        <Route path="/post/:id">
         <PostPage />
        </Route>
        <Route path="/about" component={About} />
        <Route path="*" component={Missing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
