const Router = require('koa-router');
const router = new Router({ prefix: '/statistics' });

const listingController = require("../controllers/listing.controller");

router.get('/:autoId', listingController.getAllViewsById);
router.get('/listing/:autoId', listingController.getListingViewsById)
router.get('/phone/:autoId', listingController.getPhoneViewsById)
router.post('/listing', listingController.addListingView)
router.post('/phone', listingController.addPhoneView)

module.exports = router