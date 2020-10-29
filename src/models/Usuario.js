const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    rol: {
        type: String,
        required: true,
        trim: true,
        default: 'mesero'
    }
});

UsuarioSchema.method('toJSON', function () {
    const { password, ...object } = this.toObject();
    return object;
});

module.exports = mongoose.model('Usuario', UsuarioSchema);