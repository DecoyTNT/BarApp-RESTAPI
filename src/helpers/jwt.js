const jwt = require('jsonwebtoken');

const generarToken = (id, nombre) => {

    const payload = { id, nombre };

    try {
        const token = jwt.sign(payload, process.env.SECRETA, {
            expiresIn: '2h',
        });

        return token;
    } catch (error) {
        console.log(error);
        return 'No se pudo generar el token';
    }

}

module.exports = {
    generarToken
}