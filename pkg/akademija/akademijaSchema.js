const mongoose = require("mongoose");

const akademijaSchema = new mongoose.Schema({
  ime: {
    type: String,
    required: [true, "Mora da ima ime na akademijata"],
  },
  adresa: {
    type: String,
  },
});

const Akademija = mongoose.model("Akademija", akademijaSchema);

module.exports = Akademija;