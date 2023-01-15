const REGISTER_URL = "/register";
import axios from "../api/axios"
import Link from "next/link";
import {useState} from "react";

export default function RegisterComponent() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [confirmedPassword, setConfirmedPassword] = useState();
    const USER_VALID = /^[A-z0-9-_]{3,23}/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}/;

    function getInput(input) {
        switch (input) {
            case "username":
                return document.getElementById("username").value
            case "password":
                return document.getElementById("password").value
            case "confirmedPassword":
                return document.getElementById("confirmedPassword").value
            default:
                console.log("error in user input")
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_VALID.test(username);
        const v2 = PWD_REGEX.test(password);
        const passwordConfirmed = password === confirmedPassword;
        if (!v1 || !v2 || !passwordConfirmed) {
            console.log(!v1
                ? "Username entspricht nicht den Anforderungen"
                : "")
            console.log(!v2
                ? "Passwort entspricht nicht den Anforderungen"
                : "")
            console.log(!passwordConfirmed
                ? "Passwörter stimmen nicht überein"
                : "")
            return;
        }

        try {
            const response = await axios.post(
                REGISTER_URL,
                JSON.stringify({username, password}),
                {
                    headers: {"Content-Type": "application/json"},
                    withCredentials: true,
                }
            );

        } catch (err) {
            if (!err?.response) {
                console.log("No Server Response");
            } else if (err.response?.status === 409) {
                console.log("Username Taken");
            } else {
                console.log("Registration Failed");
            }
        }
    };

    return (
        <>
            <div>Bitte Username und Passwort eingeben</div>
            <div>zum Registrieren bitte <Link className={"underline"} href="/register">hier</Link> klicken</div>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" id="username" onChange={() => setUserName(getInput("username"))}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" id="password" onChange={() => setPassword(getInput("password"))}/>
                </label>
                <label>
                    <p>Confirm Password</p>
                    <input type="confirmedPassword" id="confirmedPassword"
                           onChange={() => setConfirmedPassword(getInput("confirmedPassword"))}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
