const mongoose = require("mongoose");

function connectToDatabase() {
  mongoose.connect(process.env.MONGO_URI);

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("Connected to MongoDB");
  });

  return db;
}

module.exports = connectToDatabase;
