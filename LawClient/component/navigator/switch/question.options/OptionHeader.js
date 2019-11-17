import Menu from '../../Menu';
import { Header } from 'react-native-elements';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import * as PropTypes from 'prop-types';

const ClosePage = (props) => {
    return (
        <TouchableOpacity onPress={() => {
            props.navigation.navigate('Question');
            props.navigation.openDrawer();
        }}>
            <Icon name="close" size={25}/>
        </TouchableOpacity>
    );
};

const OptionHeader = (props) => {
    return (
        <Header
            leftComponent={<Menu navigation={props.navigation}/>}
            rightComponent={<ClosePage navigation={props.navigation}/>}
            centerComponent={{ text: props.title, style: { fontSize: 20 } }}
            containerStyle={styles.headerContainer}
            backgroundColor={'inherit'}/>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 0,
        height: 60,
    },
});

OptionHeader.propTypes = {
    navigation: PropTypes.object,
    title: PropTypes.string,
};

ClosePage.propTypes = {
    navigation: PropTypes.object,
};

export default OptionHeader;
