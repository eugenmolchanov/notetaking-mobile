import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import HeaderTitle from './HeaderTitle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu from '../../Menu';
import AwaitedContent from './AwaitedContent';
import { ListItem } from 'react-native-elements';
import { openQuestion } from '../../../../action/action-creator';
import { connect } from 'react-redux';
import {AppState, AsyncAction, Question, StackNavigationOptions} from "../../../Types";
import {NavigationStackOptions, NavigationStackProp, NavigationStackScreenProps} from "react-navigation-stack";

const backButtonIcon = <Icon name="chevron-left" size={35}/>;
const rightChevron = <Icon name="navigate-next" size={25}/>;

type ShowQuestion = (question: Question) => Promise<void>

interface QuestionsState {
    searchValue: string
}

interface QuestionsProps {
    navigation: NavigationStackProp
    questions: Array<Question>
    openQuestion: ShowQuestion
    isFetching: boolean
}

interface QuestionProps {
    question: Question
    showQuestion: ShowQuestion
}

interface QuestionTitleProps {
    question: Question
}

const QuestionTitle = ({ question }: QuestionTitleProps) => {
    return (
        <View>
            <Text style={styles.questionNumber}>Вопрос {question.number}</Text>
            <Text>{question.name}</Text>
        </View>
    );
};

const QuestionComponent = ({ question, showQuestion }: QuestionProps) => {
    return (
        <ListItem
            title={<QuestionTitle question={question}/>}
            chevron={rightChevron}
            onPress={() => showQuestion(question)}
            bottomDivider />
    );
};

class Questions extends React.Component<QuestionsProps, QuestionsState> {
    static navigationOptions = ({ navigation }: StackNavigationOptions): NavigationStackOptions => {
        return {
            headerTitle: <HeaderTitle onSearchValueChange={navigation.getParam('onQuestionListSearchValueChange')}/>,
            headerBackImage: () => backButtonIcon,
            headerRight: <Menu navigation={navigation}/>,
        };
    };

    constructor(props: QuestionsProps) {
        super(props);
        this.state = {
            searchValue: '',
        };
    }

    componentDidMount() {
        this.props.navigation.setParams({ 'onQuestionListSearchValueChange': this._onSearchValueChange });
    }

    _onSearchValueChange = (searchValue: string) => {
        this.setState({
            searchValue,
        });
    };

    _isQuestionContainsSearchValue = (question: Question) => {
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
                return <QuestionComponent key={question.id} question={question}
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

const mapStateToProps = ({ questions }: AppState, { navigation }: NavigationStackScreenProps) => {
    return {
        questions: questions.questions,
        isFetching: questions.isFetching,
        navigation: navigation,
    };
};

const mapDispatchToProps = (dispatch: AsyncAction, { navigation}: NavigationStackScreenProps) => {
    return {
        openQuestion: (question: Question) => dispatch(openQuestion(question, navigation)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
