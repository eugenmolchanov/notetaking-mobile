import DisciplineList from '../component/DisciplineList';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        disciplines: state.disciplines,
        isFetching: state.isFetching,
        navigation: ownProps.navigation,
    };
};

export default connect(mapStateToProps)(DisciplineList);
