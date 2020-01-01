import React from 'react';
import AppContainer from './AppContainer';
import * as PropTypes from 'prop-types';
import { fetchDisciplines } from '../action/action-creator';
import { connect } from 'react-redux';

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

const mapDispatchToProps = dispatch => {
    return {
        fetchDisciplines: () => dispatch(fetchDisciplines()),
    };
};

export default connect(null, mapDispatchToProps)(MainPage);
