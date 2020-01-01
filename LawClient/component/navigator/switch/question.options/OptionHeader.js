import Menu from '../../Menu';
import { Header } from 'react-native-elements';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import * as PropTypes from 'prop-types';

const ClosePage = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('Question');
            navigation.openDrawer();
        }}>
            <Icon name="close" size={25}/>
        </TouchableOpacity>
    );
};

const OptionHeader = ({ navigation, title }) => {
    return (
        <Header
            leftComponent={<Menu navigation={navigation}/>}
            rightComponent={<ClosePage navigation={navigation}/>}
            centerComponent={{ text: title, style: { fontSize: 20 } }}
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
    navigation: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
};

ClosePage.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default OptionHeader;
