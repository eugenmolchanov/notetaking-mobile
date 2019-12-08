import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu from '../../../Menu';
import QuestionContent from '../../../QuestionContent';
import * as PropTypes from 'prop-types';
import AwaitedContent from '../util/AwaitedContent';

const backButtonIcon = <Icon name="close" size={25}/>;

class Question extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerBackImage: backButtonIcon,
            headerRight: <Menu navigation={navigation}/>,
        };
    };

    constructor(props) {
        super(props);
    }

    _renderQuestion = () => {
        const { question } = this.props;
        return (
            <QuestionContent question={question} content={question.fullContent}/>
        );
    };

    render() {
        return <AwaitedContent isFetching={this.props.isFetching} render={this._renderQuestion}/>;
    }
}

Question.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    question: PropTypes.shape({
        fullContent: PropTypes.string,
    }).isRequired,
};

export default Question;
