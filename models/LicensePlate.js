const mongoose = require('mongoose');

const licensePlateSchema = new mongoose.Schema({
  text: String,
  date: { type: Date, default: Date.now }
});


const LicensePlate = mongoose.model('LicensePlate', licensePlateSchema);
module.exports = LicensePlate;