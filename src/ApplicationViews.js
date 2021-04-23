//Author Carter Culkin
import React from "react" 
import { Route,Redirect } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import {PostList} from "./components/post/PostList";
import {PostDetail} from "./components/post/PostDetail";
import {PostForm} from "./components/post/PostForm";
import {PostEditForm} from "./components/post/PostEdit";

export const ApplicationViews = ({ isAuthenticated,setAuthUser}) => {

    return (
        <>
            <Route path="/login">
	          <Login setAuthUser={setAuthUser}/>
            </Route>
            <Route path="/register">
	          <Register setAuthUser={setAuthUser}/>
            </Route>
            <Route exact path="/posts">
	          {isAuthenticated ? <PostList /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/posts/:postId(\d+)">
              <PostDetail/>
            </Route>
            <Route exact path ="/posts/create">
              <PostForm/>
            </Route>
            <Route exact path="/posts/:postId(\d+)/edit">
              <PostEditForm />
            </Route>
        </>
    )
}