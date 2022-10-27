const router = require('express').Router();
const courseRoutes = require('./courseRoutes');
const studentRoutes = require('./studentRoutes');

router.use('/thoughts', courseRoutes);
router.use('/users', studentRoutes);

module.exports = router;
