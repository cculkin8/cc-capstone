import React, { useState, useEffect } from 'react';
import { PostCard } from './PostCard';
import { getAllPosts, remove, getPostById } from '../../modules/PostManager';
import { useHistory } from "react-router-dom";


export const PostList = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    return getAllPosts().then(postsFromAPI => {
      setPosts(postsFromAPI)
    });
  };
  const deletePost = id => {
    remove(id)
    .then(() => getAllPosts().then(setPosts));
};

  useEffect(() => {
    getPosts();
  }, []);
  const history = useHistory();
  return (
    <>
    <section className="button"> 
    <button type="button"
      className="btn"
      onClick={() => {history.push("/posts/create")}}>
      Make a new post!
      </button>
      <div className="container-cards">
        {posts.map(post => 
          <PostCard
            key={post.id} post={post}
            deletePost={deletePost}/>)}
        </div>
        </section>
    </>
    );
};