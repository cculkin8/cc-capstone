import React from "react";
import {useHistory} from 'react-router-dom'
import "./Profile.css"

    
export const ProfileCard = ({ profile }) => {
const history = useHistory();
    return (
        <div className="card">
            <div className="card-content ">
                <h3>
                    <h1 className="profileUserName">User: {profile.userName}</h1>
                    <h2 className="profileBikes">{profile.userName} rides {profile.motorcycles}</h2>
                    <p className="profileDescription"> About me: {profile.description}</p>
                    <input className="profileSpotifyURI">{profile.userName}'s Spotify playlist: {profile.uri}</input>
                    <button className="profileButton" type="button" onClick={() => history.push(`profiles/${profile.id}/edit`)}>Edit</button>
                </h3>
            </div>
        </div>
    )
}