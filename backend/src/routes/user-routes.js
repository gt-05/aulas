
const privateRoutes = require('./private-routes');
const publicRoutes = require('./public-routes');

const AllUserController = require('../controllers/User/AllUserController');
const CreateController = require('../controllers/User/CreateController');
const encriptPassword = require('../midleware/encript-password');

publicRoutes.get('/users', AllUserController);
privateRoutes.post('/users', encriptPassword, CreateController);

module.exports = [publicRoutes, privateRoutes];