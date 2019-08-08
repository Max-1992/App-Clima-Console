const axios = require('axios');

const getClima = async(latitud, longitud) => {

    const appId = '27d9a8bd60c4eff141983e7d10e011c0'
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${ latitud }&lon=${ longitud }&appid=${ appId }&units=metric`

    const resp = await axios.get(url);

    return resp.data.main.temp;

}


module.exports = {
    getClima
}