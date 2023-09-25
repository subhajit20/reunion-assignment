const mongoose = require('mongoose');
const { mongoUri } = require('../config/dev');


const startMongo = () => {
    mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => console.log("MongoDB Connected..."))
        .catch((err) => console.error(err));
}

module.exports = startMongo;