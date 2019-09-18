const router = require('express').Router();

const Users = require('./users-model.js');

const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
    Users.find()
    if(users) {
        res.json({users, loggedInUser: req.user.username});

    } else {
        res.status(401).json({ message: 'You shall not pass'});
    };
});

module.exports = router;
