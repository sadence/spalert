const models = require("./models");
var mongoose = require("mongoose");

let db = {};

/**
 * Example:
 * {
    species: "Dog",
    color: "Blue",
    collar: false,
    addressStreet: "Letellier",
    postalCode: 75015,
    animalStatus: 2,
    status: "Unassigned",
    email: "michelle@example.com"
  }
 */

db.createNewAlert = ({
  species,
  color,
  collar,
  addressStreet,
  postalCode,
  condition,
  email
}) => {
  const alert = new models.Alert({
    species: species,
    color: color,
    collar: collar,
    addressStreet: addressStreet,
    postalCode: postalCode,
    condition: condition,
    status: "unassigned",
    email: email
  });

  return alert
    .save()
    .then(alert => {
      console.log("Saved!");
      return alert;
    })
    .catch(err => console.log("Error:" + err));
};

db.createNewBrigade = ({
    name,
    email
  }) => {
    const brigade = new models.Brigade({
      name: name,
      email: email
    });

    return brigade
      .save()
      .then(brigade => {
        console.log("Brigade saved!");
        return brigade;
      })
      .catch(err => console.log("Error:" + err));
  };


// returns Promise
db.updateAlert = (id, obj) => {
  return models.Alert.findById(id)
    .then(alert => {
      if(obj.brigade && !obj.status){
        obj = Object.assign(obj, { status: "assigned"})
      }
      alert.set(obj);
      return alert.save();
    })
    .then(updatedAlert => {
      //console.log(updatedAlert);
      return updatedAlert;
    })
    .catch(err => console.log("Error:" + err));
};

db.findAlertById = (id) => {
    return models.Alert.findById(id)
      .catch(err => console.log("Error:" + err));
  };

db.allAlerts = () => {
    return models.Alert.find().populate('brigade')
    .catch(err => console.log("Error:" + err));
}

db.allBrigades = () => {
    return models.Brigade.find()
    .catch(err => console.log("Error:" + err));
}

db.findBrigadeById = (id) => {
  return models.Brigade.findById(id)
    .catch(err => console.log("Error:" + err));
};

db.findBrigadeAlerts = (brigade_id) => {
  console.log(brigade_id);
  return models.Alert.find({ brigade: brigade_id})
  .catch(err => console.log("Error:" + err));
}

module.exports = db;
