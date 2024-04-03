const Router = require('express');
const authRouter = require('./user');

const router = new Router();

router.use('/auth', authRouter)

module.exports = router;
