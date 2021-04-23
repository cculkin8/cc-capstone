import { NavBar } from "./components/nav/NavBar.js"
import { ApplicationViews } from "./ApplicationViews"
import "./Bliss.css"
import React, {useState} from "react";

export const Bliss = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("Bliss_User") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("Bliss_User", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("Bliss_User") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("Bliss_User") !== null)
      }

    return (
        <>
            <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
            <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated}/>
        </>
    )
}