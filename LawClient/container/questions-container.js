import QuestionList from "../component/navigator/stack/discipline/questions/QuestionList";
import { connect } from "react-redux";
import { openQuestion } from "../action/action-creator";

const mapStateToProps = (state, ownProps) => {
    return {
        questions: state.questions.questions,
        isFetching: state.questions.isFetching,
        navigation: ownProps.navigation,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        openQuestion: question => dispatch(openQuestion(question, ownProps.navigation)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (QuestionList);