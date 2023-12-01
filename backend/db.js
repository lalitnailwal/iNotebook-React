const mongoose = require('mongoose')

const mongoURI = "mongodb://0.0.0.0:27017/"

const connectToMongo = async () => {
    await mongoose.connect(mongoURI).then(
        () => {
            console.info(`Connected to database`)
        },
        error => {
            console.error(`Connection error: ${error.stack}`)
            process.exit(1)
        }
    )
}

module.exports = connectToMongo;