const lugar = require('../lugar/lugar')
const clima = require('../clima/clima')


const getInfo = async(direccion) => {

    let Region = direccion;

    const Coordenadas = await lugar.getLugarLatLong(Region);

    const Temperatura = await clima.getClima(Coordenadas.lat, Coordenadas.lng);

    return {
        Region,
        Temperatura
    };

}


module.exports = {
    getInfo
}