const remoteURL = "http://localhost:5002"

export const getProfileById = (id) => {
    return fetch(`${remoteURL}/profiles/${id}`).then(result => result.json())
};

export const getAllProfiles = () => {
return fetch(`${remoteURL}/profiles`)
.then(result => result.json())
  } 
export const remove = (id) =>{
  return fetch (`${remoteURL}/profiles/${id}`, {
  method: "Delete"
}).then(result => result.json())
};
export const addProfile = (newProfile) =>{
  return fetch (`${remoteURL}/profiles`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newProfile)
  }).then(response => response.json())
};//This is allowing the user to post directly into the database by stringifying their submitted information and making the content json applicable

export const updateProfile = (editedProfile) => {
  return fetch(`${remoteURL}/profiles/${editedProfile.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedProfile)
  }).then(data => data.json());
}//similar to adding profiles, this is just changing the selected value of any given post