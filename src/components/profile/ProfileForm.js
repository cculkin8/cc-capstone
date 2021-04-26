import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { addProfile } from "../../modules/ProfileManager";

export const ProfileForm = () => {
    const [profile, setProfile] = useState({userName: "", motorcycles: "", description: "", uri: "",  userId:parseInt(sessionStorage.getItem("Bliss_user"))});
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

const handleFieldChange = (event) => {//this is making sure that input changes will actually have an effect instead of constantly clearing the input bar
    const newProfile = { ...profile }
    let selectedVal = event.target.value
    if (event.target.id.includes("Id")){
        selectedVal = parseInt(selectedVal)
    }
    newProfile[event.target.id] = selectedVal
    setProfile(newProfile)
}
const constructNewProfile = evt => {
    evt.preventDefault();
    if (profile.userName === "" || profile.motorcycles === "" || profile.description === "") {
        window.alert("Fill all fields to proceed");//This is requiring the user to fill out these specific fields to proceed
    } else {
        setIsLoading(true);
       addProfile(profile)
            .then(() => history.push("/profiles"));
    }
}
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

                <div className="profilePostBtn">
                    <button
                        type="button"
                        disabled={isLoading}
                        onClick={constructNewProfile}
                    >Submit</button>
                </div>
            </fieldset>
        </form>
    </>
)
};

