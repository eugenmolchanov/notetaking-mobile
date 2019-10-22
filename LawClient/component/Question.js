import React from 'react';
import { ScrollView, Text } from "react-native";

class Question extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const question = this.props.navigation.getParam('question', {});
        return question.name ? (
            <ScrollView>
                <Text>Вопрос {question.number}. {question.name}</Text>
            </ScrollView>
        ) : (
            <Text>empty state</Text>
        )
    }
}

export default Question;