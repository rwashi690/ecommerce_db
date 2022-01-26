const express = require('express');
const sequelize = require('./config/connection')

const app = express();

const User = require('./models/User');
const Product = require('./models/Product');

const PORT = process.env.PORT || 6969;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: true }).then(() => {
	app.listen(PORT, () => {
		console.log(`At ${PORT}`);
	});
});