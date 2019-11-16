import React from 'react';
import { ScrollView, Text } from 'react-native';
import HtmlView from 'react-native-htmlview';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu from './Menu';

const backButtonIcon = <Icon name="close" size={25}/>;

class Question extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerBackImage: backButtonIcon,
            headerRight: <Menu navigation={navigation}/>,
        };
    };

    constructor(props) {
        super(props);
    }

    render() {
        const question = this.props.navigation.getParam('question', {});
        return question.name ? (
            <ScrollView style={styles.questionWrapper}>
                <Text style={styles.questionHeader}>Вопрос {question.number}. {question.name}</Text>
                <HtmlView
                    value={question.fullContent}
                    stylesheet={questionContentStyles}
                    addLineBreaks={false}/>
            </ScrollView>
        ) : (
            <Text>empty state</Text>
        );
    }
}

const questionContentStyles = StyleSheet.create({
    h4: {
        color: '#FD0A10',
        fontWeight: 'bold',
        fontSize: 18,
        margin: 10,
    },
    strong: {
        fontWeight: 'bold',
    },
    div: {
        marginBottom: 5,
    },
});

const styles = StyleSheet.create({
    questionWrapper: {
        padding: 15,
        marginBottom: 10,
    },
    questionHeader: {
        fontWeight: 'bold',
    },
});

export default Question;
