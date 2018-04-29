const express = require("express");
const router = express.Router();
const db = require("../db/controller");

/* GET home page. */
router.get("/", function(req, res, next) {
  console.log("Entered Route");
  db.allAlerts().then(alerts => {
    console.log("Entered Callback");
    res.send(alerts);
  });
});

router.put("/", function(req, res) {
  console.log(req.body);
  db
    .createNewAlert(req.body.alert)
    .then(alert => res.send(alert))
    .catch(console.log);
});

router.post("/:id", function(req, res) {
  console.log(req.body);
  db
    .updateAlert(req.params.id, req.body.alert)
    .then(alert => res.send(alert))
    .catch(console.log);
});

router.get("/:id", function(req, res) {
  db
    .findAlert(req.params.id)
    .then(alert => res.send(alert))
    .catch(console.log);
});

module.exports = router;
