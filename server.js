require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json)
app.use(cors)

mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@geocluster.sl4up8q.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Conectado ao db com sucesso")
        app.listen(3001)
    })
    .catch((e) => console.log(`Erro => ${e}`))