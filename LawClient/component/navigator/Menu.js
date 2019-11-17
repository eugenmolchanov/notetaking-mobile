import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import * as PropTypes from 'prop-types';

const Menu = (props) => {
    return (
        <TouchableOpacity style={styles.menuWrapper} onPress={() => {
            props.navigation.openDrawer();
        }}>
            <Icon name="dehaze" size={25}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
   menuWrapper: {
       marginRight: 15,
   },
});

Menu.propTypes = {
    navigation: PropTypes.object,
};

export default Menu;
