import DisciplineList from '../component/navigator/stack/discipline/disciplines/DisciplineList';
import {connect} from 'react-redux';
import { openDiscipline } from "../action/action-creator";

const mapStateToProps = (state, ownProps) => {
    return {
        disciplines: state.disciplines,
        isFetching: state.isFetching,
        navigation: ownProps.navigation,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        openDiscipline: disciplineId => dispatch(openDiscipline(disciplineId)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DisciplineList);
