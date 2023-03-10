import MainPage from '../component/MainPage';
import { connect } from 'react-redux';
import { fetchDisciplines } from '../action/action-creator';

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDisciplines: () => dispatch(fetchDisciplines()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
