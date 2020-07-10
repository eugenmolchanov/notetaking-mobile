import MainPage from "./MainPage";
import * as React from "react";
import AuthPage from "./AuthPage";
import {connect} from "react-redux";
import {AppState} from "./Types";
import Spinner from "./Spinner";

interface EntryPointProps {
    isAuthenticating: boolean,
    isAuthenticated: boolean,
}

const EntryPoint = (props: EntryPointProps) => {
    return props.isAuthenticated ?
            <MainPage/> :
            <AuthPage/>;
}

const mapStateToProps = ({ entryPoint }: AppState) => {
    return {
        isAuthenticated: entryPoint.isAuthenticated,
        isAuthenticating: entryPoint.isAuthenticating,
    }
}

export default connect(mapStateToProps, null) (EntryPoint);
