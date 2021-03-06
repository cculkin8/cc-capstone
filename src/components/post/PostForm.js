import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { addPost } from "../../modules/PostManager";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export const PostForm = () => {
    const [post, setPost] = useState({name: "", zipcode: "",mapurl: "", description: "",  userId:parseInt(sessionStorage.getItem("Bliss_user"))});
const [isLoading, setIsLoading] = useState(false);
const history = useHistory();

const handleControlledInputChange = (event) => {//this is making sure that input changes will actually have an effect instead of constantly clearing the input bar
    const newPost = { ...post }
    let selectedVal = event.target.value
    if (event.target.id.includes("Id")){
        selectedVal = parseInt(selectedVal)
    }
    newPost[event.target.id] = selectedVal
    setPost(newPost)
}
const constructNewPost = evt => {
    evt.preventDefault();
    if (post.name === "" || post.zipcode === "" || post.mapurl === "" || post.description === "") {
        window.alert("Fill all fields to proceed");//This is requiring the user to fill out these specific fields to proceed
    } else {
        setIsLoading(true);
       addPost(post)
            .then(() => history.push("/posts"));
    }
}
const DropSkillOptions = [
    'Beginner', 'Intermediate', 'Advanced'
  ];
  const DropTrafficOptions = [
    'Low', 'Medium', 'High'
  ];
  const DropLengthOptions = [
    'Short', 'Average', 'Long'
  ];
return (
    <>
        <form>
            <fieldset>
                <div className="formgrid">
                <label htmlFor="name">Post name</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={handleControlledInputChange}
                        id="name"
                        value={post.name}
                    />
                    <label htmlFor="zip">Zipcode</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={handleControlledInputChange}
                        id="zipcode"
                        value={post.zipcode}
                    />
                    <label htmlFor="mapurl">Map URL</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={handleControlledInputChange}
                        id="mapurl"
                        value={post.mapurl}
                    />
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={handleControlledInputChange}
                        id="description"
                        value={post.description}
                    />
                </div>
                <Dropdown options={DropSkillOptions} placeholder="Skill Level"/>
                <Dropdown options={DropTrafficOptions} placeholder="Traffic Level"/>
                <Dropdown options={DropLengthOptions} placeholder="Length"/>
                <div className="postPostBtn">
                    <button
                        type="button"
                        disabled={isLoading}
                        onClick={constructNewPost}
                    >Submit</button>
                </div>
            </fieldset>
        </form>
    </>
)
};

