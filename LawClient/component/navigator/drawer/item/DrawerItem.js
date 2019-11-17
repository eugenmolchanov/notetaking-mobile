import React from 'react';
import { ListItem } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import * as PropTypes from 'prop-types';

const DrawerItem = (props) => {
    return (
        <ListItem
            title={props.name}
            onPress={props.onPress}
            bottomDivider
            leftIcon={props.leftIcon}
            style={styles.item}/>
    );
};

const styles = StyleSheet.create({
   item: {
       margin: 0,
   },
});

DrawerItem.propTypes = {
    name: PropTypes.string,
    onPress: PropTypes.func,
    leftIcon: PropTypes.object,
};

export default DrawerItem;
