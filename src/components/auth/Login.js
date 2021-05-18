import React, { useRef } from "react"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import "./Login.css"
import harleyside from "../../images/harleyside.jpg"

export const Login = ({setAuthUser}) => {
    const email = useRef()
    const existDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:5002/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    setAuthUser(exists)
                    history.push("/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }
const HalfPageImg = () =>{
    return <img className="harleyside" src={harleyside} alt="oldSportser"></img>
}
    return (
        <> 
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>
            <aside className="loginSide">
            <HalfPageImg/>
            </aside>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1 className="loginSolidWords">Finding Redline</h1>
                    <h2 className="loginSolidWords">Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset className="fieldForButton">
                        <button className="submitButton"type="submit">
                            Sign in
                        </button>
                    </fieldset>
                    <Link to="/register">Not a member yet?</Link>
                </form>
            </section>
        </main>
        </>
    )
}

