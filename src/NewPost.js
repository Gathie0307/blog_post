import React from 'react'

const NewPost = ({handleSubmit, postTitle, postBody, setPostBody, setPostTitle}) => {
  return (
    <main className='NewPost'>
        <h2>NewPost</h2>
        <form className='newPostForm' onSubmit={handleSubmit}>
          <label htmlFor='postTitle'>Title: </label>
          <input id="postTitle" type="text" value={postTitle} onChange={(e)=> setPostTitle(e.target.value)} required />
          <label htmlFor='postBody'>Post: </label>
          <textarea id="postBody" value={postBody} rows="50" cols="40" onChange={(e) => setPostBody(e.target.value) } required />
          <button type="submit">Submit</button>
        </form>
    </main>
  )
}

export default NewPost
