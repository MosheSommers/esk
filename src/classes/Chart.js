import React from 'react';
import Times from './Times';
import Row from './Row';

export default class Chart extends React.Component{
    constructor(props){
        super(props);
        this.getTimes();
    }
    render(){
        const rows = [];
        for (const key in this.state) {
            if (this.state.hasOwnProperty(key)) {
                if (this.state.key !== null) {
                    rows.push( <Row key={key} label={key} time={this.state[key]}/>);
                }
            }
        }
        
        return <div>
                    <table>
                        <tbody>
                            {rows}
                        </tbody>     
                    </table>
                </div>;
    }

    setTimes(data, thisChart) {
        const myTimes = new Times();
        const sunrise = new Date(Date.parse(data.results.sunrise)).toLocaleTimeString();
        const sunset = new Date(Date.parse(data.results.sunset)).toLocaleTimeString();
        const candlelighting = myTimes.getCandleLighting(Date.parse(data.results.sunset));
        const { plag, latestCandle, mincha } = myTimes.getPlag(Date.parse(data.results.sunrise), Date.parse(data.results.sunset));
        thisChart.setState({
            candlelighting,
            plag,
            latestCandle,
            mincha
        });
    } 

    getTimes(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(new Times().getSunriseSunset.bind(this));
        } else {
        console.log("Geolocation is not supported by this browser.");
        }
    }
}