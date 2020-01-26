import Menu from '../../Menu';
import { Header } from 'react-native-elements';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {NavigationStackProp} from "react-navigation-stack";

interface OptionHeaderProps {
    navigation: NavigationStackProp
    title: string
}

interface ClosePageProps {
    navigation: NavigationStackProp
}

const ClosePage = ({ navigation }: ClosePageProps) => {
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('Question');
            navigation.openDrawer();
        }}>
            <Icon name="close" size={25}/>
        </TouchableOpacity>
    );
};

const OptionHeader = ({ navigation, title }: OptionHeaderProps) => {
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

export default OptionHeader;
