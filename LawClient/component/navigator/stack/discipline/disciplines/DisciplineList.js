import { ScrollView } from 'react-native';
import React from 'react';
import DisciplineListItem from './DisciplineListItem';
import HeaderTitle from '../HeaderTitle';
import Menu from '../../../Menu';
import * as PropTypes from 'prop-types';
import AwaitedContent from '../util/AwaitedContent';

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

    _renderDisciplines = () => {
        const disciplines = this.props.disciplines
            .filter(discipline => {
                return this.state.searchValue ?
                    this._isDisciplineContainsSearchValue(discipline) :
                    true;
            })
            .map(discipline => {
                return <DisciplineListItem key={discipline.id} discipline={discipline}
                                           openDiscipline={this.props.openDiscipline}/>;
            });

        return (
            <ScrollView>
                {disciplines}
            </ScrollView>
        );
    };

    render() {
        return <AwaitedContent isFetching={this.props.isFetching} render={this._renderDisciplines}/>;
    }
}

DisciplineList.propTypes = {
    disciplines: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    navigation: PropTypes.object.isRequired,
    openDiscipline: PropTypes.func.isRequired,
};

export default DisciplineList;
