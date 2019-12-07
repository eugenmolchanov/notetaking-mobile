import DisciplineList from '../component/navigator/stack/discipline/disciplines/DisciplineList';
import {connect} from 'react-redux';
import { openDiscipline } from '../action/action-creator';

const mapStateToProps = (state, ownProps) => {
    return {
        disciplines: state.disciplines.disciplines,
        isFetching: state.disciplines.isFetching,
        navigation: ownProps.navigation,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        openDiscipline: id => dispatch(openDiscipline(id, ownProps.navigation)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisciplineList);
