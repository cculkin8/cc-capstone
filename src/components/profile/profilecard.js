import React from "react";
import {useHistory} from 'react-router-dom'

export const ProfileCard = ({ profile }) => {
const history = useHistory();
    return (
        <div className="profileCard">
            <div className="card-content ">
                <h3>
                    <h1 className="profileUserName">User: {profile.userName}</h1>
                    <h2 className="profileBikes">{profile.userName} rides {profile.motorcycles}</h2>
                    <p className="profileDescription"> About me: {profile.description}</p>
                    <aside className="profileSpotifyURI">{profile.userName}'s Spotify playlist: <p><iframe src={profile.uri} height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></p></aside>
                    <button className="profileButton" type="button" onClick={() => history.push(`profiles/${profile.id}/edit`)}>Edit</button>
                </h3>
            </div>
        </div>
    )
}
//<iframe src= width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
