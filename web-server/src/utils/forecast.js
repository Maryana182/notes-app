const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7ad262968cd55c80368e8e0dc7f07bda&query=' + latitude + ',' + longitude + '&units=m'


request({url, json: true}, (error, { body }) => {

    if(error) {
        
        callback('Unable to connect to weather service!',undefined)

    }else if (body.error) {
        
        callback('Unable to find location!',undefined)
    }else {

        callback(undefined, body.weather_descriptions[0] + '. It is currently ' + body.temperature + ' degrees out.It feels like ' + body.feelslike +  ' degrees out.')
    }
})
}

module.exports = forecast