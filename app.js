const info = require('./Info/info');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Descripción de la ciudad para obtener el clima',
        demand: true
    }
}).argv

info.getInfo(argv.direccion)
    .then(data => console.log(`La temperatura de ${ data.Region } es de ${ data.Temperatura } °c`))
    .catch(data => console.log(`No se pudo determinar el clima de ${ argv.direccion }`));