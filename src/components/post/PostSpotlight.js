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
                    <p className="postDate">Date: {post.date} Zipcode: {post.zipcode}</p>
                    <ReactTinyLink
                     cardSize="large"
                     showGraphic={true}
                     maxLine={2}
                     minLine={1}
                     url={post.mapurl}
/>
                    <p className="postDescription"> Description: {post.description}</p>
      </div>
    </div>
  );
};