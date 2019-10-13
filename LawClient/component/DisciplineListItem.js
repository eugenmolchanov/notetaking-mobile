import {Text, View} from "react-native";
import React from "react";

const DisciplineListItem = (props) => {
    return (
        <View style={{flexDirection: 'row', height: 30}}>
            <Text style={{flex: 1}}>{props.discipline.abbreviation}</Text>
            <Text style={{flex: 3}}>{props.discipline.name}</Text>
        </View>
    )
};

export default DisciplineListItem;