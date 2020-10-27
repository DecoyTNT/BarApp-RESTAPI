const mongoose = require('mongoose');

const CorteSchema = mongoose.Schema({
    ordenes: {
        type: Array,
        required: true
    },
    creado: {
        type: Date,
        default: Date.now()
    },
    total: {
        type: Number
    }
});

module.exports = mongoose.model('Corte', CorteSchema);