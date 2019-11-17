import React from 'react';
import { View } from 'react-native';
import OptionHeader from '../OptionHeader';
import QuestionContent from '../../../QuestionContent';
import * as PropTypes from 'prop-types';

const QuestionShortContent = (props) => {
    const question = props.navigation.getParam('question', {});

    return (
        <View>
            <OptionHeader navigation={props.navigation} title={'Коротко по вопросу'}/>
            <QuestionContent question={question} content={question.shortContent}/>
        </View>
    );
};

QuestionContent.propTypes = {
    navigation: PropTypes.object,
};

export default QuestionShortContent;
