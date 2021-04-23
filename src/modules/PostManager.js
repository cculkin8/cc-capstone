const remoteURL = "http://localhost:5002"

export const getPostById = (id) => {
    return fetch(`${remoteURL}/posts/${id}`).then(result => result.json())
};

export const getAllPosts = () => {
return fetch(`${remoteURL}/posts`)
.then(result => result.json())
  } 
export const remove = (id) =>{
  return fetch (`${remoteURL}/posts/${id}`, {
  method: "Delete"
}).then(result => result.json())
};
export const addPost = (newPost) =>{
  return fetch (`${remoteURL}/posts`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newPost)
  }).then(response => response.json())
};

export const updatePost = (editedPost) => {
  return fetch(`${remoteURL}/posts/${editedPost.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedPost)
  }).then(data => data.json());
}