import { SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { DisciplinesDrawerItems, QuestionDrawerItems, QuestionsDrawerItems, ContractionsDrawerItems } from './items/CustomDrawerItems';

const drawer = (props) => {
    const { navigation } = props;
    const navigationState = navigation.state;
    const currentPageOnStackNavigator = navigationState.routes[0].index;
    const stackRouteName = navigationState.routes[0].routes[currentPageOnStackNavigator].routeName;
    switch (stackRouteName) {
        case 'Disciplines':
            return <DisciplinesDrawerItems navigation={navigation}/>;
        case 'Questions':
            return <QuestionsDrawerItems navigation={navigation}/>;
        case 'Question':
            if (!navigationState.index) {
                console.log(props);
                return <QuestionDrawerItems navigation={navigation}/>;
            } else {
                const currentPageOnSwitchNavigator = navigationState.routes[1].index;
                const switchRouteName = navigationState.routes[1].routes[currentPageOnSwitchNavigator].routeName;
                switch (switchRouteName) {
                    case 'Contractions':
                        return <ContractionsDrawerItems navigation={navigation}/>;
                    case 'QuestionInBrief':

                }
            }
    }
};

const Drawer = (props) => {
    return (
        <ScrollView>
            <SafeAreaView>
                {drawer(props)}
            </SafeAreaView>
        </ScrollView>
    );
};

export default Drawer;
