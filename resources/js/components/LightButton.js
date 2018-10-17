import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
//import querystring from 'querystring';

export default class LightButton extends Component {
    
    click(e, props) {
        console.log(props);
        
        //console.log(qs.stringify(data));
        
        axios({
            method: "POST",
            url: "/" + props.lightID,
            //headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            
            data: qs.stringify({ data: props.lightID, lightStatus: true })
        })
        .then(() => {
            props.hoge();
        });    
        
    }
    
    render() {
        console.log(this.props);
        return (
                <button disabled={ this.props.disabled } onClick={ e => this.click(e, this.props) } name={ this.props.lightID }>{ this.props.label }</button>
        );
    }
}

