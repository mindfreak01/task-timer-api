const mongoose = require("mongoose");
const config = require("config");

const db_name = "task-api"
const db_pass = "Sumanaman@2020"
const url = `mongodb+srv://abhishek:${db_pass}@cluster0.rqshu.mongodb.net/${db_name}?retryWrites=true&w=majority`;

module.exports = () => {
  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database Connected"))
    .catch((ex) => console.log(ex));
};
