import { ListItem } from "react-native-elements";
import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const rightChevron = <Icon name="navigate-next" size={25}/>;

const QuestionTitle = (props) => {
    return (
        <View>
            <Text style={{ fontWeight: 'bold' }}>Вопрос {props.question.number}</Text>
            <Text>{props.question.name}</Text>
        </View>
    )
};

const QuestionListItem = (props) => {
    const { navigation, question } = props;
    return (
        <ListItem
            title={<QuestionTitle question={question}/>}
            chevron={rightChevron}
            onPress={() => navigation.navigate('Question', {
                question: question
            })}
            bottomDivider>
        </ListItem>
    )
};

export default QuestionListItem;