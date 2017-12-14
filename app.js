#!/usr/bin/env node

'use strict'

const conversion = require('./conversion')

const yargs = require('yargs')
const argv = yargs
  .option('celsius', {
    alias: 'c',
    default: false
  })
  .option('fahrenheit', {
    alias: 'f',
    default: false
  })
  .help('h')
  .argv

let degrees = argv._[0]

if (degrees) {
  if (argv.celsius)
    console.log(conversion.toCelsius(degrees))
  else if (argv.fahrenheit)
    console.log(conversion.toFahrenheit(degrees))
  else
    console.log('You need to either pass -c for Celius or -f for Fahrenheit to convert it.')
} else
  console.log('You need to pass a valid degree to convert it.')
