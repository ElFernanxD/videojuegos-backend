const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

let Videojuego = new Schema({
    titulo: {
        type: String
    }, 
    genero: {
        type: String
    }, 
    plataforma: {
        type: String
    },
    anio_lanzamiento: {
        type: Number
    }
},{
    collection: 'videojuegos'
}); 

module.exports = mongoose.model('Videojuego', Videojuego)