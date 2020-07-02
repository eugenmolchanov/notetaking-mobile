import {NavigationStackProp} from "react-navigation-stack";
import {NavigationProp} from "react-navigation";
import {NavigationDrawerState} from "react-navigation-drawer/src/types";

export type AsyncAction = (dispatch: any) => Promise<void>;

export interface Discipline {
    id: number
    name: string
    abbreviation: string
}

export interface Question {
    id: number
    name: string
    number: number
    fullContent: string
    shortContent: string
    contractions: Array<Contraction>
}

export interface Contraction {
    id: number
    name: string
    description: string
}

export type NavigationDrawerProperty = NavigationProp<NavigationDrawerState>;

export interface StackNavigationOptions {
    navigation: NavigationStackProp
}

export type ShowItem = (id: number) => Promise<void>

interface DisciplinesState {
    disciplines: Array<Discipline>
    isFetching: boolean
}

interface QuestionsState {
    questions: Array<Question>
    isFetching: boolean
}

interface QuestionState {
    question: Question
    isFetching: boolean
}

export interface AppState {
    disciplines: DisciplinesState
    questions: QuestionsState
    question: QuestionState
}

export interface Action {
    type: string
    payload: object
}

export interface Credentials {
    email: string
    password: string
}
