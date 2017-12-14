let toCelsius = (degrees) => {
  let celsius = (degrees - 32) * (5 / 9)
  return parseFloat(celsius).toFixed(1)
}

let toFahrenheit = (degrees) => {
  let fahrenheit = (degrees * (9 / 5)) + 32
  return parseFloat(fahrenheit).toFixed(1)
}

module.exports = {
  toCelsius,
  toFahrenheit
}
