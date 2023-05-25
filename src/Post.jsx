import React from 'react'
import "./Post.css"

const Post = ({post:{title,body,imgUrl,establised},index}) => {
  return (
    <div className="post-container">
      <h1 className="heading">{title}</h1>
      <img className="image" src={imgUrl} alt="post" class="image" />
      <p >{body}</p>
      <div className="info">
        <h4> Establised By {title} :{establised}</h4>
      </div>
    </div>
  )
}

export default Post
