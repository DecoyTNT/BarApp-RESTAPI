const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarToken } = require('../helpers/jwt');

const crearUsuario = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verificar que el usuario no exista
        let usuario = await Usuario.findOne({ email });
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe'
            });
        }

        usuario = new Usuario(req.body);

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        res.status(201).json({
            ok: true,
            usuario
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Favor de contactar al administrador'
        });
    }
}

const loginUsuario = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verificar que el usuario exista
        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Email o Password incorrectos'
            });
        }

        // Comparar el password
        const passwordValido = bcrypt.compareSync(password, usuario.password);

        if (!passwordValido) {
            return res.status(400).json({
                ok: false,
                msg: 'Email o Password incorrectos'
            });
        }

        // Generar JWT
        const token = generarToken(usuario.id, usuario.nombre);

        res.json({
            ok: true,
            usuario,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Favor de contactar al administrador'
        });
    }
}

const revalidarToken = (req, res) => {
    const id = req.id;
    const nombre = req.nombre;

    // Generar un nuevo JWT
    const token = generarToken(id, nombre);

    res.json({
        ok: true,
        token
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}