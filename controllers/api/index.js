// This file will serve as a means to collect all of the API routes and package them up for us.
const router = require('express').Router();

const userRoutes = require('./user-routes'); 
// add require postRoutes & commentRoutes when created. 


router.use('/users', userRoutes);

// add router.use postRoutes and commentRoutes when created



module.exports = router;