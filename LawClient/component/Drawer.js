import { SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { DisciplinesDrawerItems, QuestionDrawerItems, QuestionsDrawerItems } from "./CustomDrawerItems";

const drawer = (props) => {
    const { navigation } = props;
    const currentPageOnStackNavigator = navigation.state.routes[0].index;
    const routeName = navigation.state.routes[0].routes[currentPageOnStackNavigator].routeName;
    switch (routeName) {
        case 'Disciplines':
            return <DisciplinesDrawerItems navigation={navigation}/>;
        case 'Questions':
            return <QuestionsDrawerItems navigation={navigation}/>;
        case 'Question':
            return <QuestionDrawerItems navigation={navigation}/>
    }
};

const Drawer = (props) => {
    return (
        <ScrollView>
            <SafeAreaView>
                {drawer(props)}
            </SafeAreaView>
        </ScrollView>
    )
};

export default Drawer;