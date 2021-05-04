import React, { useState, useEffect } from "react";
import { getPostById } from "../../modules/PostManager";
import { ReactTinyLink } from 'react-tiny-link'
export const PostSpotlight = ({postId}) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    getPostById(postId).then(post => {
      setPost(post);
    });
  }, [postId]);

  return (
    <div className="post-spotlight">
      <div>
      <span className="postCardName">{post.name}</span>
                    <p className="postDate">Date: {post.date} Zipcode: {post.zipcode}</p>

                    <p className="postDescription"> Description: {post.description}</p>
      </div>
    </div>
  );
};