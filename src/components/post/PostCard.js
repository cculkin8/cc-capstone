import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import "./Post.css"
import { ReactTinyLink } from 'react-tiny-link'

export const PostCard = ({ post, deletePost }) => {
let [clickedLike, setNumberOfLikes] = useState(0)
const history = useHistory();

const handleLike = () => {
    const numberOfLikes = ++clickedLike
    setNumberOfLikes(numberOfLikes)
    console.log(numberOfLikes)
  }
    return (
        <div className="postcard">
            <div className="post-card-content">
                <h3>
                    <span className="postCardName">{post.name}</span>
                    <p className="postDate">Date: {post.date} Zipcode: {post.zipcode}</p>
                    <ReactTinyLink
                     cardSize="large"
                     showGraphic={true}
                     maxLine={2}
                     minLine={1}
                     url={post.mapurl}/>
                    <p className="postDescription"> Description: {post.description}</p>
                    <p className="postCredit">Posted by: {post.userId} </p>
                    <button className="postButton" type="button" onClick={() => history.push(`posts/${post.id}/edit`)}>Edit</button>
                    <button className="postButton" type="button" onClick={() => deletePost(post.id)}>Delete</button>
                    <button className="postButton" type="button" onClick={(handleLike)}>Like</button>
                </h3>
            </div> 
        </div>
    )
}