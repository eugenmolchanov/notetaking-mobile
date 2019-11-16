import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

const Menu = (props) => {
    return (
        <TouchableOpacity style={{marginRight: 15}} onPress={() => {
            props.navigation.openDrawer('hey');
        }}>
            <Icon name="dehaze" size={25}/>
        </TouchableOpacity>
    );
};

export default Menu;
