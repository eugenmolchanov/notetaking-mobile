import React from 'react';
import QuestionListItem from './QuestionListItem';
import { ScrollView } from 'react-native';
import HeaderTitle from '../HeaderTitle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu from '../../../Menu';
import * as PropTypes from 'prop-types';
import AwaitedContent from '../util/AwaitedContent';

const backButtonIcon = <Icon name="chevron-left" size={35}/>;

class QuestionList extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <HeaderTitle onSearchValueChange={navigation.getParam('onQuestionListSearchValueChange')}/>,
            headerBackImage: backButtonIcon,
            headerRight: <Menu navigation={navigation}/>,
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
        };
    }

    componentDidMount() {
        this.props.navigation.setParams({ 'onQuestionListSearchValueChange': this._onSearchValueChange });
    }

    _onSearchValueChange = (searchValue) => {
        this.setState({
            searchValue,
        });
    };

    _isQuestionContainsSearchValue = (question) => {
        const searchValue = this.state.searchValue.toLowerCase();
        return question.name.toLowerCase().includes(searchValue) || question.number.toString().includes(searchValue);
    };

    _renderQuestions = () => {
        const questions = this.props.questions
            .filter(question => {
                return this.state.searchValue ? this._isQuestionContainsSearchValue(question) :
                    true;
            })
            .map(question => {
                return <QuestionListItem key={question.id} question={question}
                                         openQuestion={this.props.openQuestion}/>;
            });

        return (
            <ScrollView>
                {questions}
            </ScrollView>
        );
    };

    render() {
        return <AwaitedContent isFetching={this.props.isFetching} render={this._renderQuestions}/>;
    }
}

QuestionList.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    questions: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
    openQuestion: PropTypes.func.isRequired,
};

export default QuestionList;
