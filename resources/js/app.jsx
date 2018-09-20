import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import rootReducer from './reducers/reducers';
import { TOGGLE, toggleLight } from './actions/actions';

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
const store = createStore(rootReducer);

function mapStateToProps(state) {
    return {
        label: state.button.label
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => { 
            console.log("handleClick!");
            console.log(store.getState());
            dispatch(toggleLight(store.getState())); 
        }
    };
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainUI);

ReactDOM.render(
        <Provider store={store}>
            <AppContainer />
        </Provider>, document.getElementById('root'));

