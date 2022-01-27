const express = require("express");
const cont = require("../controller/cafeCont");
const router = express.Router();

router.get('/:id', cont.view);
router.get('/search/:name', cont.search);
router.post('/', cont.create);

module.exports = router;
