import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import "./Post.css"
import Microlink from '@microlink/react'

export const TopPostCard = ({ post }) => {
let [clickedLike, setNumberOfLikes] = useState(0)
const history = useHistory();

const handleLike = () => {
    const numberOfLikes = ++clickedLike
    setNumberOfLikes(numberOfLikes)
    console.log(numberOfLikes)
  }
    return (
        <div className="topPostCard">
            <div className="top-post-card-content">
                <h3>
                    <span className="postCardName">{post.name}</span>
                    <p className="postDate">Date: {post.date} Zipcode: {post.zipcode}</p>
                    <p className="linkPreview">
                        {post.mapurl ? <Microlink
                        url={post.mapurl}>
                        </Microlink>: null}
                        </p>
                    <p className="toppostDescription"> Description: {post.description}</p>
                    <button className="toppostButton" type="button" onClick={(handleLike)}>Like</button>
                </h3>
            </div> 
        </div>
    )
}