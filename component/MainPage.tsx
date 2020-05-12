import React from 'react';
import AppContainer from './AppContainer';
import { fetchDisciplines } from '../action/action-creator';
import { connect } from 'react-redux';

interface Props {
    fetchDisciplines: () => Promise<void>
}

type AsyncAction = (dispatch: any) => Promise<void>;

class MainPage extends React.Component<Props, any> {
    constructor(props: Props) {
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

function mapDispatchToProps(dispatch: AsyncAction): Props {
    return {
        fetchDisciplines: () => dispatch(fetchDisciplines()),
    };
}

export default connect(null, mapDispatchToProps)(MainPage);
