import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import OptionHeader from './OptionHeader';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';
import {AppState, Contraction, StackNavigationOptions} from "../../../Types";
import {NavigationStackProp} from "react-navigation-stack";

interface ContractionProps {
    contraction: Contraction
}

interface ContractionsProps {
    contractions: Array<Contraction>
    navigation: NavigationStackProp
}

const ContractionComponent = ({ contraction }: ContractionProps) => {
    return (
        <ListItem
            title={contraction.description}
            titleStyle={styles.title}
            containerStyle={styles.itemContainer}
            bottomDivider
            leftElement={<Text>{contraction.name}</Text>} />
    );
};

const Contractions = ({ contractions, navigation }: ContractionsProps) => {
    const questionContractions = contractions
        .map(contraction => <ContractionComponent key={contraction.id} contraction={contraction}/>);

    return (
        <View>
            <OptionHeader navigation={navigation} title={'Сокращения'}/>
            <ScrollView>
                {questionContractions}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        paddingLeft: 50,
    },
    itemContainer: {
        minHeight: 70,
    },
});

const mapStateToProps = ({ question }: AppState, ownProps: StackNavigationOptions) => {
    return {
        contractions: question.question.contractions,
        navigation: ownProps.navigation,
    };
};

export default connect(mapStateToProps)(Contractions);
