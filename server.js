require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const PointRouter = require('./routes/PointRoutes')

const app = express()

app.use(cors())

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.use("/point", PointRouter)

mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@geocluster.sl4up8q.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Conectado ao db com sucesso")
        app.listen(4000)
    })
    .catch((e) => console.log(`Erro => ${e}`))