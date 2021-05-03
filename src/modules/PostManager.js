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
};//This is allowing the user to post directly into the database by stringifying their submitted information and making the content json applicable

export const updatePost = (editedPost) => {
  return fetch(`${remoteURL}/posts/${editedPost.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedPost)
  }).then(data => data.json());
}//similar to adding posts, this is just changing the selected value of any given post

export const getRandomId= () =>{
  return fetch(`${remoteURL}/posts`)
  .then(result => result.json())
  .then(post => {
    const randomIndex = Math.floor(Math.random() * post.length);
    const randomPost = post[randomIndex];
    return randomPost.id;
  })
}