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
 			console.log(response.temperature)
 			console.log(response.windSpeed);
 			console.log(response.humidity);
 			console.log(response.uvIndex);
 			console.log(response.pressure)
 		})
 	}
})