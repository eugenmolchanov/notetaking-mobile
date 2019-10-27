import { TouchableOpacity } from "react-native";
import { DrawerActions } from "react-navigation-drawer";
import Icon from "react-native-vector-icons/MaterialIcons";
import React from "react";

export default (props) => {
    return (
        <TouchableOpacity style={{marginRight: 15}} onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}>
            <Icon name="dehaze" size={25}/>
        </TouchableOpacity>
    )
};