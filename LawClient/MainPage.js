import React from "react";
import DisciplineNavigator from './navigator/disciplines-navigator';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDisciplines();
    }

    render() {
        return (
            <DisciplineNavigator/>
        )
    }
}

export default MainPage;