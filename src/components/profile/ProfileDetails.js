import React, { useState, useEffect } from 'react';
import { getProfileById } from "../../modules/ProfileManager";
import { useParams, useHistory } from "react-router-dom"

export const ProfileDetail = ({currentUser}) =>{
    const [profile, setProfile] = useState({userName: "", motorcycles: "", description: "", uri: ""});
    const [isLoading, setIsLoading] = useState(true)
    const { profileId } = useParams();
    const history = useHistory();
    useEffect(() =>{
        getProfileById(profileId)
            .then(profile => {
                setProfile(profile);
            }); 
            setIsLoading(false);
    }, [profileId]);


    return (
        <>
        {currentUser === profile.userId ?
            <>
        <main>
        <section className="profileDetailSurround">
                                <h1 className="profileUserName">{profile.userName}</h1>
                    <section className="profileDetail">
                    <h2 className="profileBikes">{profile.userName} rides {profile.motorcycles}</h2>
                    <p className="profileDescription"> {profile.description}</p>
                    <aside className="profileSpotifyURI">{profile.userName}'s Spotify playlist: <p><iframe src={profile.uri} height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></p></aside>
                    <button className="profileButton" type="button" onClick={() => history.push(`/profiles/${profile.id}/edit`)}>Edit</button>
                    </section>
        </section>
        </main>
        </>:
        <>
                <main>
        <section className="profileDetailSurround">
                                <h1 className="profileUserName">{profile.userName}</h1>
                    <section className="profileDetail">
                    <h2 className="profileBikes">{profile.userName} rides {profile.motorcycles}</h2>
                    <p className="profileDescription"> {profile.description}</p>
                    <aside className="profileSpotifyURI">{profile.userName}'s Spotify playlist: <p><iframe src={profile.uri} height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></p></aside>
                    <button className="profileButton" type="button" onClick={() => history.push(`/profiles/${profile.id}/edit`)}>Edit</button>
                    </section>
        </section>
        </main>
        </>
    }
</>
    )
} 
