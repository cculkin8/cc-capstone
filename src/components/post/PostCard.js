import React from "react";
import {useHistory} from 'react-router-dom'
import "./Post.css"

    
export const PostCard = ({ post, deletepost }) => {
const history = useHistory();
    return (
        <div className="card">
            <div className="card-content ">
                <h3>
                    <span className="postCardName">{post.name}</span>
                    <p className="postDate">Date: {post.date} Zipcode: {post.zipcode}</p>
                    <p className="postMapURL"> Map: {post.mapurl}</p>
                    <p className="postDescription"> Description: {post.description}</p>
                    <p className="postUserId">User: {post.userId}</p>
                    <button className="postButton" type="button" onClick={() => history.push(`posts/${post.id}/edit`)}>Edit</button>
                    <button className="postButton" type="button" onClick={() => deletepost(post.id)}>Delete</button>
                </h3>
            </div>
        </div>
    )
}