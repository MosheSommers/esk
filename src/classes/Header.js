import React from 'react';
import Button from './Button';

//import ReactDOM from 'react-dom';

export default class Header extends React.Component{
    render(){
        return (
                <div className="header">
                    <span>Early Shabbos Times</span>
                    <Button 
                        settings={this.props.settings.show}
                        onClick={window.print}
                        width= "30px"
                        alt=""
                        src="https://s3.amazonaws.com/appforest_uf/f1497406316913x883857781067490600/print_icon1.gif"/>
                </div>
            );
    }
}