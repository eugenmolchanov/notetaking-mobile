import { connect } from "react-redux";
import ContractionList from "../component/navigator/switch/question.options/contractions/ContractionList";

const mapStateToProps = (state, ownProps) => {
    return {
        contractions: state.question.contractions,
        navigation: ownProps.navigation,
    }
};

export default connect(mapStateToProps) (ContractionList);