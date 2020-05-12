import { ActivityIndicator, StyleSheet, View } from 'react-native';
import React from 'react';

interface AwaitedContentProps {
    isFetching: boolean
    render: () => JSX.Element
}

const AwaitedContent = ({ isFetching, render }: AwaitedContentProps) => {
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

export default AwaitedContent;
