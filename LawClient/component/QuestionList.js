import React from 'react'
import QuestionListItem from "./QuestionListItem";
import { ScrollView } from "react-native";
import HeaderTitle from "./HeaderTitle";

class QuestionList extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <HeaderTitle onSearchValueChange={navigation.getParam('onQuestionListSearchValueChange')}/>
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({ 'onQuestionListSearchValueChange': this._onSearchValueChange })
    }

    _onSearchValueChange = (searchValue) => {
        this.setState({
            searchValue
        })
    };

    _isQuestionContainsSearchValue = (question) => {
        const searchValue = this.state.searchValue.toLowerCase();
        return question.name.toLowerCase().includes(searchValue) || question.number.toString().includes(searchValue);
    };

    render() {
        const questions = this.props.navigation.getParam('questions', [])
            .filter(question => {
                return this.state.searchValue ? this._isQuestionContainsSearchValue(question) :
                    true;
            })
            .map(question => {
                return <QuestionListItem key={question.id} question={question} navigation={this.props.navigation}/>
            });

        return (
            <ScrollView>
                {questions}
            </ScrollView>
        )
    }
}

export default QuestionList;