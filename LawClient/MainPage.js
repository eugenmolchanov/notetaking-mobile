import DisciplineList from "./container/disciplines-container";
import React from "react";
import {Text} from 'react-native';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDisciplines();
    }

    render() {
        return this.props.isFetching ? (
            <Text>Loading...</Text>
        ) : (
            <DisciplineList/>
        )
    }
}

export default MainPage;