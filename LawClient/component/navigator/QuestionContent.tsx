import { ScrollView, StyleSheet, Text } from 'react-native';
import HtmlView from 'react-native-htmlview';
import React from 'react';
import {Question} from "../Types";

interface QuestionContentProps {
    question: Question
    content: string
}

const QuestionContent = ({ question, content }: QuestionContentProps) => {
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
        marginLeft: 15,
        paddingRight: 15,
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
