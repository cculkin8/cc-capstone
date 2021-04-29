import React, { useState, useEffect } from 'react';
import { ProfileCard } from './xProfileCard';
import { getAllProfiles, remove } from '../../modules/ProfileManager';
import { useHistory } from "react-router-dom";


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
      <div className="container-cards">
        {profiles.map(profile => 
          <ProfileCard
            key={profile.id} profile={profile}
            deleteProfile={deleteProfile}/>)}
        </div>
        </section>
    </>
    );
};