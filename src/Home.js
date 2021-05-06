import React, { useState,useEffect } from "react";
import { PostSpotlight } from "./components/post/PostSpotlight";
import { getRandomId } from "./modules/PostManager";
import "./Home.css";
import {TopPostCard} from "./components/post/TopPostCards"
import motorcycleheader from"./images/motorcycleheader.jpg"
import { getAllPosts} from "./modules/PostManager";
export const Home = () => {
    const [spotlightId, setSpotlightId] = useState(0);
    const [posts, setPosts] = useState([]);
    const getPosts = () => {
        return getAllPosts().then(postsFromAPI => {
          setPosts(postsFromAPI)
        });
      };
      useEffect(() => {
        getPosts();
      }, []);
    const refreshSpotlightPost = () =>{
        getRandomId().then(setSpotlightId);
    };
    useEffect(() => {
        refreshSpotlightPost();
    }, []);
    const Header = () =>{
        return <img className="MotorcycleHeader" src={motorcycleheader} alt="header"></img>
    }
return(
<>  
    <header class="headerImage">
        <Header/>
        </header>
        <h1 className ="solid">Welcome to Finding Bliss</h1>
        <aside className="top3">
            <div className="top-post-container-cards">
                <h1 className="topCards">Our top posts!</h1>
            {posts.map(post => 
              <TopPostCard
                key={post.id} post={post}/>)}
            </div>
            </aside>
            <h1>Feeling lucky?</h1>
            <button className="refreshButton" onClick={refreshSpotlightPost}>Reload &#x27f3;</button>
      { spotlightId && <PostSpotlight postId={spotlightId} />}
    </>
);
}; 