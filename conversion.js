function parseConvertedValue(value) {
  return parseFloat(value).toFixed(1)
}

let toCelsius = (degrees) => {
  let celsius = (degrees - 32) * (5 / 9)
  return parseConvertedValue(celsius)
}

let toFahrenheit = (degrees) => {
  let fahrenheit = (degrees * (9 / 5)) + 32
  return parseConvertedValue(fahrenheit)
}

module.exports = {
  toCelsius,
  toFahrenheit
}
