import React, { useState, useEffect } from "react"
import { updateProfile,getProfileById } from "../../modules/ProfileManager";
import { useHistory, useParams } from "react-router-dom";

export const ProfileEdit = () => {
    const [profile, setProfile] = useState({userName: "", motorcycles: "", description: "", uri: ""});
   
    const [isLoading, setIsLoading] = useState(true)
   
    const { profileId } = useParams();
   
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
      userId: profile.userId
    };

  updateProfile(editedProfile)
    .then(() => history.push("/profiles")
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
                        id="name"
                        value={profile.userName}
                    />
                    <label htmlFor="userBikes">Motorcycles</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={handleFieldChange}
                        id="zipcode"
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
                        id="mapurl"
                        value={profile.uri}
                    />
                </div>

                <div className="profileEditBtn">
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