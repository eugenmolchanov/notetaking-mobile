import MainPage from '../component/MainPage';
import { connect } from 'react-redux';
import { fetchDisciplines } from '../action/action-creator';

const mapDispatchToProps = dispatch => {
    return {
        fetchDisciplines: () => dispatch(fetchDisciplines()),
    };
};

export default connect(null, mapDispatchToProps)(MainPage);
