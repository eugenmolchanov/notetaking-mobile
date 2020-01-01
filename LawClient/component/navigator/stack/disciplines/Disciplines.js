import { ScrollView, StyleSheet, Text } from 'react-native';
import React from 'react';
import HeaderTitle from './HeaderTitle';
import Menu from '../../Menu';
import * as PropTypes from 'prop-types';
import AwaitedContent from './AwaitedContent';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { openDiscipline } from '../../../../action/action-creator';
import { connect } from 'react-redux';

const rightChevron = <Icon name="navigate-next" size={25}/>;

const Discipline = ({ discipline, showDiscipline }) => {
    return (
        <ListItem
            title={discipline.name}
            titleStyle={styles.title}
            chevron={rightChevron}
            containerStyle={styles.itemContainer}
            onPress={() => {
                showDiscipline(discipline.id);
            }}
            bottomDivider
            leftElement={<Text>{discipline.abbreviation}</Text>} />
    );
};

class Disciplines extends React.Component {
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
                return <Discipline key={discipline.id} discipline={discipline}
                                           showDiscipline={this.props.openDiscipline}/>;
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

const styles = StyleSheet.create({
    itemContainer: {
        minHeight: 70,
    },
    title: {
        textAlign: 'center',
    },
});

Discipline.propTypes = {
    discipline: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        abbreviation: PropTypes.string.isRequired,
        freeAccess: PropTypes.bool.isRequired,
    }).isRequired,
    showDiscipline: PropTypes.func.isRequired,
};

Disciplines.propTypes = {
    disciplines: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    navigation: PropTypes.object.isRequired,
    openDiscipline: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        disciplines: state.disciplines.disciplines,
        isFetching: state.disciplines.isFetching,
        navigation: ownProps.navigation,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        openDiscipline: id => dispatch(openDiscipline(id, ownProps.navigation)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Disciplines);
