import React, {useEffect} from 'react';
import AppContainer from './AppContainer';
import { fetchDisciplines } from '../action/action-creator';
import { connect } from 'react-redux';

interface Props {
    fetchDisciplines: () => Promise<void>,
}

type AsyncAction = (dispatch: any) => Promise<void>;

const MainPage = (props: Props) => {

    useEffect(() => {
        props.fetchDisciplines()
    }, [])

    return (
        <AppContainer/>
    )
}

function mapDispatchToProps(dispatch: AsyncAction) {
    return {
        fetchDisciplines: () => dispatch(fetchDisciplines()),
    };
}

export default connect(null, mapDispatchToProps)(MainPage);
