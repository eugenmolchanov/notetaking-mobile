import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements';
import Menu from './Menu';
import ContractionListItem from './ContractionListItem';

const ContractionList = (props) => {
    const contractions = props.navigation.getParam('contractions', [])
        .map(contraction => <ContractionListItem key={contraction.id} contraction={contraction}/>);

    return (
        <View>
            <Header
                rightComponent={<Menu navigation={props.navigation}/>}
                centerComponent={{ text: 'Сокращения', style: {fontSize: 20} }}
                containerStyle={styles.headerContainer}
                backgroundColor={'inherit'}/>
            <ScrollView>
                {contractions}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 0,
        height: 60,
    },
});

export default ContractionList;
