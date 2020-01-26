import React from 'react';
import { View } from 'react-native';
import OptionHeader from './OptionHeader';
import QuestionContent from '../../QuestionContent';
import { connect } from 'react-redux';
import {AppState, Question, StackNavigationOptions} from "../../../Types";
import {NavigationStackProp} from "react-navigation-stack";

interface QuestionShortContentProps {
    question: Question
    navigation: NavigationStackProp
}

const QuestionShortContent = ({ question, navigation }: QuestionShortContentProps) => {
    return (
        <View>
            <OptionHeader navigation={navigation} title={'Коротко по вопросу'}/>
            <QuestionContent question={question} content={question.shortContent}/>
        </View>
    );
};

const mapStateToProps = ({ question }: AppState, ownProps: StackNavigationOptions) => {
    return {
        question: question.question,
        navigation: ownProps.navigation,
    };
};

export default connect(mapStateToProps)(QuestionShortContent);
