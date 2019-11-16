import DisciplineList from '../component/navigator/stack/discipline/disciplines/DisciplineList';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        disciplines: state.disciplines,
        isFetching: state.isFetching,
        navigation: ownProps.navigation,
    };
};

export default connect(mapStateToProps)(DisciplineList);
