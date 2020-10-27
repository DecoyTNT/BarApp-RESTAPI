const mongoose = require("mongoose");

const BebidaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    tipoAlcohol: {
        type: String,
        required: true,
        trim: true
    },
    tipoServicio: {
        type: String
    },
    precio: {
        type: Number,
        required: true,
        trim: true
    },
    descripcion: {
        type: String
    },
    disponible: {
        type: Boolean,
        default: true
    },
    imagen: {
        type: String
    }
});

module.exports = mongoose.model('Bebida', BebidaSchema);