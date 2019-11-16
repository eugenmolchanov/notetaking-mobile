import { View } from 'react-native';
import DrawerItem from '../DrawerItem';
import React from 'react';
import { navigateToScreen } from './DrawerItemsUtils';

const ContractionsDrawerItems = (props) => {
    return (
        <View>
            <DrawerItem onPress={navigateToScreen('Contractions', props.navigation)} name={'К изучаемому вопросу'}/>
            <DrawerItem onPress={navigateToScreen('Contractions', props.navigation)} name={'К списку вопросов'}/>
            <DrawerItem onPress={navigateToScreen('Contractions', props.navigation)} name={'К списку дисциплин'}/>
        </View>
    );
};

export default ContractionsDrawerItems;
