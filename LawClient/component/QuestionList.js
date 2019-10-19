import { ScrollView } from "react-native";
import React from 'react'
import QuestionListItem from "./QuestionListItem";

const QuestionList = (props) => {
    const questions = props.navigation.getParam('questions', []).map(question => {
        return <QuestionListItem key={question.id} question={question}/>
    });

    return (
        <ScrollView>
            {questions}
        </ScrollView>
    )
};

export default QuestionList;