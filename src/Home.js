import React, { useState,useEffect } from "react";
import { PostSpotlight } from "../components/post/PostSpotlight";
import { getRandomId } from "../modules/PostManager";
import { Props } from "../components/Props";
import "./Home.css";
export const Home = () => {
    const [spotlightId, setSpotlightId] = useState(0);

    const refreshSpotlightAnimal = () =>{
        getRandomId().then(setSpotlightId);
    };
    useEffect(() => {
        refreshSpotlightAnimal();
    }, []);

return(
<>  
    <header class="headerImage">
        <img class="pageImage" src="images/motorcycleheader.jpg"/>
        </header>
        <h1 className ="solid">Finding Bliss</h1>
            <Props classname="solid" yourName={} pet={} />
            <h1>Animal Spotlight</h1>
            <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      { spotlightId && <AnimalSpotlight animalId={spotlightId} />}
      
    </>
);
};