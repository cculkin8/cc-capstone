import React, { useState, useEffect } from 'react';
import { getPostById } from "../../modules/PostManager";
import { useParams, useHistory } from "react-router-dom"
import { remove } from "../../modules/PostManager"
import { firstLetterCase } from "../../modules/helpers"

export const PostDetail = () =>{
    const [post, setPost] = useState({name: "", date: "", zipcode: "",mapurl: "", description:""});
    const [isLoading, setIsLoading] = useState(true)
   
    const { postId } = useParams();
    const history = useHistory();

    useEffect(() =>{
        console.log("useEffect", postId) 
        getPostById(postId)
            .then(post => {
                setPost(post);
            }); 
            setIsLoading(false);
    }, [postId]);
    const handleDelete = () => {
        setIsLoading(true);
        remove(postId).then(() => 
        history.push("/posts")
        );
    };
    return (
        <section className="postDetail">
                    <span className="postCardName">{firstLetterCase(post.name)}</span>
                    <p className="postDateandZip">Date: {post.date} Zipcode: {post.zipcode}</p>
                    <p className="postMapURL"> Map: {firstLetterCase(post.mapurl)}</p>
                    <p className="postDescription"> Description: {firstLetterCase(post.description)}</p>
                    <p className="postUserId">User: {firstLetterCase(post.userId)}</p>
                    <button className="postButton" type="button" onClick={() => history.push(`posts/${post.id}/edit`)}>Edit</button>
                    <button className="postButton" type="button" onClick={() => handleDelete(post.id)}>Delete</button>
        </section>
    )
} 
