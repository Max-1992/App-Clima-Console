const axios = require('axios');

const getLugarLatLong = async(dire) => {

    const encodedUlr = encodeURI(dire)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr }`,
        headers: { 'X-RapidAPI-Key': '7016256884mshc0cf83b8699c067p177075jsn4c5a803216e1' }
    })

    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dire }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLong
}