const express = require("express");
const router = express.Router();

const db = require("../db/controller");
const email_utils = require("../utils/emails");

/* GET home page. */
router.get("/", function(req, res, next) {
  db.allAlerts().then(alerts => {
    res.send(alerts);
  });
});

router.put("/", function(req, res) {
  db
    .createNewAlert(req.body.alert)
    .then(alert => {
      res.send(alert);
      email_utils.newAlertSubmittedEmail(alert);
    })
    .catch(console.log);
});

router.post("/:id", function(req, res) {
  db
    .updateAlert(req.params.id, req.body.alert)
    .then(alert =>{
      if(req.body.brigade_done){
        // send email
        email_utils.alertDoneEmail(alert);
      }
      res.send(alert);
    })
    .catch(console.log);
});

router.get("/:id", function(req, res) {
  db
    .findAlertById(req.params.id)
    .then(alert => res.send(alert))
    .catch(console.log);
});

module.exports = router;
