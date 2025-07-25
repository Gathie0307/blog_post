import React from 'react'
import { useParams,  Link} from 'react-router-dom'

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find(post => (post.id).toString() === id)
  return (
    <main className='PostPage'>
      <article className='post'>
        {post &&
        <>
          <h2>{post.title}</h2>
          <p className='postDate'></p>
        </>}
      </article>
    </main>
  )
}

export default PostPage
