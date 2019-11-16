import React from 'react';
import { ListItem } from 'react-native-elements';
import { StyleSheet } from 'react-native';

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

export default DrawerItem;
