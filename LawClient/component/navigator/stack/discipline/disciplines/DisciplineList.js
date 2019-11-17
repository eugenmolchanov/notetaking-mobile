import { ActivityIndicator, ScrollView, View, StyleSheet } from 'react-native';
import React from 'react';
import DisciplineListItem from './DisciplineListItem';
import HeaderTitle from '../HeaderTitle';
import Menu from '../../../Menu';
import * as PropTypes from 'prop-types';

class DisciplineList extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <HeaderTitle onSearchValueChange={navigation.getParam('onSearchValueChange')}/>,
            headerRight: <Menu navigation={navigation}/>,
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
        };
    }

    componentDidMount() {
        this.props.navigation.setParams({ 'onSearchValueChange': this._onSearchValueChange });
    }

    _onSearchValueChange = (searchValue) => {
        this.setState({
            searchValue,
        });
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
                    true;
            })
            .map(discipline => {
                return <DisciplineListItem key={discipline.id} discipline={discipline}
                                           navigation={this.props.navigation}/>;
            });

        return this.props.isFetching ? (
            <View style={styles.spinnerContainer}>
                <ActivityIndicator size={'large'}/>
            </View>
        ) : (
            <ScrollView>
                {disciplines}
            </ScrollView>
        );
    }
}

DisciplineList.propTypes = {
    disciplines: PropTypes.array,
    isFetching: PropTypes.bool,
    navigation: PropTypes.object,
};

const styles = StyleSheet.create({
    spinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
    },
});

export default DisciplineList;
