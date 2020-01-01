import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import * as PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ListItem } from 'react-native-elements';

const disciplinesIcon = <Icon name={'format-list-bulleted'} size={25}/>;
const questionIcon = <Icon name={'help-outline'} size={25}/>;
const questionsIcon = <Icon name={'format-list-numbered'} size={25}/>;
const functionIcon = <Icon name={'announcement'} size={25}/>;
const contractionIcon = <Icon name={'text-format'} size={25}/>;
const questionShortContentIcon = <Icon name={'description'} size={25}/>;

const navigateToScreen = (route, navigation) => () => {
    navigation.closeDrawer();
    navigation.navigate(route);
};

const DrawerItem = ({ name, onPress, leftIcon }) => {
    return (
        <ListItem
            title={name}
            onPress={onPress}
            bottomDivider
            leftIcon={leftIcon}
            style={styles.item}/>
    );
};

const DisciplinesDrawerItems = ({ navigation }) => {
    return (
        <DrawerItem onPress={navigateToScreen('Disciplines', navigation)} name={'К списку дисциплин'}
                    leftIcon={disciplinesIcon}/>
    );
};

const QuestionsDrawerItems = ({ navigation }) => {
    return (
        <DrawerItem onPress={navigateToScreen('Questions', navigation)} name={'К списку вопросов'}
                    leftIcon={questionsIcon}/>
    );
};

const QuestionDrawerItems = ({ navigation }) => {
    return (
        <View>
            <DrawerItem onPress={navigateToScreen('Contractions', navigation)}
                        name={'Используемые сокращения'}
                        leftIcon={contractionIcon}/>
            <DrawerItem onPress={navigateToScreen('QuestionShortContent', navigation)}
                        name={'Коротко по вопросу'}
                        leftIcon={questionShortContentIcon}/>
        </View>
    );
};

const QuestionOptionDrawerItems = ({ navigation }) => {
    return (
        <View>
            <DrawerItem onPress={navigateToScreen('Question', navigation)} name={'К изучаемому вопросу'}
                        leftIcon={questionIcon}/>
            <DrawerItem onPress={navigateToScreen('Questions', navigation)} name={'К списку вопросов'}
                        leftIcon={questionsIcon}/>
            <DrawerItem onPress={navigateToScreen('Disciplines', navigation)} name={'К списку дисциплин'}
                        leftIcon={disciplinesIcon}/>
            <DrawerItem onPress={navigateToScreen('Disciplines', navigation)}
                        name={'О данной функции приложения'}
                        leftIcon={functionIcon}/>
        </View>
    );
};

const drawer = ({ navigation }) => {
    const navigationState = navigation.state;
    const currentPageOnStackNavigator = navigationState.routes[0].index;
    const stackRouteName = navigationState.routes[0].routes[currentPageOnStackNavigator].routeName;
    switch (stackRouteName) {
        case 'Disciplines':
            return <DisciplinesDrawerItems navigation={navigation}/>;
        case 'Questions':
            return <QuestionsDrawerItems navigation={navigation}/>;
        case 'Question':
            return !navigationState.index ? <QuestionDrawerItems navigation={navigation}/> :
                <QuestionOptionDrawerItems navigation={navigation}/>;
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

const styles = StyleSheet.create({
    item: {
        margin: 0,
    },
});

DrawerItem.propTypes = {
    name: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    leftIcon: PropTypes.object.isRequired,
};

DisciplinesDrawerItems.propTypes = {
    navigation: PropTypes.object.isRequired,
};

QuestionsDrawerItems.propTypes = {
    navigation: PropTypes.object.isRequired,
};

QuestionDrawerItems.propTypes = {
    navigation: PropTypes.object.isRequired,
};

QuestionOptionDrawerItems.propTypes = {
    navigation: PropTypes.object.isRequired,
};

Drawer.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default Drawer;
