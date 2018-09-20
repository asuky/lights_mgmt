import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import LightButton from './LightButton';

class MainUI extends Component {
        
    construct() {
        console.log("MainUI Constructor");
        
    }

    render() {
        return (
            <div>
                <LightButton  handleClick={ this.props.handleClick } label={ this.props.label  } />
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