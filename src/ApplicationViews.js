//Author Carter Culkin
import React from "react" 
import { Route } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
export const ApplicationViews = ({ setAuthUser}) => {
//isAuthenticated,


    return (
        <>
            <Route path="/login">
	          <Login setAuthUser={setAuthUser}/>
            </Route>
            <Route path="/register">
	          <Register setAuthUser={setAuthUser}/>
            </Route>
        </>
    )
}