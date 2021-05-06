import React, { useState, useEffect } from "react";
import { getPostById } from "../../modules/PostManager";

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
                    <p className="toppostDate">Date: {post.date} Zipcode: {post.zipcode}</p>
                    <p className="toppostLink"><a href={post.mapurl}> Click me to find out where you're headed</a></p>
                    <p className="toppostDescription"> Description: {post.description}</p>
      </div>
    </div>
  );
};