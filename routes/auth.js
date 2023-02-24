const { Router } = require('express');
const { check } = require('express-validator');
const {loginAlumno} = require('../controllers/login-alumno');
const { loginMaestro } = require('../controllers/login-maestro');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post('/loginAlumno', [
    check('correo', 'El correo no es valido').isEmail(),
    check('password', 'La password es obligatoria').not().isEmpty(),
    validarCampos,
] ,loginAlumno);

router.post('/loginMaestro', [
    check('correo', 'El correo no es valido').isEmail(),
    check('password', 'La password es obligatoria').not().isEmpty(),
    validarCampos,
] ,loginMaestro);

module.exports = router;