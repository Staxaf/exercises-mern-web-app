const router = require('express').Router()
let User = require('../models/user.module')

router.route('/').get((req, res) => {
    User.find() // get all users from mongodb
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error' + err))
})

router.route('/add').post((req, res) => {
    const username = req.body.username
    const newUser = new User({username})

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router