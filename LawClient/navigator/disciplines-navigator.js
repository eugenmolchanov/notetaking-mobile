import {createStackNavigator} from "react-navigation-stack";
import DisciplineListContainer from "../container/disciplines-container";
import {createAppContainer} from "react-navigation";
import QuestionList from "../component/QuestionList";
import React from "react";

const DisciplineNavigator = createStackNavigator({
        Disciplines: DisciplineListContainer,
        Questions: QuestionList
    }, {
        initialRouteName: 'Disciplines'
    }
);

export default createAppContainer(DisciplineNavigator);