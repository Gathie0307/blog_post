import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import {format} from 'date-fns';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const [posts, setPosts] = useState([]);

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setpostBody] = useState('');
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const updatedList = posts.filter((post) => post.id !== id);
    setPosts(updatedList);
    navigate('./');
  };

  useEffect(() => {
    const filteredResult = posts.filter(post =>
      ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
      ((post.title).toLowerCase()).includes(search.toLowerCase())
    )
    setSearchResults(filteredResult.reverse())
   }, [posts, search])

  const handleSubmit = (e) => {
    const id = posts.length ? posts[posts.length - 1] +1 : 1
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = {id, dateTime, title: postTitle, body: postBody}
    const addAllPosts = [...posts,  newPost]
    setPosts(addAllPosts)
    setPostTitle('')
    setpostBody('')
    navigate("/")

  };
  return (
    <div className='App'>
      <Header title='React JS Blog' />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<Home posts={searchResults} />} />
        <Route
          path='/post'
          element={<NewPost handleSubmit={handleSubmit} postBody={postBody} postTitle={postTitle} setpostBody={setpostBody} setPostTitle={setPostTitle} />}
        />
        <Route
          path='/post/:id'
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
