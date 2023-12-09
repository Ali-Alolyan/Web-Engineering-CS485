const router = require('express').Router(),
UserRoutes = require('./users'),
CourseRoutes = require('./course')


router.use('/users', UserRoutes)
router.use('/course', CourseRoutes)


module.exports = router