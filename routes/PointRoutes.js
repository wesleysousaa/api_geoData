const router = require("express").Router()
const model = require('../models/Point')

router.get('/', async (req, res) => {
    const data = await model.find()
    res.json({data: data})
})

router.post('/ipoint', async (req, res) => {
    const {type, coordinates} = req.body
    const Point = {
        type, coordinates
    }
    if(type && coordinates){
        await model.create(Point)
        res.json({message: "Sucesso"})
    }

    res.json({message: "Insira todos os campos"})
})

module.exports = router