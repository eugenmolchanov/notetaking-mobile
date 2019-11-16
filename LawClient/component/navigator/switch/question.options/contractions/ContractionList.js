import React from 'react';
import { ScrollView, View } from 'react-native';
import ContractionListItem from './ContractionListItem';
import OptionHeader from '../OptionHeader';

const ContractionList = (props) => {
    const contractions = props.navigation.getParam('contractions', [])
        .map(contraction => <ContractionListItem key={contraction.id} contraction={contraction}/>);

    return (
        <View>
            <OptionHeader navigation={props.navigation} title={'Сокращения'}/>
            <ScrollView>
                {contractions}
            </ScrollView>
        </View>
    );
};

export default ContractionList;
