import Question from '../component/navigator/stack/discipline/question/Question';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        isFetching: state.question.isFetching,
        question: state.question.question,
    };
};

export default connect(mapStateToProps)(Question);
