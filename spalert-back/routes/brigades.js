const express = require("express");
const router = express.Router();
const db = require("../db/controller");

router.get("/", function(req, res) {
  console.log("Entered Route");
  db.allBrigades().then(brigades => {
    res.send(brigades);
  }).catch(console.log);
});

router.get("/:id", function(req, res) {
  console.log("Entered Route");
  Promise.all([
    db.findBrigadeById(req.params.id),
    db.findBrigadeAlerts(req.params.id)
  ])
    .then(arr => {
      res.send({ brigade: arr[0], alerts: arr[1] });
    })
    .catch(console.log);
});

router.put("/", function(req, res) {
  console.log(req.body);
  db
    .createNewBrigade(req.body.brigade)
    .then(brigade => res.send(brigade))
    .catch(console.log);
});

module.exports = router;
