const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.render('main/home');
});

router.get('/my-gigs', (req, res, next) => {
    res.render('main/my-gigs');
});

router.route('/add-new-gig')
    .get((req, res, next) => {
        res.render('main/add-new-gig');
    });





module.exports = router;
