const LicensePlate = require("../models/LicensePlate");

exports.deletePlateById = (req, res) => {
  const plateId = req.params.id;
  LicensePlate.findByIdAndDelete(plateId, (err, plate) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error deleting license plate");
    } else {
      if (plate) {
        console.log("License plate deleted:", plate);
        res.send("License plate deleted");
      } else {
        res.status(404).send("License plate not found");
      }
    }
  });
};
