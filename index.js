function convertTemperature() {
  // Get temperature and unit from form
  var temperature = document.getElementById("temperature").value;
  temperature = parseInt(temperature)
  var unit = document. getElementById('standard-select'). selectedOptions[0]. value; 
  
  // Convert temperature
  if (unit === "fahrenheit") {
    var celsius = (temperature - 32) * (5/9);
    document.getElementById("result").innerHTML = temperature + "°F = " + celsius.toFixed(1) + "°C";
    console.log(celsius)
    
  } else {
    var fahrenheit = (temperature * 9/5) + 32;
    document.getElementById("result").innerHTML = temperature + "°C = " + fahrenheit.toFixed(1) + "°F";
    console.log(fahrenheit);
    
  }

}