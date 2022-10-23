const mongoose = require("mongoose")

const Point = mongoose.model("Point", ({
     type: String,
     coordinates: Array
}))

module.exports = Point