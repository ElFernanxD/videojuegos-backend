const express = require('express');
const videojuegoRutas = express.Router();

//Declarar el objeto de nuestro modelo
let Videojuego = require('../models/Videojuego');

//Agregar un nuevo videojuego
videojuegoRutas.route('/agregar').post((req, res) => {
    Videojuego.create(req.body).then((data) => {
        console.log('Se insertó un videojuego correctamente')
        res.send(data)
    })
    .catch((error) => {
        console.error(error)
    })
})

//Obtener todos los videojuegos
videojuegoRutas.route('/videojuegos').get((req, res) => {
    Videojuego.find().then((data) => {
        res.send(data)
    })
    .catch((error) => {
        console.error(error)
    })
})

//Obtenemos solo videojuego por su ID
videojuegoRutas.route('/videojuego/:id').get((req, res) => {
    Videojuego.findById(req.params.id).then((data) => {
        res.send(data)
    })
    .catch((error) => {
        consolore.error(error)
    })
})

//Actualizar un videojuego
videojuegoRutas.route('/actualizar/:id').put((req, res) => {
    Videojuego.findByIdAndUpdate(req.params.id, {
        $set: req.body
    })
    .then((data) => {
        console.log('Se actualizó el videojuego correctamente')
        res.send(data)
    })
    .catch((error) => {
        console.error(error)
    })
})

//Eliminar un videojuego
videojuegoRutas.route('/eliminar/:id').delete((req, res) => {
    Videojuego.findByIdAndDelete(req.params.id).then((data) => {
        console.log('Se eliminó el videojuego correctamente')
        res.send(data)
    })
    .catch((error) => {
        console.error(error)
    })
})

module.exports = videojuegoRutas;