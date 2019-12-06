import React from 'react';
import { View } from 'react-native';
import OptionHeader from '../OptionHeader';
import QuestionContent from '../../../QuestionContent';

const QuestionShortContent = (props) => {
    const { question } = props;

    return (
        <View>
            <OptionHeader navigation={props.navigation} title={'Коротко по вопросу'}/>
            <QuestionContent question={question} content={question.shortContent}/>
        </View>
    );
};

export default QuestionShortContent;
