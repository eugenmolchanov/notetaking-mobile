import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {NavigationStackProp} from "react-navigation-stack";

interface MenuProps {
    navigation: NavigationStackProp
}

const Menu = ({ navigation }: MenuProps) => {
    return (
        <TouchableOpacity style={styles.menuWrapper} onPress={() => {navigation.openDrawer();}}>
            <Icon name="dehaze" size={25}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
   menuWrapper: {
       marginRight: 15,
   },
});

export default Menu;
