// host + /api/bebida
const { Router } = require('express');
const { check } = require('express-validator');
const { obtenerBebidas, obtenerBebidasDisponibles, obtenerBebidasNoDisponibles, crearBebida } = require('../controllers/bebidaController');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarToken } = require('../middlewares/validar-token');
const router = Router();

router.use(validarToken);

// Obtener todas las bebidas
router.get('/', obtenerBebidas);

router.get('/disponibles', obtenerBebidasDisponibles);

router.get('/nodisponibles', obtenerBebidasNoDisponibles);

router.post(
    '/',
    [
        check('nombre', 'El nombre de la bebida es obligatorio').not().isEmpty(),
        check('tipoAlcohol', 'El tipo de alcohol es obligatorio').not().isEmpty(),
        check('precio', 'El precio de la bebida es obligatorio').isNumeric(),
        validarCampos
    ],
    crearBebida
);

module.exports = router;