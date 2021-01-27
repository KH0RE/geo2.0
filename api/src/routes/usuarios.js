const express = require('express');
const router = express.Router();
const { crear, getFull } = require('../controllers/usuarios.Controllers');


router.post('/user', crear),
router.get('/user', getFull)




module.exports = router;