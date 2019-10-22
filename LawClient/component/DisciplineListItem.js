import React from "react";
import { ListItem } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from "react-native";

const rightChevron = <Icon name="chevron-right" size={15}/>;

const DisciplineListItem = (props) => {
    const { discipline, navigation } = props;
    return (
        <ListItem
            title={discipline.name}
            titleStyle={{ textAlign: 'center' }}
            chevron={rightChevron}
            containerStyle={{ minHeight: 70 }}
            onPress={() => navigation.navigate('Questions', {
                questions: discipline.questions
            })}
            bottomDivider
            leftElement={<Text>{discipline.abbreviation}</Text>}>
        </ListItem>
    )
};

export default DisciplineListItem;