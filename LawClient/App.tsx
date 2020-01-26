import React from 'react';
import MainPage from './component/MainPage';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducer/all-reducers';

const store = createStore(
    allReducers,
    applyMiddleware(thunk)
);

const App = () => {
    return (
        <Provider store={store}>
            <MainPage/>
        </Provider>
    );
};

export default App;
