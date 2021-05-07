import React, { useState, useEffect } from "react"
import { updateProfile,getProfileById } from "../../modules/ProfileManager";
import { Link, useHistory, useParams } from "react-router-dom";

export const ProfileEdit = () => {
  const [profile, setProfile] = useState({userName: "", motorcycles: "", description: "", uri: ""});
   
    const [isLoading, setIsLoading] = useState(true)

    const { profileId } = useParams();
   
    const currentUser = (sessionStorage.getItem("Bliss_User"))

    const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...profile };
    stateToChange[evt.target.id] = evt.target.value;
    setProfile(stateToChange);
  };

  const updateExistingProfile = evt => {
    evt.preventDefault()
    setIsLoading(true);
  
    const editedProfile = {
      id: profileId,
      userName: profile.userName,
      motorcycles: profile.motorcycles,
      description: profile.description,
      uri: profile.uri
    };

    updateProfile(editedProfile)
    .then(() => history.push(`/profiles/${currentUser}`)
    )
  }
  useEffect(() => {
    getProfileById(profileId)
       .then(profile => {
         setProfile(profile);
         setIsLoading(false);
      });
  }, []);

  return (
    <>
        <form>
            <fieldset>
            <div className="formgrid">
                <label htmlFor="userName">User Name</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={handleFieldChange}
                        id="userName"
                        value={profile.userName}
                    />
                    <label htmlFor="userBikes">Motorcycles</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={handleFieldChange}
                        id="motorcycles"
                        value={profile.motorcycles}
                    />
                    <label htmlFor="description">About you</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={handleFieldChange}
                        id="description"
                        value={profile.description}
                    />
                    <label htmlFor="spotify">Put your Spotify playlist URI here</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={handleFieldChange}
                        id="uri"
                        value={profile.uri}
                    />
                </div>

                <div className="profilePostBtn">
                    <button 
                        type="button"
                        disabled={isLoading}
                        onClick={updateExistingProfile}
                    >Submit</button>

                </div>
            </fieldset>
        </form>
    </>
)
};