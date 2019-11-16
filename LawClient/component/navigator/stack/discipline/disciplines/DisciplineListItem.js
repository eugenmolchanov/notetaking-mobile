import React from 'react';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, StyleSheet } from 'react-native';

const rightChevron = <Icon name="navigate-next" size={25}/>;

const DisciplineListItem = (props) => {
    const { discipline, navigation } = props;
    return (
        <ListItem
            title={discipline.name}
            titleStyle={styles.title}
            chevron={rightChevron}
            containerStyle={styles.itemContainer}
            onPress={() => navigation.navigate('Questions', {
                questions: discipline.questions,
            })}
            bottomDivider
            leftElement={<Text>{discipline.abbreviation}</Text>} />
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        minHeight: 70,
    },
    title: {
        textAlign: 'center',
    },
});

export default DisciplineListItem;
