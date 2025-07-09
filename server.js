const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

//Conexión con la DB
mongoose
    //.connect('mongodb://127.0.0.1:27017/videojuegos')
    .connect('mongodb+srv://eduardochti22:J82jUqeMF2OkNo8i@cluster0.xv9xyrw.mongodb.net/videojuegos?retryWrites=true&w=majority&appName=Cluster0')
    .then((x) => {
        console.log(`Conectado a la BD: "${x.connections[0].name}"`)
    }).catch((error) => {
        console.log('Error en la conexión: ', error.reason)
    })

//Configuración del servidor web
const videojuegoRoutes = require('./routes/videojuego.routes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(cors())

app.use('/api', videojuegoRoutes)

//Habilitamos el puerto
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
    console.log('El servidor está conectado en el puerto ' + port)
})

const createError = require('http-errors')

//Manejador de error 404
app.use((req, res, next) => {
    next(createError(404))
})

//Manejador de errores
app.use(function(err, req, res, next){
    console.log(err.message)
    if(!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
})