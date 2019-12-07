import QuestionDrawerItems from '../component/navigator/drawer/item/question/QuestionDrawerItems';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        navigation: ownProps.navigation,
    };
};

export default connect(mapStateToProps)(QuestionDrawerItems);
