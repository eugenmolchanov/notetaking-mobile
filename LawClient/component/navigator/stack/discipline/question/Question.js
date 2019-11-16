import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu from '../../../Menu';
import QuestionContent from '../../../QuestionContent';

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

    render() {
        const question = this.props.navigation.getParam('question', {});
        return (
            <QuestionContent question={question} content={question.fullContent}/>
        );
    }
}

export default Question;
