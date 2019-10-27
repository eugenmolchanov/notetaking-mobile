import React from "react";
import { ListItem } from "react-native-elements";

const DrawerItem = (props) => {
    return (
        <ListItem
            title={props.name}
            onPress={props.onPress}
            bottomDivider
            leftIcon={props.leftIcon}
            style={{margin: 0}}/>
    )
};

export default DrawerItem;