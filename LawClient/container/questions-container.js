import QuestionList from "../component/navigator/stack/discipline/questions/QuestionList";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    const disciplineId = this.props.navigation.getParam('disciplineId', []);

    return {

    }
};

export default connect(mapStateToProps)(QuestionList);