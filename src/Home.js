import React, { useState,useEffect } from "react";
import { PostSpotlight } from "./components/post/PostSpotlight";
import { getRandomId } from "./modules/PostManager";
import "./Home.css";
import motorcycleheader from"./images/motorcycleheader.jpg"
import { getAllPosts} from "./modules/PostManager";
import Microlink from '@microlink/react'
export const Home = () => {
    let [clickedLike, setNumberOfLikes] = useState(0)
    const [spotlightId, setSpotlightId] = useState(0);
    const [posts, setPosts] = useState([]);
    const handleLike = () => {
      const numberOfLikes = ++clickedLike
      setNumberOfLikes(numberOfLikes)
      console.log(numberOfLikes)
    }
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
        <h1 className ="solid">Welcome to Finding Redline</h1>
        <aside className="top3">
            <div className="topPostCard">
                <h1>Our Top Posts</h1>
            <div className="top-post-card-content">
                <h3 className="topPostCard1">
                    <span className="postCardName">Great Routes</span>
                    <p className="postZipcode">Zipcode: 28771</p>
                    <p className="linkPreview">
                        {"https://www.google.com/maps/d/u/0/viewer?msa=0&mid=1HNBhnqoHQw5tTtMMsBJElU42Khs&ll=39.98034353707616%2C-97.86134100000001&z=5" ? <Microlink
                        url={"https://www.google.com/maps/d/u/0/viewer?msa=0&mid=1HNBhnqoHQw5tTtMMsBJElU42Khs&ll=39.98034353707616%2C-97.86134100000001&z=5"}>
                        </Microlink>: null}
                        </p>
                    <p className="toppostDescription"> Description: Some of the best routes google maps has to offer</p>
                    <button className="toppostButton" type="button" onClick={(handleLike)}>Like</button>
                </h3>
                <h3 className="topPostCard2">
                    <span className="postCardName">A tour through DC</span>
                    <p className="postZipcode">Zipcode: 20166</p>
                    <p className="linkPreview">
                        {"https://www.google.com/maps/dir/Dulles+International+Airport,+Saarinen+Circle,+Dulles,+VA/Smithsonian+National+Air+and+Space+Museum,+600+Independence+Ave+SW,+Washington,+DC+20560/National+Museum+of+Natural+History,+Constitution+Avenue+Northwest,+Washington,+DC/United+States+Holocaust+Memorial+Museum,+Raoul+Wallenberg+Place+Southwest,+Washington,+DC/@38.9208356,-77.3082429,12z/data=!3m2!4b1!5s0x89b7b78371c4054d:0xe8c76fea9e5a064b!4m26!4m25!1m5!1m1!1s0x89b64740174eb057:0x8e01cb201080601d!2m2!1d-77.4565388!2d38.9531162!1m5!1m1!1s0x89b7b7837b262421:0xf8e7c937dd8ce81b!2m2!1d-77.0198679!2d38.8881601!1m5!1m1!1s0x89b7b798ecb5b2c7:0xc7edf0c4a86f75af!2m2!1d-77.0260654!2d38.8912662!1m5!1m1!1s0x89b7b7a02b10a065:0x73cf754eae741db3!2m2!1d-77.0326074!2d38.8867076!3e0" ? <Microlink
                        url={"https://www.google.com/maps/dir/Dulles+International+Airport,+Saarinen+Circle,+Dulles,+VA/Smithsonian+National+Air+and+Space+Museum,+600+Independence+Ave+SW,+Washington,+DC+20560/National+Museum+of+Natural+History,+Constitution+Avenue+Northwest,+Washington,+DC/United+States+Holocaust+Memorial+Museum,+Raoul+Wallenberg+Place+Southwest,+Washington,+DC/@38.9208356,-77.3082429,12z/data=!3m2!4b1!5s0x89b7b78371c4054d:0xe8c76fea9e5a064b!4m26!4m25!1m5!1m1!1s0x89b64740174eb057:0x8e01cb201080601d!2m2!1d-77.4565388!2d38.9531162!1m5!1m1!1s0x89b7b7837b262421:0xf8e7c937dd8ce81b!2m2!1d-77.0198679!2d38.8881601!1m5!1m1!1s0x89b7b798ecb5b2c7:0xc7edf0c4a86f75af!2m2!1d-77.0260654!2d38.8912662!1m5!1m1!1s0x89b7b7a02b10a065:0x73cf754eae741db3!2m2!1d-77.0326074!2d38.8867076!3e0"}>
                        </Microlink>: null}
                        </p>
                    <p className="toppostDescription"> Description: Some of the best routes google maps has to offer</p>
                    <button className="toppostButton" type="button" onClick={(handleLike)}>Like</button>
                </h3>
                <h3 className="topPostCard3">
                    <span className="postCardName">Through some trees</span>
                    <p className="postZipcode">Zipcode: 37205</p>
                    <p className="linkPreview">
                        {"https://www.google.com/maps/dir/36.1302698,-86.899755/36.1780399,-87.339629/@36.1712718,-87.3393665,14.25z/data=!4m14!4m13!1m10!3m4!1m2!1d-87.0551941!2d36.2341682!3s0x8864f2ae6dd6d215:0xb86cbcaa7c900186!3m4!1m2!1d-87.1027048!2d36.2434432!3s0x8864ecd98ef77a75:0x3c2c8ed656c809c6!1m0!3e0" ? <Microlink
                        url={"https://www.google.com/maps/dir/36.1302698,-86.899755/36.1780399,-87.339629/@36.1712718,-87.3393665,14.25z/data=!4m14!4m13!1m10!3m4!1m2!1d-87.0551941!2d36.2341682!3s0x8864f2ae6dd6d215:0xb86cbcaa7c900186!3m4!1m2!1d-87.1027048!2d36.2434432!3s0x8864ecd98ef77a75:0x3c2c8ed656c809c6!1m0!3e0"}>
                        </Microlink>: null}
                        </p>
                    <p className="toppostDescription"> Description: Just a fun few backroads I found while adventuring in east Nashville</p>
                    <button className="toppostButton" type="button" onClick={(handleLike)}>Like</button>
                </h3>
            </div> 
        </div>

            </aside>
            <h1>Feeling lucky?</h1>
      <div className="spotlight">{ spotlightId && <PostSpotlight postId={spotlightId} />}</div>
    </>
);
};       