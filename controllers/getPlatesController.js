const LicensePlate = require("../models/LicensePlate");

exports.getAllPlates = (req, res) => {
  LicensePlate.find({}, (err, plates) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving license plates");
    } else {
      res.json(plates);
    }
  });
};
