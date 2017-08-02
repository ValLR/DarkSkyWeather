$(document).ready(function(){
//Función para geolocalización

	function getLocation(){
    	if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(getPosition);
    	}
    	else{
        	alert("Tu navegador no soporta geolocalización");
        }

 //api call

 	function getPosition(position){
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        console.log(lat,long);
    }
}
 	getLocation();

 		$.ajax({
			url:'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/012e423aa82fad1b993c11b2de5e0fae/-33.4143,-70.6608',
			type: 'GET',
			datatype: 'jsonp',
 		})
 		/*Al principio tenía la función get position rodeando toda la función para poder usar la latitud y longitud extraídas en la así: url:'https://api.darksky.net/forecast/012e423aa82fad1b993c11b2de5e0fae/'+lat+','+long+'',
 		pero de repente dejó de correr, así que la dejé fija*/
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
 			console.log(icon);
 			$("#dailyContent").append(`
				<div class="row">
					<div class="img s12 col center-align">
						<img class= "img-responsive icon" src="dist/img/`+icon+`.png" alt="">
					</div>
				</div>
				<div class="row">
					<div class="center-align col s12">
						<h3>`+celsius+`º</h3>
					</div>
				</div>
				<div class="row">
					<div class="left-align col s6">
						<p>Wind</p>
					</div>
					<div class="right-align col s6">
						<p>`+wind+` m/s</p>
					</div>
				</div>
				<div class="row">
					<div class="s6 left-align col">
						<p>Humidity</p>
					</div>
					<div class="s6 right-align col">
						<p>`+humidity+`%</p>
					</div>
				</div>
				<div class="row">
					<div class="s6 col left-align">
						<p>UV Index</p>
					</div>
					<div class="s6 col right-align">
						<p>`+uvIndex+`</p>
					</div>
				</div>
				<div class="row">
					<div class="s6 col left-align">
						<p>Pressure</p>
					</div>
					<div class="col s6 right-align">
						<p>`+pressure+` hPa</p>
					</div>
				</div>				
 				`
 				)

 		})

})