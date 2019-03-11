import React from 'react';
//import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Chart from './Chart';
import Print from './Print';
//import Times from './Times';

export default class EskApp extends React.Component{
   
    
    
    
    render(){
       
        return <div>
                    <Header></Header>
                    <Chart></Chart>
                    <Footer></Footer>
                </div>;
    }
}