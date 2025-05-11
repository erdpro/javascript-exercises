const convertToCelsius = function(tempF) {
  if (typeof tempF !== "number") return "ERROR";
  return Math.round(((tempF - 32) * 5 / 9) * 10, 1) / 10;
};

const convertToFahrenheit = function(tempC) {
  if (typeof tempC !== "number") return "ERROR"
  return Math.round(((tempC * 9 / 5) + 32) * 10, 1) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
