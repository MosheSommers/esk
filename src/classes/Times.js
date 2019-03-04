export default class Times{

    //getCandleLighting -- 18 minutes before sunset excepts a timestamp as parameter
    getCandleLighting(sunset){
        //Change from timestamp to DateTime object
        let canLight = new Date(sunset);

        //Set minutes to 18 earlier, recast back to dateTime and get timestring
        canLight = (new Date(canLight.setMinutes(canLight.getMinutes() - 18))).toLocaleTimeString(); 
        return canLight;
    }

    getPlag(sunrise, sunset){
        //Get MS per halachic hour
        const msPerHHour = (sunset - sunrise)  / 12;
        
        //Get plag - 1 1/4 halachic hours b4 sunset
        const msPlagB4Sunset = msPerHHour + (msPerHHour / 4);
        const plag = new Date(Date(sunset - msPlagB4Sunset)).toLocaleTimeString();
        console.log(plag);
        const latestCandle = 1234567
        //new Date(Date(60000 * 30 + sunset - msPlagB4Sunset )).toLocaleTimeString();
        // console.log(plag);
        return {plag, latestCandle};
    }


    // getSunriseSunset(position){
    //     const times = {
    //         sunset:null,
    //         sunrise:null,
    //         candleLight:null 
    //     };
    //     var request = new XMLHttpRequest();
        
    //     // Open a new connection, using the GET request on the URL endpoint
    //     request.open('GET', 'https://api.sunrise-sunset.org/json?lat=' + 
    //     String(position.coords.latitude)  + '&lng=' + String(position.coords.longitude) +
    //     '&formatted=0' , true);

    //     request.onload = function () {
    //         const data = JSON.parse(this.response);
    //         times.sunrise = new Date(Date.parse(data.results.sunrise)).toLocaleTimeString(); 
    //         times.sunset = new Date(Date.parse(data.results.sunset)).toLocaleTimeString(); 
    //         times.candleLight = new Times().getCandleLighting(Date.parse(data.results.sunset));
    //         return times;
    //     }

    //     // Send request
    //     request.send();
    // }
}