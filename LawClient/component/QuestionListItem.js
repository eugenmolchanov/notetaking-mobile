import { ListItem } from "react-native-elements";
import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const rightChevron = <Icon name="chevron-right" size={15}/>;

const QuestionTitle = (props) => {
    return (
        <View>
            <Text style={{ fontWeight: 'bold' }}>Вопрос {props.question.number}</Text>
            <Text>{props.question.name}</Text>
        </View>
    )
};

const QuestionListItem = (props) => {
    return (
        <ListItem
            title={<QuestionTitle question={props.question}/>}
            chevron={rightChevron}
            bottomDivider>
        </ListItem>
    )
};

export default QuestionListItem;