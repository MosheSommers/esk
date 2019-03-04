import React from 'react';
import Times from './Times';
import  Row  from './Row';

export default class Chart extends React.Component{
    constructor(props){
        super(props);
        this.state  = { 
            sunset:null,
            sunrise:null,
            candlelighting:null,
            plag:null,
            latestCandle:null
        };
        this.properties = {sunset : "Sunset" ,sunrise : "Sunrise", candlelighting: "Candlelighting", plag : "Plag"};
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

    getSunriseSunset(position){
        console.log(this);
        const thisChart = this;
        var request = new XMLHttpRequest();
        
        // Open a new connection, using the GET request on the URL endpoint
        request.open('GET', 'https://api.sunrise-sunset.org/json?lat=' + 
        String(position.coords.latitude)  + '&lng=' + String(position.coords.longitude) +
        '&formatted=0' , true);

        request.onload = function () {
            const myTimes = new Times();
            const data = JSON.parse(this.response);
            const sunrise = new Date(Date.parse(data.results.sunrise)).toLocaleTimeString(); 
            const sunset = new Date(Date.parse(data.results.sunset)).toLocaleTimeString(); 
            const candlelighting = myTimes.getCandleLighting(Date.parse(data.results.sunset));
            const {plag, latestCandle} = myTimes.getPlag(Date.parse(data.results.sunrise), Date.parse(data.results.sunset));
            thisChart.setState({ 
                sunset,
                sunrise,
                candlelighting,
                plag,
                latestCandle
            });
        }

        // Send request
        request.send();
    }

    getTimes(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getSunriseSunset.bind(this));
          } else {
            console.log("Geolocation is not supported by this browser.");
          }
    }
}