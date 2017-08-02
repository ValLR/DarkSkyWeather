$(document).ready(function(){
//Función para geolocalización

	  function getLocation(){
      if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(getPosition);
      }else{
          alert("Tu navegador no soporta geolocalización");
      }
      function getPosition(position){
            var lat = position.coords.latitude;
            var long = position.coords.longitude;
            console.log(lat,long);
        }
    }
 	getLocation();
 	//api
 	

})