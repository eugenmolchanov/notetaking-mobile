import {View} from "react-native";
import React from "react";
import DisciplineListItem from "./DisciplineListItem";

const DisciplineList = (props) => {
    const disciplines = props.disciplines.map(discipline => {
        return <DisciplineListItem key={discipline.id} discipline={discipline}/>
    });

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', margin: 20}}>
            {disciplines}
        </View>
    )
};

export default DisciplineList;