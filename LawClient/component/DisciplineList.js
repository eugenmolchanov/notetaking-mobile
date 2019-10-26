import { ScrollView, Text, TouchableHighlight } from "react-native";
import React from "react";
import DisciplineListItem from "./DisciplineListItem";
import HeaderTitle from "./HeaderTitle";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions } from "react-navigation-drawer";

const Menu = (props) => {
    return (
        <TouchableHighlight onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}>
            <Icon name="dehaze" size={25}/>
        </TouchableHighlight>
    )
};

class DisciplineList extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <HeaderTitle onSearchValueChange={navigation.getParam('onSearchValueChange')}/>,
            headerRight: <Menu navigation={navigation}/>
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({ 'onSearchValueChange': this._onSearchValueChange })
    }

    _onSearchValueChange = (searchValue) => {
        this.setState({
            searchValue
        })
    };

    _isDisciplineContainsSearchValue = (discipline) => {
        const searchValue = this.state.searchValue.toLowerCase();
        return discipline.name.toLowerCase().includes(searchValue) ||
            discipline.abbreviation.toLowerCase().includes(searchValue);
    };

    render() {
        const disciplines = this.props.disciplines
            .filter(discipline => {
                return this.state.searchValue ?
                    this._isDisciplineContainsSearchValue(discipline) :
                    true
            })
            .map(discipline => {
                return <DisciplineListItem key={discipline.id} discipline={discipline}
                                           navigation={this.props.navigation}/>
            });

        return this.props.isFetching ? (
            <Text>Loading...</Text>
        ) : (
            <ScrollView>
                {disciplines}
            </ScrollView>
        )
    }
}

export default DisciplineList;