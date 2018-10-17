import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import LightButton from './LightButton';

class MainUI extends Component {
        
    construct() {
        console.log("MainUI Constructor");
    }

    render() {
        //console.log(this.props.data);
        const lightButtons = [];
        for (let eachLight in this.props.data) {
            lightButtons.push(
                <LightButton
                    disabled={ this.props.disabled }
                    hoge={ this.props.hoge }
                    //handleClick={ this.props.handleClick }
                    label={ this.props.data[eachLight].name }
                    lightID={ eachLight } />
            );
            //console.log(this.props.data[eachLight]);
        }
        return (
            <div>
                {lightButtons}
            </div>
        );
    }
}
/*
 function mapStateToProps(state) {
        return {
            label: state.button.label
        };
    }

function mapDispatchToProps(dispatch) { 
       return {
            handleClick: () => { 
                console.log("handleClick!");
                dispatch(toggleButton(store.getState())); 
            }
        };
    }

MainUI = connect(
    mapStateToProps,
    mapDispatchToProps
)(LightButton);
*/
export default MainUI;