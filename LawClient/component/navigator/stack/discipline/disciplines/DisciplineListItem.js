import React from 'react';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, StyleSheet } from 'react-native';
import * as PropTypes from 'prop-types';

const rightChevron = <Icon name="navigate-next" size={25}/>;

const DisciplineListItem = (props) => {
    const { discipline, openDiscipline } = props;
    return (
        <ListItem
            title={discipline.name}
            titleStyle={styles.title}
            chevron={rightChevron}
            containerStyle={styles.itemContainer}
            onPress={() => {
                openDiscipline(discipline.id);
            }}
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

DisciplineListItem.propTypes = {
    discipline: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        abbreviation: PropTypes.string.isRequired,
        freeAccess: PropTypes.bool.isRequired,
    }).isRequired,
    openDiscipline: PropTypes.func.isRequired,
};

export default DisciplineListItem;
