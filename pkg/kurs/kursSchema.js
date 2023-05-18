const mongoose = require("mongoose");

const kursSchema = new mongoose.Schema({
  ime: {
    type: String,
    required: [true, "Mora da ima ime na kursot"],
  },
  adresa: {
    type: String,
  },
  oblast: {
    type: String,
    required: [true, "Mora da ima oblast na kursot"],
  },
});

const Kurs = mongoose.model("Kurs", kursSchema);

module.exports = Kurs;