import React from 'react';
import MainPage from "./container/main-page-container";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import DisciplineReducer from "./reducer/disciplines-reducer";
import thunk from "redux-thunk";

const store = createStore(
    DisciplineReducer,
    applyMiddleware(thunk)
);

const App = () => {
    return (
        <Provider store={store}>
            <MainPage/>
        </Provider>
    )
};

export default App;
