import { ListItem } from 'react-native-elements';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as PropTypes from 'prop-types';

const rightChevron = <Icon name="navigate-next" size={25}/>;

const QuestionTitle = (props) => {
    const { question } = props;
    return (
        <View>
            <Text style={styles.questionNumber}>Вопрос {question.number}</Text>
            <Text>{question.name}</Text>
        </View>
    );
};

const QuestionListItem = (props) => {
    const { question, openQuestion } = props;
    return (
        <ListItem
            title={<QuestionTitle question={question}/>}
            chevron={rightChevron}
            onPress={() => openQuestion(question)}
            bottomDivider />
    );
};

const styles = StyleSheet.create({
   questionNumber: {
       fontWeight: 'bold',
   },
});

QuestionListItem.propTypes = {
    openQuestion: PropTypes.func.isRequired,
    question: PropTypes.object.isRequired,
};

QuestionTitle.propTypes = {
    question: PropTypes.shape({
        id: PropTypes.number.isRequired,
        number: PropTypes.number.isRequired,
        name: PropTypes.string,
        disciplineId: PropTypes.number.isRequired,
    }).isRequired,
};

export default QuestionListItem;
