import React from 'react';
import Button from './Button';
//import ReactDOM from 'react-dom';

export default class Footer extends React.Component{
    render(){
        return (
            <div className="footer">
                <span>&copy;2019 by Msommers</span>
                <Button
                onClick={this.props.onClick}
                width="30px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcKzUACd4FMbbYY4v2AiKzUx_89vurJ9YADiq0Cz85kHuuRWeQqw"/>
            </div>
        );
    }
}