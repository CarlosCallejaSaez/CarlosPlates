const Tesseract = require("tesseract.js");
const LicensePlate = require("../models/LicensePlate");

exports.uploadImage = (req, res) => {
  Tesseract.recognize(req.file.path, "spa", {
    logger: (m) => console.log(m),
  }).then(({ data: { text } }) => {
    const newLicensePlate = new LicensePlate({ text: text });
    newLicensePlate.save((err, licensePlate) => {
      if (err) return console.error(err);
      console.log("License plate saved:", licensePlate);
    });
    res.send("License plate detected: " + text);
  });
};
