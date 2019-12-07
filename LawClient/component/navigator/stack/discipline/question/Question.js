import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu from '../../../Menu';
import QuestionContent from '../../../QuestionContent';
import * as PropTypes from 'prop-types';
import { ActivityIndicator, View } from "react-native";
import { spinner } from "../../../../../util/styles";

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
        const { question } = this.props;
        return this.props.isFetching ? (
            <View style={spinner.container}>
                <ActivityIndicator size={'large'}/>
            </View>
        ) : (
            <QuestionContent question={question} content={question.fullContent}/>
        );
    }
}

Question.propTypes = {
    navigation: PropTypes.object,
};

export default Question;
