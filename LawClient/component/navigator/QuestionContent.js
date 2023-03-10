import { ScrollView, StyleSheet, Text } from 'react-native';
import HtmlView from 'react-native-htmlview';
import React from 'react';

const QuestionContent = (props) => {
    const { question, content } = props;
    return (
        <ScrollView style={styles.questionWrapper}>
            <Text style={styles.questionHeader}>Вопрос {question.number}. {question.name}</Text>
            <HtmlView
                value={content}
                stylesheet={questionContentStyles}
                addLineBreaks={false}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    questionWrapper: {
        padding: 15,
        marginBottom: 10,
    },
    questionHeader: {
        fontWeight: 'bold',
    },
});

const questionContentStyles = StyleSheet.create({
    h4: {
        color: '#FD0A10',
        fontWeight: 'bold',
        fontSize: 18,
        margin: 10,
    },
    strong: {
        fontWeight: 'bold',
    },
    div: {
        marginBottom: 5,
    },
});

export default QuestionContent;
