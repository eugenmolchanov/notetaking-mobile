import { Text, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import React from 'react';
import * as PropTypes from 'prop-types';

const ContractionListItem = (props) => {
    const { contraction } = props;
    return (
        <ListItem
            title={contraction.description}
            titleStyle={styles.title}
            containerStyle={styles.itemContainer}
            bottomDivider
            leftElement={<Text>{contraction.name}</Text>} />
    );
};

const styles = StyleSheet.create({
    title: {
        paddingLeft: 50,
    },
    itemContainer: {
        minHeight: 70,
    },
});

ContractionListItem.propTypes = {
    contraction: PropTypes.shape({
        description: PropTypes.string,
        name: PropTypes.string,
    }),
};

export default ContractionListItem;
