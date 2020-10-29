const jwt = require('jsonwebtoken');

const validarToken = (req, res, next) => {

    // x-token headers
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token'
        });
    }

    try {

        const { id, nombre } = jwt.verify(token, process.env.SECRETA);

        req.id = id;
        req.nombre = nombre;

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }

    next();
}

module.exports = {
    validarToken
}