const Bebida = require('../models/Bebida');

// obtener todas las bebidad¿s
const obtenerBebidas = async (req, res) => {
    try {
        const bebidas = await Bebida.find();

        res.json({
            ok: true,
            bebidas
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Favor de contactar al administrador'
        });
    }
}

// obtener bebidas disponibles
const obtenerBebidasDisponibles = async (req, res) => {
    try {
        const bebidas = await Bebida.find({ disponible: true });

        res.json({
            ok: true,
            bebidas
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Favor de contactar al administrador'
        });
    }
}

// obtener bebidas no disponibles
const obtenerBebidasNoDisponibles = async (req, res) => {
    try {
        const bebidas = await Bebida.find({ disponible: false });

        res.json({
            ok: true,
            bebidas
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Favor de contactar al administrador'
        });
    }
}

const crearBebida = async (req, res) => {
    try {
        const bebida = new Bebida(req.body);
        await bebida.save();

        res.json({
            ok: true,
            bebida
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Favor de contactar al administrador'
        });
    }
}

module.exports = {
    obtenerBebidas,
    obtenerBebidasDisponibles,
    obtenerBebidasNoDisponibles,
    crearBebida
}