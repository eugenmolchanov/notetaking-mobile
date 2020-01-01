import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import OptionHeader from './OptionHeader';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';

const Contraction = ({ contraction }) => {
    return (
        <ListItem
            title={contraction.description}
            titleStyle={styles.title}
            containerStyle={styles.itemContainer}
            bottomDivider
            leftElement={<Text>{contraction.name}</Text>} />
    );
};

const Contractions = (props) => {
    const contractions = props.contractions
        .map(contraction => <Contraction key={contraction.id} contraction={contraction}/>);

    return (
        <View>
            <OptionHeader navigation={props.navigation} title={'Сокращения'}/>
            <ScrollView>
                {contractions}
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

Contraction.propTypes = {
    contraction: PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};

Contractions.propTypes = {
    navigation: PropTypes.object.isRequired,
    contractions: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        contractions: state.question.question.contractions || {},
        navigation: ownProps.navigation,
    };
};

export default connect(mapStateToProps)(Contractions);
