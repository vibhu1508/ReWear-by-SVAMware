const express = require('express');
const app = express();
const mongoose = require("mongoose");
const DB_URL = "mongodb://127.0.0.1:27017/re-wear";
const authRoute = require('./routes/authRoute.js');
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 8080;


main().then(() => {
    console.log("connected to database.");
})
    .catch(err => console.log(err));
async function main() {
    mongoose.connect(DB_URL);
}

app.listen(port,()=>{
  console.log(`server is listening on ${port}.`);
});

app.use('/api/auth',authRoute);