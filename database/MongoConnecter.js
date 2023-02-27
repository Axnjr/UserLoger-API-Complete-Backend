const mongoose = require("mongoose")

const MongoDBConnector = async () => { // all mongoose function need to be async ( they return a promise ) .

    try {

        mongoose.set('strictQuery', false); // to avoid a deprecation warning given by mongoose
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`GOT MONGO DB CONNECTION ${connect.connection.host}`.red.bgCyan.underline) // from colors package .

    } 
    catch (error) {

        console.log("MONGO DB ERROR".bgRed.yellow,error)
        process.exit(1)

    }
    
}

module.exports = MongoDBConnector