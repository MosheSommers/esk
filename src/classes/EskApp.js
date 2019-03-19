import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Chart from './Chart';
import Times from './Times';


export default class EskApp extends React.Component{
   
    
    constructor(props){
        super(props);
        this.state = {
            settings: false,
            settingValues:{
                minchaTime:10,
                lightingTime:30,
            }   
        }
        this.plagMs = 0;
        this.changeSettings = this.changeSettings.bind(this);
        this.saveSettings = this.saveSettings.bind(this);
        this.getTimes();
    }
    
    render(){
       
        return <>
                    <Header settings={this.state.settings}/>                
                    <Chart 
                        settingValues={this.state.settingValues}                        
                        settings={this.state.settings} 
                        onClick={this.saveSettings}
                        times={this.state.times} />
                        
                    <Footer onClick={this.changeSettings}></Footer>
                </>;
    } 
    changeSettings(){
        this.setState(() => ({settings:!this.state.settings}));
    }

    saveSettings(e){
        let input = e.target.parentElement.previousSibling.firstElementChild;
        const newSettigValues = {settingValues:{}};
        newSettigValues[input.name] = input.value;
        if(input.name === 'lightingTime'){
            newSettigValues.settingValues['minchaTime'] = this.state.settingValues.minchaTime;
        }else{
            newSettigValues.settingValues['lightingTime'] = this.state.settingValues.lightingTime;
        }
        newSettigValues.settingValues[input.name] = Number(input.value);
        this.setState(newSettigValues, () => {
            const { plag, latestCandle, mincha } = this.getActualTimes(this.plagMs);
            this.setState(prevState => ({
                times:{        
                    candlelighting:prevState.times.candlelighting,
                    plag,
                    latestCandle,
                    mincha,
                }
                
            }));
        });
        this.setState(() => ({settings:!this.state.settings}));
        
    }
    
    setTimes(data, thisChart) {
        
        const myTimes = new Times(this.state.settingValues.minchaTime, this.state.settingValues.lightingTime);
        
        const candlelighting = myTimes.getCandleLighting(Date.parse(data.results.sunset));
        this.plagMs = myTimes.getPlag(Date.parse(data.results.sunrise), Date.parse(data.results.sunset));
        
        const { plag, latestCandle, mincha } = this.getActualTimes(this.plagMs);
        thisChart.setState({
            times:{
                candlelighting,
                plag,
                latestCandle,
                mincha
            }
            
        });
    } 

    getTimes(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(new Times().getSunriseSunset.bind(this));
        } else {
        console.log("Geolocation is not supported by this browser.");
        }
    }

    getActualTimes(plagMs){

        const plag = new Date(plagMs).toLocaleTimeString();
        const latestCandle = new Date(60000 * this.state.settingValues.lightingTime + plagMs ).toLocaleTimeString();
        const mincha = new Date(plagMs - (60000 * this.state.settingValues.minchaTime )).toLocaleTimeString();
        return {plag, latestCandle, mincha};
    }
}