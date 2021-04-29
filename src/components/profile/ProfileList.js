import React, { useState, useEffect } from 'react';
import { ProfileCard } from './ProfileCard';
import { getAllProfiles, remove } from '../../modules/ProfileManager';
import { useHistory } from "react-router-dom";
import "./Profile.css"

export const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);

  const getProfiles = () => {
    return getAllProfiles().then(profilesFromAPI => {
      setProfiles(profilesFromAPI)
    });
  };
  const deleteProfile = id => {
    remove(id)
    .then(() => getAllProfiles().then(setProfiles));
};

  useEffect(() => {
    getProfiles();
  }, []);
  const history = useHistory();
  return (
    <>
    <section className="button"> 
    <button type="button"
      className="btn"
      onClick={() => {history.push("/profiles/create")}}>
      Create your profile!
      </button>
      <div className="profile-container-cards">
        {profiles.map(profile => 
          <ProfileCard
            key={profile.id} profile={profile}
            deleteProfile={deleteProfile}/>)}
        </div>
        </section>
    </>
    );
};