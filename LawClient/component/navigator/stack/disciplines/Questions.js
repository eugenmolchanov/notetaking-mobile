import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import HeaderTitle from './HeaderTitle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu from '../../Menu';
import * as PropTypes from 'prop-types';
import AwaitedContent from './AwaitedContent';
import { ListItem } from 'react-native-elements';
import { openQuestion } from '../../../../action/action-creator';
import { connect } from 'react-redux';

const backButtonIcon = <Icon name="chevron-left" size={35}/>;
const rightChevron = <Icon name="navigate-next" size={25}/>;

const QuestionTitle = ({ question }) => {
    return (
        <View>
            <Text style={styles.questionNumber}>Вопрос {question.number}</Text>
            <Text>{question.name}</Text>
        </View>
    );
};

const Question = ({ question, showQuestion }) => {
    return (
        <ListItem
            title={<QuestionTitle question={question}/>}
            chevron={rightChevron}
            onPress={() => showQuestion(question)}
            bottomDivider />
    );
};

class Questions extends React.Component {
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
                return <Question key={question.id} question={question}
                                         showQuestion={this.props.openQuestion}/>;
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

const styles = StyleSheet.create({
    questionNumber: {
        fontWeight: 'bold',
    },
});

Question.propTypes = {
    showQuestion: PropTypes.func.isRequired,
    question: PropTypes.object.isRequired,
};

QuestionTitle.propTypes = {
    question: PropTypes.shape({
        id: PropTypes.number.isRequired,
        number: PropTypes.number.isRequired,
        name: PropTypes.string,
        disciplineId: PropTypes.number.isRequired,
    }).isRequired,
};

Questions.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    questions: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
    openQuestion: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        questions: state.questions.questions,
        isFetching: state.questions.isFetching,
        navigation: ownProps.navigation,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        openQuestion: question => dispatch(openQuestion(question, ownProps.navigation)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
