import React from 'react';
import { View } from 'react-native';
import OptionHeader from '../OptionHeader';
import QuestionContent from '../../../QuestionContent';
import * as PropTypes from 'prop-types';

const QuestionShortContent = (props) => {
    const { question } = props;

    return (
        <View>
            <OptionHeader navigation={props.navigation} title={'Коротко по вопросу'}/>
            <QuestionContent question={question} content={question.shortContent}/>
        </View>
    );
};

QuestionContent.propTypes = {
    navigation: PropTypes.object.isRequired,
    question: PropTypes.shape({
        shortContent: PropTypes.string.isRequired,
    }).isRequired,
};

export default QuestionShortContent;
