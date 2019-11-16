import React from 'react';
import { ScrollView, Text } from 'react-native';
import HtmlView from 'react-native-htmlview';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu from './Menu';

const backButtonIcon = <Icon name="close" size={25}/>;

const styles = StyleSheet.create({
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

class Question extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const params = {
            getQuestion: Question._getQuestion,
        };

        return {
            headerBackImage: backButtonIcon,
            headerRight: <Menu navigation={navigation} params={params}/>,
        };
    };

    constructor(props) {
        super(props);
    }

    static _getQuestion = (navigation) => {
        return navigation.getParam('question', {});
    };

    render() {
        const question = Question._getQuestion(this.props.navigation);
        return question.name ? (
            <ScrollView style={{padding: 15, marginBottom: 10}}>
                <Text style={{fontWeight: 'bold'}}>Вопрос {question.number}. {question.name}</Text>
                <HtmlView
                    value={question.fullContent}
                    stylesheet={styles}
                    addLineBreaks={false}/>
            </ScrollView>
        ) : (
            <Text>empty state</Text>
        );
    }
}

export default Question;
