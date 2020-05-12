import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu from '../../Menu';
import QuestionContent from '../../QuestionContent';
import AwaitedContent from './AwaitedContent';
import { connect } from 'react-redux';
import {AppState, StackNavigationOptions} from "../../../Types";
import {Question} from "../../../Types";
import {NavigationStackOptions} from "react-navigation-stack";

const backButtonIcon = <Icon name="close" size={25}/>;

interface QuestionProps {
    isFetching: boolean
    question: Question
}

class QuestionComponent extends React.Component<QuestionProps> {
    static navigationOptions = ({ navigation }: StackNavigationOptions): NavigationStackOptions => {
        return {
            headerBackImage: () => backButtonIcon,
            headerRight: <Menu navigation={navigation}/>,
        };
    };

    constructor(props: QuestionProps) {
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

const mapStateToProps = ({ question }: AppState) => {
    return {
        isFetching: question.isFetching,
        question: question.question,
    };
};

export default connect(mapStateToProps)(QuestionComponent);
