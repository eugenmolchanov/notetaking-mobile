import { ActivityIndicator, StyleSheet, View } from 'react-native';
import React from 'react';
import * as PropTypes from 'prop-types';

const AwaitedContent = ({ isFetching, render }) => {
    return isFetching ? <Spinner/> : render();
};

const Spinner = () => {
    return (
        <View style={styles.spinnerContainer}>
            <ActivityIndicator size={'large'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    spinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
    },
});

AwaitedContent.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    render: PropTypes.func.isRequired,
};

export default AwaitedContent;
