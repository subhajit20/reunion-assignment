const mongoose = require('mongoose');
const { dbUri } = require('../config/dev');


const startMongo = () => {
    mongoose.connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => console.log("MongoDB Connected..."))
        .catch((err) => console.error(err));
}

module.exports = startMongo;