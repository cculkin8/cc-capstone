import React, { useState } from "react";
import {Link, useHistory} from 'react-router-dom'
import "./Post.css"
import Microlink from '@microlink/react'
export const PostCard = ({ post, deletePost, currentUser }) => {
let [clickedLike, setNumberOfLikes] = useState(0)
const history = useHistory();

const handleLike = () => {
    const numberOfLikes = ++clickedLike
    setNumberOfLikes(numberOfLikes)
  }


    return (
        <>
        {currentUser === post.userId ?
            <>
        <div className="card">
            <div className="card-content ">
                <h3>
                    <span className="postCardName">{post.name}</span>
                    <p className="postDate">Date: {post.date} Zipcode: {post.zipcode}</p>
                    <p className="linkPreview">
                        {post.mapurl ? <Microlink
                        url={post.mapurl}>
                        </Microlink>: null}
                        </p>
                    <p className="postDescription"> Description: {post.description}</p>
                    <p className="posterProfile">Posted by:<Link  to={`/profiles/${post.userId}`}>{post.user.name}</Link></p>
                    <button className="postButton" type="button" onClick={() => history.push(`posts/${post.id}/edit`)}>Edit</button>
                    <button className="postButton" type="button" onClick={() => deletePost(post.id)}>Delete</button>
                    <button className="toppostButton" type="button" onClick={(handleLike)}>Like</button>
                </h3>
            </div> 
        </div>
        </>:
        <>
                <div className="card">
            <div className="card-content ">
                <h3>
                    <span className="postCardName">{post.name}</span>
                    <p className="postDate">Date: {post.date} Zipcode: {post.zipcode}</p>
                    <p className="linkPreview">
                        {post.mapurl ? <Microlink
                        url={post.mapurl}>
                        </Microlink>: null}
                        </p>
                    <p className="postDescription"> Description: {post.description}</p>
                    <p className="posterProfile">Posted by:<Link  to={`/profiles/${post.userId}`}>{post.user.name}</Link></p>
                    <button className="postButton" type="button" onClick={() => history.push(`posts/${post.id}/edit`)}>Edit</button>
                    <button className="postButton" type="button" onClick={() => deletePost(post.id)}>Delete</button>
                    <button className="toppostButton" type="button" onClick={(handleLike)}>Like</button>
                </h3>
            </div> 
        </div>
        </>}</>
    )
}

