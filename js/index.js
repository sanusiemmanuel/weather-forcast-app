$(document).ready(function(){
  $('body').animate({opacity: 1}, 3000)
  
  var latitude="";
 var longitude="";
  
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
     latitude=position.coords.latitude;
    longitude=position.coords.longitude; 
 
$.getJSON("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&units=metric&appid=ae0318f1d39e95a561a5a995adcfe84d",function(result){
  var iconCode = result.weather[0].icon;
  var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
  $("#location").text(result.name);
  $("#currentTemp").text(parseInt(result.main.temp));
  $("#condition").text(result.weather[0].description);
  $("#icon img").attr("src",iconUrl);
});
    })
}else{
  $("#vertical-center").html("Sorry, geolocation not found. Try another browser?");
}
  $('#convert').on('click',function(){
    $('#convert').animate({opacity: 0}, 500)
    setTimeout( function(){if($('button').text()=="C"){
 var convertToF= parseFloat(($("#currentTemp").text()*1.8)+32).toFixed(0);
      
 $('#currentTemp').text(convertToF);
      $('button').text("F");
      $('#convert').animate({opacity: 1}, 600)
    }else{
     
       var convertToC= parseFloat(($("#currentTemp").text()-32)/1.8).toFixed(0);
       $('#currentTemp').text(convertToC);
      $('button').text("C");
       $('#convert').animate({opacity: 1}, 600)
    }},600);
    
  })
});
