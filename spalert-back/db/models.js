const mongoose = require("mongoose");

var brigadeSchema = mongoose.Schema({
  name: String
});

var Brigade = mongoose.model("Brigade", brigadeSchema);

var alertSchema = mongoose.Schema({
  species: String,
  color: String,
  collar: Boolean,
  addressStreet: String,
  postalCode: Number,
  condition: Number,
  status: String,
  date: { type: Date, default: Date.now },
  email: String,
  brigade: { type: mongoose.Schema.Types.ObjectId, ref: "Brigade" }
});

var Alert = mongoose.model("Alert", alertSchema);

var alert = new Alert({
  species: "Dog",
  color: "Blue",
  collar: false,
  addressStreet: "Letellier",
  postalCode: 75015,
  animalStatus: 2,
  status: "Unassigned",
  email: "michelle@example.com"
});

module.exports = { Alert, Brigade }