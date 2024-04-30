require("dotenv").config()

const express = require('express');
const multer  = require('multer');
const Tesseract = require('tesseract.js');
const mongoose = require('mongoose');
const connectToDatabase = require('./config/database');
const LicensePlate = require('./models/LicensePlate');


const app = express();
const upload = multer({ dest: 'uploads/' });

const db = connectToDatabase();


const uploadController = require('./controllers/uploadController');
const deleteController = require('./controllers/deleteController');
const getPlatesController = require('./controllers/getPlatesController');



app.post('/upload', upload.single('photo'), uploadController.uploadImage);


app.delete('/plate/:id', deleteController.deletePlateById);


app.get('/plates', getPlatesController.getAllPlates);

app.get("*", (req, res) => {
  res.status(404).send("404 Error: Route not found")
});

const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
