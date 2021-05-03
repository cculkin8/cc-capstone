//Author Carter Culkin
import React from "react" 
import { Home } from "./Home";
import { Route,Redirect } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import {PostList} from "./components/post/PostList";
import {PostDetail} from "./components/post/PostDetail";
import {PostForm} from "./components/post/PostForm";
import {PostEditForm} from "./components/post/PostEdit";
import {ProfileList} from "./components/profile/ProfileList";
import {ProfileForm} from "./components/profile/ProfileForm";
import {ProfileEdit} from "./components/profile/ProfileEdit";
import {ProfileDetail} from "./components/profile/ProfileDetails";


export const ApplicationViews = ({ isAuthenticated,setAuthUser}) => {

    return (
        <>
            <Route exact path="/">
                <Home/>
            </Route>
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
            <Route exact path="/profiles">
	          {isAuthenticated ? <ProfileList /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/profiles/:profileId(\d+)">
              <ProfileDetail/>
            </Route>
            <Route exact path ="/profiles/create">
              <ProfileForm/>
            </Route>
            <Route exact path="/profiles/:profileId(\d+)/edit">
              <ProfileEdit />
            </Route>
        </>
    )
}