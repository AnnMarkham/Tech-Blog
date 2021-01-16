//here we are collecting the packaged group of API endpoints and prefixing them with the path /api.
const router = require('express').Router();

const apiRoutes = require('./api/');

// add require homeroutes and dashboard routes when created
//add app.use above routes when created. 

router.use('/api', apiRoutes);

module.exports = router;