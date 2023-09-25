const express = require("express");
var bodyParser = require('body-parser');
const cors = require('cors');
const startMongo = require('./db/db');

// import routes
const propertyRoute = require('./routes/property.routes/property.routes');

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
app.get('/', (req, res) => {
    res.json({
        msg: "Hello..."
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})