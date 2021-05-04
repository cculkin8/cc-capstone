import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import "./Post.css"
import { ReactTinyLink } from 'react-tiny-link'

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
                    <ReactTinyLink
                     cardSize="large"
                     showGraphic={true}
                     maxLine={2}
                     minLine={1}
                     url={post.mapurl}/>
                    <p className="toppostDescription"> Description: {post.description}</p>
                    <button className="toppostButton" type="button" onClick={(handleLike)}>Like</button>
                </h3>
            </div> 
        </div>
    )
}