const broadCast = (messageInstructions) => {
  messageInstructions()
}

const announceRain = () => {
  console.log(`Grab an umbrella. It's going to rain today.`)
}

const announceClear = () => {
  console.log(`Grab your shades and suncreen. It's going to be sunny and hot today.`)
}

const weatherStation = (humidityReading) => {
  if (humidityReading > 95 ) 
  { 
    return broadCast(announceRain)
  }
  else
  {
    return broadCast(announceClear)
  }
}

weatherStation(13)
weatherStation(99)



// 1. Define a function named broadCast. It should define a single parameter, 
//   whose value will be a function.
// 2. Define a function named announceRain that should log this 
//   message to the console: "Grab an umbrella. It's going to rain today."
// 3. Define a function named announceClear that should log this 
//   message to the console: "Grab your shades and sunscreen. It's going to be sunny and hot today."
// 4. Define a function named weatherStation. It should define a single parameter, 
//   whose value will be the day's humidity reading. If the humidity is over 95, 
// then the console should display the rainy weather message. 
// If it is below 95, then the sunny weather message should appear.