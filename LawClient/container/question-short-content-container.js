import { connect } from "react-redux";
import QuestionShortContent from "../component/navigator/switch/question.options/short.content/QuestionShortContent";

const mapStateToProps = (state, ownProps) => {
    return {
        question: state.question.question,
        navigation: ownProps.navigation,
    }
};

export default connect(mapStateToProps) (QuestionShortContent);