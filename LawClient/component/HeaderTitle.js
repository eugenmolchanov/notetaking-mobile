import React from 'react';
import HeaderSearchBar from './HeaderSearchBar';
import { View, StyleSheet } from 'react-native';

const HeaderTitle = (props) => {

    return (
        <View style={styles.searchWrapper}>
            <HeaderSearchBar onValueChange={props.onSearchValueChange}/>
        </View>
    );
};

const styles = StyleSheet.create({
    searchWrapper: {
        flex: 1,
    },
});

export default HeaderTitle;
