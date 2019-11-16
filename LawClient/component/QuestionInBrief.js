import React from 'react';
import { Text } from 'react-native';

const QuestionInBrief = (props) => {
    const question = props.navigation.getParam('question', {});

    return (
        <Text>{question.shortContent}</Text>
    );
};

export default QuestionInBrief;
