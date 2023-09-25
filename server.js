const express = require("express");
var bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const startMongo = require('./db/db');

// import routes
const propertyRoute = require('./routes/property.routes/property.routes');
const authRoute = require('./routes/auth.routes/Auth.routes');

const app = express();
const PORT = 3000;

startMongo();
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'DELETE', 'PUT']
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/api', propertyRoute);
app.use('/api', authRoute);

app.get('/', (req, res) => {
    res.json({
        msg: "Hello..."
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})