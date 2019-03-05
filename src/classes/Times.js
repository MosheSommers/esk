export default class Times{

    //getCandleLighting -- 18 minutes before sunset excepts a timestamp as parameter
    getCandleLighting(sunset){
        //Change from timestamp to DateTime object
        let canLight = new Date(sunset);

        //Set minutes to 18 earlier, recast back to dateTime and get timestring
        canLight = new Date(canLight.setMinutes(canLight.getMinutes() - 18)).toLocaleTimeString(); 
        return canLight;
    }

    getPlag(sunrise, sunset){
        //Get MS per halachic hour
        const msPerHHour = (sunset - sunrise)  / 12;
        
        //Get plag - 1 1/4 halachic hours b4 sunset
        const msPlagB4Sunset = msPerHHour + (msPerHHour / 4);
        const plag = new Date(sunset - msPlagB4Sunset).toLocaleTimeString();
        const latestCandle = new Date(60000 * 30 + sunset - msPlagB4Sunset ).toLocaleTimeString();
        const mincha = new Date(sunset - msPlagB4Sunset - (60000 * 10 )).toLocaleTimeString();

        return {plag, latestCandle, mincha};
    }


    getSunriseSunset(position){
        const thisChart = this;
        var request = new XMLHttpRequest();
        
        // Open a new connection, using the GET request on the URL endpoint
        request.open('GET', 'https://api.sunrise-sunset.org/json?lat=' + 
        String(position.coords.latitude)  + '&lng=' + String(position.coords.longitude) +
        '&date=friday&formatted=0' , true);

        request.onload = function () {
            const data = JSON.parse(this.response);
            thisChart.setTimes(data, thisChart);
        }

        // Send request
        request.send();
    }
}