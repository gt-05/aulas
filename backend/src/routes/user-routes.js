const express = require('express');

let router = express.Router();

const AllUserController = require('../controllers/User/AllUserController');

/**
 CRIAR UM MIDDLEWARE PARA ENCRIPTAR A SENHA QUANDO
 CADASTRAR UM NOVO USUARIO
 
 USAR A FUNÇÃO btoa() DO JS PARA ENCRIPTAR A SENHA

 OBS: O middleware não deve salvar o usuario, o middleware deve
 manipular as informações do request.body para chegar já encriptado
 la no controller
 */

router.get('/users', AllUserController);


module.exports = router;