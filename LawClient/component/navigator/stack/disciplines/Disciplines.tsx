import { ScrollView, StyleSheet, Text } from 'react-native';
import React from 'react';
import HeaderTitle from './HeaderTitle';
import Menu from '../../Menu';
import AwaitedContent from './AwaitedContent';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { openDiscipline } from '../../../../action/action-creator';
import { connect } from 'react-redux';
import {
    AppState,
    AsyncAction,
    Discipline,
    ShowItem,
    StackNavigationOptions
} from "../../../Types";
import {NavigationStackProp, NavigationStackScreenProps} from "react-navigation-stack";

const rightChevron = <Icon name="navigate-next" size={25}/>;

interface DisciplineProps {
    discipline: Discipline
    showDiscipline: ShowItem
}

interface DisciplinesProps {
    navigation: NavigationStackProp
    disciplines: Array<Discipline>
    openDiscipline: ShowItem
    isFetching: boolean
}

interface DisciplinesState {
    searchValue: string
}

const DisciplineComponent = ({ discipline, showDiscipline }: DisciplineProps) => {
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

class Disciplines extends React.Component<DisciplinesProps, DisciplinesState> {
    static navigationOptions = ({ navigation }: StackNavigationOptions) => {
        return {
            headerTitle: <HeaderTitle onSearchValueChange={navigation.getParam('onSearchValueChange')}/>,
            headerRight: <Menu navigation={navigation}/>,
        };
    };

    constructor(props: DisciplinesProps) {
        super(props);
        this.state = {
            searchValue: '',
        };
    }

    componentDidMount() {
        this.props.navigation.setParams({ 'onSearchValueChange': this._onSearchValueChange });
    }

    _onSearchValueChange = (searchValue: string) => {
        this.setState({
            searchValue,
        });
    };

    _isDisciplineContainsSearchValue = (discipline: Discipline) => {
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
                return <DisciplineComponent key={discipline.id} discipline={discipline}
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

const mapStateToProps = ({ disciplines }: AppState, { navigation }: NavigationStackScreenProps) => {
    return {
        disciplines: disciplines.disciplines,
        isFetching: disciplines.isFetching,
        navigation: navigation,
    };
};

const mapDispatchToProps = (dispatch: AsyncAction, { navigation }: NavigationStackScreenProps) => {
    return {
        openDiscipline: (id: number) => dispatch(openDiscipline(id, navigation)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Disciplines);
