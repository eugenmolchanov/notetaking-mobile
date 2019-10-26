import React from "react";
import AppContainer from './navigator/app-container';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDisciplines();
    }

    render() {
        return (
            <AppContainer/>
        )
    }
}

export default MainPage;