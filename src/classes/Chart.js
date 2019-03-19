import React from 'react';
import Row from './Row';
import Settings from './Settings'

export default class Chart extends React.Component{
    render(){
        const rows = [];
        for (const key in this.props.times) {
            if (this.props.times.hasOwnProperty(key)) {
                if (this.props.times.key !== null) {
                    rows.push( <Row key={key} label={key} time={this.props.times[key]}/>);
                }
            }
        }
       
        return(
            <React.Fragment>
                {   
                    this.props.settings ? 
                        <Settings onClick={this.props.onClick}/> 
                        :      
                        <table>
                            <tbody>
                                {rows}
                            </tbody>     
                        </table>
                }
            </React.Fragment>
        );
       
        
    }

    
}