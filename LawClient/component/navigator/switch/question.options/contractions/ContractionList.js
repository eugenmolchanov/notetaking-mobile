import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native-elements';
import Menu from '../../../Menu';
import ContractionListItem from './ContractionListItem';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

const ContractionList = (props) => {
    const contractions = props.navigation.getParam('contractions', [])
        .map(contraction => <ContractionListItem key={contraction.id} contraction={contraction}/>);

    return (
        <View>
            <Header
                rightComponent={<Menu navigation={props.navigation}/>}
                leftComponent={<ClosePage navigation={props.navigation}/>}
                centerComponent={{ text: 'Сокращения', style: { fontSize: 20 } }}
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
