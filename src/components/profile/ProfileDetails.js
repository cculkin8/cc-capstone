import React, { useState, useEffect } from 'react';
import { getProfileById } from "../../modules/ProfileManager";
import { useParams, useHistory } from "react-router-dom"
import { firstLetterCase } from "../../modules/helpers"

export const ProfileDetail = () =>{
    const [profile, setProfile] = useState({userName: "", motorcycles: "", description: "", uri: ""});
    const [isLoading, setIsLoading] = useState(true)
   
    const { profileId } = useParams();
    const history = useHistory();

    useEffect(() =>{
        console.log("useEffect", profileId) 
        getProfileById(profileId)
            .then(profile => {
                setProfile(profile);
            }); 
            setIsLoading(false);
    }, [profileId]);
    return (
        <section className="profileDetail">
                    <h1 className="profileUserName">{firstLetterCase(profile.name)}</h1>
                    <h2 className="profileBikes">{firstLetterCase(profile.userName)}'s rides {profile.motorcycles}</h2>
                    <p className="profileDescription"> {firstLetterCase(profile.description)}</p>
                    <input className="profileSpotifyURI">{firstLetterCase(profile.userName)}'s Spotify playlist: {profile.uri}</input>
                    <button className="profileButton" type="button" onClick={() => history.push(`profiles/${profile.id}/edit`)}>Edit</button>
        </section>
    )
} 
