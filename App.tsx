import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducer/all-reducers';
import EntryPoint from "./component/EntryPoint";

const store = createStore(
    allReducers,
    applyMiddleware(thunk)
);

const App = () => {
    return (
        <Provider store={store}>
            <EntryPoint/>
        </Provider>
    );
};

export default App;
