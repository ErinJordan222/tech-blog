const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api')
const dashboardRoutes = require('./dashboard-routes.js');
const router = require('express').Router();



router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes)

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;