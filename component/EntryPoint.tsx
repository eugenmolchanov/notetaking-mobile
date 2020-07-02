import {useState} from "react";
import MainPage from "./MainPage";
import * as React from "react";
import AuthPage from "./AuthPage";

const EntryPoint = () => {
    const [isAuthenticated, setIsAuthenticated] = useState();

    return isAuthenticated ?
        <MainPage/> :
        <AuthPage/>
}

export default EntryPoint;
