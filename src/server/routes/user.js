var express = require('express');
var router = express.Router();
var DBUtils = require('../utils/DBUtils');

router.post('/authenticate', async (req, res, next) => {
    await DBUtils.authenticate(req, res, next);
});

router.post('/register', async (req, res, next) => {
    await DBUtils.registerNewUser(req, res, next);
});

router.post('/findByEmail', async (req, res, next) => {
    await DBUtils.findUserByEmail(req, res, next);
})

module.exports = router;