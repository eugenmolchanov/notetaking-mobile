import {ActivityIndicator, StyleSheet, View} from "react-native";
import React from "react";

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

export default Spinner;
