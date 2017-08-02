$(document).ready(function(){
//Función para geolocalización

	function getLocation(){
    	if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(getPosition);
    	}
    	else{
        	alert("Tu navegador no soporta geolocalización");
        }
    }
 	getLocation();
 //api call
 	function getPosition(position){
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        console.log(lat,long);
        
 		$.ajax({
			url:'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/012e423aa82fad1b993c11b2de5e0fae/'+lat+','+long+'',
			type: 'GET',
			datatype: 'jsonp',
 		})
 		/*			url:'https://api.darksky.net/forecast/012e423aa82fad1b993c11b2de5e0fae/'+lat+','+long+'', dejandola así, no me dejaba acceder a la api*/
 		.done(function(response){
 			console.log("done")
 			var originalT = response.currently.apparentTemperature;
 			console.log(originalT);
 			var wind = response.currently.windSpeed;
 			console.log(wind);
 			var humidity = response.currently.humidity;
 			console.log(humidity);
 			var uvIndex = response.currently.uvIndex;
 			console.log(uvIndex);
 			var pressure = response.currently.pressure;
 			console.log(pressure);
 			var celsius = (originalT-32 * 5/9).toFixed(1);
 			var icon = response.currently.icon;
 			$("#dailyContent").append(`
				

 				`
 				)
 		})
 	}
})