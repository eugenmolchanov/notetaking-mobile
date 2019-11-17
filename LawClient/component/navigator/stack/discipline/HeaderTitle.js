import React from 'react';
import HeaderSearchBar from './HeaderSearchBar';
import { View, StyleSheet } from 'react-native';
import * as PropTypes from 'prop-types';

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

HeaderTitle.propTypes = {
    onSearchValueChange: PropTypes.func,
};

export default HeaderTitle;
