import { SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import DisciplinesDrawerItems from './item/disciplines/DisciplinesDrawerItems';
import QuestionsDrawerItems from './item/questions/QuestionsDrawerItems';
import QuestionDrawerItems from './item/question/QuestionDrawerItems';
import QuestionOptionDrawerItems from './item/question/options/QuestionOptionDrawerItems';
import * as PropTypes from 'prop-types';

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
                return <QuestionDrawerItems navigation={navigation}/>;
            } else {
                const currentPageOnSwitchNavigator = navigationState.routes[1].index;
                const switchRouteName = navigationState.routes[1].routes[currentPageOnSwitchNavigator].routeName;
                switch (switchRouteName) {
                    case 'Contractions':
                        return <QuestionOptionDrawerItems navigation={navigation}/>;
                    case 'QuestionShortContent':
                        return <QuestionOptionDrawerItems navigation={navigation}/>;
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

Drawer.propTypes = {
    navigation: PropTypes.object,
};

export default Drawer;
