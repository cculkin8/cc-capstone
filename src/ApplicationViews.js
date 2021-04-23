//Author Carter Culkin
import React, { useState } from "react" 
import { Route, Redirect } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
export const ApplicationViews = ({isAuthenticated, setAuthUser}) => {



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