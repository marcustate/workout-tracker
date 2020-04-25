const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://fitness-tracker:truth3524@ds113942.mlab.com:13942/heroku_z0rtz6l6", {
	useNewUrlParser: true,
	useFindAndModify: false
});

app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});