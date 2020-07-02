import * as React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Input} from "react-native-elements";
import {useState} from "react";
import {connect} from "react-redux";
import {logIn} from "../action/action-creator";
import {AsyncAction, Credentials} from "./Types";

interface Props {
    logIn: (credentials: Credentials) => Promise<void>
}

const AuthPage = (props: Props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = (value: string)  => setEmail(value)
    const onPasswordChange = (value: string) => setPassword(value)

    const onLogIn = () => {
        const credentials = {
            email: email,
            password: password
        }
        props.logIn(credentials)
    }

    return (
        <View style={styles.authView}>
            <Input
                placeholder='email@address.com'
                leftIcon={{ name: 'email' }}
                label={'Email'}
                containerStyle={styles.container}
                value={email}
                onChangeText={onEmailChange}
            />
            <Input
                placeholder='password'
                leftIcon={{ name: 'lock' }}
                label={'Password'}
                containerStyle={styles.container}
                value={password}
                onChangeText={onPasswordChange}
            />
            <Button
                containerStyle={styles.container}
                title={'Log in'}
                onPress={onLogIn}/>
        </View>
    )
}

const styles = StyleSheet.create({
    authView: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    container: {
        marginBottom: 10
    }
});

function mapDispatchToProps(dispatch: AsyncAction): Props {
    return {
        logIn: (credentials: Credentials) => dispatch(logIn(credentials)),
    };
}

export default connect(null, mapDispatchToProps)(AuthPage);
