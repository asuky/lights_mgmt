import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/reducers';
import { TOGGLE, REQUESTING, INIT, toggleLight, requesting, initLight } from './actions/actions';
import { allSaga } from './sagas/sagas';

import MainUI from './components/MainUI';

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
//require('./components/MainUI');
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(allSaga, store.dispatch);

function mapStateToProps(state) {
    return {
        disabled: state.button.disabled,
        label: state.button.label,
        data: state.button.data,
        lightStatus: state.button.lightStatus,
        hoge: state.button.hoge
        //handleClick: state.button.handleClick
    };
}

function mapDispatchToProps(dispatch) {
    return {
        hoge: (props) => { 
            console.log("hoge");
            //console.log("handleClick!");
            dispatch(toggleLight());
        }
    };
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainUI);

store.dispatch(initLight());

ReactDOM.render(
        <Provider store={store}>
            <AppContainer />
        </Provider>, document.getElementById('root'));

