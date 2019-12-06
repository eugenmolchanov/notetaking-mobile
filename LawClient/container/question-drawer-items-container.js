import QuestionDrawerItems from "../component/navigator/drawer/item/question/QuestionDrawerItems";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {
        question: state.question.question,
        navigation: ownProps.navigation,
    }
};

export default connect(mapStateToProps) (QuestionDrawerItems);