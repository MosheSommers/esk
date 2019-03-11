import React from 'react';
import Print from './Print';

//import ReactDOM from 'react-dom';

export default class Header extends React.Component{
    render(){
        return <div className="header"><span>Early Shabbos Times</span><Print/></div>;
    }
}