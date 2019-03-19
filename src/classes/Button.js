import React from 'react';

export default class Button extends React.Component{
    
    render(){
        if(!this.props.settings){
            return (
                <img 
                    onClick={this.props.onClick}
                    width= {this.props.width}
                    alt=""
                    src={this.props.src}
                />
            );
        }
        return "";
    }
}