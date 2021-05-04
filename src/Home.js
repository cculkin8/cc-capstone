import React, { useState,useEffect } from "react";
import { PostSpotlight } from "./components/post/PostSpotlight";
import { getRandomId } from "./modules/PostManager";
import { PropsCompile } from "./Props";
import "./Home.css";
import motorcycleheader from"./images/motorcycleheader.jpg"
export const Home = () => {
    const [spotlightId, setSpotlightId] = useState(0);

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
        <h1 className ="solid">Finding Bliss</h1>
            <PropsCompile classname="solid" yourName={"currentUser"} motorcycle={"currentUser.motorcycle"} />
            <h1>Post Spotlight</h1>
            <button onClick={refreshSpotlightPost}>Reload &#x27f3;</button>
      { spotlightId && <PostSpotlight postId={spotlightId} />}
      
    </>
);
}; 