//here we are collecting the packaged group of API endpoints and prefixing them with the path /api.
const router = require('express').Router();

const apiRoutes = require('./api/');

const homeRoutes = require('./home-routes.js');
// add require dashboard routes when created

router.use('/', homeRoutes);
//add app.use dashboard routes when created. 

router.use('/api', apiRoutes);

module.exports = router;