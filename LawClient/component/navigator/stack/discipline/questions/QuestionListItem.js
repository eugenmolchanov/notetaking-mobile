import { ListItem } from 'react-native-elements';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const rightChevron = <Icon name="navigate-next" size={25}/>;

const QuestionTitle = (props) => {
    return (
        <View>
            <Text style={styles.questionNumber}>Вопрос {props.question.number}</Text>
            <Text>{props.question.name}</Text>
        </View>
    );
};

const QuestionListItem = (props) => {
    const { question, openQuestion } = props;
    return (
        <ListItem
            title={<QuestionTitle question={question}/>}
            chevron={rightChevron}
            onPress={() => openQuestion(question.id)}
            bottomDivider />
    );
};

const styles = StyleSheet.create({
   questionNumber: {
       fontWeight: 'bold',
   },
});

export default QuestionListItem;
