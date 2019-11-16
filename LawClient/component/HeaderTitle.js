import React from 'react';
import HeaderSearchBar from './HeaderSearchBar';
import { View } from 'react-native';

const HeaderTitle = (props) => {

    return (
        <View style={{ flex: 1 }}>
            <HeaderSearchBar onValueChange={props.onSearchValueChange}/>
        </View>
    );
};

export default HeaderTitle;
