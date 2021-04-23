import React, { useState, useEffect } from "react"
import { updatePost,getPostById } from "../../modules/PostManager";
import { useHistory, useParams } from "react-router-dom";

export const PostEditForm = () => {
    const [post, setPost] = useState({name: "", zipcode: "",mapurl: "", description: ""});
   
    const [isLoading, setIsLoading] = useState(true)
   
    const { postId } = useParams();
   
    const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...post };
    stateToChange[evt.target.id] = evt.target.value;
    setPost(stateToChange);
  };

  const updateExistingPost = evt => {
    evt.preventDefault()
    setIsLoading(true);
  
    const editedPost = {
      id: postId,
      name: post.name,
      zipcode: post. zipcode,
      mapurlId: post.mapurlId,
      userId: post.userId
    };

  updatePost(editedPost)
    .then(() => history.push("/posts")
    )
  }
  useEffect(() => {
   getPostById(postId)
      .then(post => {
        setPost(post);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={handleFieldChange}
                        id="name"
                        value={post.name}
                    />
                    <label htmlFor="name">Post name</label>

                    <input
                        type="date"
                        required
                        className="form-control"
                        onChange={handleFieldChange}
                        id="date"
                        value={post.date}
                    />
                    <label htmlFor="date">Date</label>
                    
                    <input
                        type="zipcode"
                        required
                        className="form-control"
                        onChange={handleFieldChange}
                        id="zipcode"
                        />
                    <lable htmlFor="zipcode">Zipcode</lable>

                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={handleFieldChange}
                        id="postMapURL"
                        value={post.mapurl}
                    />
                    <label htmlFor="mapurl">Map URL</label>

                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={handleFieldChange}
                        id="description"
                        value={post.description}
                        />
                    <label htmlFor="description">Description</label>
                </div>

                <div className="postEditBtn">
                    <button
                        type="button"
                        disabled={isLoading}
                        onClick={updateExistingPost}
                    >Submit</button>
                </div>
            </fieldset>
        </form>
    </>
)
};