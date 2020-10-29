const { validationResult } = require('express-validator');

const validarCampos = (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                ok: false,
                errors: errors.mapped()
            });
        }
        next();
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = {
    validarCampos
};