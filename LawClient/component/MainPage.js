import React from 'react';
import AppContainer from '../navigator/app-container';
import * as PropTypes from 'prop-types';

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
        );
    }
}

MainPage.propTypes = {
    fetchDisciplines: PropTypes.func.isRequired,
};

export default MainPage;
