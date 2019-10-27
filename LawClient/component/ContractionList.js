import React from "react";
import Menu from "./Menu";
import { Text } from "react-native";

class ContractionList extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: <Menu navigation={navigation}/>,
            title: 'Сокращения'
        }
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text onPress={() => this.props.navigation.goBack()}>Hey</Text>
        )
    }
}

export default ContractionList;