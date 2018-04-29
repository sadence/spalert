const express = require("express");
const router = express.Router();
const db = require("../db/controller");

/* GET home page. */
router.get("/", function(req, res, next) {
  console.log("Entered Route");
  db.allBrigades().then(brigades => {
    console.log("Entered Callback");
    res.send(brigades);
  });
});

router.put("/", function(req, res) {
  console.log(req.body);
  db.createNewBrigade(req.body.brigade)
    .then(brigade => res.send(brigade))
    .catch(console.log);
});

module.exports = router;
