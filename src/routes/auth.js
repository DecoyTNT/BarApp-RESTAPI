// host + /api/auth
const express = require('express');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/authController');
const router = express.Router();

router.post('/new', crearUsuario);

router.post('/login', loginUsuario);

router.get('/renew', revalidarToken);

module.exports = router;