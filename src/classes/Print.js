import React from 'react';
//import ReactDOM from 'react-dom';

export default class Print extends React.Component{
    render(){
        return <img 
        onClick={window.print}
        width= "30px"
        src="https://s3.amazonaws.com/appforest_uf/f1497406316913x883857781067490600/print_icon1.gif"
        />;
    }
}