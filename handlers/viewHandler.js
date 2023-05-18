const Kurs = require("../pkg/kurs/kursSchema");

exports.getKursevi = async (req, res) => {
    try {
      const kursevi = await Kurs.find();

      res.status(200).render("kursevi", {
        title: "Kursevi",
        kursevi,
      });
    } catch (err) {
      res.status(500).send("Error");
    }
  };