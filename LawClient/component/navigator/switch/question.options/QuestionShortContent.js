import React from 'react';
import { View } from 'react-native';
import OptionHeader from './OptionHeader';
import QuestionContent from '../../QuestionContent';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';

const QuestionShortContent = ({ question, navigation }) => {
    return (
        <View>
            <OptionHeader navigation={navigation} title={'Коротко по вопросу'}/>
            <QuestionContent question={question} content={question.shortContent}/>
        </View>
    );
};

QuestionShortContent.propTypes = {
    navigation: PropTypes.object.isRequired,
    question: PropTypes.shape({
        shortContent: PropTypes.string.isRequired,
    }).isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        question: state.question.question,
        navigation: ownProps.navigation,
    };
};

export default connect(mapStateToProps)(QuestionShortContent);
