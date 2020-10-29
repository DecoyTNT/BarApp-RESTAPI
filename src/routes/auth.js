// host + /api/auth
const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/authController');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarToken } = require('../middlewares/validar-token');
const router = Router();

router.post(
    '/new',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password debe de contener al menos 6 caracteres').isLength({ min: 6 }),
        check('email', 'El email es obligatorio').isEmail(),
        validarCampos
    ],
    crearUsuario
);

router.post(
    '/login',
    [
        check('password', 'El password debe de contener al menos 6 caracteres').isLength({ min: 6 }),
        check('email', 'El email es obligatorio').isEmail(),
        validarCampos
    ],
    loginUsuario
);

router.get(
    '/renew',
    validarToken,
    revalidarToken
);

module.exports = router;